import CaseStudyPage from '../../../views/CaseStudy/CaseStudyPage';
import { projects } from '../../../data/projects';

export function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default function CaseStudy() {
    return <CaseStudyPage />;
}
