import type { Metadata } from 'next';
import ContactPage from '../../views/Contact/ContactPage';

export const metadata: Metadata = {
    title: 'Contacto | Habla con Syntria',
    description:
        'Agenda tu auditoría gratuita. Analizamos tu situación digital y te decimos honestamente cómo podemos ayudarte a crecer.',
    alternates: {
        canonical: '/contacto',
    },
};

export default function Contacto() {
    return <ContactPage />;
}
