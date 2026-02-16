'use client';
import './Team.css';

const Team: React.FC = () => {
    return (
        <section id="equipo" className="team section-lg">
            <div className="container">
                <div className="team-content">
                    <div className="team-image-wrapper" data-aos="fade-right">
                        <img
                            src="/images/team/team.png"
                            alt="Equipo Syntria colaborando"
                            className="team-image"
                            loading="lazy"
                        />
                        <div className="team-image-accent"></div>
                    </div>

                    <div className="team-text" data-aos="fade-left" data-aos-delay="200">
                        <span className="badge badge-accent">Quiénes somos</span>
                        <h2 className="team-title">
                            Personas reales,
                            <br />
                            <span className="text-accent">resultados reales</span>
                        </h2>
                        <p className="team-description">
                            Sabemos que confiar en un equipo nuevo no es fácil. Por eso trabajamos hombro a hombro contigo,
                            explicándote cada decisión y asegurándonos de que entiendas el proceso completo.
                        </p>

                        <div className="team-values">
                            <div className="value-item">
                                <span className="value-number">01</span>
                                <div className="value-content">
                                    <h4>Te escuchamos primero</h4>
                                    <p>No asumimos nada. Entendemos tu negocio antes de proponer soluciones.</p>
                                </div>
                            </div>
                            <div className="value-item">
                                <span className="value-number">02</span>
                                <div className="value-content">
                                    <h4>Sin sorpresas</h4>
                                    <p>Te explicamos todo en palabras simples. Nada de jerga técnica innecesaria.</p>
                                </div>
                            </div>
                            <div className="value-item">
                                <span className="value-number">03</span>
                                <div className="value-content">
                                    <h4>Contigo después del lanzamiento</h4>
                                    <p>No desaparecemos. Seguimos a tu lado optimizando y mejorando.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;
