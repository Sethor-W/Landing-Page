const fs = require('fs');
const path = require('path');

const nodemailer = require('nodemailer');

// Obtén la ruta completa al archivo HTML
const filePath = path.join(process.cwd(), 'public', 'email', 'email_template.html');
// Lee el contenido del archivo HTML
export const emailHtml = fs.readFileSync(filePath, 'utf-8');

// Función para reemplazar marcadores de posición en la plantilla HTML
export const remplazarMarcadores = (correoHtml, datos) => {
  let HTML = correoHtml;
  HTML = HTML.replace('{{name}}', datos.name);
  HTML = HTML.replace('{{code}}', datos.code);
  return HTML;
}

// Configura el transporte SMTP
export const transporter = nodemailer.createTransport({
  host: 'smtp.hostinger.com',
  port: 465, // Puerto SMTP
  secure: true, // true para usar TLS, false para no usarlo
  auth: {
    user: 'info@sethor.tech',
    pass: '8goa72YbD1pX@',
  },
});

export const mailOptions = {
  from: 'info@sethor.tech',
  to: '',
}
