/**
 * Welcome email template
 * Sent when a user signs up
 */

import * as React from 'react';

interface WelcomeEmailProps {
  userName: string;
  verificationUrl: string;
}

export const WelcomeEmail: React.FC<WelcomeEmailProps> = ({
  userName,
  verificationUrl,
}) => {
  return (
    <html>
      <head>
        <style>{`
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 40px 20px;
            text-align: center;
            border-radius: 8px 8px 0 0;
          }
          .content {
            background: #ffffff;
            padding: 40px 30px;
            border: 1px solid #e5e7eb;
            border-top: none;
          }
          .button {
            display: inline-block;
            padding: 14px 28px;
            background-color: #3b82f6;
            color: white;
            text-decoration: none;
            border-radius: 6px;
            font-weight: 600;
            margin: 20px 0;
          }
          .footer {
            text-align: center;
            padding: 20px;
            color: #6b7280;
            font-size: 14px;
            border-top: 1px solid #e5e7eb;
          }
          .features {
            margin: 30px 0;
          }
          .feature {
            display: flex;
            align-items: start;
            margin: 15px 0;
          }
          .feature-icon {
            width: 24px;
            height: 24px;
            margin-right: 12px;
            color: #3b82f6;
          }
        `}</style>
      </head>
      <body>
        <div className="header">
          <h1 style={{ margin: 0, fontSize: '32px' }}>¡Bienvenido a ComplianceFlow!</h1>
        </div>
        
        <div className="content">
          <p style={{ fontSize: '18px' }}>Hola {userName},</p>
          
          <p>
            ¡Nos alegra que te hayas unido a ComplianceFlow! Estás a un paso de simplificar 
            la gestión de tu cumplimiento normativo.
          </p>
          
          <p>
            Para comenzar, por favor verifica tu dirección de correo electrónico:
          </p>
          
          <div style={{ textAlign: 'center' }}>
            <a href={verificationUrl} className="button">
              Verificar mi correo
            </a>
          </div>
          
          <div className="features">
            <h3>¿Qué puedes hacer con ComplianceFlow?</h3>
            
            <div className="feature">
              <span className="feature-icon">✓</span>
              <div>
                <strong>Gestión de Auditorías</strong>
                <p style={{ margin: '5px 0', color: '#6b7280' }}>
                  Planifica y ejecuta auditorías de cumplimiento de forma eficiente
                </p>
              </div>
            </div>
            
            <div className="feature">
              <span className="feature-icon">✓</span>
              <div>
                <strong>Seguimiento de Controles</strong>
                <p style={{ margin: '5px 0', color: '#6b7280' }}>
                  Monitorea el cumplimiento de controles normativos en tiempo real
                </p>
              </div>
            </div>
            
            <div className="feature">
              <span className="feature-icon">✓</span>
              <div>
                <strong>Gestión de Evidencias</strong>
                <p style={{ margin: '5px 0', color: '#6b7280' }}>
                  Centraliza y organiza toda tu documentación de cumplimiento
                </p>
              </div>
            </div>
          </div>
          
          <p style={{ marginTop: '30px' }}>
            Si tienes alguna pregunta, no dudes en contactarnos en{' '}
            <a href="mailto:support@complianceflow.es" style={{ color: '#3b82f6' }}>
              support@complianceflow.es
            </a>
          </p>
          
          <p>
            ¡Gracias por elegirnos!<br />
            <strong>El equipo de ComplianceFlow</strong>
          </p>
        </div>
        
        <div className="footer">
          <p>
            Este correo fue enviado a {userName} por ComplianceFlow<br />
            Si no solicitaste esta cuenta, puedes ignorar este correo de forma segura.
          </p>
          <p>
            <a href="https://complianceflow.netlify.app" style={{ color: '#3b82f6', textDecoration: 'none' }}>
              ComplianceFlow.es
            </a>
            {' | '}
            <a href="https://complianceflow.netlify.app/legal/privacy" style={{ color: '#6b7280', textDecoration: 'none' }}>
              Privacidad
            </a>
            {' | '}
            <a href="https://complianceflow.netlify.app/legal/terms" style={{ color: '#6b7280', textDecoration: 'none' }}>
              Términos
            </a>
          </p>
        </div>
      </body>
    </html>
  );
};