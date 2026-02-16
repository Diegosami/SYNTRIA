'use client';

// In Next.js, SEO is handled by the metadata export in layout.tsx and page.tsx files.
// This component is kept as a no-op for backward compatibility with existing component imports.

interface SEOProps {
    title?: string;
    description?: string;
    path?: string;
    image?: string;
    type?: string;
    noIndex?: boolean;
}

const SEO: React.FC<SEOProps> = () => {
    // Next.js handles meta tags via the metadata API in app/ directory
    return null;
};

export default SEO;
