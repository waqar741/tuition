import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { MessageCircle } from 'lucide-react';
import './Header.css';

export default function Layout() {
    const phoneNumber = "9594499718";
    const whatsappUrl = `https://wa.me/91${phoneNumber}?text=${encodeURIComponent("Hello! Who is this?")}`;

    // Logic to hide footer on class pages
    const location = useLocation();
    const isClassPage = location.pathname.includes('/class/');

    return (
        <>
            <header className="top-header">
                <div className="logo-container" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <img src="/android-chrome-512x512.png" alt="Future Tuition Logo" style={{ height: '48px', width: '48px' }} />
                    <div className="logo-text" style={{ fontSize: '1.5rem' }}>Future Tuition Classes</div>
                </div>
                <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="header-contact flex items-center gap-2 hover:opacity-80 transition-opacity"
                    style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}
                >
                    <MessageCircle size={18} color="#25d366" />
                    <span style={{ color: '#25d366', fontWeight: '600' }}>WhatsApp</span>
                </a>
            </header>

            <main style={{ paddingTop: '60px', animation: 'fadeIn 0.5s ease-in-out' }}>
                <Outlet />
            </main>

            {!isClassPage && <Footer />}
            <Header />
        </>
    );
}
