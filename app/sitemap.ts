import { MetadataRoute } from 'next';
import { services } from '../data/serviceData';
import { projects } from '../data/projects';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://syntria.io';
    const lastModified = new Date('2025-02-15');

    // Static pages
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified,
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        {
            url: `${baseUrl}/servicios`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/portafolio`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/contacto`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
    ];

    // Dynamic service pages
    const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
        url: `${baseUrl}/servicios/${service.slug}`,
        lastModified,
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    // Dynamic portfolio case study pages
    const portfolioPages: MetadataRoute.Sitemap = projects.map((project) => ({
        url: `${baseUrl}/portafolio/${project.slug}`,
        lastModified,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    return [...staticPages, ...servicePages, ...portfolioPages];
}
