import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Book, Users, Award, Star, Trophy,
    Phone, Mail, MapPin, MessageCircle,
    Facebook, Instagram, Youtube, ExternalLink,
    ChevronRight, Sparkles, Target, Clock
} from 'lucide-react';
import './Home.css';

export function Hero() {
    return (
        <section className="hero">
            <div className="hero-bg">
                <div className="hero-dots"></div>
                <div className="hero-gradient"></div>
            </div>
            <div className="container">
                <div className="hero-content">
                    <div className="hero-badge">
                        <Sparkles size={16} />
                        <span>Empowering Future Leaders</span>
                    </div>
                    <h1 className="hero-title">
                        Future Tuition
                        <span className="hero-highlight">Classes</span>
                    </h1>
                    <p className="hero-subtitle">
                        Focused coaching for KG to Standard 10. We prioritize strong basics, regular practice, and personal guidance to help every student improve their results.                    </p>
                    <div className="hero-actions">
                        <a href="tel:+919594499718" className="hero-btn-primary">
                            <Phone size={20} />
                            Quick Enquiry
                        </a>
                        <a href="#resources" className="hero-btn-secondary">
                            Start Learning
                            <ChevronRight size={20} />
                        </a>
                    </div>

                    {/* Stats */}
                    <div className="hero-stats">
                        <div className="hero-stat">
                            <div className="stat-number">90%</div>
                            <div className="stat-label">Success Rate</div>
                        </div>
                        <div className="hero-stat-divider"></div>
                        <div className="hero-stat">
                            <div className="stat-number">100+</div>
                            <div className="stat-label">Students</div>
                        </div>
                        <div className="hero-stat-divider"></div>
                        <div className="hero-stat">
                            <div className="stat-number">5+</div>
                            <div className="stat-label">Years Experience</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export function Toppers() {
    const toppers = [
        { name: "", percent: "", std: "10th", achievement: "" },
        { name: "", percent: "", std: "10th", achievement: "" },
        { name: "", percent: "", std: "10th", achievement: "" },
        { name: "", percent: "", std: "10th", achievement: "" },
    ];

    return (
        <section className="section container">
            <div className="section-header">
                <div className="section-badge">
                    <Trophy size={20} />
                    Achievements
                </div>
                <h2 className="section-title">Our Star Performers</h2>
                <p className="section-description">
                    Students who excelled with our guidance and mentorship
                </p>
            </div>
            <div className="toppers-grid">
                {toppers.map((t, i) => (
                    <div key={i} className="topper-card">
                        <div className="topper-rank">{i + 1}</div>
                        <div className="topper-content">
                            <div className="topper-icon">
                                <Trophy size={24} />
                            </div>
                            <div className="topper-info">
                                <div className="topper-percent">{t.percent}</div>
                                <h3 className="topper-name">{t.name}</h3>
                                <div className="topper-details">
                                    <span className="topper-std">Class {t.std}</span>
                                    {/* <span className="topper-achievement">{t.achievement}</span> */}
                                </div>
                            </div>
                        </div>
                        <div className="topper-glow"></div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export function About() {
    const features = [
        {
            icon: <Users size={28} />,
            title: "Expert Faculty",
            desc: "Learn from experienced educators dedicated to your success.",
            color: "var(--color-accent)"
        },
        {
            icon: <Book size={28} />,
            title: "Comprehensive Material",
            desc: "Detailed study notes and practice papers for every subject.",
            color: "var(--color-secondary)"
        },
        {
            icon: <Award size={28} />,
            title: "Proven Results",
            desc: "Consistent track record of academic excellence.",
            color: "var(--color-primary)"
        },
        {
            icon: <Target size={28} />,
            title: "Personalized Approach",
            desc: "Individual attention with small batch sizes.",
            color: "var(--color-success)"
        }
    ];

    return (
        <section id="about" className="section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Why Choose Future Tuition?</h2>
                    <p className="section-description">
                        We combine innovation with proven teaching methodologies
                    </p>
                </div>
                <div className="features-grid">
                    {features.map((f, i) => (
                        <div key={i} className="feature-card">
                            <div className="feature-icon-wrapper" style={{ backgroundColor: `${f.color}15` }}>
                                <div className="feature-icon" style={{ color: f.color }}>
                                    {f.icon}
                                </div>
                            </div>
                            <h3 className="feature-title">{f.title}</h3>
                            <p className="feature-desc">{f.desc}</p>
                            <div className="feature-highlight" style={{ backgroundColor: f.color }}></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function ResourceHub() {
    const standards = [
        { std: 6, subjects: 4, icon: "🔢" },
        { std: 7, subjects: 4, icon: "🧪" },
        { std: 8, subjects: 4, icon: "📚" },
        { std: 9, subjects: 4, icon: "⚡" },
        { std: 10, subjects: 4, icon: "🎯" }
    ];

    return (
        <section id="resources" className="section">
            <div className="container">
                <div className="section-header">
                    <div className="section-badge">
                        <Book size={20} />
                        Learning Resources
                    </div>
                    <h2 className="section-title">Study Materials</h2>
                    <p className="section-description">
                        Select your standard to access comprehensive study materials
                    </p>
                </div>
                <div className="standards-grid">
                    {standards.map(({ std, subjects, icon }) => (
                        <Link to={`/class/${std}`} key={std} className="standard-card">
                            <div className="standard-content">
                                <div className="standard-header">
                                    <span className="standard-icon-emoji">{icon}</span>
                                    <div className="standard-number-wrapper">
                                        <span className="standard-number">{std}</span>
                                        <span className="standard-th">th</span>
                                    </div>
                                </div>
                                <div className="standard-info">
                                    <span className="standard-label">Standard</span>
                                    <div className="standard-subjects">{subjects} Subjects</div>
                                </div>
                            </div>
                            <div className="standard-hover">
                                <ChevronRight size={24} />
                            </div>
                            <div className="standard-glow"></div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function ContactCTA() {
    const phoneNumber = "+919594499718"; // New Number
    const whatsappMessage = "Hello! I'm interested in joining Future Tuition Classes. Can you please provide more information?";
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;

    return (
        <section id="contact" className="section">
            <div className="container">
                <div className="contact-cta">
                    <div className="contact-content">
                        <div className="section-badge">
                            <MessageCircle size={20} />
                            Get Started
                        </div>
                        <h2 className="contact-title">Ready to Excel?</h2>
                        <p className="contact-description">
                            Join Future Tuition Classes today and take the first step towards academic excellence
                        </p>
                        <div className="contact-actions">
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-btn-whatsapp"
                            >
                                <MessageCircle size={20} />
                                WhatsApp Now
                            </a>
                            <a href={`tel:${phoneNumber}`} className="contact-btn-call">
                                <Phone size={20} />
                                Call Us
                            </a>
                        </div>
                    </div>
                    <div className="contact-info">
                        <div className="contact-item">
                            <Clock size={20} />
                            <div>
                                <div className="contact-item-label">Timings</div>
                                <div className="contact-item-value">3 PM - 8 PM</div>
                            </div>
                        </div>
                        <div className="contact-item">
                            <MapPin size={20} />
                            <div>
                                <div className="contact-item-label">Location</div>
                                <div className="contact-item-value">Near City Center</div>
                            </div>
                        </div>
                        <div className="contact-item">
                            <Mail size={20} />
                            <div>
                                <div className="contact-item-label">Email</div>
                                <div className="contact-item-value">info@futuretuition.com</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

