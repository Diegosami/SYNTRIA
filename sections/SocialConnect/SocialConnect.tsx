'use client';
import SocialCard from '../../components/SocialCard';
import './SocialConnect.css';

const SocialConnect: React.FC = () => {
    return (
        <section className="social-connect section-lg">
            <div className="container">
                <div className="social-connect-content" data-aos="fade-up">
                    <div className="social-text">
                        <span className="badge badge-accent">Síguenos</span>
                        <h2 className="social-title">
                            Conecta con
                            <br />
                            <span className="text-accent">Nosotros</span>
                        </h2>
                        <p className="social-description">
                            Mantente al día con nuestros proyectos, tips de tecnología
                            y contenido exclusivo en nuestras redes sociales.
                        </p>
                    </div>
                    <div className="social-card-wrapper" data-aos="fade-left" data-aos-delay="200">
                        <SocialCard
                            socialLinks={{
                                instagram: 'https://instagram.com/syntria.group',
                                whatsapp: 'https://wa.me/573239454873'
                            }}
                        />
                        <p className="hover-hint">Hover para ver redes →</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocialConnect;
