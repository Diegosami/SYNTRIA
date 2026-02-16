'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import './Header.css';

const Header: React.FC = () => {
  const { t } = useTranslation();
  const pathname = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  // ... (serviceLinks remain the same, or should be translated?)
  // Ideally serviceLinks labels should also be translated, but for now we stick to the requested scope.
  // Actually, let's translate them if possible or leave them hardcoded if they are specific product names.
  // The serviceLinks array labels: "Tecnología", "Diseño", etc. These are generic enough to translate.
  // I'll update serviceLinks to use t() inside the render or just map keys.
  // For now I'll leave serviceLinks as is to avoid breaking too much, but I'll update the main nav items.

  const serviceLinks = [
    { slug: 'tecnologia', label: 'Tecnología', accent: '#55FF4B' },
    { slug: 'diseno', label: 'Diseño', accent: '#F59E0B' },
    { slug: 'marketing', label: 'Marketing Digital', accent: '#EC4899' },
    { slug: 'ventas', label: 'Ventas', accent: '#14B8A6' },
    { slug: 'contenido', label: 'Producción Multimedia', accent: '#EF4444' },
    { slug: 'ia', label: 'Inteligencia Artificial', accent: '#8A2BE2' },
  ];

  const isActive = (path: string) => {
    const currentPath = pathname || '';
    if (path === '/') return currentPath === '/';
    return currentPath.startsWith(path);
  };

  // Close mobile menu and services dropdowns when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
    setIsMobileServicesOpen(false);
  }, [pathname || '']); // Added fallback for pathname

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    const currentPath = pathname || '';
    if (currentPath !== '/') {
      router.push('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <Link href="/" className="header-logo">
          <svg className="logo-img" viewBox="0 0 847.97 186.55" xmlns="http://www.w3.org/2000/svg">
            <g className="logo-text">
              <path d="M303.93,46.16l-1.29,12.87c-6.67-3.36-17.29-5.3-26.54-5.3-12.77,0-21.09,3.94-21.09,12.48,0,9.18,7.96,10.54,15.71,12.61l14.27,3.81c14.35,3.81,23.6,9.7,23.6,22.69,0,15.13-14.27,26.44-35.08,26.44-13.2,0-28.26-2.59-35.29-6.08l1.29-12.48c7.1,3.04,21.38,6.08,32.28,6.08,11.69,0,20.59-4.53,20.59-12.93,0-7.05-4.16-9.89-13.63-12.28l-15.64-3.94c-11.55-2.97-24.25-8.6-24.25-22.18,0-16.03,12.98-26.57,35.44-26.57,13.13,0,22.02,2.13,29.62,4.78Z" />
              <path d="M389.08,42.66h17.93l-38.38,54.05v33.75h-14.99v-33.75l-38.38-54.05h17.93l27.9,40.28,27.98-40.28Z" />
              <path d="M435.78,130.46h-15.06V42.66h15.06l62.19,66.91V42.66h15.06v87.8h-15.21l-62.05-66.27v66.27Z" />
              <path d="M560.03,55.4h-32.21v-12.74h79.26v12.74h-32.06v75.06h-14.99V55.4Z" />
              <path d="M663.75,103.57h-26.83v26.9h-15.06V42.66h44.11c18.29,0,34,9.63,34,30.65,0,14.03-8.61,23.86-20.51,28.06l26.68,29.03h-18.43l-23.96-26.83ZM636.93,55.01v36.33h26.25c11.62,0,21.09-6.79,21.09-17.91,0-12.28-9.47-18.43-21.09-18.43h-26.25Z" />
              <path d="M737.36,130.46h-15.06V42.66h15.06v87.8Z" />
              <path d="M824.15,112.16h-49.14l-7.89,18.3h-16.07l40.17-87.8h16.5l40.24,87.8h-16.07l-7.75-18.3ZM779.18,100.85h40.46l-20.08-42.99-20.37,42.99Z" />
            </g>
            <g className="logo-icon">
              <path fill="#55ff4b" d="M71.52.08c10.81.92,16.26,9.69,22.41,17.36,4.29,5.36,9.57,11.59,13.31,17.24,8.32,12.58,4.87,29.14-6.75,38.28l-17.96,15.36c-.24.02-.27-1.09-.29-1.28-.4-6.61-.83-16.55-4.02-22.37-2.18-3.97-7.56-10.09-12.48-6.81l-17.83,14.9-.21.58-.03,48.36c-2.48,2.64-5.39,4.79-8.1,7.18-3.26,2.88-6.44,5.87-9.72,8.73-3.85,3.36-7.75,6.67-11.64,9.98-.42.06-5.81-4.83-6.52-5.52C1.52,132.11.42,125.64.09,111.64c-.3-13.03.2-26.43.41-39.46.14-8.96-1.06-17.18,5.16-24.59,10.31-9.32,20.93-18.37,31.54-27.38,5.9-5.01,12.47-11.23,18.59-15.73,2.94-2.16,7.53-4.06,11.18-4.4,1.21-.11,3.35-.1,4.56,0Z" />
              <path fill="#55ff4b" d="M156.42,37.57c.03.17.09.35.22.47,4.9,4.17,12.16,11.36,14.7,17.24,2.89,6.7,1.67,17.56,1.74,25.03.13,13.89.71,28.37.21,42.24-.35,9.83-2.14,14.39-9.33,21.02-6.21,5.72-13.39,11.36-19.95,16.75-6.2,5.09-12.44,10.21-18.76,15.16-8.1,6.34-14.33,13-25.62,10.57-5.48-1.18-8.92-4.52-12.56-8.47-6.21-6.76-12.9-14.86-18.54-22.12s-8.63-14.64-6.69-24.13c1.71-8.37,7.97-14.21,13.72-20l15.28-14.07c.45-.08.27.2.29.49.12,1.61-.09,3.34,0,4.97.4,8.12,2.37,21.76,10.58,25.71,4.44,2.14,6.71.68,10.15-2.03,4.71-3.7,9.01-7.96,13.71-11.68l.29-.7c-.07-16.59-.05-33.15.47-49.7l29.78-26.76h.28Z" />
            </g>
          </svg>
        </Link>

        {/* Navigation */}
        <nav className="header-nav">
          <div
            className={`nav-dropdown ${isActive('/servicios') ? 'active' : ''}`}
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <Link href="/servicios" className={`nav-link ${isActive('/servicios') ? 'active' : ''}`}>
              {t('nav.solutions')}
              <svg className="nav-chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </Link>
            <div className={`dropdown-panel ${isServicesOpen ? 'is-open' : ''}`}>
              <div className="dropdown-content">
                {serviceLinks.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/servicios/${s.slug}`}
                    className="dropdown-item"
                  >
                    <span className="dropdown-dot" style={{ background: s.accent }}></span>
                    {s.label}
                  </Link>
                ))}
                <div className="dropdown-divider" />
                <Link href="/servicios" className="dropdown-item dropdown-all">
                  Ver todo el ecosistema →
                </Link>
              </div>
            </div>
          </div>
          <Link href="/portafolio" className={`nav-link ${isActive('/portafolio') ? 'active' : ''}`}>
            {t('nav.portfolio')}
          </Link>
          <button onClick={() => scrollToSection('equipo')} className="nav-link nav-button">
            {t('nav.about')}
          </button>
        </nav>

        {/* Actions */}
        <div className="header-actions">
          <ThemeToggle />
          <Link href="/contacto" className="header-cta btn btn-primary">
            {t('nav.contact')}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="header-mobile-actions">
          <ThemeToggle />
          <button
            className={`mobile-menu-btn ${isMenuOpen ? 'is-open' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div className={`mobile-menu ${isMenuOpen ? 'is-open' : ''}`}>
        <div className="mobile-menu-backdrop" onClick={() => setIsMenuOpen(false)} />
        <nav className="mobile-menu-panel">
          <div className="mobile-nav-group">
            <button
              onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
              className={`mobile-nav-link mobile-nav-button ${isActive('/servicios') ? 'active' : ''}`}
            >
              {t('nav.solutions')}
              <svg className={`mobile-nav-chevron ${isMobileServicesOpen ? 'is-open' : ''}`} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            <div className={`mobile-sub-links ${isMobileServicesOpen ? 'is-open' : ''}`}>
              {serviceLinks.map((s) => (
                <Link
                  key={s.slug}
                  href={`/servicios/${s.slug}`}
                  className="mobile-sub-link"
                >
                  <span className="dropdown-dot" style={{ background: s.accent }}></span>
                  {s.label}
                </Link>
              ))}
              <Link href="/servicios" className="mobile-sub-link mobile-sub-all">
                Ver todo →
              </Link>
            </div>
          </div>
          <Link href="/portafolio" className={`mobile-nav-link ${isActive('/portafolio') ? 'active' : ''}`}>
            {t('nav.portfolio')}
          </Link>
          <button onClick={() => scrollToSection('equipo')} className="mobile-nav-link mobile-nav-button">
            {t('nav.about')}
          </button>
          <div className="mobile-menu-divider" />
          <Link href="/contacto" className="btn btn-primary btn-lg mobile-menu-cta">
            {t('nav.contact')}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
