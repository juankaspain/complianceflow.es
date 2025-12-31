/**
 * ComplianceFlow Main JavaScript
 * @version 3.0.0
 * @description Enhanced interactions, animations, and demo functionality
 * @license MIT
 */

'use strict';

// Configuration
const CONFIG = {
  API_BASE: 'https://api.complianceflow.es/v1',
  DEMO_KEY: 'DEMO_PUBLIC_KEY',
  TIMEOUT: 30000, // 30 seconds
  MAX_FILE_SIZE: 10, // MB
  ALLOWED_FILE_TYPES: ['application/pdf', 'image/jpeg', 'image/png', 'image/jpg'],
};

// Utility Functions
const utils = {
  /**
   * Display demo results in output element
   */
  showDemoResult(id, data, success = true) {
    const element = document.getElementById(id);
    if (!element) return;
    
    element.textContent = JSON.stringify(data, null, 2);
    element.style.borderColor = success ? 'var(--color-accent-600)' : 'var(--color-error)';
    element.setAttribute('aria-live', 'polite');
    element.setAttribute('aria-atomic', 'true');

    // Animate result appearance
    element.style.animation = 'fadeIn 0.4s ease-out';
  },

  /**
   * Make API request with timeout and error handling
   */
  async apiRequest(url, options = {}) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), CONFIG.TIMEOUT);

    try {
      const response = await fetch(url, {
        ...options,
        signal: controller.signal,
        headers: {
          'x-api-key': CONFIG.DEMO_KEY,
          ...options.headers,
        },
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        const error = await response.json().catch(() => ({
          error: 'Error de conexión con la API',
          status: response.status,
        }));
        throw new Error(JSON.stringify(error));
      }

      return await response.json();
    } catch (error) {
      clearTimeout(timeoutId);
      
      if (error.name === 'AbortError') {
        throw new Error(JSON.stringify({
          error: 'Timeout: La petición tardó demasiado',
          timeout: CONFIG.TIMEOUT,
        }));
      }
      
      throw error;
    }
  },

  /**
   * Validate file input
   */
  validateFiles(files, minFiles = 1, maxSize = CONFIG.MAX_FILE_SIZE) {
    if (!files || files.length < minFiles) {
      return {
        valid: false,
        error: `Selecciona al menos ${minFiles} archivo(s)`,
      };
    }

    const maxBytes = maxSize * 1024 * 1024;
    for (const file of files) {
      if (file.size > maxBytes) {
        return {
          valid: false,
          error: `El archivo ${file.name} excede ${maxSize}MB`,
        };
      }

      if (!CONFIG.ALLOWED_FILE_TYPES.includes(file.type)) {
        return {
          valid: false,
          error: `Tipo de archivo no permitido: ${file.type}`,
        };
      }
    }

    return { valid: true };
  },

  /**
   * Show toast notification
   */
  showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast toast--${type}`;
    toast.textContent = message;
    toast.style.cssText = `
      position: fixed;
      bottom: var(--space-6);
      right: var(--space-6);
      background: ${type === 'success' ? 'var(--color-accent-600)' : 'var(--color-error)'};
      color: white;
      padding: var(--space-4) var(--space-6);
      border-radius: var(--radius-lg);
      box-shadow: var(--shadow-xl);
      z-index: var(--z-toast, 9999);
      animation: slideInRight 0.3s ease-out;
      max-width: 400px;
      font-size: var(--text-sm);
      font-weight: var(--font-medium);
    `;

    document.body.appendChild(toast);

    setTimeout(() => {
      toast.style.animation = 'slideOutRight 0.3s ease-out';
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  },

  /**
   * Debounce function
   */
  debounce(func, wait = 300) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },
};

// Demo Handlers
const demoHandlers = {
  /**
   * Handle SII demo
   */
  async handleSIIDemo() {
    const input = document.getElementById('demo-sii-file');
    const outputId = 'demo-sii-output';
    const button = document.getElementById('btn-demo-sii');

    if (!input || !button) return;

    const validation = utils.validateFiles(input.files);
    if (!validation.valid) {
      utils.showDemoResult(outputId, { error: validation.error }, false);
      utils.showToast(validation.error, 'error');
      return;
    }

    const originalText = button.textContent;
    button.disabled = true;
    button.textContent = 'Procesando...';
    button.classList.add('loading');

    try {
      utils.showDemoResult(outputId, {
        status: 'Enviando factura a la API sandbox...',
        timestamp: new Date().toISOString(),
      });

      const formData = new FormData();
      formData.append('invoice_pdf', input.files[0]);

      const data = await utils.apiRequest(
        `${CONFIG.API_BASE}/sii/invoice`,
        {
          method: 'POST',
          body: formData,
        }
      );

      utils.showDemoResult(outputId, {
        ...data,
        demo: true,
        completedAt: new Date().toISOString(),
      }, true);
      
      utils.showToast('✓ Factura procesada correctamente', 'success');
    } catch (error) {
      const errorData = JSON.parse(error.message || '{}');
      utils.showDemoResult(
        outputId,
        errorData.error ? errorData : { error: 'Error en la demo SII' },
        false
      );
      utils.showToast('Error al procesar la factura', 'error');
    } finally {
      button.disabled = false;
      button.textContent = originalText;
      button.classList.remove('loading');
    }
  },

  /**
   * Handle KYC demo
   */
  async handleKYCDemo() {
    const input = document.getElementById('demo-kyc-files');
    const outputId = 'demo-kyc-output';
    const button = document.getElementById('btn-demo-kyc');

    if (!input || !button) return;

    const validation = utils.validateFiles(input.files, 2);
    if (!validation.valid) {
      utils.showDemoResult(outputId, { error: validation.error }, false);
      utils.showToast(validation.error, 'error');
      return;
    }

    const originalText = button.textContent;
    button.disabled = true;
    button.textContent = 'Procesando...';
    button.classList.add('loading');

    try {
      utils.showDemoResult(outputId, {
        status: 'Procesando documentos KYC de prueba...',
        files: input.files.length,
        timestamp: new Date().toISOString(),
      });

      const formData = new FormData();
      Array.from(input.files).forEach((file, index) => {
        formData.append(`file_${index}`, file);
      });

      const data = await utils.apiRequest(
        `${CONFIG.API_BASE}/kyc/complete`,
        {
          method: 'POST',
          body: formData,
        }
      );

      const riskScore = data.risk_score || 0;
      const success = riskScore < 70;
      utils.showDemoResult(outputId, {
        ...data,
        demo: true,
        completedAt: new Date().toISOString(),
      }, success);
      
      utils.showToast(
        success ? '✓ Verificación KYC exitosa' : '⚠ Score de riesgo alto',
        success ? 'success' : 'error'
      );
    } catch (error) {
      const errorData = JSON.parse(error.message || '{}');
      utils.showDemoResult(
        outputId,
        errorData.error ? errorData : { error: 'Error en la demo KYC' },
        false
      );
      utils.showToast('Error al procesar documentos KYC', 'error');
    } finally {
      button.disabled = false;
      button.textContent = originalText;
      button.classList.remove('loading');
    }
  },

  /**
   * Handle Fraud demo
   */
  async handleFraudDemo() {
    const textarea = document.getElementById('demo-fraud-input');
    const outputId = 'demo-fraud-output';
    const button = document.getElementById('btn-demo-fraud');

    if (!textarea || !button) return;

    let payload;
    try {
      payload = JSON.parse(textarea.value);
    } catch {
      utils.showDemoResult(
        outputId,
        { error: 'JSON no válido. Verifica la sintaxis.' },
        false
      );
      utils.showToast('JSON inválido', 'error');
      return;
    }

    const originalText = button.textContent;
    button.disabled = true;
    button.textContent = 'Calculando...';
    button.classList.add('loading');

    try {
      utils.showDemoResult(outputId, {
        status: 'Calculando score de riesgo...',
        timestamp: new Date().toISOString(),
      });

      const data = await utils.apiRequest(
        `${CONFIG.API_BASE}/score/risk`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        }
      );

      const riskScore = data.risk_score || 0;
      const success = riskScore < 70;
      utils.showDemoResult(outputId, {
        ...data,
        demo: true,
        completedAt: new Date().toISOString(),
      }, success);
      
      utils.showToast(
        `Score de riesgo: ${riskScore}`,
        success ? 'success' : 'error'
      );
    } catch (error) {
      const errorData = JSON.parse(error.message || '{}');
      utils.showDemoResult(
        outputId,
        errorData.error ? errorData : { error: 'Error en la demo de fraude' },
        false
      );
      utils.showToast('Error al calcular riesgo', 'error');
    } finally {
      button.disabled = false;
      button.textContent = originalText;
      button.classList.remove('loading');
    }
  },
};

// Animations & Visual Effects
const animations = {
  /**
   * Initialize scroll animations using IntersectionObserver
   */
  initScrollAnimations() {
    if (!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    // Observe cards, pricing, and other elements
    document.querySelectorAll('.card, .price-card, .steps li, .faq-list details').forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
      observer.observe(el);
    });

    // Add style for animated elements
    const style = document.createElement('style');
    style.textContent = `
      .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
      }
    `;
    document.head.appendChild(style);
  },

  /**
   * Add parallax effect to hero background
   */
  initParallax() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    window.addEventListener('scroll', utils.debounce(() => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * 0.5;
      hero.style.transform = `translateY(${rate}px)`;
    }, 10));
  },

  /**
   * Lazy load images when they enter viewport
   */
  lazyLoadImages() {
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
              imageObserver.unobserve(img);
            }
          }
        });
      });

      document.querySelectorAll('img[data-src]').forEach((img) => {
        imageObserver.observe(img);
      });
    }
  },

  /**
   * Preload critical resources
   */
  preloadCriticalResources() {
    const demoSection = document.getElementById('demo');
    if (demoSection && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const link = document.createElement('link');
            link.rel = 'preconnect';
            link.href = CONFIG.API_BASE;
            document.head.appendChild(link);
            observer.disconnect();
          }
        });
      }, { rootMargin: '200px' });

      observer.observe(demoSection);
    }
  },
};

// Mobile Menu
const mobileMenu = {
  init() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    // Add mobile menu button if not exists
    const existingButton = document.querySelector('.mobile-menu-button');
    if (existingButton || window.innerWidth > 1023) return;

    const button = document.createElement('button');
    button.className = 'mobile-menu-button';
    button.setAttribute('aria-label', 'Toggle menu');
    button.innerHTML = `
      <span></span>
      <span></span>
      <span></span>
    `;
    button.style.cssText = `
      display: flex;
      flex-direction: column;
      gap: 4px;
      background: none;
      border: none;
      cursor: pointer;
      padding: 8px;
    `;

    button.querySelectorAll('span').forEach((span) => {
      span.style.cssText = `
        width: 24px;
        height: 2px;
        background: var(--color-text-primary);
        transition: all 0.3s;
      `;
    });

    const headerInner = document.querySelector('.header-inner');
    headerInner?.appendChild(button);

    button.addEventListener('click', () => {
      const nav = document.querySelector('.main-nav');
      if (nav) {
        nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
      }
    });
  },
};

// Initialize Application
function init() {
  // Set current year in footer
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Attach demo handlers
  const btnSii = document.getElementById('btn-demo-sii');
  if (btnSii) {
    btnSii.addEventListener('click', demoHandlers.handleSIIDemo);
  }

  const btnKyc = document.getElementById('btn-demo-kyc');
  if (btnKyc) {
    btnKyc.addEventListener('click', demoHandlers.handleKYCDemo);
  }

  const btnFraud = document.getElementById('btn-demo-fraud');
  if (btnFraud) {
    btnFraud.addEventListener('click', demoHandlers.handleFraudDemo);
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
        if (history.pushState) {
          history.pushState(null, null, href);
        }
      }
    });
  });

  // Initialize animations and effects
  animations.initScrollAnimations();
  animations.lazyLoadImages();
  animations.preloadCriticalResources();
  
  // Initialize mobile menu
  mobileMenu.init();

  // Console message for developers
  if (typeof console !== 'undefined') {
    console.log(
      '%c👋 ¡Hola desarrollador!',
      'font-size: 20px; font-weight: bold; color: #22c55e;'
    );
    console.log(
      '%c¿Interesado en nuestras APIs? Visita https://complianceflow.netlify.app/docs/',
      'font-size: 14px; color: #3b82f6;'
    );
  }
}

// Run initialization when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// Export for testing (if module system available)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { utils, demoHandlers, CONFIG };
}
