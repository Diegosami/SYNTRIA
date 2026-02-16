'use client';
import NumberTicker from '../../components/ui/NumberTicker';
import './WhySyntria.css';

interface MethodologyCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const MethodologyCard: React.FC<MethodologyCardProps> = ({ icon, title, description }) => (
    <div className="methodology-card">
        <div className="methodology-icon">{icon}</div>
        <h3 className="methodology-title">{title}</h3>
        <p className="methodology-description">{description}</p>
    </div>
);

const WhySyntria: React.FC = () => {
    const methodologies: MethodologyCardProps[] = [
        {
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    <path d="M2 12h20" />
                </svg>
            ),
            title: 'Visión 360°',
            description: 'Código + Diseño + Ventas. Una perspectiva integral que conecta tecnología con resultados de negocio.'
        },
        {
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
            ),
            title: 'Velocidad',
            description: 'Infraestructura moderna con React, Python y arquitecturas cloud que aceleran tu time-to-market.'
        },
        {
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
            ),
            title: 'Socios, no Proveedores',
            description: 'Acompañamiento estratégico continuo. No solo entregamos proyectos, construimos relaciones a largo plazo.'
        }
    ];

    return (
        <section id="nosotros" className="why-syntria section-lg">
            <div className="container">
                <div className="why-syntria-header" data-aos="fade-up">
                    <span className="badge badge-accent">¿Por qué Syntria?</span>
                    <h2 className="why-syntria-title">
                        Somos tu equipo,
                        <br />
                        <span className="text-accent">no solo un proveedor</span>
                    </h2>
                    <p className="why-syntria-description">
                        Entendemos la frustración de trabajar con agencias que no comprenden tu negocio.
                        Por eso nos convertimos en una extensión de tu equipo, hablando tu idioma: resultados.
                    </p>
                </div>

                <div className="methodology-grid">
                    {methodologies.map((item, index) => (
                        <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                            <MethodologyCard {...item} />
                        </div>
                    ))}
                </div>

                {/* Stats Section - Animated */}
                <div className="stats-grid" data-aos="fade-up">
                    <div className="stat-item">
                        <span className="stat-number">
                            <NumberTicker value={50} suffix="+" delay={0.2} />
                        </span>
                        <span className="stat-label">Proyectos Entregados</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">
                            <NumberTicker value={98} suffix="%" delay={0.4} />
                        </span>
                        <span className="stat-label">Clientes Satisfechos</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">
                            <NumberTicker value={1000} suffix="+" delay={0.6} />
                        </span>
                        <span className="stat-label">Chats Automatizados</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number stat-number-static">24/7</span>
                        <span className="stat-label">Soporte Técnico</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhySyntria;
