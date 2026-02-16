export interface ServiceFeature {
    icon: string;
    title: string;
    description: string;
}

export interface ServiceProcess {
    step: number;
    title: string;
    description: string;
}

export interface ServiceData {
    slug: string;
    title: string;
    subtitle: string;
    description: string;
    accent: string;
    features: ServiceFeature[];
    tools: string[];
    process: ServiceProcess[];
    cta: string;
}

export const services: ServiceData[] = [
    {
        slug: 'tecnologia',
        title: 'Tecnología',
        subtitle: 'Software a tu medida',
        description: 'No usamos plantillas. Cada línea de código está pensada para resolver tu problema específico, con tecnología moderna que escala contigo.',
        accent: '#55FF4B',
        features: [
            {
                icon: 'globe',
                title: 'Aplicaciones Web',
                description: 'Plataformas, dashboards, portales y SPAs con React, Next.js y TypeScript. Rápidas, seguras y escalables.'
            },
            {
                icon: 'smartphone',
                title: 'Apps Móviles',
                description: 'Aplicaciones nativas y cross-platform con React Native y Flutter. Una sola base de código, todas las plataformas.'
            },
            {
                icon: 'zap',
                title: 'APIs y Microservicios',
                description: 'Backends robustos con Node.js, Python y FastAPI. Arquitecturas que soportan millones de requests.'
            },
            {
                icon: 'shopping-cart',
                title: 'E-commerce',
                description: 'Tiendas online con Shopify, headless commerce y pasarelas de pago. Optimizadas para convertir.'
            },
            {
                icon: 'cloud',
                title: 'Cloud & DevOps',
                description: 'Infraestructura en AWS, Docker y CI/CD. Tu app siempre disponible, siempre actualizada.'
            },
            {
                icon: 'database',
                title: 'Bases de Datos',
                description: 'PostgreSQL, MongoDB, Redis y más. Diseño de esquemas optimizados para rendimiento y escalabilidad.'
            }
        ],
        tools: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'FastAPI', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'Shopify', 'Flutter'],
        process: [
            { step: 1, title: 'Discovery', description: 'Entendemos tu negocio, usuarios y objetivos. Definimos alcance y prioridades.' },
            { step: 2, title: 'Arquitectura', description: 'Diseñamos la estructura técnica: stack, base de datos, integraciones y flujos.' },
            { step: 3, title: 'Desarrollo', description: 'Sprints de 2 semanas con entregas parciales. Ves avances reales desde el primer sprint.' },
            { step: 4, title: 'Testing & Deploy', description: 'QA riguroso, pruebas de carga y deploy a producción con monitoreo continuo.' }
        ],
        cta: '¿Necesitas software que realmente funcione?'
    },
    {
        slug: 'diseno',
        title: 'Diseño',
        subtitle: 'Marcas que conectan',
        description: 'Tu marca es la primera impresión. Creamos identidades visuales que transmiten exactamente lo que eres: profesional, confiable y diferente.',
        accent: '#F59E0B',
        features: [
            {
                icon: 'palette',
                title: 'Branding e Identidad',
                description: 'Logo, paleta de colores, tipografía, brand guidelines. Todo lo que necesitas para que tu marca sea reconocible.'
            },
            {
                icon: 'pen-tool',
                title: 'Diseño UX/UI',
                description: 'Interfaces intuitivas que tus usuarios aman. Wireframes, prototipos interactivos y diseño final pixel-perfect.'
            },
            {
                icon: 'monitor',
                title: 'Diseño Web',
                description: 'Landing pages, sitios corporativos y e-commerce con diseño responsive que se ve increíble en cualquier dispositivo.'
            },
            {
                icon: 'file-text',
                title: 'Material Corporativo',
                description: 'Presentaciones, propuestas comerciales, tarjetas de presentación y papelería que reflejan tu nivel.'
            },
            {
                icon: 'box',
                title: 'Packaging',
                description: 'Diseño de empaques y etiquetas que destacan en el estante y comunican tu valor de marca.'
            },
            {
                icon: 'grid',
                title: 'Design Systems',
                description: 'Sistemas de diseño escalables con componentes reutilizables. Consistencia visual en todos tus productos.'
            }
        ],
        tools: ['Figma', 'Adobe Creative Suite', 'Illustrator', 'Photoshop', 'After Effects', 'Framer', 'Webflow'],
        process: [
            { step: 1, title: 'Briefing', description: 'Entendemos tu marca, tu competencia, tu audiencia y tus aspiraciones visuales.' },
            { step: 2, title: 'Exploración', description: 'Moodboards, referencias y conceptos iniciales. Alineamos la dirección creativa contigo.' },
            { step: 3, title: 'Diseño', description: 'Desarrollo de propuestas con iteraciones basadas en tu feedback directo.' },
            { step: 4, title: 'Entrega', description: 'Archivos finales en todos los formatos, brand guidelines y activos listos para usar.' }
        ],
        cta: '¿Quieres una marca que la gente recuerde?'
    },
    {
        slug: 'marketing',
        title: 'Marketing Digital',
        subtitle: 'Clientes que llegan solos',
        description: 'No hacemos marketing de vanidad. Cada campaña, cada post, cada anuncio está diseñado para traer clientes reales y resultados medibles.',
        accent: '#EC4899',
        features: [
            {
                icon: 'search',
                title: 'SEO y Posicionamiento',
                description: 'Que te encuentren en Google. Investigación de keywords, contenido optimizado y link building estratégico.'
            },
            {
                icon: 'megaphone',
                title: 'Publicidad Digital',
                description: 'Google Ads, Meta Ads, TikTok Ads. Campañas optimizadas para maximizar ROI y minimizar costo por lead.'
            },
            {
                icon: 'share-2',
                title: 'Social Media',
                description: 'Gestión de redes sociales con estrategia. Contenido que genera engagement real, no solo likes vacíos.'
            },
            {
                icon: 'mail',
                title: 'Email Marketing',
                description: 'Secuencias automatizadas, newsletters y campañas de nurturing que convierten suscriptores en clientes.'
            },
            {
                icon: 'bar-chart',
                title: 'Analítica y Reportes',
                description: 'Dashboards en tiempo real. Métricas que importan: CAC, LTV, ROAS. Decisiones basadas en datos, no intuición.'
            },
            {
                icon: 'target',
                title: 'Estrategia de Contenido',
                description: 'Calendarios editoriales, storytelling de marca y contenido que posiciona tu autoridad en tu industria.'
            }
        ],
        tools: ['Google Analytics', 'Google Ads', 'Meta Business Suite', 'Mailchimp', 'HubSpot', 'Semrush', 'Canva', 'Hootsuite'],
        process: [
            { step: 1, title: 'Auditoría', description: 'Analizamos tu presencia digital actual, tu competencia y las oportunidades de crecimiento.' },
            { step: 2, title: 'Estrategia', description: 'Plan de marketing con objetivos SMART, canales prioritarios y presupuesto optimizado.' },
            { step: 3, title: 'Ejecución', description: 'Lanzamiento de campañas, creación de contenido y optimización continua basada en datos.' },
            { step: 4, title: 'Reportes', description: 'Informes mensuales con métricas clave, aprendizajes y ajustes para mejorar resultados.' }
        ],
        cta: '¿Listo para atraer clientes que realmente compran?'
    },
    {
        slug: 'ventas',
        title: 'Ventas',
        subtitle: 'Negocios que cierran',
        description: 'Tener leads no sirve si no los conviertes. Diseñamos procesos de venta eficientes, automatizados y medibles para que cierres más negocios.',
        accent: '#14B8A6',
        features: [
            {
                icon: 'clipboard',
                title: 'CRM y Pipeline',
                description: 'Configuración e implementación de CRM. Visualiza tu pipeline, haz seguimiento y nunca pierdas un lead.'
            },
            {
                icon: 'cpu',
                title: 'Automatización Comercial',
                description: 'Workflows automáticos: follow-ups, cotizaciones, recordatorios. Tu equipo vende, la tecnología hace el resto.'
            },
            {
                icon: 'refresh',
                title: 'Funnels de Conversión',
                description: 'Landing pages, secuencias de email y remarketing diseñados para mover leads por el embudo hasta la compra.'
            },
            {
                icon: 'message-circle',
                title: 'Chatbots de Venta',
                description: 'Atención y calificación automática de leads por WhatsApp y web. Integración directa con tu CRM.'
            },
            {
                icon: 'trending-up',
                title: 'Reportes de Pipeline',
                description: 'Dashboards de ventas en tiempo real: conversion rate, tiempo de cierre, forecast y rendimiento por vendedor.'
            },
            {
                icon: 'users',
                title: 'Capacitación',
                description: 'Entrenamiento para tu equipo comercial en herramientas digitales, técnicas de venta y uso del CRM.'
            }
        ],
        tools: ['HubSpot', 'Salesforce', 'Pipedrive', 'WhatsApp Business API', 'Zapier', 'Calendly', 'Stripe'],
        process: [
            { step: 1, title: 'Diagnóstico', description: 'Mapeamos tu proceso de venta actual, identificamos cuellos de botella y oportunidades.' },
            { step: 2, title: 'Diseño', description: 'Rediseñamos el proceso comercial con automatizaciones, plantillas y flujos optimizados.' },
            { step: 3, title: 'Implementación', description: 'Configuramos CRM, integraciones y automatizaciones. Migramos datos existentes.' },
            { step: 4, title: 'Acompañamiento', description: 'Capacitación al equipo y soporte durante los primeros 30 días para asegurar adopción.' }
        ],
        cta: '¿Quieres cerrar más ventas con menos esfuerzo?'
    },
    {
        slug: 'contenido',
        title: 'Producción Multimedia',
        subtitle: 'Historias que venden',
        description: 'El contenido es el rey, pero solo si es bueno. Producimos piezas visuales que capturan atención, cuentan tu historia y generan acción.',
        accent: '#EF4444',
        features: [
            {
                icon: 'camera',
                title: 'Fotografía de Producto',
                description: 'Sesiones profesionales con iluminación de estudio. Fotos que hacen que tu producto se vea irresistible.'
            },
            {
                icon: 'video',
                title: 'Video Corporativo',
                description: 'Desde testimoniales hasta spots publicitarios. Producción completa con guión, filmación y edición.'
            },
            {
                icon: 'edit-3',
                title: 'Copywriting',
                description: 'Textos que venden. Copies para web, ads, emails y redes sociales que conectan y convierten.'
            },
            {
                icon: 'smartphone',
                title: 'Contenido para Redes',
                description: 'Reels, stories, carruseles y posts diseñados para cada plataforma. Contenido que tu audiencia quiere ver.'
            },
            {
                icon: 'mic',
                title: 'Podcasts y Audio',
                description: 'Producción de podcasts corporativos: grabación, edición, musicalización y distribución en plataformas.'
            },
            {
                icon: 'film',
                title: 'Motion Graphics',
                description: 'Animaciones, infografías animadas y videos explicativos que simplifican lo complejo.'
            }
        ],
        tools: ['Adobe Premiere', 'After Effects', 'DaVinci Resolve', 'Canon EOS', 'Sony Alpha', 'Audacity', 'CapCut Pro'],
        process: [
            { step: 1, title: 'Pre-producción', description: 'Definimos concepto, guión, storyboard y logística de producción.' },
            { step: 2, title: 'Producción', description: 'Sesiones de foto/video con equipo profesional. Dirección creativa incluida.' },
            { step: 3, title: 'Post-producción', description: 'Edición, color grading, animación y efectos. Cada pieza pulida al detalle.' },
            { step: 4, title: 'Entrega', description: 'Archivos optimizados para cada plataforma: web, redes sociales, impresión.' }
        ],
        cta: '¿Listo para contenido que realmente impacte?'
    }
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
    return services.find(s => s.slug === slug);
}
