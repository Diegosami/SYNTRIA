'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import './NotFound.css';

const NotFound: React.FC = () => {
    return (
        <section className="not-found">
            <div className="not-found-bg">
                <div className="not-found-gradient"></div>
            </div>

            <div className="not-found-content">
                <motion.div
                    className="not-found-number"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                >
                    <span className="number-4">4</span>
                    <span className="number-0">
                        <span className="number-0-glow"></span>
                        0
                    </span>
                    <span className="number-4">4</span>
                </motion.div>

                <motion.h1
                    className="not-found-title"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    Página no encontrada
                </motion.h1>

                <motion.p
                    className="not-found-description"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                    Lo sentimos, la página que buscas no existe o fue movida.
                </motion.p>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    <Link href="/" className="btn btn-primary btn-lg">
                        Volver al inicio
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default NotFound;
