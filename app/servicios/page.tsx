import type { Metadata } from 'next';
import ServicesPage from '../../views/Services/ServicesPage';

export const metadata: Metadata = {
    title: 'Servicios | Software, IA, Diseño y Marketing',
    description:
        'Soluciones integrales de software, inteligencia artificial, diseño y marketing digital. Cada producto hecho a medida para impulsar tu negocio.',
    alternates: {
        canonical: '/servicios',
    },
};

export default function Servicios() {
    return <ServicesPage />;
}
