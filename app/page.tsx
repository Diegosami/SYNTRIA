'use client';

import Hero from '../sections/Hero';
import AuthorityBar from '../sections/AuthorityBar';
import Services from '../sections/Services';
import BotziFeature from '../sections/BotziFeature';
import Portfolio from '../sections/Portfolio';
import Testimonials from '../sections/Testimonials';
import Process from '../sections/Process';
import Team from '../sections/Team';
import WhySyntria from '../sections/WhySyntria';
import Contact from '../sections/Contact';
import WaveDivider from '../components/WaveDivider';

export default function HomePage() {
  return (
    <div className="home-page">
      {/* HERO */}
      <Hero />

      {/* AUTORIDAD + SERVICIOS */}
      <AuthorityBar />
      <Services />

      {/* Onda: la curva negra va DENTRO de la zona negra de BotziFeature */}
      <WaveDivider color="var(--color-bg-dark)" bgColor="var(--color-bg-dark)" variant="curve" />

      {/* SOLUCIONES - Negro con logo Botzi */}
      <BotziFeature />

      {/* Onda: la curva negra va DENTRO de la zona negra de BotziFeature */}
      <WaveDivider color="var(--color-bg-dark)" bgColor="var(--color-bg-dark)" variant="curveUp" />

      {/* PORTFOLIO */}
      <Portfolio />

      {/* Onda: la curva negra va DENTRO de la zona negra de Testimonios */}
      <WaveDivider color="var(--color-bg-dark)" bgColor="var(--color-bg-dark)" variant="curve" />

      {/* TESTIMONIOS - Negro */}
      <div className="section-dark">
        <Testimonials />
      </div>

      {/* Onda: la curva negra va DENTRO de la zona negra de Testimonios */}
      <WaveDivider color="var(--color-bg-dark)" bgColor="var(--color-bg-dark)" variant="curveUp" />

      {/* PROCESO */}
      <Process />

      {/* Onda: la curva negra va DENTRO de la zona negra de Team */}
      <WaveDivider color="var(--color-bg-dark)" bgColor="var(--color-bg-dark)" variant="curve" />

      {/* EQUIPO - Negro */}
      <div className="section-dark">
        <Team />
      </div>

      {/* Onda: la curva negra va DENTRO de la zona negra de Team */}
      <WaveDivider color="var(--color-bg-dark)" bgColor="var(--color-bg-dark)" variant="curveUp" />

      {/* CTA FINAL */}
      <WhySyntria />

      {/* CONTACTO - Antes del Footer */}
      <Contact />
    </div>
  );
}
