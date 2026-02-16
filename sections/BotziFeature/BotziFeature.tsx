'use client';
import { useEffect, useRef, useState } from 'react';
import './BotziFeature.css';

const BotziFeature: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const [currentMessage, setCurrentMessage] = useState(0);

    // Parallax effect
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!sectionRef.current) return;
            const rect = sectionRef.current.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width;
            const y = (e.clientY - rect.top) / rect.height;
            sectionRef.current.style.setProperty('--mouse-x', `${x}`);
            sectionRef.current.style.setProperty('--mouse-y', `${y}`);
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Chat animation
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentMessage(prev => (prev + 1) % 4);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const chatMessages = [
        { type: 'bot', text: '¡Hola! 👋 Soy Botzi, ¿en qué puedo ayudarte?' },
        { type: 'user', text: 'Quiero información sobre sus servicios' },
        { type: 'bot', text: '¡Claro! Ofrecemos desarrollo web, apps móviles y automatización con IA. ¿Cuál te interesa?' },
        { type: 'user', text: 'Me interesa la automatización' },
    ];

    return (
        <section id="soluciones" className="solutions-section" ref={sectionRef}>
            {/* Animated Background */}
            <div className="solutions-bg">
                <div className="bg-orb orb-1"></div>
                <div className="bg-orb orb-2"></div>
                <div className="bg-particles">
                    {[...Array(20)].map((_, i) => (
                        <div key={i} className="particle" style={{
                            '--delay': `${Math.random() * 5}s`,
                            '--x': `${Math.random() * 100}%`,
                            '--duration': `${10 + Math.random() * 10}s`
                        } as React.CSSProperties}></div>
                    ))}
                </div>
            </div>

            <div className="container">
                <div className="solutions-grid">
                    {/* Content Side */}
                    <div className="solutions-content" data-aos="fade-right">
                        <span className="solutions-badge">
                            <span className="badge-dot"></span>
                            Nuestras Soluciones
                        </span>

                        <h2 className="solutions-title">
                            <span className="title-line">Te entendemos.</span>
                            <span className="title-line">Por eso <span className="title-accent">creamos</span></span>
                            <span className="title-line"><span className="title-accent">herramientas</span> para ti.</span>
                        </h2>

                        <p className="solutions-description">
                            Cada producto nace de escuchar a nuestros clientes. Botzi surgió porque vimos
                            negocios perder ventas por no poder atender WhatsApp 24/7.
                        </p>

                        <div className="product-highlight">
                            <div className="product-logo-wrapper">
                                <img src="/bot.svg" alt="Botzi" />
                            </div>
                            <div className="product-details">
                                <h3>Botzi</h3>
                                <span className="product-tagline">Agentes de IA para WhatsApp</span>
                            </div>
                        </div>

                        <ul className="features-list">
                            <li>
                                <span className="feature-check">✓</span>
                                <span>Responde como tú, 24/7</span>
                            </li>
                            <li>
                                <span className="feature-check">✓</span>
                                <span>Integración con tu CRM</span>
                            </li>
                            <li>
                                <span className="feature-check">✓</span>
                                <span>Escala a humanos cuando es necesario</span>
                            </li>
                        </ul>

                        <a href="https://botzi.co" target="_blank" rel="noopener noreferrer" className="solutions-cta">
                            <span>Conocer Botzi</span>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>

                        <div className="coming-soon-badge">
                            <span>+</span> Más soluciones en desarrollo
                        </div>
                    </div>

                    {/* Phone Mockup Side */}
                    <div className="phone-mockup-wrapper" data-aos="fade-left" data-aos-delay="200">
                        <div className="phone-glow"></div>
                        <div className="phone-mockup">
                            <div className="phone-notch"></div>
                            <div className="phone-screen">
                                {/* WhatsApp Header */}
                                <div className="wa-header">
                                    <div className="wa-back">←</div>
                                    <div className="wa-avatar">
                                        <img src="/bot.svg" alt="Botzi" />
                                    </div>
                                    <div className="wa-contact">
                                        <div className="wa-name">Botzi Assistant</div>
                                        <div className="wa-status">en línea</div>
                                    </div>
                                    <div className="wa-icons">
                                        <span>📹</span>
                                        <span>📞</span>
                                    </div>
                                </div>

                                {/* Chat Messages */}
                                <div className="wa-chat">
                                    {chatMessages.slice(0, currentMessage + 1).map((msg, i) => (
                                        <div
                                            key={i}
                                            className={`wa-message ${msg.type}`}
                                            style={{ animationDelay: `${i * 0.2}s` }}
                                        >
                                            {msg.text}
                                            <span className="wa-time">ahora</span>
                                        </div>
                                    ))}
                                    {currentMessage < 3 && (
                                        <div className="wa-typing">
                                            <span></span><span></span><span></span>
                                        </div>
                                    )}
                                </div>

                                {/* Input */}
                                <div className="wa-input">
                                    <div className="wa-input-field">Escribe un mensaje...</div>
                                    <div className="wa-send">🎤</div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Elements */}
                        <div className="floating-stat stat-1">
                            <span className="stat-icon">💬</span>
                            <span className="stat-value">+1,000</span>
                            <span className="stat-label">chats/día</span>
                        </div>
                        <div className="floating-stat stat-2">
                            <span className="stat-icon">⚡</span>
                            <span className="stat-value">&lt;2s</span>
                            <span className="stat-label">respuesta</span>
                        </div>
                        <div className="floating-stat stat-3">
                            <span className="stat-icon">🎯</span>
                            <span className="stat-value">95%</span>
                            <span className="stat-label">precisión</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BotziFeature;
