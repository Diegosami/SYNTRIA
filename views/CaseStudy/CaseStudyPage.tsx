'use client';
import Link from 'next/link';
import { projects, CaseStudyProject } from '../../data/projects';
import './CaseStudyPage.css';

interface CaseStudyPageProps {
    project: CaseStudyProject;
}

const CaseStudyPage: React.FC<CaseStudyPageProps> = ({ project }) => {
    const slug = project.slug;

    // Siguiente y anterior proyecto para navegación
    const currentIndex = projects.findIndex(p => p.slug === slug);
    const nextProject = projects[currentIndex + 1] || projects[0];
    const prevProject = projects[currentIndex - 1] || projects[projects.length - 1];

    return (
        <div className="case-study-page">

            {/* Hero */}
            <section className="cs-hero">
                <div className="cs-hero-bg">
                    <img src={project.heroImage} alt={project.client} />
                    <div className="cs-hero-overlay"></div>
                </div>
                <div className="container">
                    <div className="cs-hero-content">
                        <Link href="/portafolio" className="cs-back-link">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M19 12H5M12 19l-7-7 7-7" />
                            </svg>
                            Volver al Portfolio
                        </Link>
                        <div className="cs-meta">
                            <span className="cs-client">{project.client}</span>
                            <span className="cs-divider">•</span>
                            <span className="cs-industry">{project.industry}</span>
                            <span className="cs-divider">•</span>
                            <span className="cs-year">{project.year}</span>
                        </div>
                        <h1>{project.title}</h1>
                        <p className="cs-tagline">{project.tagline}</p>
                        <div className="cs-tags">
                            {project.tags.map((tag, idx) => (
                                <span key={idx} className="cs-tag">{tag}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Stats */}
            <section className="cs-stats">
                <div className="container">
                    <div className="stats-grid">
                        {project.results.map((result, idx) => (
                            <div key={idx} className="stat-item">
                                <span className="stat-metric">{result.metric}</span>
                                <span className="stat-desc">{result.description}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Video Section (if exists) */}
            {project.video && (
                <section className="cs-video">
                    <div className="container">
                        <div className={`video-layout ${project.videoFormat === 'vertical' ? 'vertical-layout' : ''}`}>
                            <div className={`video-wrapper ${project.videoFormat === 'vertical' ? 'vertical' : ''}`}>
                                <video controls poster={project.heroImage} loop playsInline>
                                    <source src={project.video} type="video/mp4" />
                                </video>
                            </div>
                            <div className="video-context">
                                <span className="video-label">Producción Audiovisual</span>
                                <h2>Capturando la esencia de la marca</h2>
                                <p>
                                    El video no es solo estético, es estratégico. Creamos una pieza audiovisual
                                    diseñada para detener el scroll y comunicar la propuesta de valor en segundos.
                                </p>
                                <div className="video-features">
                                    {project.tags.filter(t => ['Video', 'Producción', 'Fotografía', 'Dirección'].some(k => t.includes(k))).map((tag, idx) => (
                                        <div key={idx} className="video-feat-item">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M5 13l4 4L19 7" />
                                            </svg>
                                            {tag}
                                        </div>
                                    ))}
                                    <div className="video-feat-item">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M5 13l4 4L19 7" />
                                        </svg>
                                        Formato {project.videoFormat === 'vertical' ? 'Vertical 9:16' : 'Cinemático 16:9'}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Challenge & Solution */}
            <section className="cs-story">
                <div className="container">
                    <div className="story-grid">
                        <div className="story-block">
                            <span className="story-label">El Reto</span>
                            <h2>¿Cuál era el problema?</h2>
                            <div className="story-content">
                                {project.challenge.split('\n\n').map((paragraph, idx) => (
                                    <p key={idx}>{paragraph}</p>
                                ))}
                            </div>
                        </div>
                        <div className="story-block">
                            <span className="story-label">La Solución</span>
                            <h2>¿Cómo lo resolvimos?</h2>
                            <div className="story-content solution-content">
                                {project.solution.split('\n\n').map((paragraph, idx) => (
                                    <p key={idx} dangerouslySetInnerHTML={{
                                        __html: paragraph
                                            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                                    }} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="cs-timeline">
                <div className="container">
                    <div className="timeline-header">
                        <span className="timeline-label">Cronograma</span>
                        <h2>Tiempo de entrega: <span className="accent">{project.duration}</span></h2>
                    </div>
                    <div className="timeline-items">
                        {project.timeline.map((phase, idx) => (
                            <div key={idx} className="timeline-item">
                                <div className="timeline-marker">
                                    <span>{idx + 1}</span>
                                </div>
                                <div className="timeline-content">
                                    <div className="timeline-phase">
                                        <h3>{phase.phase}</h3>
                                        <span className="phase-duration">{phase.duration}</span>
                                    </div>
                                    <p>{phase.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Deliverables */}
            <section className="cs-deliverables">
                <div className="container">
                    <div className="deliverables-header">
                        <span className="deliverables-label">Entregables</span>
                        <h2>¿Qué recibió el cliente?</h2>
                    </div>
                    <div className="deliverables-grid">
                        {project.deliverables.map((item, idx) => (
                            <div key={idx} className="deliverable-card">
                                <div className="deliverable-number">{String(idx + 1).padStart(2, '0')}</div>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Used */}
            <section className="cs-services">
                <div className="container">
                    <div className="services-content">
                        <div className="services-header">
                            <span className="services-label">Servicios utilizados</span>
                            <h2>Lo que pusimos en acción</h2>
                        </div>
                        <div className="services-list">
                            {project.services.map((service, idx) => (
                                <div key={idx} className="service-item">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M20 6L9 17l-5-5" />
                                    </svg>
                                    {service}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonial (if exists) */}
            {project.testimonial && (
                <section className="cs-testimonial">
                    <div className="container">
                        <div className="testimonial-card">
                            <svg className="quote-icon" width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                            </svg>
                            <blockquote>{project.testimonial.quote}</blockquote>
                            <div className="testimonial-author">
                                <span className="author-name">{project.testimonial.author}</span>
                                <span className="author-role">{project.testimonial.role}</span>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Results Highlight */}
            <section className="cs-results">
                <div className="container">
                    <div className="results-header">
                        <span className="results-label">Resultados</span>
                        <h2>Lo que logramos juntos</h2>
                    </div>
                    <div className="results-grid">
                        {project.results.map((result, idx) => (
                            <div key={idx} className="result-card">
                                <span className="result-metric">{result.metric}</span>
                                <span className="result-desc">{result.description}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="cs-cta">
                <div className="container">
                    <div className="cta-content">
                        <h2>¿Quieres resultados similares?</h2>
                        <p>Cuéntanos tu proyecto y veamos cómo podemos ayudarte.</p>
                        <div className="cta-buttons">
                            <Link href="/contacto" className="btn btn-primary btn-lg">
                                Agendar llamada
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                            {project.liveUrl && (
                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-lg">
                                    Ver proyecto live
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                                    </svg>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Navigation */}
            <section className="cs-navigation">
                <div className="container">
                    <div className="nav-grid">
                        <Link href={`/portafolio/${prevProject.slug}`} className="nav-link prev">
                            <span className="nav-label">Proyecto anterior</span>
                            <span className="nav-title">{prevProject.client}</span>
                        </Link>
                        <Link href={`/portafolio/${nextProject.slug}`} className="nav-link next">
                            <span className="nav-label">Siguiente proyecto</span>
                            <span className="nav-title">{nextProject.client}</span>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CaseStudyPage;
