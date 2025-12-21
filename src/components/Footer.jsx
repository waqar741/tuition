import React, { useState } from 'react';
import {
    Facebook, Instagram, Youtube, ExternalLink,
    ChevronRight, Sparkles, Star, Phone, Mail, MapPin, Heart
} from 'lucide-react';

export default function Footer() {
    const [developerInfo, setDeveloperInfo] = useState(false);

    const socialLinks = [
        { icon: <Facebook size={20} />, url: "#", label: "Facebook" },
        { icon: <Instagram size={20} />, url: "#", label: "Instagram" },
        { icon: <Youtube size={20} />, url: "#", label: "YouTube" }
    ];

    const quickLinks = [
        { label: "Home", href: "/" },
        { label: "About Us", href: "/#about" },
        { label: "Resources", href: "/#resources" },
        { label: "Contact", href: "/#contact" }
    ];

    return (
        <footer className="footer" style={{ borderTop: '1px solid var(--border-color)', background: 'var(--color-surface)', paddingTop: '3rem', paddingBottom: '7rem' }}>
            {/* pb-28/7rem to account for floating dock */}
            <div className="container">
                {/* Main Footer */}
                <div className="footer-main" style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', marginBottom: '2rem' }}>
                    <div className="footer-brand">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                            <img src="/android-chrome-512x512.png" alt="Logo" style={{ height: '32px', width: '32px' }} />
                            <h3 className="footer-title" style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--color-primary)', margin: 0 }}>Future Tuition Classes</h3>
                        </div>
                        <p className="footer-tagline" style={{ color: 'var(--color-text-secondary)', marginBottom: '1rem', lineHeight: '1.6' }}>
                            Shaping minds, building futures with excellence in education
                        </p>
                        <div className="footer-social" style={{ display: 'flex', gap: '0.75rem' }}>
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    className="social-link"
                                    aria-label={social.label}
                                    style={{
                                        width: '2.5rem', height: '2.5rem', borderRadius: '0.5rem',
                                        background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        color: 'var(--color-text)', transition: 'all 0.3s ease'
                                    }}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="footer-links">
                        <h4 className="footer-heading" style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--color-text)' }}>Quick Links</h4>
                        <ul className="link-list" style={{ listStyle: 'none' }}>
                            {quickLinks.map((link, index) => (
                                <li key={index} style={{ marginBottom: '0.5rem' }}>
                                    <a href={link.href} className="footer-link" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-secondary)', textDecoration: 'none' }}>
                                        <ChevronRight size={16} />
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h4 className="footer-heading" style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--color-text)' }}>Contact Info</h4>
                        <div className="contact-list" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <a href="tel:+919594499718" className="contact-link" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--color-text-secondary)', textDecoration: 'none' }}>
                                <Phone size={18} />
                                +91 95944 99718
                            </a>
                            <a href="mailto:info@futuretuition.com" className="contact-link" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--color-text-secondary)', textDecoration: 'none' }}>
                                <Mail size={18} />
                                info@futuretuition.com
                            </a>
                            <a
                                href="https://www.google.com/maps/@19.0412619,73.0102948,3a,75y,56.65h,90.25t/data=!3m7!1e1!3m5!1spZZTb8ZHxowOmIgYKiixyw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-0.24541063744885605%26panoid%3DpZZTb8ZHxowOmIgYKiixyw%26yaw%3D56.65343638580325!7i13312!8i6656?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-link"
                                style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'var(--color-text-secondary)', textDecoration: 'none', cursor: 'pointer' }}
                            >
                                <MapPin size={18} style={{ marginTop: '0.2rem', minWidth: '18px' }} />
                                <span>Shop No 2, Siddhi Dham Apartment, Sarsole Gaon, Sector 6, Nerul, Navi Mumbai</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Interactive Developer Section */}
                <div className="footer-dev" style={{ margin: '2rem 0', paddingTop: '2rem', borderTop: '1px solid var(--border-color)' }}>
                    <button
                        className="dev-toggle"
                        onClick={() => setDeveloperInfo(!developerInfo)}
                        aria-expanded={developerInfo}
                        style={{ width: '100%', background: 'none', border: 'none', padding: '0', cursor: 'pointer', textAlign: 'center' }}
                    >
                        <div className="dev-toggle-content" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-secondary)', fontSize: '0.875rem' }}>
                            <span>👨‍💻 Built with passion by </span>
                            <span className="dev-name" style={{ fontWeight: '600', color: 'var(--color-primary)' }}>Ahmed Shaikh</span>
                            <ChevronRight size={16} style={{ transform: developerInfo ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }} />
                        </div>
                    </button>

                    {developerInfo && (
                        <div className="dev-info" style={{ marginTop: '1rem', animation: 'slideDown 0.3s ease' }}>
                            <div className="dev-card" style={{ background: 'var(--color-surface)', borderRadius: '1rem', padding: '1.5rem', border: '1px solid var(--border-color)', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', maxWidth: '500px', margin: '0 auto' }}>
                                <div className="dev-header" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                    <div className="dev-avatar" style={{ width: '3rem', height: '3rem', background: 'linear-gradient(135deg, #4361ee, #3a86ff)', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                                        <Sparkles size={24} />
                                    </div>
                                    <div style={{ textAlign: 'left' }}>
                                        <h4 className="dev-title" style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.25rem', color: 'var(--color-text)' }}>Ahmed Shaikh</h4>
                                        <p className="dev-subtitle" style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>Full Stack Developer</p>
                                    </div>
                                </div>
                                <div className="dev-tech" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                                    {['React', 'Node.js', 'UI/UX', 'Modern Web'].map(tech => (
                                        <span key={tech} className="tech-badge" style={{ padding: '0.25rem 0.75rem', background: 'var(--bg-tertiary)', borderRadius: '1rem', fontSize: '0.75rem', fontWeight: '500', color: 'var(--color-primary)' }}>{tech}</span>
                                    ))}
                                </div>
                                <p className="dev-message" style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6', marginBottom: '1.5rem', textAlign: 'left' }}>
                                    Crafting digital experiences with code and creativity. Check out my portfolio for more projects.
                                </p>
                                <div className="dev-actions" style={{ display: 'flex', gap: '0.75rem' }}>
                                    {/* Portfolio link removed as per request */}
                                    <button className="dev-btn" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '0.75rem 1rem', borderRadius: '0.75rem', border: '1px solid var(--border-color)', background: 'var(--bg-tertiary)', color: 'var(--color-text)', fontWeight: '500', cursor: 'default', textDecoration: 'none' }}>
                                        <Sparkles size={16} />
                                        Full Stack Dev
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Copyright */}
                <div className="footer-bottom" style={{ textAlign: 'center', paddingTop: '2rem', borderTop: '1px solid var(--border-color)' }}>
                    <p className="copyright" style={{ color: 'var(--color-text-secondary)', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                        © {new Date().getFullYear()} Future Tuition Classes. All rights reserved.
                    </p>
                    <p className="made-with" style={{ color: 'var(--color-text-secondary)', fontSize: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.25rem' }}>
                        Made with <Heart size={12} fill="red" color="red" />
                    </p>
                </div>
            </div>
        </footer>
    );
}
