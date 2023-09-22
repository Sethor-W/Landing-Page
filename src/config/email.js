const nodemailer = require('nodemailer');

// Configura el transporte SMTP
export const transporter = nodemailer.createTransport({
  host: 'smtp.hostinger.com',
  port: 465, // Puerto SMTP
  secure: true, // true para usar TLS, false para no usarlo
  // dkim: {
  //   domainName: "http://localhost:3000",
  //   keySelector: "2017",
  //   privateKey: "v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAwIwgXHtyOzeyHRyqQWY/SqqIXlAxBEdDHyTpk7omAklVvB+e+gu0YsE6pQvOQHlZS3ssGZgpqh6rGWMmDkOA+BX08Kwr8cmbNsvM69ZQ+xU5csurDvd5xh6Q0SK6DVvLdtxxBFUwFjSv4+jqh9dQoUDxsOH6z5v8KoO5YkgV1sjGFouTFvzztMzlMBpJU6Ez9LHFxwyaleJpvxbC01FGfJZqBrmWO5E1m2uE5syGMhqjPiP/XF09aHH2yRiC3AcRJ0V1McZBkX/HUG/IxbGd/KhND6NblBNP0foKw2dBJo+0s6nKJLYoVd6IUMQ2Tr/kHQTctjbrfChq1UX95mgPXwIDAQAB"
  // },
  auth: {
    user: 'info@sethor.tech',
    pass: '8goa72YbD1pX@',
  },
});

export const mailOptions = {
  from: 'info@sethor.tech',
  to: 'gownerbeats@gmail.com',
}
