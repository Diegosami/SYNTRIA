'use client';
import { cn } from "../../lib/utils";

interface DotPatternProps {
    width?: number;
    height?: number;
    cx?: number;
    cy?: number;
    cr?: number;
    className?: string;
}

export const DotPattern: React.FC<DotPatternProps> = ({
    width = 16,
    height = 16,
    cx = 1,
    cy = 1,
    cr = 1,
    className,
}) => {
    const id = `dot-pattern-${Math.random().toString(36).substring(7)}`;

    return (
        <svg
            aria-hidden="true"
            className={cn(
                "pointer-events-none absolute inset-0 h-full w-full fill-neutral-400/30",
                className
            )}
        >
            <defs>
                <pattern
                    id={id}
                    width={width}
                    height={height}
                    patternUnits="userSpaceOnUse"
                    patternContentUnits="userSpaceOnUse"
                >
                    <circle cx={cx} cy={cy} r={cr} />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#${id})`} />
        </svg>
    );
};

export default DotPattern;
