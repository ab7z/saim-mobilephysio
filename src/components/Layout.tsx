import React, { ReactNode } from 'react';
import Footer from './Footer';

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <a href="#main-content" className="skipLink">
                Zum Hauptinhalt springen
            </a>
            <main id="main-content" className="main">
                {children}
            </main>
            <Footer />
        </>
    );
}
