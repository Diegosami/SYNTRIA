
import Hero from '../../sections/Hero';
import AuthorityBar from '../../sections/AuthorityBar';
import Services from '../../sections/Services';
import BotziFeature from '../../sections/BotziFeature';
import Portfolio from '../../sections/Portfolio';
import Testimonials from '../../sections/Testimonials';
import Process from '../../sections/Process';
import Team from '../../sections/Team';
import WhySyntria from '../../sections/WhySyntria';
import Contact from '../../sections/Contact';
import WaveDivider from '../../components/WaveDivider';
import './HomePage.css';

const HomePage: React.FC = () => {
    return (
        <div className="home-page">

            {/* HERO */}
            <Hero />

            {/* AUTORIDAD + SERVICIOS */}
            <AuthorityBar />
            <Services />

            {/* Onda: Blanco → Negro */}
            <WaveDivider color="var(--color-bg-dark)" bgColor="var(--color-bg-primary)" />

            {/* SOLUCIONES - Negro con logo Botzi */}
            <BotziFeature />

            {/* Onda: Negro → Blanco */}
            <WaveDivider color="var(--color-bg-primary)" bgColor="var(--color-bg-dark)" />

            {/* PORTFOLIO */}
            <Portfolio />

            {/* Onda: Blanco → Negro */}
            <WaveDivider color="var(--color-bg-dark)" bgColor="var(--color-bg-primary)" variant="curve" />

            {/* TESTIMONIOS - Negro */}
            <div className="section-dark">
                <Testimonials />
            </div>

            {/* Onda: Negro → Blanco */}
            <WaveDivider color="var(--color-bg-primary)" bgColor="var(--color-bg-dark)" variant="curve" />

            {/* PROCESO */}
            <Process />

            {/* Onda: Blanco → Negro */}
            <WaveDivider color="var(--color-bg-dark)" bgColor="var(--color-bg-primary)" />

            {/* EQUIPO - Negro */}
            <div className="section-dark">
                <Team />
            </div>

            {/* Onda: Negro → Blanco */}
            <WaveDivider color="var(--color-bg-primary)" bgColor="var(--color-bg-dark)" />

            {/* CTA FINAL */}
            <WhySyntria />

            {/* CONTACTO - Antes del Footer */}
            <Contact />
        </div>
    );
};

export default HomePage;









