'use client';
import './Contact.css';

const Contact: React.FC = () => {
    return (
        <section id="contacto-home" className="contact-home section-lg">
            <div className="container">
                <div className="contact-grid">
                    <div className="contact-content" data-aos="fade-right">
                        <span className="badge badge-accent">Conversemos</span>
                        <h2 className="contact-title">
                            Cuéntanos tu idea,
                            <br />
                            <span className="text-accent">te ayudamos a aterrizarla</span>
                        </h2>
                        <p className="contact-description">
                            No te preocupes si aún no tienes todo claro. Nuestra primera conversación es para entender dónde estás y hacia dónde quieres ir. Sin compromiso, sin presión.
                        </p>

                        <ul className="contact-benefits">
                            <li>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                    <polyline points="22 4 12 14.01 9 11.01" />
                                </svg>
                                Análisis personalizado de tu situación actual
                            </li>
                            <li>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                    <polyline points="22 4 12 14.01 9 11.01" />
                                </svg>
                                Plan de acción concreto con pasos claros
                            </li>
                            <li>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                    <polyline points="22 4 12 14.01 9 11.01" />
                                </svg>
                                Sin compromiso, sin presión de venta
                            </li>
                        </ul>
                    </div>

                    <div className="contact-form-wrapper" data-aos="fade-left" data-aos-delay="200">
                        <form
                            className="contact-form"
                            name="contact-home"
                            method="POST"

                        >


                            <div className="form-group">
                                <label htmlFor="name">Nombre</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Tu nombre completo"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="tu@email.com"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="company">Empresa <span className="optional-label">(opcional)</span></label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    placeholder="Nombre de tu empresa"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">¿Cómo podemos ayudarte?</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    placeholder="Cuéntanos brevemente sobre tu proyecto..."
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary btn-lg contact-submit"
                            >
                                Solicitar Auditoría Gratuita
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
