import { emailHtml, mailOptions, remplazarMarcadores, transporter } from "../../config/email";

const handle = async (req, res) => {
    if (req.method === 'POST') {
        const data = req.body;
        try {
            const html = await remplazarMarcadores(emailHtml, data);
            const info  = await transporter.sendMail({
                from: data.mailFrom ? data.mailFrom : '"Sethor" <info@sethor.tech>' ,
                to: data.mailTo,
                subject: '¡Gracias por suscribirte a nuestra lista de espera!',
                text: 'Este es el codigo para acceder a los beneficios de la lista de espera: ' + data.code,
                html: html,
            });
            return res.status(200).json({ message: 'Email enviado'}) //idEmail: info.messageId 
        } catch (err) {
            return res.status(400).json({ message: 'ERROR: '+err})
        }
        
    }else {
        return res.status(400).json({ message: 'Metodo no registrado' })
    }
}

export default handle;