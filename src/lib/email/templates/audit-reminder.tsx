/**
 * Audit reminder email template
 */

import * as React from 'react';

interface AuditReminderEmailProps {
  userName: string;
  auditTitle: string;
  dueDate: string;
  auditUrl: string;
  daysRemaining: number;
}

export const AuditReminderEmail: React.FC<AuditReminderEmailProps> = ({
  userName,
  auditTitle,
  dueDate,
  auditUrl,
  daysRemaining,
}) => {
  const urgencyColor = daysRemaining <= 3 ? '#dc2626' : daysRemaining <= 7 ? '#f59e0b' : '#3b82f6';
  
  return (
    <html>
      <head>
        <style>{`
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          .header {
            background-color: ${urgencyColor};
            color: white;
            padding: 30px 20px;
            text-align: center;
            border-radius: 8px 8px 0 0;
          }
          .content {
            background: #ffffff;
            padding: 40px 30px;
            border: 1px solid #e5e7eb;
            border-top: none;
          }
          .badge {
            display: inline-block;
            padding: 8px 16px;
            background-color: ${urgencyColor};
            color: white;
            border-radius: 20px;
            font-weight: 600;
            font-size: 14px;
            margin: 10px 0;
          }
          .button {
            display: inline-block;
            padding: 14px 28px;
            background-color: ${urgencyColor};
            color: white;
            text-decoration: none;
            border-radius: 6px;
            font-weight: 600;
            margin: 20px 0;
          }
          .audit-details {
            background: #f9fafb;
            padding: 20px;
            border-radius: 6px;
            border-left: 4px solid ${urgencyColor};
            margin: 20px 0;
          }
        `}</style>
      </head>
      <body>
        <div className="header">
          <h1 style={{ margin: 0, fontSize: '28px' }}>⏰ Recordatorio de Auditoría</h1>
        </div>
        
        <div className="content">
          <p style={{ fontSize: '18px' }}>Hola {userName},</p>
          
          <p>
            Te recordamos que tienes una auditoría pendiente que vence pronto.
          </p>
          
          <span className="badge">
            {daysRemaining === 0 ? '¡Vence hoy!' : 
             daysRemaining === 1 ? '¡Vence mañana!' : 
             `${daysRemaining} días restantes`}
          </span>
          
          <div className="audit-details">
            <h3 style={{ margin: '0 0 15px 0', color: '#1f2937' }}>
              {auditTitle}
            </h3>
            <p style={{ margin: '5px 0', color: '#6b7280' }}>
              <strong>Fecha de vencimiento:</strong> {dueDate}
            </p>
          </div>
          
          <p>
            {daysRemaining <= 3 ? (
              <strong style={{ color: '#dc2626' }}>
                ¡Acción urgente requerida! Esta auditoría vence muy pronto.
              </strong>
            ) : (
              'Por favor, asegúrate de completar todas las tareas pendientes antes de la fecha de vencimiento.'
            )}
          </p>
          
          <div style={{ textAlign: 'center' }}>
            <a href={auditUrl} className="button">
              Ver auditoría
            </a>
          </div>
          
          <p style={{ marginTop: '30px', fontSize: '14px', color: '#6b7280' }}>
            Este es un recordatorio automático. Si ya completaste esta auditoría, 
            puedes ignorar este correo.
          </p>
        </div>
        
        <div style={{ textAlign: 'center', padding: '20px', color: '#6b7280', fontSize: '14px' }}>
          <p>ComplianceFlow - Gestión de Cumplimiento Simplificada</p>
        </div>
      </body>
    </html>
  );
};