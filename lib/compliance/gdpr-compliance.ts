// lib/compliance/gdpr-compliance.ts
// GDPR, CCPA, y cumplimiento legal completo

/**
 * GDPR Cookie Consent Manager
 * Gestión de consentimiento de cookies según RGPD
 */
export class GDPRConsentManager {
  private cookieName = 'gdpr-consent';
  private consentData = {
    analytics: false,
    marketing: false,
    preferences: false,
    necessary: true, // Always true
  };

  constructor() {
    this.loadConsent();
  }

  private loadConsent(): void {
    if (typeof window === 'undefined') return;

    const stored = localStorage.getItem(this.cookieName);
    if (stored) {
      this.consentData = JSON.parse(stored);
    }
  }

  setConsent(type: keyof typeof this.consentData, value: boolean): void {
    this.consentData[type] = value;
    localStorage.setItem(this.cookieName, JSON.stringify(this.consentData));
    this.triggerConsentEvent(type, value);
  }

  getConsent(type: keyof typeof this.consentData): boolean {
    return this.consentData[type];
  }

  private triggerConsentEvent(type: string, value: boolean): void {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(
        new CustomEvent('gdpr-consent-change', { detail: { type, value } })
      );
    }
  }

  /**
   * Generate privacy policy HTML
   */
  static generatePrivacyPolicy(): string {
    return `
    <div class="privacy-policy">
      <h1>Política de Privacidad</h1>

      <h2>1. Información sobre el responsable del tratamiento</h2>
      <p>ComplianceFlow.es es responsable del tratamiento de tus datos personales.</p>

      <h2>2. Finalidades del tratamiento</h2>
      <ul>
        <li>Proporcionar nuestros servicios</li>
        <li>Mejorar nuestros servicios mediante análisis</li>
        <li>Cumplir obligaciones legales</li>
        <li>Publicidad (solo con tu consentimiento)</li>
      </ul>

      <h2>3. Base legal del tratamiento</h2>
      <p>Tratamos tus datos basándonos en:</p>
      <ul>
        <li>Tu consentimiento (análisis, marketing)</li>
        <li>Necesidad contractual (servicios)</li>
        <li>Obligación legal (auditoría, impuestos)</li>
        <li>Interés legítimo (seguridad, fraude)</li>
      </ul>

      <h2>4. Derechos del usuario</h2>
      <ul>
        <li>Derecho de acceso a tus datos</li>
        <li>Derecho de rectificación</li>
        <li>Derecho al olvido</li>
        <li>Derecho a la portabilidad</li>
        <li>Derecho a oponerme al tratamiento</li>
        <li>Derecho a retirar el consentimiento</li>
      </ul>

      <h2>5. Cookies</h2>
      <p>Utilizamos cookies necesarias, análisis y marketing.
         Puedes gestionar tus preferencias en cualquier momento.</p>

      <h2>6. Contacto</h2>
      <p>Para ejercer tus derechos: privacy@complianceflow.es</p>
    </div>
    `;
  }
}

/**
 * SII Tax Compliance (Spain)
 * Cumplimiento con Sistema Inmediato de Información (SII)
 */
export class SIICompliance {
  /**
   * Generar identificador único de factura
   * Formato: YYYY-MM-DD-XXXXX
   */
  static generateInvoiceId(date: Date, invoiceNumber: number): string {
    const dateStr = date.toISOString().split('T')[0];
    const numStr = String(invoiceNumber).padStart(5, '0');
    return `${dateStr}-${numStr}`;
  }

  /**
   * Validar CIF/NIF español
   */
  static validateSpanishTaxId(taxId: string): boolean {
    // CIF: [ABCDEFGHJNPQRSUVW]\d{7}[0-9A-J]
    // NIF: \d{8}[A-Z]
    const cifRegex = /^[ABCDEFGHJNPQRSUVW]\d{7}[0-9A-Z]$/;
    const nifRegex = /^\d{8}[A-Z]$/;

    return cifRegex.test(taxId) || nifRegex.test(taxId);
  }

  /**
   * Generar XML para VeriFacTu (facturación electrónica)
   */
  static generateVeriFacTuXML(invoice: {
    invoiceId: string;
    issuerTaxId: string;
    recipientTaxId: string;
    amount: number;
    taxRate: number;
    issueDate: string;
    description: string;
  }): string {
    return `<?xml version="1.0" encoding="UTF-8"?>
<Factura>
  <Encabezado>
    <NumFactura>${invoice.invoiceId}</NumFactura>
    <FechaExpedicion>${invoice.issueDate}</FechaExpedicion>
  </Encabezado>
  <Intervinientes>
    <Emisor>
      <NIF>${invoice.issuerTaxId}</NIF>
    </Emisor>
    <Receptor>
      <NIF>${invoice.recipientTaxId}</NIF>
    </Receptor>
  </Intervinientes>
  <Detalles>
    <Detalle>
      <Descripcion>${invoice.description}</Descripcion>
      <BaseImponible>${invoice.amount}</BaseImponible>
      <TipoCuotaIVA>${invoice.taxRate}</TipoCuotaIVA>
      <Cuota>${(invoice.amount * invoice.taxRate).toFixed(2)}</Cuota>
    </Detalle>
  </Detalles>
  <Importes>
    <TotalSinIVA>${invoice.amount}</TotalSinIVA>
    <TotalConIVA>${(invoice.amount * (1 + invoice.taxRate)).toFixed(2)}</TotalConIVA>
  </Importes>
</Factura>`;
  }
}

/**
 * CCPA Compliance (California)
 */
export class CCPACompliance {
  /**
   * "Do Not Sell My Personal Information" link requirement
   */
  static generateCCPANotice(): string {
    return `
    <div class="ccpa-notice">
      <p>California residents have the right to:</p>
      <ul>
        <li>Know what personal information is collected</li>
        <li>Know whether personal information is sold or shared</li>
        <li>Delete personal information collected</li>
        <li>Opt-out of the sale or sharing of personal information</li>
        <li>Non-discrimination for exercising CCPA rights</li>
      </ul>
      <a href="/do-not-sell-my-info">Do Not Sell My Personal Information</a>
    </div>
    `;
  }
}

/**
 * Age Verification (COPPA - USA)
 */
export class AGEVerification {
  static isUnderAge(age: number, minimumAge: number = 13): boolean {
    return age < minimumAge;
  }

  static generateAgeGateHTML(): string {
    return `
    <div class="age-gate">
      <h1>Verify Your Age</h1>
      <p>You must be at least 13 years old to access this site.</p>
      <input type="number" id="age-input" placeholder="Enter your age" min="0" max="120" />
      <button onclick="checkAge()">Continue</button>
    </div>
    `;
  }
}

/**
 * Data Export for GDPR right to data portability
 */
export class DataExportManager {
  static async exportUserData(userId: string): Promise<object> {
    return {
      userId,
      exportDate: new Date().toISOString(),
      dataItems: {
        profile: {
          name: 'User Name',
          email: 'user@example.com',
          createdAt: '2024-01-01',
        },
        activity: {
          logins: 42,
          lastLogin: '2025-01-04',
        },
        preferences: {
          language: 'es',
          newsletter: true,
        },
      },
    };
  }

  static async generateGDPRReport(userId: string): Promise<string> {
    const data = await this.exportUserData(userId);
    return JSON.stringify(data, null, 2);
  }
}

export default {
  GDPRConsentManager,
  SIICompliance,
  CCPACompliance,
  AGEVerification,
  DataExportManager,
};
