'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../i18n';

import Header from './Header';
import Footer from './Footer';
import CustomCursor from './CustomCursor/CustomCursor';

export default function Providers({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: true,
            offset: 50,
        });
    }, []);

    return (
        <>
            <CustomCursor />
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
}
