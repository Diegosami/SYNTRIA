'use client';
import Link from 'next/link';
import SEO from '../../components/SEO/SEO';
import './PortfolioPage.css';

interface ProjectProps {
    id: string;
    title: string;
    client: string;
    category: string;
    description: string;
    challenge: string;
    solution: string;
    results: string[];
    image: string;
    video?: string;
    tags: string[];
    link?: string;
    featured?: boolean;
}

const PortfolioPage: React.FC = () => {
    const projects: ProjectProps[] = [
        {
            id: 'awake',
            title: 'Awake Coffee',
            client: 'Awake The Soul',
            category: 'E-commerce',
            description: 'Specialty coffee colombiano que transforma tu rutina matutina en un ritual de bienestar.',
            challenge: 'El cliente necesitaba lanzar una tienda online de café specialty enfocada en el mercado estadounidense, con una identidad premium y un proceso de compra optimizado.',
            solution: 'Desarrollamos un e-commerce headless con Next.js y Shopify, con diseño de marca completo y experiencia de usuario optimizada para móvil.',
            results: [
                'Tienda lanzada en 3 semanas',
                'Ventas activas a USA desde el día 1',
                '+200 pedidos en el primer mes',
                '4.9★ rating en satisfacción'
            ],
            image: '/images/portfolio/awake.png',
            tags: ['E-commerce', 'Headless Commerce', 'Branding', 'Next.js'],
            link: 'https://awakethesoul.coffee',
            featured: true
        },
        {
            id: 'best4u',
            title: 'Best4U',
            client: 'Best4U Colombia',
            category: 'E-commerce',
            description: 'Plataforma e-commerce con experiencia optimizada para móvil en el sector retail.',
            challenge: 'La tienda existente tenía una tasa de abandono del 70% en móvil y tiempos de carga lentos.',
            solution: 'Rediseño completo de UX/UI enfocado en mobile-first, optimización de performance y flujo de checkout simplificado.',
            results: [
                '+40% conversión móvil',
                '-50% tiempo de carga',
                '+25% ticket promedio',
                'Bounce rate reducido a 35%'
            ],
            image: '/images/portfolio/best4u.png',
            tags: ['UX/UI', 'Desarrollo Web', 'Optimización'],
            link: 'https://best4u.com.co'
        },
        {
            id: 'botzi',
            title: 'Botzi',
            client: 'Syntria (Producto Interno)',
            category: 'SaaS / IA',
            description: 'Agentes de IA para WhatsApp. Responde como tú, vende mientras duermes.',
            challenge: 'Vimos que nuestros clientes perdían ventas por no poder atender WhatsApp 24/7. No existía una solución simple que realmente "hablara" como ellos.',
            solution: 'Desarrollamos Botzi: agentes de IA entrenados con la información específica de cada negocio, integrados a CRMs y con escalamiento inteligente a humanos.',
            results: [
                '+50 clientes activos',
                '+1000 conversaciones automatizadas/día',
                '95% satisfacción de usuarios',
                'Integración con +10 CRMs'
            ],
            image: '/images/portfolio/botzi.png',
            tags: ['SaaS', 'IA', 'WhatsApp API', 'Python'],
            link: 'https://botzi.co'
        }
    ];

    return (
        <main className="portfolio-page">
            <SEO
                title="Portafolio"
                description="Casos de éxito reales: conoce los proyectos que hemos construido y los resultados que hemos logrado para nuestros clientes."
                path="/portafolio"
            />
            {/* Hero */}
            <section className="pp-hero">
                <div className="container">
                    <div className="pp-hero-content">
                        <span className="pp-label">Nuestro Trabajo</span>
                        <h1>
                            Proyectos que hablan
                            <br />
                            <span className="accent-text">por sí solos</span>
                        </h1>
                        <p>
                            Cada proyecto es una historia de colaboración. Aquí mostramos cómo ayudamos
                            a negocios reales a resolver problemas reales.
                        </p>
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="pp-projects">
                <div className="container">
                    <div className="pp-projects-grid">
                        {projects.map((project) => (
                            <article
                                key={project.id}
                                className={`pp-project-card ${project.featured ? 'pp-featured' : ''}`}
                            >
                                <div className="pp-project-image">
                                    <img src={project.image} alt={project.title} loading="lazy" />
                                    <div className="pp-project-overlay">
                                        {project.link && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="pp-visit-btn"
                                            >
                                                Visitar Proyecto
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                                                </svg>
                                            </a>
                                        )}
                                    </div>
                                    <div className="pp-project-tags">
                                        {project.tags.slice(0, 2).map((tag, i) => (
                                            <span key={i} className="pp-tag">{tag}</span>
                                        ))}
                                    </div>
                                </div>

                                <div className="pp-project-content">
                                    <span className="pp-category">{project.category}</span>
                                    <h2>{project.title}</h2>
                                    <p className="pp-description">{project.description}</p>

                                    <div className="pp-details">
                                        <div className="pp-detail-section">
                                            <h4>El Reto</h4>
                                            <p>{project.challenge}</p>
                                        </div>
                                        <div className="pp-detail-section">
                                            <h4>La Solución</h4>
                                            <p>{project.solution}</p>
                                        </div>
                                        <div className="pp-detail-section">
                                            <h4>Resultados</h4>
                                            <ul className="pp-results">
                                                {project.results.map((result, i) => (
                                                    <li key={i}>
                                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                                            <polyline points="22 4 12 14.01 9 11.01" />
                                                        </svg>
                                                        {result}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="pp-cta">
                <div className="container">
                    <div className="pp-cta-content">
                        <h2>¿Listo para ser el próximo caso de éxito?</h2>
                        <p>Cuéntanos tu idea y veamos cómo podemos ayudarte.</p>
                        <Link href="/contacto" className="btn btn-primary btn-lg">
                            Conversemos
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default PortfolioPage;
