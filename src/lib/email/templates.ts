/**
 * Email templates
 * Professional HTML email templates for various purposes
 */

interface EmailTemplate {
  subject: string;
  html: string;
  text: string;
}

/**
 * Welcome email template
 */
export function welcomeEmail(name: string, verificationUrl: string): EmailTemplate {
  return {
    subject: '¡Bienvenido a ComplianceFlow!',
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #2563eb; color: white; padding: 30px; text-align: center; }
            .content { padding: 30px; background: #f9fafb; }
            .button { display: inline-block; padding: 12px 30px; background: #2563eb; color: white; text-decoration: none; border-radius: 5px; margin: 20px 0; }
            .footer { padding: 20px; text-align: center; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>¡Bienvenido a ComplianceFlow!</h1>
            </div>
            <div class="content">
              <p>Hola ${name},</p>
              <p>Gracias por unirte a ComplianceFlow, la plataforma líder en gestión de cumplimiento normativo.</p>
              <p>Para comenzar, por favor verifica tu dirección de correo electrónico:</p>
              <p style="text-align: center;">
                <a href="${verificationUrl}" class="button">Verificar Email</a>
              </p>
              <p>Una vez verificado, podrás acceder a todas las funcionalidades de la plataforma.</p>
              <p>Si tienes alguna pregunta, no dudes en contactarnos.</p>
              <p>Saludos,<br>El equipo de ComplianceFlow</p>
            </div>
            <div class="footer">
              <p>© 2025 ComplianceFlow. Todos los derechos reservados.</p>
              <p><a href="https://complianceflow.es/unsubscribe">Darse de baja</a></p>
            </div>
          </div>
        </body>
      </html>
    `,
    text: `Hola ${name},\n\nGracias por unirte a ComplianceFlow. Por favor verifica tu email visitando: ${verificationUrl}\n\nSaludos,\nEl equipo de ComplianceFlow`,
  };
}

/**
 * Password reset email template
 */
export function passwordResetEmail(name: string, resetUrl: string): EmailTemplate {
  return {
    subject: 'Restablecer tu contraseña',
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #2563eb; color: white; padding: 30px; text-align: center; }
            .content { padding: 30px; background: #f9fafb; }
            .button { display: inline-block; padding: 12px 30px; background: #2563eb; color: white; text-decoration: none; border-radius: 5px; margin: 20px 0; }
            .warning { background: #fef3c7; padding: 15px; border-left: 4px solid #f59e0b; margin: 20px 0; }
            .footer { padding: 20px; text-align: center; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Restablecer Contraseña</h1>
            </div>
            <div class="content">
              <p>Hola ${name},</p>
              <p>Recibimos una solicitud para restablecer la contraseña de tu cuenta ComplianceFlow.</p>
              <p style="text-align: center;">
                <a href="${resetUrl}" class="button">Restablecer Contraseña</a>
              </p>
              <div class="warning">
                <strong>⚠️ Importante:</strong> Este enlace expirará en 1 hora. Si no solicitaste este cambio, ignora este email.
              </div>
              <p>Por seguridad, nunca compartas este enlace con nadie.</p>
              <p>Saludos,<br>El equipo de ComplianceFlow</p>
            </div>
            <div class="footer">
              <p>© 2025 ComplianceFlow. Todos los derechos reservados.</p>
            </div>
          </div>
        </body>
      </html>
    `,
    text: `Hola ${name},\n\nRecibimos una solicitud para restablecer tu contraseña. Visita: ${resetUrl}\n\nEste enlace expira en 1 hora.\n\nSaludos,\nEl equipo de ComplianceFlow`,
  };
}

/**
 * Task reminder email template
 */
export function taskReminderEmail(
  name: string,
  taskTitle: string,
  dueDate: string,
  taskUrl: string
): EmailTemplate {
  return {
    subject: `Recordatorio: ${taskTitle}`,
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #2563eb; color: white; padding: 30px; text-align: center; }
            .content { padding: 30px; background: #f9fafb; }
            .button { display: inline-block; padding: 12px 30px; background: #2563eb; color: white; text-decoration: none; border-radius: 5px; margin: 20px 0; }
            .task-box { background: white; padding: 20px; border-left: 4px solid #2563eb; margin: 20px 0; }
            .footer { padding: 20px; text-align: center; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Recordatorio de Tarea</h1>
            </div>
            <div class="content">
              <p>Hola ${name},</p>
              <p>Te recordamos que tienes una tarea pendiente:</p>
              <div class="task-box">
                <h3>${taskTitle}</h3>
                <p><strong>Fecha límite:</strong> ${dueDate}</p>
              </div>
              <p style="text-align: center;">
                <a href="${taskUrl}" class="button">Ver Tarea</a>
              </p>
              <p>No olvides completarla antes de la fecha límite.</p>
              <p>Saludos,<br>El equipo de ComplianceFlow</p>
            </div>
            <div class="footer">
              <p>© 2025 ComplianceFlow. Todos los derechos reservados.</p>
              <p><a href="https://complianceflow.es/unsubscribe">Darse de baja</a></p>
            </div>
          </div>
        </body>
      </html>
    `,
    text: `Hola ${name},\n\nRecordatorio: ${taskTitle}\nFecha límite: ${dueDate}\n\nVer tarea: ${taskUrl}\n\nSaludos,\nEl equipo de ComplianceFlow`,
  };
}