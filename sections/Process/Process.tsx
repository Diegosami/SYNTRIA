'use client';
import './Process.css';

const Process: React.FC = () => {
    const steps = [
        {
            number: '01',
            title: 'Te escuchamos',
            description: 'Antes de proponer soluciones, queremos entender tu negocio, tus retos y tus metas.',
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="11" cy="11" r="8" />
                    <path d="M21 21l-4.35-4.35" />
                </svg>
            )
        },
        {
            number: '02',
            title: 'Diseñamos juntos',
            description: 'Te mostramos el plan paso a paso. Sin sorpresas, sin letra pequeña.',
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
            )
        },
        {
            number: '03',
            title: 'Construimos y lanzamos',
            description: 'Nos encargamos de la ejecución técnica. Tú solo apruebas y observas.',
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M23 6l-9.5 9.5-5-5L1 18" />
                    <path d="M17 6h6v6" />
                </svg>
            )
        }
    ];

    return (
        <section className="process section-lg">
            <div className="container">
                <div className="process-header" data-aos="fade-up">
                    <span className="badge badge-accent">Tu Camino con Nosotros</span>
                    <h2>
                        Te guiamos
                        <br />
                        <span className="text-accent">en cada paso</span>
                    </h2>
                </div>

                <div className="process-steps">
                    {steps.map((step, index) => (
                        <div key={index} className="process-step" data-aos="fade-up" data-aos-delay={index * 150}>
                            <div className="step-icon">{step.icon}</div>
                            <div className="step-number">{step.number}</div>
                            <h3 className="step-title">{step.title}</h3>
                            <p className="step-description">{step.description}</p>
                            {index < steps.length - 1 && <div className="step-connector"></div>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
