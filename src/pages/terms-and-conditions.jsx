import Head from 'next/head'
import NavBar from './landing/components/NavBar/NavBar'
import Footer from './landing/components/Footer/Footer'

export default function TermsAndConditions() {
    return (
        <div>
            <Head>
                <title>Términos y Condiciones | Sethor</title>
                <meta property="og:title" content="Términos y Condiciones | Sethor" key="title" />
                <meta property="og:description" content="Términos y condiciones de uso de los servicios de Sethor" />
                <meta property="og:image" content="https://www.sethor.tech/logo/Logotipo.svg" />
                <link rel="canonical" href="https://www.sethor.tech/terms-and-conditions" />
            </Head>

            <main className="min-h-screen bg-[var(--background-color)] py-20 px-5 md:px-28 xl:px-40">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold mb-8">Términos y Condiciones de Sethor</h1>
                    <p className="text-[var(--letter-sub-color)] mb-8 text-lg">
                        Última actualización: 05/01/2025 | Versión 1.0
                    </p>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold mb-4">1. Introducción</h2>
                        <p className="text-[var(--letter-sub-color)] mb-4">
                            Bienvenido a Sethor. Al acceder o utilizar nuestros servicios, usted acepta estar sujeto a estos Términos y Condiciones. Lea detenidamente este documento antes de utilizar nuestra plataforma.
                        </p>
                        <p className="text-[var(--letter-sub-color)] mb-4">
                            Nuestros servicios están dirigidos exclusivamente a mayores de 18 años. No recopilamos ni procesamos información de menores de edad. Cumplimos con todas las regulaciones de protección de datos y privacidad requeridas.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold mb-4">2. Nuestros Servicios</h2>
                        <p className="text-[var(--letter-sub-color)] mb-4">
                            Sethor ofrece una plataforma tecnológica que incluye:
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-2">
                            <li><strong>Sethor:</strong> Solución de pagos biométricos seguros integrada con Transbank Chile (One Click)</li>
                            <li><strong>Sethor Business:</strong> Sistema de gestión integral para restaurantes con control de inventario, ventas y pagos</li>
                        </ul>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold mb-4">3. Uso Aceptable</h2>
                        <p className="text-[var(--letter-sub-color)] mb-4">
                            Al utilizar nuestros servicios, usted acepta:
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-2">
                            <li>Proporcionar información precisa y actualizada</li>
                            <li>Mantener la confidencialidad de sus credenciales</li>
                            <li>Utilizar la plataforma solo para fines legales</li>
                            <li>Notificar cualquier actividad no autorizada</li>
                        </ul>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold mb-4">4. Transacciones y Pagos</h2>
                        <p className="text-[var(--letter-sub-color)] mb-4">
                            Todas las transacciones se procesan a través de <a href="https://www.transbank.cl" target="_blank" rel="noopener noreferrer" className="text-[var(--background-button-action-rgb)] hover:underline">Transbank Chile</a>. Sethor actúa como intermediario tecnológico y no es responsable por:
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-2">
                            <li>Fallos en sistemas de pago de terceros</li>
                            <li>Información de pago desactualizada</li>
                            <li>Transacciones no autorizadas por falta de seguridad en las credenciales del usuario</li>
                        </ul>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold mb-4">5. Protección de Datos y Privacidad</h2>
                        <p className="text-[var(--letter-sub-color)] mb-4">
                            Utilizamos tecnología de <a href="https://tech5.ai/t5-airsnap/" target="_blank" rel="noopener noreferrer" className="text-[var(--background-button-action-rgb)] hover:underline">Tech5 (T5-AirSnap)</a> para proteger sus datos biométricos. Al registrarse, usted:
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-2">
                            <li>Autoriza el uso de sus datos solo para autenticación y pagos</li>
                            <li>Reconoce que sus datos se almacenan de forma segura y encriptada</li>
                            <li>Acepta que no recopilamos datos de menores de edad</li>
                            <li>Reconoce que todos los datos personales son tratados según la Ley de Protección de Datos</li>
                        </ul>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold mb-4">6. Limitaciones de Responsabilidad</h2>
                        <p className="text-[var(--letter-sub-color)] mb-4">
                            Sethor no será responsable por:
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-2">
                            <li>Daños indirectos o pérdida de beneficios</li>
                            <li>Interrupciones del servicio fuera de nuestro control</li>
                            <li>Uso indebido de la plataforma por parte de los usuarios</li>
                        </ul>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold mb-4">7. Modificaciones</h2>
                        <p className="text-[var(--letter-sub-color)] mb-4">
                            Nos reservamos el derecho de modificar estos términos. Las actualizaciones serán notificadas a través de:
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-2">
                            <li>Nuestra plataforma</li>
                            <li>Correo electrónico registrado</li>
                            <li>Canales oficiales de comunicación</li>
                        </ul>
                        <p className="text-[var(--letter-sub-color)] mt-4">
                            El uso continuado de nuestros servicios constituye la aceptación de los nuevos términos.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold mb-4">8. Contacto</h2>
                        <p className="text-[var(--letter-sub-color)] mb-4">
                            Para consultas o soporte técnico, contáctenos a través de:
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-2">
                            <li>Formulario de contacto en nuestro sitio web</li>
                            <li>Correo electrónico: soporte@sethor.tech</li>
                            <li>Canales oficiales de atención al cliente</li>
                        </ul>
                    </section>

                    <p className="text-[var(--letter-sub-color)] mt-10 text-sm">
                        Estos Términos y Condiciones constituyen el acuerdo completo entre usted y Sethor. Si tiene alguna pregunta, no dude en contactarnos.
                    </p>
                </div>
            </main>

            <Footer />
        </div>
    )
}