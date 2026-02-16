'use client';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import AOS from 'aos';
import Spotlight from '../../components/ui/Spotlight';
import FlipWords from '../../components/ui/FlipWords';
import TextGenerateEffect from '../../components/ui/TextGenerateEffect';
import 'aos/dist/aos.css';
import './Hero.css';

const Hero: React.FC = () => {
    const { t } = useTranslation();

    // Fallback for flip words if translation array is not yet set up, 
    // though ideally we should add these to es.json/en.json.
    // For now, using hardcoded array or t() if returns array.
    // i18next default return for array is object unless configured, so simple array is safer hardcoded or split string.
    // Let's use the original array for now to ensure it works, we can map it later.
    const flipWords = ["Acelerado", "Sostenible", "Estratégico", "Diferenciador"];

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: 'ease-out-cubic'
        });
    }, []);

    return (
        <section className="hero" id="hero">
            {/* Spotlight Effect */}
            <Spotlight className="z-10" fill="#55FF4B" />

            {/* Background */}
            <div className="hero-bg">
                <div className="hero-gradient"></div>
            </div>

            <div className="hero-container">
                <div className="hero-content">
                    {/* Main Title */}
                    <h1 className="hero-title" data-aos="fade-up" data-aos-delay="100">
                        <span className="title-row">
                            <span className="title-word">{t('hero.title_part1', 'Tu')}</span>
                            <span className="title-word title-outline">{t('hero.title_part2', 'Socio')}</span>
                            <span className="title-word">{t('hero.title_part3', 'de')}</span>
                        </span>
                        <span className="title-row">
                            <span className="title-word">{t('hero.title_part4', 'Crecimiento')}</span>
                            <span className="title-accent-word">
                                <span className="accent-bg"></span>
                                <FlipWords words={flipWords} duration={3000} className="text-inherit" />
                            </span>
                        </span>
                    </h1>

                    <div data-aos="fade-up" data-aos-delay="200">
                        <TextGenerateEffect
                            words={t('hero.description')}
                            className="hero-description"
                            duration={0.5}
                            filter={false}
                        />
                    </div>

                    <div className="hero-actions" data-aos="fade-up" data-aos-delay="300">
                        <Link href="/contacto" className="btn btn-primary btn-lg icon-hover-effect">
                            {t('hero.cta_main', 'Solicitar Auditoría de Viabilidad')}
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Link>
                        <Link href="/contacto" className="btn btn-ghost btn-lg">
                            {t('hero.cta_secondary', 'Hablemos')}
                        </Link>
                    </div>
                </div>

                <div className="hero-visual" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
                    <div className="visual-wrapper">
                        <img
                            src="/images/hero-visual.png"
                            alt="Equipo Syntria"
                            className="hero-image"
                            loading="lazy"
                        />
                        <div className="visual-glow"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Hero;
