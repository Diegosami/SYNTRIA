'use client';
import NumberTicker from '../../components/ui/NumberTicker';
import './AuthorityBar.css';

const AuthorityBar: React.FC = () => {
    const stats = [
        { number: 300, prefix: '+', suffix: '%', label: 'Crecimiento promedio' },
        { number: 20, prefix: '', suffix: '+', label: 'Empresas escaladas' },
        { number: 3, prefix: '', suffix: '', label: 'Productos propios' },
    ];

    const logos = [
        { name: 'Awake', image: '/LOGO_AWAKE.svg' },
        { name: 'Best4U', image: '/LOGO_BEST4U.svg' },
        { name: 'Botzi', image: '/Botzi_Logo.svg' },
    ];

    return (
        <section className="authority-bar">
            <div className="container">
                {/* Stats Grid */}
                <div className="authority-stats" data-aos="fade-up">
                    {stats.map((stat, index) => (
                        <div key={index} className="authority-stat">
                            <span className="stat-number">
                                <NumberTicker
                                    value={stat.number}
                                    prefix={stat.prefix}
                                    suffix={stat.suffix}
                                    delay={index * 0.2}
                                    className="text-inherit"
                                />
                            </span>
                            <span className="stat-label">{stat.label}</span>
                        </div>
                    ))}
                </div>

                {/* Logos */}
                <div className="authority-logos" data-aos="fade-up" data-aos-delay="200">
                    <p className="logos-label">Empresas que confían en nosotros</p>
                    <div className="logos-row">
                        {logos.map((logo, index) => (
                            <div key={index} className="logo-item">
                                <img src={logo.image} alt={logo.name} className="logo-image" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AuthorityBar;
