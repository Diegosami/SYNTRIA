import ServiceDetailPageComponent from '../../../views/Services/ServiceDetailPage';
import { services } from '../../../data/serviceData';

export function generateStaticParams() {
    return services.map((service) => ({
        slug: service.slug,
    }));
}

export default function ServiceDetail() {
    return <ServiceDetailPageComponent />;
}
