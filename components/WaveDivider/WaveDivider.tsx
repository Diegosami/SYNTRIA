'use client';
import './WaveDivider.css';

interface WaveDividerProps {
    color?: string;
    bgColor?: string;
    flip?: boolean;
    variant?: 'wave' | 'curve' | 'slant' | 'waveUp' | 'curveUp';
}

const WaveDivider: React.FC<WaveDividerProps> = ({
    color = 'var(--color-bg-primary)',
    bgColor = 'transparent',
    flip = false,
    variant = 'wave'
}) => {
    const paths: Record<string, string> = {
        // Waves pointing DOWN (for light-to-dark transitions)
        wave: "M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,128C672,107,768,85,864,90.7C960,96,1056,128,1152,138.7C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
        curve: "M0,160L60,176C120,192,240,224,360,229.3C480,235,600,213,720,192C840,171,960,149,1080,160C1200,171,1320,213,1380,234.7L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z",
        slant: "M0,288L1440,96L1440,320L0,320Z",
        // Waves pointing UP (for dark-to-light transitions)
        waveUp: "M0,224L48,208C96,192,192,160,288,154.7C384,149,480,171,576,192C672,213,768,235,864,229.3C960,224,1056,192,1152,181.3C1248,171,1344,181,1392,186.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z",
        curveUp: "M0,160L60,144C120,128,240,96,360,90.7C480,85,600,107,720,128C840,149,960,171,1080,160C1200,149,1320,107,1380,85.3L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
    };

    return (
        <div
            className={`wave-divider ${flip ? 'flip' : ''}`}
            style={{ backgroundColor: bgColor }}
        >
            <svg
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill={color}
                    d={paths[variant]}
                />
            </svg>
        </div>
    );
};

export default WaveDivider;

