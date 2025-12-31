/**
 * ComplianceFlow Main JavaScript
 * @version 2.0.1
 * @description Demo functionality and interactive elements
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
   * @param {string} id - Element ID
   * @param {object} data - Data to display
   * @param {boolean} success - Success status
   */
  showDemoResult(id, data, success = true) {
    const element = document.getElementById(id);
    if (!element) {
      return;
    }
    
    element.textContent = JSON.stringify(data, null, 2);
    element.style.borderColor = success ? '#22c55e' : '#ef4444';
    element.setAttribute('aria-live', 'polite');
    element.setAttribute('aria-atomic', 'true');
  },

  /**
   * Make API request with timeout and error handling
   * @param {string} url - API endpoint
   * @param {object} options - Fetch options
   * @returns {Promise}
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
   * @param {FileList} files - Files to validate
   * @param {number} minFiles - Minimum number of files
   * @param {number} maxSize - Maximum file size in MB
   * @returns {object} Validation result
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
      // Check file size
      if (file.size > maxBytes) {
        return {
          valid: false,
          error: `El archivo ${file.name} excede ${maxSize}MB`,
        };
      }

      // Check file type
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
   * Debounce function to limit rate of function calls
   * @param {Function} func - Function to debounce
   * @param {number} wait - Wait time in ms
   * @returns {Function}
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

    if (!input || !button) {
      return;
    }

    // Validate input
    const validation = utils.validateFiles(input.files);
    if (!validation.valid) {
      utils.showDemoResult(outputId, { error: validation.error }, false);
      return;
    }

    // Disable button during request
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
    } catch (error) {
      const errorData = JSON.parse(error.message || '{}');
      utils.showDemoResult(
        outputId,
        errorData.error ? errorData : { error: 'Error en la demo SII' },
        false
      );
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

    if (!input || !button) {
      return;
    }

    // Validate input
    const validation = utils.validateFiles(input.files, 2);
    if (!validation.valid) {
      utils.showDemoResult(outputId, { error: validation.error }, false);
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
    } catch (error) {
      const errorData = JSON.parse(error.message || '{}');
      utils.showDemoResult(
        outputId,
        errorData.error ? errorData : { error: 'Error en la demo KYC' },
        false
      );
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

    if (!textarea || !button) {
      return;
    }

    // Validate JSON
    let payload;
    try {
      payload = JSON.parse(textarea.value);
    } catch {
      utils.showDemoResult(
        outputId,
        { error: 'JSON no válido. Verifica la sintaxis.' },
        false
      );
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
    } catch (error) {
      const errorData = JSON.parse(error.message || '{}');
      utils.showDemoResult(
        outputId,
        errorData.error ? errorData : { error: 'Error en la demo de fraude' },
        false
      );
    } finally {
      button.disabled = false;
      button.textContent = originalText;
      button.classList.remove('loading');
    }
  },
};

// Performance optimizations
const performance = {
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
    // Preload API if user is near demo section
    const demoSection = document.getElementById('demo');
    if (demoSection && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // User is near demo, preconnect to API
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
      if (href === '#') {
        return;
      }
      
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
        // Update URL without jumping
        if (history.pushState) {
          history.pushState(null, null, href);
        }
      }
    });
  });

  // Initialize performance optimizations
  performance.lazyLoadImages();
  performance.preloadCriticalResources();

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
    console.log(
      '%cDocumentación completa: https://github.com/juankaspain/complianceflow.es',
      'font-size: 12px; color: #6b7280;'
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
