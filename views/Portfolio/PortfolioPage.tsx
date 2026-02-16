'use client';
import Link from 'next/link';
import { projects } from '../../data/projects';
import './PortfolioPage.css';

const PortfolioPage: React.FC = () => {
    return (
        <main className="portfolio-page">
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
                                    <img src={project.thumbnail} alt={project.title} loading="lazy" />
                                    <div className="pp-project-overlay">
                                        <Link
                                            href={`/portfolio/${project.slug}`}
                                            className="pp-visit-btn"
                                        >
                                            Ver caso completo
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M5 12h14M12 5l7 7-7 7" />
                                            </svg>
                                        </Link>
                                    </div>
                                    <div className="pp-project-tags">
                                        {project.tags.slice(0, 2).map((tag, i) => (
                                            <span key={i} className="pp-tag">{tag}</span>
                                        ))}
                                    </div>
                                </div>

                                <div className="pp-project-content">
                                    <span className="pp-category">{project.industry}</span>
                                    <h2>{project.title}</h2>
                                    <p className="pp-description">{project.tagline}</p>

                                    <div className="pp-details">
                                        <div className="pp-detail-section">
                                            <h4>El Reto</h4>
                                            <p>{project.challenge.split('\n')[0]}</p>
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
                                                        <strong>{result.metric}</strong> {result.description}
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
