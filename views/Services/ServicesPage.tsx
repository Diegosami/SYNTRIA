'use client';
import Link from 'next/link';

import './ServicesPage.css';

// ========================================
// ECOSYSTEM PILLAR COMPONENT
// ========================================
interface EcosystemPillarProps {
    icon: React.ReactNode;
    title: string;
    subtitle: string;
    description: string;
    accent: string;
    slug: string;
}

const EcosystemPillar: React.FC<EcosystemPillarProps> = ({ icon, title, subtitle, description, accent, slug }) => (
    <Link href={`/servicios/${slug}`} className="ecosystem-pillar" style={{ '--pillar-accent': accent } as React.CSSProperties}>
        <div className="pillar-icon">{icon}</div>
        <h3>{title}</h3>
        <span className="pillar-subtitle">{subtitle}</span>
        <p>{description}</p>
        <span className="pillar-arrow">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
        </span>
    </Link>
);

// ========================================
// GROWTH STORY SECTION
// ========================================
const GrowthStory: React.FC = () => (
    <section className="growth-story">
        <div className="container">
            <div className="story-content">
                <div className="story-text">
                    <span className="story-badge">Nuestra historia</span>
                    <h2>Nacimos de una <span className="accent-text">frustración real</span></h2>
                    <p className="story-lead">
                        Vimos a demasiados emprendedores corriendo en círculos: una agencia para el sitio web,
                        otra para los ads, otra para el CRM, un freelancer para los videos... y nada se conectaba.
                    </p>
                    <p>
                        Perdían tiempo, dinero y energía coordinando proveedores que no se hablaban entre sí.
                        El desarrollador no entendía la estrategia de marketing. El diseñador no sabía qué
                        necesitaba el equipo de ventas. El resultado: soluciones fragmentadas que no generaban
                        el crecimiento que prometían.
                    </p>
                    <p>
                        <strong>Syntria nació para acabar con eso.</strong>
                    </p>
                    <p>
                        Somos un ecosistema completo donde tecnología, diseño, marketing y ventas trabajan juntos
                        desde el día uno. Un solo equipo. Una sola visión. Un solo objetivo: hacer crecer tu negocio.
                    </p>
                </div>
                <div className="story-visual">
                    <div className="ecosystem-diagram">
                        <div className="center-hub">
                            <span>Tu Negocio</span>
                        </div>
                        <div className="orbit-item orbit-1">Tech</div>
                        <div className="orbit-item orbit-2">Diseño</div>
                        <div className="orbit-item orbit-3">Marketing</div>
                        <div className="orbit-item orbit-4">Ventas</div>
                        <div className="orbit-item orbit-5">Contenido</div>
                        <div className="orbit-item orbit-6">IA</div>
                        <div className="orbit-ring"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

// ========================================
// HOW WE GROW BUSINESSES SECTION
// ========================================
const GrowthApproach: React.FC = () => {
    const approaches = [
        {
            number: '01',
            title: 'Entendemos tu negocio, no solo tu proyecto',
            description: 'Antes de escribir código o diseñar logos, estudiamos tu mercado, tu competencia, tus clientes y tus números. Porque un sitio web bonito no sirve si nadie lo encuentra.',
            accent: '#55FF4B'
        },
        {
            number: '02',
            title: 'Diseñamos el sistema completo',
            description: 'No pensamos en "el sitio web" o "la campaña de ads" de forma aislada. Pensamos en cómo cada pieza conecta con las demás para crear una máquina de crecimiento.',
            accent: '#8B5CF6'
        },
        {
            number: '03',
            title: 'Construimos y lanzamos rápido',
            description: 'No pasamos meses en planificación infinita. Lanzamos versiones funcionales, medimos resultados reales y mejoramos sobre la marcha.',
            accent: '#F59E0B'
        },
        {
            number: '04',
            title: 'Optimizamos basados en datos',
            description: 'Cada decisión se respalda con números. Si algo no funciona, lo cortamos. Si algo funciona, duplicamos la apuesta. Sin egos, sin "a mí me gusta así".',
            accent: '#3B82F6'
        }
    ];

    return (
        <section className="growth-approach">
            <div className="container">
                <div className="approach-header">
                    <span className="approach-badge">Cómo trabajamos</span>
                    <h2>Growth no es un departamento,<br />es <span className="accent-text">nuestra mentalidad</span></h2>
                    <p>
                        Cada proyecto que tomamos tiene un objetivo claro: hacer crecer tu negocio.
                        No medimos éxito en entregables, lo medimos en resultados.
                    </p>
                </div>
                <div className="approach-grid">
                    {approaches.map((item, idx) => (
                        <div key={idx} className="approach-item" style={{ '--item-accent': item.accent } as React.CSSProperties}>
                            <span className="approach-number">{item.number}</span>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// ========================================
// ECOSYSTEM CAPABILITIES
// ========================================
const EcosystemCapabilities: React.FC = () => {
    const capabilities = [
        {
            category: 'Presencia Digital',
            description: 'Todo lo que necesitas para existir online de forma profesional',
            items: ['Sitios web y landing pages', 'Apps móviles y web apps', 'E-commerce y tiendas online', 'Plataformas y dashboards']
        },
        {
            category: 'Inteligencia y Automatización',
            description: 'Sistemas que trabajan por ti mientras duermes',
            items: ['Chatbots y asistentes IA', 'Automatización de procesos', 'Integraciones entre sistemas', 'Análisis predictivo']
        },
        {
            category: 'Marca y Contenido',
            description: 'La imagen y la voz que te hace memorable',
            items: ['Identidad de marca', 'Diseño UI/UX', 'Producción de video', 'Fotografía y motion graphics']
        },
        {
            category: 'Adquisición y Ventas',
            description: 'Convertir desconocidos en clientes leales',
            items: ['Campañas de ads (Meta, Google)', 'SEO y contenido', 'CRM y pipelines de venta', 'Email marketing y nurturing']
        }
    ];

    return (
        <section className="ecosystem-capabilities">
            <div className="container">
                <div className="capabilities-header">
                    <span className="capabilities-badge">El ecosistema</span>
                    <h2>Todo lo que necesitas para crecer,<br /><span className="accent-text">en un solo lugar</span></h2>
                    <p>
                        No tienes que coordinar 5 proveedores diferentes. Nosotros conectamos cada pieza
                        para que funcionen como una sola máquina.
                    </p>
                </div>
                <div className="capabilities-grid">
                    {capabilities.map((cap, idx) => (
                        <div key={idx} className="capability-card">
                            <h3>{cap.category}</h3>
                            <p className="capability-desc">{cap.description}</p>
                            <ul>
                                {cap.items.map((item, i) => (
                                    <li key={i}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M20 6L9 17l-5-5" />
                                        </svg>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// ========================================
// THE DIFFERENCE SECTION
// ========================================
const TheDifference: React.FC = () => (
    <section className="the-difference">
        <div className="container">
            <div className="difference-content">
                <div className="difference-header">
                    <span className="difference-badge">La diferencia</span>
                    <h2>No somos una agencia.<br />Somos <span className="accent-text">tu equipo de crecimiento</span></h2>
                </div>
                <div className="comparison-grid">
                    <div className="comparison-column old">
                        <h3>La forma tradicional</h3>
                        <ul>
                            <li>Múltiples proveedores sin conexión</li>
                            <li>Tú coordinas todo</li>
                            <li>Cada quien optimiza "su parte"</li>
                            <li>Cobran por hora o por entregable</li>
                            <li>El éxito se mide en "se ve bonito"</li>
                            <li>Proyectos que terminan y se olvidan</li>
                        </ul>
                    </div>
                    <div className="comparison-column new">
                        <h3>La forma Syntria</h3>
                        <ul>
                            <li>Un ecosistema integrado</li>
                            <li>Nosotros coordinamos todo</li>
                            <li>Todos optimizamos el crecimiento</li>
                            <li>Cobramos por resultados</li>
                            <li>El éxito se mide en ventas y métricas</li>
                            <li>Acompañamiento continuo</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

// ========================================
// CLIENT JOURNEY
// ========================================
const ClientJourney: React.FC = () => (
    <section className="client-journey">
        <div className="container">
            <div className="journey-header">
                <span className="journey-badge">Tu camino con nosotros</span>
                <h2>De la idea al crecimiento sostenible</h2>
                <p>Un proceso claro, sin sorpresas, con resultados en cada etapa.</p>
            </div>
            <div className="journey-steps">
                <div className="journey-step">
                    <div className="step-marker"><span>1</span></div>
                    <div className="step-content">
                        <h3>Diagnóstico gratuito</h3>
                        <p>
                            Analizamos tu situación actual: ¿Dónde estás? ¿Qué funciona? ¿Qué no?
                            ¿Cuáles son las oportunidades de crecimiento más rápidas?
                        </p>
                        <span className="step-time">30-60 minutos</span>
                    </div>
                </div>
                <div className="journey-step">
                    <div className="step-marker"><span>2</span></div>
                    <div className="step-content">
                        <h3>Propuesta de crecimiento</h3>
                        <p>
                            Te presentamos un plan concreto: qué construir, en qué orden, cuánto cuesta
                            y qué resultados esperamos. Sin letra pequeña.
                        </p>
                        <span className="step-time">1 semana</span>
                    </div>
                </div>
                <div className="journey-step">
                    <div className="step-marker"><span>3</span></div>
                    <div className="step-content">
                        <h3>Ejecución por sprints</h3>
                        <p>
                            Trabajamos en ciclos de 2 semanas. Cada sprint entrega algo funcional que puedes
                            ver, usar y medir. Ajustamos sobre la marcha.
                        </p>
                        <span className="step-time">4-12 semanas</span>
                    </div>
                </div>
                <div className="journey-step">
                    <div className="step-marker"><span>4</span></div>
                    <div className="step-content">
                        <h3>Optimización continua</h3>
                        <p>
                            No desaparecemos después del lanzamiento. Analizamos datos, identificamos
                            oportunidades y seguimos mejorando tu sistema de crecimiento.
                        </p>
                        <span className="step-time">Continuo</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

// ========================================
// MAIN PAGE COMPONENT
// ========================================
const ServicesPage: React.FC = () => {
    const pillars: EcosystemPillarProps[] = [
        {
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
            ),
            title: 'Tecnología',
            subtitle: 'Software a tu medida',
            description: 'Apps web, móviles, APIs, e-commerce y plataformas cloud — construidos con React, Python y las mejores herramientas del mercado.',
            accent: '#55FF4B',
            slug: 'tecnologia'
        },
        {
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 19l7-7 3 3-7 7-3-3z" />
                    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                    <circle cx="11" cy="11" r="2" />
                </svg>
            ),
            title: 'Diseño',
            subtitle: 'Marcas que conectan',
            description: 'Identidades visuales que transmiten confianza y profesionalismo.',
            accent: '#F59E0B',
            slug: 'diseno'
        },
        {
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 11l18-5v12L3 13v-2z" />
                    <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
                </svg>
            ),
            title: 'Marketing',
            subtitle: 'Clientes que llegan',
            description: 'Estrategias de adquisición que traen clientes reales, no vanidad.',
            accent: '#EC4899',
            slug: 'marketing'
        },
        {
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <line x1="12" y1="1" x2="12" y2="23" />
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
            ),
            title: 'Ventas',
            subtitle: 'Negocios que cierran',
            description: 'Procesos y herramientas para convertir leads en clientes.',
            accent: '#14B8A6',
            slug: 'ventas'
        },
        {
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <polygon points="23 7 16 12 23 17 23 7" />
                    <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                </svg>
            ),
            title: 'Contenido',
            subtitle: 'Historias que venden',
            description: 'Videos, fotos y piezas que capturan atención y generan acción.',
            accent: '#EF4444',
            slug: 'contenido'
        },
        {
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2a4 4 0 0 1 4 4v1a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4z" />
                    <path d="M9 12h6" />
                    <path d="M12 12v4" />
                    <circle cx="7" cy="19" r="2" />
                    <circle cx="17" cy="19" r="2" />
                    <path d="M7 17v-3a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3" />
                </svg>
            ),
            title: 'Inteligencia Artificial',
            subtitle: 'IA que resuelve problemas reales',
            description: 'Machine Learning, Deep Learning y Computer Vision entrenados con tus datos para resolver problemas específicos de tu negocio.',
            accent: '#8A2BE2',
            slug: 'ia'
        }
    ];

    return (
        <div className="services-page">

            {/* Hero */}
            <section className="sp-hero">
                <div className="sp-hero-bg"></div>
                <div className="container">
                    <div className="sp-hero-content">
                        <span className="sp-label">Growth Partner</span>
                        <h1>
                            Tu negocio merece
                            <br />
                            <span className="accent-text">crecer en serio</span>
                        </h1>
                        <p>
                            No somos otra agencia que te entrega archivos y desaparece. Somos el ecosistema
                            completo que tu negocio necesita: tecnología, diseño, marketing, ventas y contenido
                            trabajando juntos con un solo objetivo: <strong>tu crecimiento</strong>.
                        </p>
                    </div>
                </div>
            </section>

            {/* Ecosystem Pillars */}
            <section className="ecosystem-section">
                <div className="container">
                    <div className="pillars-grid">
                        {pillars.map((pillar, idx) => (
                            <div key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
                                <EcosystemPillar {...pillar} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Growth Story */}
            <GrowthStory />

            {/* Growth Approach */}
            <GrowthApproach />

            {/* Ecosystem Capabilities */}
            <EcosystemCapabilities />

            {/* The Difference */}
            <TheDifference />

            {/* Client Journey */}
            <ClientJourney />

            {/* CTA */}
            <section className="sp-cta">
                <div className="container">
                    <div className="cta-content">
                        <h2>¿Listo para dejar de parchar y empezar a crecer?</h2>
                        <p>
                            Agenda una llamada de diagnóstico gratuita. Analizamos tu situación,
                            identificamos oportunidades y te decimos honestamente si podemos ayudarte.
                        </p>
                        <Link href="/contacto" className="btn btn-primary btn-lg">
                            Agendar diagnóstico gratis
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Link>
                        <span className="cta-note">Sin compromiso. Sin presión. Solo una conversación honesta.</span>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServicesPage;
