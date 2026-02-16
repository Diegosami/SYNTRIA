import { notFound } from 'next/navigation';
import { getProjectBySlug, projects } from '../../../data/projects';
import CaseStudyPage from '../../../views/CaseStudy/CaseStudyPage';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        return {
            title: 'Proyecto no encontrado',
        };
    }

    return {
        title: `${project.client} - ${project.title} | Case Study`,
        description: project.tagline,
        openGraph: {
            images: [project.thumbnail],
        },
    };
}

export function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    return <CaseStudyPage project={project} />;
}
