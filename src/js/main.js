/**
 * ComplianceFlow Main JavaScript
 * @version 2.0.0
 * @description Demo functionality and interactive elements
 */

'use strict';

// Configuration
const CONFIG = {
  API_BASE: 'https://api.complianceflow.es/v1',
  DEMO_KEY: 'DEMO_PUBLIC_KEY',
  TIMEOUT: 30000, // 30 seconds
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
  },

  /**
   * Make API request with timeout
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
        }));
        throw new Error(JSON.stringify(error));
      }

      return await response.json();
    } catch (error) {
      clearTimeout(timeoutId);
      
      if (error.name === 'AbortError') {
        throw new Error(JSON.stringify({
          error: 'Timeout: La petición tardó demasiado',
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
  validateFiles(files, minFiles = 1, maxSize = 10) {
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
    }

    return { valid: true };
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

    // Validate input
    const validation = utils.validateFiles(input.files);
    if (!validation.valid) {
      utils.showDemoResult(outputId, { error: validation.error }, false);
      return;
    }

    // Disable button during request
    button.disabled = true;
    button.textContent = 'Procesando...';

    try {
      utils.showDemoResult(outputId, {
        status: 'Enviando factura a la API sandbox...',
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

      utils.showDemoResult(outputId, data, true);
    } catch (error) {
      const errorData = JSON.parse(error.message || '{}');
      utils.showDemoResult(
        outputId,
        errorData.error ? errorData : { error: 'Error en la demo SII' },
        false
      );
    } finally {
      button.disabled = false;
      button.textContent = 'Llamar API';
    }
  },

  /**
   * Handle KYC demo
   */
  async handleKYCDemo() {
    const input = document.getElementById('demo-kyc-files');
    const outputId = 'demo-kyc-output';
    const button = document.getElementById('btn-demo-kyc');

    // Validate input
    const validation = utils.validateFiles(input.files, 2);
    if (!validation.valid) {
      utils.showDemoResult(outputId, { error: validation.error }, false);
      return;
    }

    button.disabled = true;
    button.textContent = 'Procesando...';

    try {
      utils.showDemoResult(outputId, {
        status: 'Procesando documentos KYC de prueba...',
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
      utils.showDemoResult(outputId, data, success);
    } catch (error) {
      const errorData = JSON.parse(error.message || '{}');
      utils.showDemoResult(
        outputId,
        errorData.error ? errorData : { error: 'Error en la demo KYC' },
        false
      );
    } finally {
      button.disabled = false;
      button.textContent = 'Llamar API';
    }
  },

  /**
   * Handle Fraud demo
   */
  async handleFraudDemo() {
    const textarea = document.getElementById('demo-fraud-input');
    const outputId = 'demo-fraud-output';
    const button = document.getElementById('btn-demo-fraud');

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

    button.disabled = true;
    button.textContent = 'Calculando...';

    try {
      utils.showDemoResult(outputId, {
        status: 'Calculando score de riesgo...',
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
      utils.showDemoResult(outputId, data, success);
    } catch (error) {
      const errorData = JSON.parse(error.message || '{}');
      utils.showDemoResult(
        outputId,
        errorData.error ? errorData : { error: 'Error en la demo de fraude' },
        false
      );
    } finally {
      button.disabled = false;
      button.textContent = 'Calcular riesgo';
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
      }
    });
  });

  // Console message for developers
  if (typeof console !== 'undefined') {
    console.log(
      '%c👋 ¡Hola desarrollador!',
      'font-size: 20px; font-weight: bold; color: #22c55e;'
    );
    console.log(
      '%cInteresado en nuestras APIs? Visita https://complianceflow.es/docs/',
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
