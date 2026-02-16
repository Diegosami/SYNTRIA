import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Syntria | Ingeniería de Crecimiento para Empresas del Futuro';
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#0a0a0a',
                    backgroundImage: 'radial-gradient(circle at 25px 25px, #202020 2%, transparent 0%), radial-gradient(circle at 75px 75px, #202020 2%, transparent 0%)',
                    backgroundSize: '100px 100px',
                    fontFamily: 'sans-serif',
                }}
            >
                {/* Glow effect */}
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(85, 255, 75, 0.05), transparent 70%)',
                    }}
                />

                {/* Logo / Brand */}
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: 20,
                    }}
                >
                    <svg
                        width="80"
                        height="80"
                        viewBox="0 0 180 190"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path fill="#55ff4b" d="M71.52.08c10.81.92,16.26,9.69,22.41,17.36,4.29,5.36,9.57,11.59,13.31,17.24,8.32,12.58,4.87,29.14-6.75,38.28l-17.96,15.36c-.24.02-.27-1.09-.29-1.28-.4-6.61-.83-16.55-4.02-22.37-2.18-3.97-7.56-10.09-12.48-6.81l-17.83,14.9-.21.58-.03,48.36c-2.48,2.64-5.39,4.79-8.1,7.18-3.26,2.88-6.44,5.87-9.72,8.73-3.85,3.36-7.75,6.67-11.64,9.98-.42.06-5.81-4.83-6.52-5.52C1.52,132.11.42,125.64.09,111.64c-.3-13.03.2-26.43.41-39.46.14-8.96-1.06-17.18,5.16-24.59,10.31-9.32,20.93-18.37,31.54-27.38,5.9-5.01,12.47-11.23,18.59-15.73,2.94-2.16,7.53-4.06,11.18-4.4,1.21-.11,3.35-.1,4.56,0Z" />
                        <path fill="#55ff4b" d="M156.42,37.57c.03.17.09.35.22.47,4.9,4.17,12.16,11.36,14.7,17.24,2.89,6.7,1.67,17.56,1.74,25.03.13,13.89.71,28.37.21,42.24-.35,9.83-2.14,14.39-9.33,21.02-6.21,5.72-13.39,11.36-19.95,16.75-6.2,5.09-12.44,10.21-18.76,15.16-8.1,6.34-14.33,13-25.62,10.57-5.48-1.18-8.92-4.52-12.56-8.47-6.21-6.76-12.9-14.86-18.54-22.12s-8.63-14.64-6.69-24.13c1.71-8.37,7.97-14.21,13.72-20l15.28-14.07c.45-.08.27.2.29.49.12,1.61-.09,3.34,0,4.97.4,8.12,2.37,21.76,10.58,25.71,4.44,2.14,6.71.68,10.15-2.03,4.71-3.7,9.01-7.96,13.71-11.68l.29-.7c-.07-16.59-.05-33.15.47-49.7l29.78-26.76h.28Z" />
                    </svg>
                </div>

                <div
                    style={{
                        fontSize: 64,
                        fontWeight: 800,
                        color: 'white',
                        letterSpacing: '-2px',
                        marginBottom: 10,
                        textAlign: 'center',
                    }}
                >
                    SYNTRIA
                </div>

                <div
                    style={{
                        fontSize: 24,
                        color: 'rgba(255, 255, 255, 0.7)',
                        textTransform: 'uppercase',
                        letterSpacing: '4px',
                        textAlign: 'center',
                    }}
                >
                    Ingeniería de Crecimiento
                </div>

                <div
                    style={{
                        marginTop: 40,
                        display: 'flex',
                        gap: 20,
                    }}
                >
                    <div style={{ padding: '8px 16px', borderRadius: 20, border: '1px solid #333', color: '#888', fontSize: 16 }}>Software</div>
                    <div style={{ padding: '8px 16px', borderRadius: 20, border: '1px solid #333', color: '#888', fontSize: 16 }}>AI</div>
                    <div style={{ padding: '8px 16px', borderRadius: 20, border: '1px solid #333', color: '#888', fontSize: 16 }}>Design</div>
                    <div style={{ padding: '8px 16px', borderRadius: 20, border: '1px solid #333', color: '#888', fontSize: 16 }}>Marketing</div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
