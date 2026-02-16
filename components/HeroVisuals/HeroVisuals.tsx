'use client';
import React from 'react';
import './HeroVisuals.css';

/* =====================================================
   HERO VISUALS — Stunning 3D Device Mockups
   Each one is a show-stopper visual for the hero section
   ===================================================== */

/* TECNOLOGÍA — iPhone-style 3D phone + MacBook floating behind */
const TechVisual: React.FC = () => (
    <div className="hv-scene hv-tech">
        {/* MacBook behind */}
        <div className="hv-macbook">
            <div className="hv-mb-screen">
                <div className="hv-mb-topbar">
                    <div className="hv-dots"><i /><i /><i /></div>
                    <div className="hv-mb-tabs"><span className="hv-tab-active">index.tsx</span><span>styles.css</span></div>
                </div>
                <div className="hv-mb-editor">
                    <div className="hv-ln"><span className="hv-ln-num">1</span><span className="hv-c-purple">import</span> {'{'} useState {'}'} <span className="hv-c-purple">from</span> <span className="hv-c-green">'react'</span>;</div>
                    <div className="hv-ln"><span className="hv-ln-num">2</span></div>
                    <div className="hv-ln"><span className="hv-ln-num">3</span><span className="hv-c-purple">const</span> <span className="hv-c-blue">App</span> = () ={'>'} {'{'}</div>
                    <div className="hv-ln"><span className="hv-ln-num">4</span>  <span className="hv-c-purple">const</span> [<span className="hv-c-blue">data</span>] = <span className="hv-c-yellow">useState</span>([]);</div>
                    <div className="hv-ln"><span className="hv-ln-num">5</span></div>
                    <div className="hv-ln"><span className="hv-ln-num">6</span>  <span className="hv-c-purple">return</span> {'<'}<span className="hv-c-red">Dashboard</span> /{'>'}</div>
                    <div className="hv-ln"><span className="hv-ln-num">7</span>{'}'};</div>
                </div>
            </div>
            <div className="hv-mb-base"><div className="hv-mb-notch"></div></div>
        </div>

        {/* iPhone front */}
        <div className="hv-iphone">
            <div className="hv-ip-frame">
                <div className="hv-ip-island"></div>
                <div className="hv-ip-screen">
                    <div className="hv-ip-statusbar"><span>9:41</span><span className="hv-ip-battery"></span></div>
                    <div className="hv-ip-app">
                        <div className="hv-ip-nav-bar">Dashboard</div>
                        <div className="hv-ip-stat-row">
                            <div className="hv-ip-stat"><strong>$24K</strong><small>Revenue</small></div>
                            <div className="hv-ip-stat"><strong>1.2K</strong><small>Users</small></div>
                        </div>
                        <div className="hv-ip-chart-placeholder"></div>
                        <div className="hv-ip-list-item"></div>
                        <div className="hv-ip-list-item hv-ip-li-short"></div>
                    </div>
                    <div className="hv-ip-home-bar"></div>
                </div>
            </div>
        </div>

        {/* Floating elements */}
        <div className="hv-badge hv-b-deploy"><i className="hv-b-dot hv-b-success"></i>Deployed</div>
        <div className="hv-badge hv-b-commit"><i className="hv-b-dot hv-b-info"></i>3 commits</div>
    </div>
);

/* DISEÑO — Big iPad pro with design canvas */
const DesignVisual: React.FC = () => (
    <div className="hv-scene hv-design">
        <div className="hv-ipad">
            <div className="hv-ipad-frame">
                <div className="hv-ipad-cam"></div>
                <div className="hv-ipad-screen">
                    {/* Figma-like interface */}
                    <div className="hv-fig-toolbar">
                        <div className="hv-fig-tools">
                            <i className="hv-fig-t"></i>
                            <i className="hv-fig-t hv-fig-t-active"></i>
                            <i className="hv-fig-t"></i>
                        </div>
                        <div className="hv-fig-title">Brand Identity</div>
                    </div>
                    <div className="hv-fig-canvas">
                        <div className="hv-fig-artboard">
                            {/* Logo circle */}
                            <div className="hv-fig-logo">
                                <div className="hv-fig-logo-inner">S</div>
                            </div>
                            {/* Typography */}
                            <div className="hv-fig-type-big">Syntria</div>
                            <div className="hv-fig-type-sm">Creative Studio</div>
                            {/* Color bar */}
                            <div className="hv-fig-colors">
                                <span style={{ background: '#55FF4B' }}></span>
                                <span style={{ background: '#1a1a2e' }}></span>
                                <span style={{ background: '#F59E0B' }}></span>
                                <span style={{ background: '#EC4899' }}></span>
                                <span style={{ background: '#fff' }}></span>
                            </div>
                        </div>
                        {/* Selection handles */}
                        <div className="hv-fig-selection">
                            <i className="hv-sel-h hv-sel-tl"></i>
                            <i className="hv-sel-h hv-sel-tr"></i>
                            <i className="hv-sel-h hv-sel-bl"></i>
                            <i className="hv-sel-h hv-sel-br"></i>
                            <div className="hv-fig-cursor">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4 4l6.5 17.5 3-7 7-3L4 4z" fill="var(--accent)" stroke="#fff" strokeWidth="1.5" /></svg>
                                <span>Diego</span>
                            </div>
                        </div>
                    </div>
                    <div className="hv-fig-sidebar">
                        <div className="hv-fig-prop">
                            <small>Width</small><span>320</span>
                        </div>
                        <div className="hv-fig-prop">
                            <small>Height</small><span>480</span>
                        </div>
                        <div className="hv-fig-prop">
                            <small>Fill</small><span className="hv-fig-fill-preview"></span>
                        </div>
                        <div className="hv-fig-sep"></div>
                        <div className="hv-fig-prop">
                            <small>Font</small><span>Inter</span>
                        </div>
                        <div className="hv-fig-prop">
                            <small>Weight</small><span>Bold</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="hv-badge hv-b-layers"><i className="hv-b-dot hv-b-warn"></i>12 layers</div>
    </div>
);

/* MARKETING — iMac screen with analytics */
const MarketingVisual: React.FC = () => (
    <div className="hv-scene hv-mkt">
        <div className="hv-imac">
            <div className="hv-imac-screen">
                <div className="hv-mb-topbar">
                    <div className="hv-dots"><i /><i /><i /></div>
                    <div className="hv-mb-tabs"><span className="hv-tab-active">Analytics</span></div>
                </div>
                <div className="hv-imac-body">
                    <div className="hv-ana-sidebar">
                        <div className="hv-ana-logo"></div>
                        <div className="hv-ana-menu"><i className="hv-ana-mi hv-ana-mi-active"></i><i className="hv-ana-mi"></i><i className="hv-ana-mi"></i><i className="hv-ana-mi"></i></div>
                    </div>
                    <div className="hv-ana-main">
                        <div className="hv-ana-kpis">
                            <div className="hv-ana-kpi">
                                <div className="hv-kpi-number">2,847</div>
                                <div className="hv-kpi-desc">Active Users</div>
                                <div className="hv-kpi-badge-up">↑ 24%</div>
                            </div>
                            <div className="hv-ana-kpi">
                                <div className="hv-kpi-number">$58.3K</div>
                                <div className="hv-kpi-desc">Revenue</div>
                                <div className="hv-kpi-badge-up">↑ 31%</div>
                            </div>
                            <div className="hv-ana-kpi">
                                <div className="hv-kpi-number">340%</div>
                                <div className="hv-kpi-desc">ROI</div>
                                <div className="hv-kpi-badge-up">↑ 12%</div>
                            </div>
                        </div>
                        <div className="hv-ana-chart">
                            <svg viewBox="0 0 300 80" preserveAspectRatio="none" className="hv-svg-chart">
                                <defs>
                                    <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.4" />
                                        <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
                                    </linearGradient>
                                </defs>
                                <path d="M0,70 C20,65 40,60 60,50 C80,40 100,45 120,35 C140,25 160,30 180,20 C200,10 220,15 240,8 C260,5 280,3 300,2 L300,80 L0,80Z" fill="url(#areaGrad)" />
                                <path d="M0,70 C20,65 40,60 60,50 C80,40 100,45 120,35 C140,25 160,30 180,20 C200,10 220,15 240,8 C260,5 280,3 300,2" fill="none" stroke="var(--accent)" strokeWidth="2.5" className="hv-chart-draw" />
                                <circle cx="300" cy="2" r="4" fill="var(--accent)" className="hv-chart-dot" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hv-imac-chin"></div>
            <div className="hv-imac-stand"></div>
            <div className="hv-imac-foot"></div>
        </div>
        <div className="hv-badge hv-b-notif"><i className="hv-b-dot hv-b-success"></i>+127 leads hoy</div>
    </div>
);

/* VENTAS — Laptop with CRM */
const SalesVisual: React.FC = () => (
    <div className="hv-scene hv-sales">
        <div className="hv-macbook hv-mb-sales">
            <div className="hv-mb-screen">
                <div className="hv-mb-topbar">
                    <div className="hv-dots"><i /><i /><i /></div>
                    <div className="hv-mb-tabs"><span className="hv-tab-active">CRM Pipeline</span></div>
                </div>
                <div className="hv-crm">
                    <div className="hv-crm-col">
                        <div className="hv-crm-header">Nuevos <span className="hv-crm-count">8</span></div>
                        <div className="hv-crm-card">
                            <div className="hv-crm-av">CM</div>
                            <div className="hv-crm-info">
                                <b>Carlos M.</b>
                                <div className="hv-crm-tags">
                                    <span className="hv-tag hv-tag-blue">Lead</span>
                                </div>
                                <div className="hv-crm-val-row"><small>$4,200</small><div className="hv-crm-prog"><div style={{ width: '20%' }}></div></div></div>
                            </div>
                        </div>
                        <div className="hv-crm-card">
                            <div className="hv-crm-av" style={{ background: 'linear-gradient(135deg, #FF6B6B, #C44545)' }}>AR</div>
                            <div className="hv-crm-info">
                                <b>Ana R.</b>
                                <div className="hv-crm-tags">
                                    <span className="hv-tag hv-tag-gray">Referral</span>
                                </div>
                                <div className="hv-crm-val-row"><small>$2,800</small><div className="hv-crm-prog"><div style={{ width: '40%' }}></div></div></div>
                            </div>
                        </div>
                    </div>
                    <div className="hv-crm-col">
                        <div className="hv-crm-header hv-crm-h-warm">Propuesta <span className="hv-crm-count">4</span></div>
                        <div className="hv-crm-card hv-crm-c-warm">
                            <div className="hv-crm-av" style={{ background: 'linear-gradient(135deg, #4ECDC4, #2A9D8F)' }}>TC</div>
                            <div className="hv-crm-info">
                                <b>Tech Corp</b>
                                <div className="hv-crm-tags">
                                    <span className="hv-tag hv-tag-org">Enterprise</span>
                                </div>
                                <div className="hv-crm-val-row"><small>$12K</small><div className="hv-crm-prog"><div style={{ width: '75%', background: '#F59E0B' }}></div></div></div>
                            </div>
                        </div>
                    </div>
                    <div className="hv-crm-col">
                        <div className="hv-crm-header hv-crm-h-won">Cerrado <span className="hv-crm-count">3</span></div>
                        <div className="hv-crm-card hv-crm-c-won">
                            <div className="hv-crm-av" style={{ background: 'linear-gradient(135deg, #A78BFA, #7C3AED)' }}>SX</div>
                            <div className="hv-crm-info">
                                <b>StartupXY</b>
                                <div className="hv-crm-tags">
                                    <span className="hv-tag hv-tag-green">Won</span>
                                </div>
                                <div className="hv-crm-val-row"><small>$8,500</small><div className="hv-crm-prog"><div style={{ width: '100%', background: 'var(--accent)' }}></div></div></div>
                            </div>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hv-mb-base"><div className="hv-mb-notch"></div></div>
        </div>
        <div className="hv-badge hv-b-deal"><span className="hv-deal-$">$</span>Negocio cerrado</div>
    </div>
);

/* CONTENIDO — Cinema display with video editor */
const ContentVisual: React.FC = () => (
    <div className="hv-scene hv-content">
        <div className="hv-imac hv-imac-content">
            <div className="hv-imac-screen">
                <div className="hv-mb-topbar">
                    <div className="hv-dots"><i /><i /><i /></div>
                    <div className="hv-mb-tabs"><span className="hv-tab-active">Premiere Pro</span></div>
                </div>
                <div className="hv-vid-editor">
                    <div className="hv-vid-preview">
                        <div className="hv-vid-play">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z" /></svg>
                        </div>
                        <div className="hv-vid-timecode">00:24:12</div>
                    </div>
                    <div className="hv-vid-timeline">
                        <div className="hv-tl-ruler"><span>0s</span><span>5s</span><span>10s</span><span>15s</span></div>
                        <div className="hv-tl-tracks">
                            <div className="hv-tl-track">
                                <div className="hv-tl-label">V1</div>
                                <div className="hv-tl-clips">
                                    <div className="hv-clip hv-clip-v1"></div>
                                    <div className="hv-clip hv-clip-v2"></div>
                                    <div className="hv-clip hv-clip-v3"></div>
                                </div>
                            </div>
                            <div className="hv-tl-track">
                                <div className="hv-tl-label">A1</div>
                                <div className="hv-tl-clips">
                                    <div className="hv-clip hv-clip-a1"></div>
                                </div>
                            </div>
                        </div>
                        <div className="hv-playhead"><div className="hv-ph-head"></div></div>
                    </div>
                </div>
            </div>
            <div className="hv-imac-chin"></div>
            <div className="hv-imac-stand"></div>
            <div className="hv-imac-foot"></div>
        </div>
        <div className="hv-badge hv-b-export"><span className="hv-export-icon">↓</span>Export 4K</div>
    </div>
);

/* Main export */
const heroVisualMap: Record<string, React.FC> = {
    'tecnologia': TechVisual,
    'diseno': DesignVisual,
    'marketing': MarketingVisual,
    'ventas': SalesVisual,
    'contenido': ContentVisual,
};

interface HeroVisualProps {
    slug: string;
    accent: string;
}

const HeroVisual: React.FC<HeroVisualProps> = ({ slug, accent }) => {
    const Visual = heroVisualMap[slug];
    if (!Visual) return null;
    return (
        <div className="hv-wrapper" style={{ '--accent': accent } as React.CSSProperties}>
            <Visual />
        </div>
    );
};

export default HeroVisual;
