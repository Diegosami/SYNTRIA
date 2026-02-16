'use client';

import './ContactPage.css';

const ContactPage: React.FC = () => {
    return (
        <div className="contact-page">

            {/* Hero */}
            <section className="cp-hero">
                <div className="cp-hero-bg"></div>
                <div className="container">
                    <div className="cp-hero-content">
                        <span className="cp-label">Contacto</span>
                        <h1>
                            Hablemos de tu
                            <br />
                            <span className="accent-text">próximo proyecto</span>
                        </h1>
                        <p>
                            ¿Tienes una idea? ¿Un problema que resolver? ¿O simplemente
                            quieres conocernos? Estamos aquí.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="cp-main">
                <div className="container">
                    <div className="cp-grid">
                        {/* Info */}
                        <div className="cp-info">
                            <div className="info-card">
                                <div className="info-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                        <polyline points="22,6 12,13 2,6" />
                                    </svg>
                                </div>
                                <div>
                                    <h4>Email</h4>
                                    <a href="mailto:hola@syntria.io">hola@syntria.io</a>
                                </div>
                            </div>
                            <div className="info-card">
                                <div className="info-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4>WhatsApp</h4>
                                    <a href="https://wa.me/573239454873" target="_blank" rel="noopener noreferrer">+57 323 945 4873</a>
                                </div>
                            </div>
                            <div className="info-card">
                                <div className="info-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                        <circle cx="12" cy="10" r="3" />
                                    </svg>
                                </div>
                                <div>
                                    <h4>Ubicación</h4>
                                    <span>Bogotá, Colombia</span>
                                </div>
                            </div>

                            <div className="social-section">
                                <p>Síguenos</p>
                                <div className="social-links">
                                    <a href="https://www.instagram.com/syntria.group/" target="_blank" rel="noopener noreferrer" className="social-link">Instagram</a>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="cp-form-wrapper">
                            <form
                                name="contact"
                                method="POST"

                                className="cp-form"
                            >

                                <h3>Cuéntanos tu proyecto</h3>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="name">Nombre *</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            placeholder="Tu nombre"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email *</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            placeholder="tu@email.com"
                                        />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="company">Empresa</label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            placeholder="Nombre de tu empresa"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="service">¿Qué necesitas?</label>
                                        <select
                                            id="service"
                                            name="service"
                                        >
                                            <option value="">Selecciona...</option>
                                            <option value="software">Software & Apps</option>
                                            <option value="ai">Inteligencia Artificial</option>
                                            <option value="branding">Diseño & Branding</option>
                                            <option value="consulting">Consultoría</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Tu proyecto *</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={5}
                                        placeholder="Cuéntanos qué tienes en mente, qué problema quieres resolver, y cualquier detalle relevante..."
                                    />
                                </div>

                                <button type="submit" className="btn btn-primary btn-lg btn-full">
                                    Enviar Mensaje
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
