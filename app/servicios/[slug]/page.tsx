import type { Metadata } from 'next';
import ServiceDetailPageComponent from '../../../views/Services/ServiceDetailPage';
import { services } from '../../../data/serviceData';

export function generateStaticParams() {
    return services.map((service) => ({
        slug: service.slug,
    }));
}

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const service = services.find((s) => s.slug === slug);

    if (!service) {
        return { title: 'Servicio no encontrado' };
    }

    return {
        title: `${service.title} | Syntria`,
        description: service.description.slice(0, 155),
        alternates: {
            canonical: `/servicios/${slug}`,
        },
    };
}

export default function ServiceDetail() {
    return <ServiceDetailPageComponent />;
}
