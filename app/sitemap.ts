import { MetadataRoute } from 'next';
import { services } from '../data/serviceData';
import { projects } from '../data/projects';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://syntria.io';

    // Static pages
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        {
            url: `${baseUrl}/servicios`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/portafolio`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/contacto`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
    ];

    // Dynamic service pages
    const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
        url: `${baseUrl}/servicios/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    // Dynamic portfolio case study pages
    const portfolioPages: MetadataRoute.Sitemap = projects.map((project) => ({
        url: `${baseUrl}/portfolio/${project.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    return [...staticPages, ...servicePages, ...portfolioPages];
}
