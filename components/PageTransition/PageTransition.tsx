'use client';
import { motion } from 'framer-motion';

interface PageTransitionProps {
    children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.4,
                    ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
                },
            }}
            exit={{
                opacity: 0,
                y: -8,
                transition: {
                    duration: 0.25,
                    ease: [0.4, 0, 1, 1] as [number, number, number, number],
                },
            }}
        >
            {children}
        </motion.div>
    );
};

export default PageTransition;
