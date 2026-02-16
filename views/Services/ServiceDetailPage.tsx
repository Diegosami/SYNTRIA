'use client';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { getServiceBySlug, services as allServices } from '../../data/serviceData';
import SEO from '../../components/SEO/SEO';
import HeroVisual from '../../components/HeroVisuals/HeroVisuals';
import './ServiceDetailPage.css';

const iconPaths: Record<string, string> = {
    'globe': 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z',
    'smartphone': 'M17 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM12 18h.01',
    'zap': 'M13 2L3 14h9l-1 8 10-12h-9l1-8z',
    'shopping-cart': 'M9 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM20 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6',
    'cloud': 'M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z',
    'database': 'M12 2C6.48 2 2 3.34 2 5v14c0 1.66 4.48 3 10 3s10-1.34 10-3V5c0-1.66-4.48-3-10-3zM2 5c0-1.66 4.48-3 10-3s10 1.34 10 3M2 12c0 1.66 4.48 3 10 3s10-1.34 10-3',
    'palette': 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-1 0-.83.67-1.5 1.5-1.5H16c3.31 0 6-2.69 6-6 0-4.97-4.48-9-10-9zM6.5 13a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm3-4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm3 4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z',
    'pen-tool': 'M12 19l7-7 3 3-7 7-3-3zM18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z',
    'monitor': 'M20 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM8 21h8M12 17v4',
    'file-text': 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M16 13H8M16 17H8M10 9H8',
    'box': 'M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16zM3.27 6.96L12 12.01l8.73-5.05M12 22.08V12',
    'grid': 'M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z',
    'search': 'M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM21 21l-4.35-4.35',
    'megaphone': 'M3 11l18-5v12L3 13v-2z',
    'share-2': 'M18 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM18 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98',
    'mail': 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM22 6l-10 7L2 6',
    'bar-chart': 'M12 20V10M18 20V4M6 20v-4',
    'target': 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12zM12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z',
    'clipboard': 'M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2M9 2h6a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z',
    'cpu': 'M18 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zM9 9h6v6H9zM9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3',
    'refresh': 'M23 4v6h-6M1 20v-6h6M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15',
    'message-circle': 'M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z',
    'trending-up': 'M23 6l-9.5 9.5-5-5L1 18M17 6h6v6',
    'users': 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75',
    'camera': 'M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2zM12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8z',
    'video': 'M23 7l-7 5 7 5V7zM1 5h15a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H1z',
    'edit-3': 'M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z',
    'mic': 'M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3zM19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8',
    'film': 'M19.82 2H4.18A2.18 2.18 0 0 0 2 4.18v15.64A2.18 2.18 0 0 0 4.18 22h15.64A2.18 2.18 0 0 0 22 19.82V4.18A2.18 2.18 0 0 0 19.82 2zM7 2v20M17 2v20M2 12h20M2 7h5M2 17h5M17 17h5M17 7h5',
};

const FeatureIcon: React.FC<{ name: string; accent: string }> = ({ name, accent }) => (
    <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke={accent}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d={iconPaths[name] || iconPaths['globe']} />
    </svg>
);

const ServiceDetailPage: React.FC = () => {
    const params = useParams<{ slug: string }>();
    const slug = params?.slug;
    const service = slug ? getServiceBySlug(slug) : undefined;

    if (!service) {
        redirect('/servicios');
    }

    // Get other services for the "Explore More" section
    const otherServices = allServices.filter(s => s.slug !== service.slug);

    return (
        <div className="sdp" style={{ '--accent': service.accent } as React.CSSProperties}>
            <SEO
                title={service.title}
                description={service.description}
                path={`/servicios/${service.slug}`}
            />

            {/* Hero — full-bleed dark with floating glow orbs */}
            <section className="sdp-hero">
                <div className="sdp-hero-bg">
                    <div className="sdp-hero-glow sdp-glow-1"></div>
                    <div className="sdp-hero-glow sdp-glow-2"></div>
                    <div className="sdp-hero-grid-pattern"></div>
                </div>
                <div className="container">
                    <Link href="/servicios" className="sdp-back" data-aos="fade-right" data-aos-delay="100">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M19 12H5M12 19l-7-7 7-7" />
                        </svg>
                        Volver al ecosistema
                    </Link>
                    <div className="sdp-hero-row">
                        <div className="sdp-hero-content" data-aos="fade-up" data-aos-delay="200">
                            <span className="sdp-label">{service.subtitle}</span>
                            <h1>{service.title}</h1>
                            <p className="sdp-hero-desc">{service.description}</p>
                            <div className="sdp-hero-stats">
                                <div className="sdp-stat">
                                    <span className="sdp-stat-num">{service.features.length}</span>
                                    <span className="sdp-stat-label">servicios</span>
                                </div>
                                <div className="sdp-stat-divider"></div>
                                <div className="sdp-stat">
                                    <span className="sdp-stat-num">{service.tools.length}+</span>
                                    <span className="sdp-stat-label">herramientas</span>
                                </div>
                                <div className="sdp-stat-divider"></div>
                                <div className="sdp-stat">
                                    <span className="sdp-stat-num">{service.process.length}</span>
                                    <span className="sdp-stat-label">fases</span>
                                </div>
                            </div>
                        </div>
                        <div className="sdp-hero-visual" data-aos="fade-left" data-aos-delay="400">
                            <HeroVisual slug={service.slug} accent={service.accent} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Features — bento-style grid with glassmorphism cards */}
            <section className="sdp-features">
                <div className="container">
                    <div className="sdp-section-header" data-aos="fade-up">
                        <span className="sdp-section-tag">Servicios</span>
                        <h2>Qué <span className="sdp-accent">incluye</span></h2>
                        <p>Cada servicio está diseñado para resolver un problema real de tu negocio.</p>
                    </div>
                    <div className="sdp-features-grid">
                        {service.features.map((feature, idx) => (
                            <div
                                key={idx}
                                className={`sdp-feature-card ${idx === 0 ? 'sdp-card-featured' : ''}`}
                                data-aos="fade-up"
                                data-aos-delay={idx * 80}
                            >
                                <div className="sdp-feature-card-inner">
                                    <div className="sdp-feature-icon-wrap">
                                        <FeatureIcon name={feature.icon} accent={service.accent} />
                                    </div>
                                    <h3>{feature.title}</h3>
                                    <p>{feature.description}</p>
                                    <div className="sdp-feature-shine"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tools — floating pill cloud with animated gradient border */}
            <section className="sdp-tools">
                <div className="container">
                    <div className="sdp-section-header" data-aos="fade-up">
                        <span className="sdp-section-tag">Stack</span>
                        <h2>Herramientas que <span className="sdp-accent">usamos</span></h2>
                        <p>Trabajamos con las tecnologías líderes de cada industria.</p>
                    </div>
                    <div className="sdp-tools-cloud" data-aos="fade-up" data-aos-delay="100">
                        {service.tools.map((tool, idx) => (
                            <span
                                key={idx}
                                className="sdp-tool-pill"
                                style={{ animationDelay: `${idx * 0.15}s` }}
                            >
                                {tool}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process — vertical timeline with connecting line */}
            <section className="sdp-process">
                <div className="container">
                    <div className="sdp-section-header" data-aos="fade-up">
                        <span className="sdp-section-tag">Proceso</span>
                        <h2>Cómo <span className="sdp-accent">trabajamos</span></h2>
                        <p>Un proceso claro, transparente y sin sorpresas.</p>
                    </div>
                    <div className="sdp-process-track">
                        <div className="sdp-process-line"></div>
                        {service.process.map((step, idx) => (
                            <div
                                key={idx}
                                className={`sdp-process-card ${idx % 2 === 0 ? 'sdp-card-left' : 'sdp-card-right'}`}
                                data-aos={idx % 2 === 0 ? 'fade-right' : 'fade-left'}
                                data-aos-delay={idx * 150}
                            >
                                <div className="sdp-process-dot">
                                    <span>{step.step}</span>
                                </div>
                                <div className="sdp-process-card-body">
                                    <h3>{step.title}</h3>
                                    <p>{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA — immersive gradient section */}
            <section className="sdp-cta">
                <div className="sdp-cta-glow"></div>
                <div className="container">
                    <div className="sdp-cta-content" data-aos="fade-up">
                        <h2>{service.cta}</h2>
                        <p>Agenda una llamada de diagnóstico gratuita. Analizamos tu situación y te decimos honestamente cómo podemos ayudarte.</p>
                        <Link href="/contacto" className="sdp-cta-btn">
                            <span>Agendar diagnóstico gratis</span>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Link>
                        <span className="sdp-cta-note">Sin compromiso. Sin presión. Solo respuestas honestas.</span>
                    </div>
                </div>
            </section>

            {/* Explore Other Services */}
            <section className="sdp-explore">
                <div className="container">
                    <div className="sdp-section-header" data-aos="fade-up">
                        <span className="sdp-section-tag">Ecosistema</span>
                        <h2>Explora más <span className="sdp-accent">soluciones</span></h2>
                    </div>
                    <div className="sdp-explore-grid">
                        {otherServices.map((s, idx) => (
                            <Link
                                key={s.slug}
                                href={`/servicios/${s.slug}`}
                                className="sdp-explore-card"
                                data-aos="fade-up"
                                data-aos-delay={idx * 100}
                                style={{ '--card-accent': s.accent } as React.CSSProperties}
                            >
                                <span className="sdp-explore-dot" style={{ background: s.accent }}></span>
                                <div>
                                    <h4>{s.title}</h4>
                                    <p>{s.subtitle}</p>
                                </div>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServiceDetailPage;
