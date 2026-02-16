import type { Metadata } from 'next';
import PortfolioPage from '../../views/Portfolio/PortfolioPage';

export const metadata: Metadata = {
    title: 'Portafolio | Casos de Éxito Syntria',
    description:
        'Casos de éxito reales: conoce los proyectos que hemos construido y los resultados que hemos logrado para nuestros clientes.',
    alternates: {
        canonical: '/portafolio',
    },
};

export default function Portafolio() {
    return <PortfolioPage />;
}
