'use client';
import { useEffect, useRef, useState } from 'react';
import './CustomCursor.css';

const CustomCursor: React.FC = () => {
    const dotRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    useEffect(() => {
        // Detect touch devices
        const checkTouch = () => {
            setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
        };
        checkTouch();
        if (isTouchDevice) return;

        const moveCursor = (e: MouseEvent) => {
            if (!isVisible) setIsVisible(true);
            if (dotRef.current) {
                dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
            }
            if (ringRef.current) {
                ringRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
            }
        };

        const handleMouseEnter = () => setIsVisible(true);
        const handleMouseLeave = () => setIsVisible(false);

        const addHoverListeners = () => {
            const interactives = document.querySelectorAll('a, button, input, textarea, select, [role="button"]');
            interactives.forEach(el => {
                el.addEventListener('mouseenter', () => setIsHovering(true));
                el.addEventListener('mouseleave', () => setIsHovering(false));
            });
        };

        document.addEventListener('mousemove', moveCursor);
        document.addEventListener('mouseenter', handleMouseEnter);
        document.addEventListener('mouseleave', handleMouseLeave);

        // Initial setup + observe DOM changes for new interactive elements
        addHoverListeners();
        const observer = new MutationObserver(() => {
            addHoverListeners();
        });
        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            document.removeEventListener('mousemove', moveCursor);
            document.removeEventListener('mouseenter', handleMouseEnter);
            document.removeEventListener('mouseleave', handleMouseLeave);
            observer.disconnect();
        };
    }, [isTouchDevice, isVisible]);

    if (isTouchDevice) return null;

    return (
        <>
            <div
                ref={dotRef}
                className={`cursor-dot ${isVisible ? 'visible' : ''} ${isHovering ? 'hovering' : ''}`}
            />
            <div
                ref={ringRef}
                className={`cursor-ring ${isVisible ? 'visible' : ''} ${isHovering ? 'hovering' : ''}`}
            />
        </>
    );
};

export default CustomCursor;
