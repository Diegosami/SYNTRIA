// =====================================================
// DATOS DE PROYECTOS - CASE STUDIES
// Añade nuevos proyectos aquí y se actualizará en todo el sitio
// =====================================================

export interface ProjectDeliverable {
    title: string;
    description: string;
    image?: string;
}

export interface ProjectTimeline {
    phase: string;
    duration: string;
    description: string;
}

export interface CaseStudyProject {
    id: string;
    slug: string; // URL del proyecto: /portfolio/awake-coffee

    // Información básica
    title: string;
    client: string;
    industry: string;
    year: string;
    duration: string;

    // Medios
    heroImage: string;
    thumbnail: string;
    video?: string;
    videoFormat?: 'horizontal' | 'vertical';
    gallery?: string[];

    // Contenido
    tagline: string;
    challenge: string;
    solution: string;

    // Detalles
    tags: string[];
    services: string[];
    deliverables: ProjectDeliverable[];
    timeline: ProjectTimeline[];

    // Resultados
    results: { metric: string; description: string }[];
    testimonial?: {
        quote: string;
        author: string;
        role: string;
        avatar?: string;
    };

    // Links
    liveUrl?: string;
    featured?: boolean;
}

// =====================================================
// PROYECTOS
// =====================================================
// =====================================================
// PROYECTOS
// =====================================================
export const projects: CaseStudyProject[] = [
    {
        id: 'awake-coffee',
        slug: 'awake-coffee',

        title: 'E-commerce, Branding y Producción Audiovisual',
        client: 'Awake Coffee',
        industry: 'Food & Beverage',
        year: '2024',
        duration: '4 semanas',

        heroImage: '/awake/AWAKE_Coffee_1.jpg',
        thumbnail: '/awake/AWAKE_Duo_1.webp',
        video: '/awake/brand-video.mp4',
        videoFormat: 'vertical',
        gallery: [
            '/awake/AWAKE_Coffee_1.jpg',
            '/awake/AWAKE_Coffee.webp',
            '/awake/AWAKE_Duo_1.webp'
        ],

        tagline: 'Experiencia de marca 360°: Web, Fotografía y Video para conquistar USA',

        challenge: `Awake Coffee necesitaba penetrar el competitivo mercado de café en Estados Unidos. No bastaba con un buen producto; necesitaban una identidad visual poderosa y contenido de alta calidad.

El reto era crear todo desde cero: la tienda online, el contenido visual (fotos y video) y la estrategia de lanzamiento, asegurando que cada pieza comunicara la calidad premium del café colombiano.`,

        solution: `Ejecutamos una producción integral de marca y contenido:

**Producción Audiovisual:**
Realizamos una dirección de arte completa con sesión de fotografía de producto y video comercial. Capturamos la esencia del café con iluminación cinematográfica y estilismo profesional.

**E-commerce Experience:**
Diseñamos una tienda Shopify que integra este contenido visual de alto impacto con una experiencia de compra fluida y optimizada para SEO.

**Lanzamiento:**
Utilizamos los assets visuales para campañas de Meta Ads de alto rendimiento.`,

        tags: ['Producción de Video', 'Fotografía', 'E-commerce', 'Branding'],
        services: ['Sesión Fotográfica', 'Producción de Video', 'Desarrollo E-commerce', 'Dirección de Arte'],

        deliverables: [
            {
                title: 'E-commerce SEO-Ready',
                description: 'Tienda Shopify con arquitectura optimizada para buscadores'
            },
            {
                title: 'Video Comercial',
                description: 'Producción de video 4K para campaña de lanzamiento'
            },
            {
                title: 'Sesión Fotográfica',
                description: 'Fotografía de producto y lifestyle para catálogo y redes'
            },
            {
                title: 'Identidad Visual',
                description: 'Diseño UI enfocado en transmitir la calidad del origen'
            }
        ],

        timeline: [
            {
                phase: 'Semana 1',
                duration: '7 días',
                description: 'Pre-producción y dirección de arte'
            },
            {
                phase: 'Semana 2',
                duration: '7 días',
                description: 'Rodaje de video y sesión de fotos'
            },
            {
                phase: 'Semana 3-4',
                duration: '14 días',
                description: 'Desarrollo web, post-producción y lanzamiento'
            }
        ],

        results: [
            { metric: 'Top 3', description: 'Ranking en keywords clave' },
            { metric: '+300%', description: 'Tráfico orgánico en 3 meses' },
            { metric: '100%', description: 'Identidad visual coherente' },
            { metric: '4K', description: 'Calidad de contenido producido' }
        ],

        testimonial: {
            quote: 'El nivel de producción del video y las fotos elevó nuestra marca inmediatamente. La web no solo vende, cuenta nuestra historia.',
            author: 'Fundador',
            role: 'Awake Coffee'
        },

        liveUrl: 'https://awakethesoul.coffee',
        featured: true
    },
    {
        id: 'botzi',
        slug: 'botzi',

        title: 'Agentes de IA que cierran ventas',
        client: 'Botzi',
        industry: 'SaaS / IA',
        year: '2024',
        duration: 'Producto continuo',

        heroImage: '/images/portfolio/botzi.png',
        thumbnail: '/images/portfolio/botzi.png',
        // video: '/videos/botzi-demo.mp4',

        tagline: 'Plataforma de agentes inteligentes para automatización de WhatsApp',

        challenge: `Los chatbots tradicionales frustran a los usuarios con opciones rígidas. Botzi nació para resolver esto mediante IA Generativa.

El desafío era crear una plataforma SaaS robusta donde cualquier empresa pudiera configurar un "empleado digital" capaz de entender, responder y vender naturalmente por WhatsApp.`,

        solution: `Desarrollamos una plataforma SaaS completa centrada en la experiencia de usuario y la potencia de LLMs:

**Motor de IA Avanzado:**
Orquestador de agentes que utiliza los últimos modelos de lenguaje para entender intención y contexto, permitiendo conversaciones fluidas y humanas.

**Infraestructura Escalable:**
Arquitectura cloud capaz de procesar miles de mensajes simultáneos sin latencia, vital para atención al cliente en tiempo real.

**Panel Autoadministrable:**
Interfaz intuitiva para que los negocios carguen su base de conocimiento y entrenen a sus agentes sin saber código.`,

        tags: ['SaaS', 'Inteligencia Artificial', 'React', 'Cloud'],
        services: ['Desarrollo SaaS', 'Ingeniería de Prompts', 'Diseño de Producto', 'Backend Arquitectura'],

        deliverables: [
            {
                title: 'Plataforma SaaS',
                description: 'Dashboard completo para gestión de agentes y métricas'
            },
            {
                title: 'Motor de Chat IA',
                description: 'Sistema de procesamiento de lenguaje natural integrado con WhatsApp'
            },
            {
                title: 'Base de Conocimiento',
                description: 'Sistema RAG para respuestas precisas basadas en datos del cliente'
            },
            {
                title: 'Integraciones API',
                description: 'Conectores para CRMs y pasarelas de pago'
            }
        ],

        timeline: [
            {
                phase: 'Fase 1',
                duration: '2 meses',
                description: 'Desarrollo del motor de IA y prototipo'
            },
            {
                phase: 'Fase 2',
                duration: '2 meses',
                description: 'Construcción de plataforma SaaS y dashboard'
            },
            {
                phase: 'Fase 3',
                duration: 'Continuo',
                description: 'Mejoras de modelos y nuevas integraciones'
            }
        ],

        results: [
            { metric: '+500', description: 'Agentes activos' },
            { metric: '24/7', description: 'Atención automatizada' },
            { metric: 'x3', description: 'Tasa de conversión vs bots tradicionales' },
            { metric: '<2s', description: 'Latencia de respuesta' }
        ],

        liveUrl: 'https://botzi.co',
        featured: true
    },
    {
        id: 'best4u',
        slug: 'best4u',

        title: 'Posicionamiento Web para Edulcorantes',
        client: 'Best4U',
        industry: 'E-commerce / Salud',
        year: '2024',
        duration: '5 semanas',

        heroImage: '/best4u/hero.svg',
        thumbnail: '/best4u/hero.svg',

        tagline: 'Estrategia SEO y experiencia web para liderar el nicho de endulzantes saludables',

        challenge: `Best4U vende edulcorantes premium en un mercado saturado. Su web anterior no aparecía en búsquedas relevantes y tenía una estructura técnica deficiente que impedía el indexado correcto.

Necesitaban una reingeniería total enfocada en "Posicionamiento" para capturar búsquedas como "edulcorante natural" o "alternativas al azúcar".`,

        solution: `Implementamos una solución integral de E-commerce SEO:

**Arquitectura de Información SEO:**
Reestructuramos todo el catálogo y las categorías basándonos en el volumen de búsqueda real de los usuarios. Creamos landing pages específicas para cada tipo de endulzante.

**Optimización On-Page:**
Redacción de descripciones de producto y metaetiquetas optimizadas. Mejora de enlazado interno para distribuir autoridad de dominio.

**Velocidad y Core Web Vitals:**
Optimizamos la carga de imágenes y scripts para asegurar que Google viera el sitio como de alta calidad técnica.`,

        tags: ['SEO Técnico', 'E-commerce', 'Content Strategy', 'Web Performance'],
        services: ['Auditoría SEO', 'Reingeniería Web', 'Estrategia de Contenido', 'Optimización Técnica'],

        deliverables: [
            {
                title: 'E-commerce Optimizado',
                description: 'Plataforma web rápida y amigable con buscadores'
            },
            {
                title: 'Estrategia SEO',
                description: 'Plan de posicionamiento para keywords de nicho'
            },
            {
                title: 'Optimización de Contenido',
                description: 'Textos persuasivos y optimizados para SEO'
            },
            {
                title: 'Reporte de Ranking',
                description: 'Setup de herramientas de medición de posiciones'
            }
        ],

        timeline: [
            {
                phase: 'Semana 1',
                duration: '1 semana',
                description: 'Investigación de palabras clave y competencia'
            },
            {
                phase: 'Semana 2-3',
                duration: '2 semanas',
                description: 'Desarrollo web e implementación técnica'
            },
            {
                phase: 'Semana 4-5',
                duration: '2 semanas',
                description: 'Optimización de contenidos y lanzamiento'
            }
        ],

        results: [
            { metric: '+80%', description: 'Tráfico orgánico' },
            { metric: 'Top 1', description: 'En "Edulcorantes Naturales"' },
            { metric: '+45%', description: 'Conversión de visitas orgánicas' },
            { metric: '100%', description: 'Indexación de catálogo' }
        ],

        liveUrl: 'https://best4u.com.co',
        featured: false
    }
];

// Función helper para obtener proyecto por slug
export const getProjectBySlug = (slug: string): CaseStudyProject | undefined => {
    return projects.find(p => p.slug === slug);
};

// Función helper para obtener proyectos destacados
export const getFeaturedProjects = (): CaseStudyProject[] => {
    return projects.filter(p => p.featured);
};
