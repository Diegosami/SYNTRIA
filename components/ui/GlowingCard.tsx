'use client';
import { cn } from "../../lib/utils";

interface GlowingCardProps {
    children: React.ReactNode;
    className?: string;
    glowColor?: string;
}

export const GlowingCard: React.FC<GlowingCardProps> = ({
    children,
    className,
    glowColor = "#55FF4B",
}) => {
    return (
        <div
            className={cn(
                "relative group",
                className
            )}
        >
            {/* Glow effect */}
            <div
                className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur-xl"
                style={{
                    background: `linear-gradient(135deg, ${glowColor}40, ${glowColor}20, transparent)`,
                }}
            />
            {/* Border glow */}
            <div
                className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-75 transition duration-500"
                style={{
                    background: `linear-gradient(135deg, ${glowColor}, transparent, ${glowColor}50)`,
                }}
            />
            {/* Card content */}
            <div className="relative bg-slate-950 rounded-2xl p-6 h-full border border-slate-800 group-hover:border-transparent transition duration-300">
                {children}
            </div>
        </div>
    );
};

export default GlowingCard;
