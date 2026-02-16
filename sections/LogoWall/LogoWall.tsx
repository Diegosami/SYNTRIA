'use client';
import './LogoWall.css';

const LogoWall: React.FC = () => {
    const logos = [
        { name: 'Botzi', image: '/Botzi_Logo.svg' },
        { name: 'Awake', image: '/LOGO_AWAKE.svg' },
        { name: 'Best4U', image: '/LOGO_BEST4U.svg' },
    ];

    return (
        <section className="logo-wall">
            <div className="logo-wall-header">
                <p>Empresas que confían en nosotros</p>
            </div>

            <div className="logos-container">
                {logos.map((logo, index) => (
                    <div key={index} className="logo-item">
                        <img src={logo.image} alt={logo.name} className="logo-image" />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default LogoWall;
