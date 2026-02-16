'use client';
import Link from 'next/link';
import { projects } from '../../data/projects';
import './Portfolio.css';

// Portfolio Card Component
const PortfolioCard: React.FC<{
    project: typeof projects[0];
}> = ({ project }) => (
    <Link href={`/portafolio/${project.slug}`} className="portfolio-card-link">
        <article className={`portfolio-card ${project.featured ? 'portfolio-card-featured' : ''}`}>
            <div className="portfolio-media">
                <img src={project.thumbnail} alt={project.client} className="portfolio-img" loading="lazy" />
                {project.video && (
                    <div className="play-overlay">
                        <div className="play-button">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                                <polygon points="5 3 19 12 5 21 5 3" />
                            </svg>
                        </div>
                    </div>
                )}
                <div className="portfolio-tags-floating">
                    {project.tags.slice(0, 2).map((tag, index) => (
                        <span key={index} className="tag-pill">{tag}</span>
                    ))}
                </div>
                <div className="view-case-overlay">
                    <span className="view-case-btn">
                        Ver caso de estudio
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </span>
                </div>
            </div>
            <div className="portfolio-content">
                <span className="portfolio-client">{project.client}</span>
                <h3 className="portfolio-title">{project.title}</h3>
                <p className="portfolio-description">{project.tagline}</p>
                <div className="portfolio-results-preview">
                    {project.results.slice(0, 2).map((result, idx) => (
                        <span key={idx} className="result-item">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M20 6L9 17l-5-5" />
                            </svg>
                            {result.metric} {result.description}
                        </span>
                    ))}
                </div>
                <div className="portfolio-duration">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 6v6l4 2" />
                    </svg>
                    {project.duration}
                </div>
            </div>
        </article>
    </Link>
);

// Main Portfolio Component
const Portfolio: React.FC = () => {
    return (
        <section id="portafolio" className="portfolio section-lg">
            <div className="container">
                <div className="portfolio-header" data-aos="fade-up">
                    <div className="portfolio-label">
                        <span className="label-number">02</span>
                        <span className="label-text">Nuestro trabajo</span>
                    </div>
                    <div className="portfolio-header-content">
                        <h2 className="portfolio-heading">
                            Resultados reales<span className="heading-dot">.</span>
                            <br />
                            <span className="heading-accent">No promesas vacías</span>
                        </h2>
                        <p className="portfolio-subheading">
                            Haz clic en cualquier proyecto para ver el caso completo:
                            reto, solución, entregables y tiempos de entrega.
                        </p>
                    </div>
                </div>

                <div className="portfolio-grid">
                    {projects.map((project, index) => {
                        // Rotating accent colors: Green, Purple, Orange
                        const accents = ['#55FF4B', '#8B5CF6', '#F59E0B'];
                        const accent = accents[index % accents.length];

                        return (
                            <div
                                key={project.id}
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                                style={{ '--card-accent': accent } as React.CSSProperties}
                            >
                                <PortfolioCard project={project} />
                            </div>
                        );
                    })}
                </div>

                <div className="portfolio-cta-row" data-aos="fade-up">
                    <p>¿Quieres que tu proyecto sea el próximo caso de éxito?</p>
                    <Link href="/contacto" className="btn btn-primary">
                        Agendar llamada
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
