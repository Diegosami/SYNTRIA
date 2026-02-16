'use client';
import { useEffect, useState } from 'react';
import './PageLoader.css';

const PageLoader: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate minimum load time for smooth experience
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1200);

        return () => clearTimeout(timer);
    }, []);

    if (!isLoading) return null;

    return (
        <div className={`page-loader ${!isLoading ? 'loader-hidden' : ''}`}>
            <div className="loader-content">
                <div className="loader-logo">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                        <path
                            d="M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20 20-8.954 20-20S35.046 4 24 4z"
                            stroke="var(--color-accent)"
                            strokeWidth="2"
                            strokeLinecap="round"
                            className="loader-circle"
                        />
                    </svg>
                    <span className="loader-text">Syntria</span>
                </div>
                <div className="loader-bar">
                    <div className="loader-progress"></div>
                </div>
            </div>
        </div>
    );
};

export default PageLoader;
