'use client';
import MovingBorder from '../../components/ui/MovingBorder';
import './Services.css';

interface ServiceCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    features: string[];
    accent: string;
}

const Services: React.FC = () => {
    const services: ServiceCardProps[] = [
        {
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
            ),
            title: 'Software a Medida',
            description: 'No usamos plantillas. Diseñamos y desarrollamos cada línea de código pensando en tu negocio específico.',
            features: ['100% Personalizado', 'Código Propio', 'Escalable', 'Documentado'],
            accent: '#55FF4B'
        },
        {
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4" />
                </svg>
            ),
            title: 'Automatización con IA',
            description: 'Implementamos soluciones inteligentes que funcionan. Sin promesas vacías, solo resultados medibles.',
            features: ['Chatbots Avanzados', 'Procesos Automáticos', 'Machine Learning', 'Integración Total'],
            accent: '#8B5CF6'
        },
        {
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 19l7-7 3 3-7 7-3-3z" />
                    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                    <circle cx="11" cy="11" r="2" />
                </svg>
            ),
            title: 'Diseño Profesional',
            description: 'Cada pixel cuenta. Creamos identidades visuales que reflejan la seriedad y calidad de tu empresa.',
            features: ['Identidad de Marca', 'UX/UI Premium', 'Diseño Web', 'Material Corporativo'],
            accent: '#F59E0B'
        },
        {
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M9 12l2 2 4-4" />
                    <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
                </svg>
            ),
            title: 'Calidad Garantizada',
            description: 'Trabajamos con metodologías probadas y estándares profesionales. Tu proyecto está en buenas manos.',
            features: ['Testing Riguroso', 'Mejores Prácticas', 'Soporte Continuo', 'Entrega Puntual'],
            accent: '#3B82F6'
        }
    ];

    return (
        <section id="servicios" className="services section-lg">
            <div className="container">
                <div className="services-header" data-aos="fade-up">
                    <span className="services-badge">Nuestros Productos</span>
                    <h2 className="services-title">
                        Todo <span className="text-accent">a tu medida</span>
                    </h2>
                    <p className="services-subtitle">
                        No vendemos soluciones genéricas. Cada proyecto es único y lo tratamos con la dedicación profesional que merece.
                    </p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} data-aos="fade-up" data-aos-delay={index * 100} className="h-full">
                            <MovingBorder
                                duration={3000 + (index * 500)} // Variable duration for organic feel
                                containerClassName="h-full bg-white dark:bg-slate-900 border-none"
                                className="bg-white p-0"
                            >
                                <div className="service-card h-full border-none shadow-none" style={{ '--card-accent': service.accent } as React.CSSProperties}>
                                    <div className="service-card-inner">
                                        <div className="service-icon">{service.icon}</div>
                                        <h3 className="service-title">{service.title}</h3>
                                        <p className="service-description">{service.description}</p>
                                        <ul className="service-features">
                                            {service.features.map((feature, idx) => (
                                                <li key={idx}>
                                                    <span className="feature-bullet"></span>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </MovingBorder>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
