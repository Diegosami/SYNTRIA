import type { Metadata } from 'next';
import CaseStudyPage from '../../../views/CaseStudy/CaseStudyPage';
import { projects } from '../../../data/projects';

export function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return { title: 'Proyecto no encontrado' };
    }

    return {
        title: `${project.title} | Portafolio Syntria`,
        description: project.tagline.slice(0, 155),
        alternates: {
            canonical: `/portfolio/${slug}`,
        },
    };
}

export default function CaseStudy() {
    return <CaseStudyPage />;
}
