import { mailOptions, transporter } from "@/config/email";

const handle = async (req, res) => {
    if (req.method === 'GET') {
        // const data = req.body;
        try {
            const code = "aaaaaaaaaaaaaaaaaaaaaaaaa";
            const info  = await transporter.sendMail({
                // ...mailOptions,
                from: 'info@sethor.tech',
                to: 'power102004@gmail.com',
                subject: 'Bienvenido a Sethor',
                text: 'Este es el codigo para acceder a los beneficios de la lista de espera: ' + code,
                html: "<b>Hello world?</b>",
            });
            return res.status(200).json({ message: 'Email enviado', idEmail: info.messageId })
        } catch (error) {
            return res.status(200).json({ message: error })
        }
        
    }else {
        return res.status(200).json({ name: 'John Doedd' })
    }
}

export default handle;