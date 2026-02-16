import type { Metadata } from 'next';
import Providers from '../components/Providers';
import '../styles/global.css';
import '../styles/variables.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://syntria.io'),
  title: {
    default: 'Syntria | Ingeniería de Crecimiento para Empresas del Futuro',
    template: '%s | Syntria',
  },
  description:
    'Ecosistema completo de software, inteligencia artificial, diseño y marketing digital. Hacemos crecer tu negocio con tecnología y estrategia integrada.',
  keywords: [
    'agencia de software Bogotá',
    'desarrollo de software Colombia',
    'inteligencia artificial empresas',
    'diseño web profesional',
    'marketing digital Colombia',
    'ecosistema digital',
    'automatización IA',
    'Syntria',
  ],
  authors: [{ name: 'Syntria' }],
  creator: 'Syntria',
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: 'https://syntria.io',
    siteName: 'Syntria',
    title: 'Syntria | Ingeniería de Crecimiento para Empresas del Futuro',
    description:
      'Ecosistema completo de software, inteligencia artificial, diseño y marketing digital.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Syntria - Ingeniería de Crecimiento',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Syntria | Ingeniería de Crecimiento para Empresas del Futuro',
    description:
      'Ecosistema completo de software, inteligencia artificial, diseño y marketing digital.',
    images: ['/images/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://syntria.io',
  },
};

// Organization JSON-LD Schema
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Syntria',
  url: 'https://syntria.io',
  logo: 'https://syntria.io/LOGO_SYNTRIA.svg',
  description:
    'Ecosistema completo de software, inteligencia artificial, diseño y marketing digital para empresas.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bogotá',
    addressCountry: 'CO',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+57-323-945-4873',
    contactType: 'sales',
    availableLanguage: ['Spanish', 'English'],
  },
  sameAs: ['https://www.instagram.com/syntria.group/'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
