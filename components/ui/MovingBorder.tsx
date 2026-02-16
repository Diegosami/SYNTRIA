'use client';
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

interface MovingBorderProps {
    children: React.ReactNode;
    duration?: number;
    className?: string;
    containerClassName?: string;
    borderClassName?: string;
    as?: React.ElementType;
}

export const MovingBorder: React.FC<MovingBorderProps> = ({
    children,
    duration = 2000,
    className,
    containerClassName,
    borderClassName,
    as: Component = "div",
}) => {
    return (
        <Component
            className={cn(
                "relative p-[1px] overflow-hidden rounded-xl bg-transparent",
                containerClassName
            )}
        >
            <motion.div
                className={cn(
                    "absolute inset-0",
                    borderClassName
                )}
                style={{
                    background: `linear-gradient(90deg, transparent, #55FF4B, transparent)`,
                }}
                animate={{
                    rotate: [0, 360],
                }}
                transition={{
                    duration: duration / 1000,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />
            <div
                className={cn(
                    "relative bg-white rounded-xl h-full w-full",
                    className
                )}
            >
                {children}
            </div>
        </Component>
    );
};

export default MovingBorder;
