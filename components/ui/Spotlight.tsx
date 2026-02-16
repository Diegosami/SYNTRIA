'use client';
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

interface SpotlightProps {
    className?: string;
    fill?: string;
}

export const Spotlight: React.FC<SpotlightProps> = ({ className, fill = "#55FF4B" }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: MouseEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleMouseEnter = () => setOpacity(1);
    const handleMouseLeave = () => setOpacity(0);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        container.addEventListener("mousemove", handleMouseMove);
        container.addEventListener("mouseenter", handleMouseEnter);
        container.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            container.removeEventListener("mousemove", handleMouseMove);
            container.removeEventListener("mouseenter", handleMouseEnter);
            container.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className={cn(className)}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                overflow: 'hidden',
                pointerEvents: 'none'
            }}
        >
            <motion.div
                style={{
                    position: 'absolute',
                    pointerEvents: 'none',
                    width: 400,
                    height: 400,
                    background: `radial-gradient(circle, ${fill}20 0%, transparent 70%)`,
                    borderRadius: '50%',
                }}
                animate={{
                    x: position.x - 200,
                    y: position.y - 200,
                    opacity,
                }}
                transition={{ type: "spring", damping: 30, stiffness: 200 }}
            />
        </div>
    );
};

export default Spotlight;
