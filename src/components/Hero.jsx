import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Send, ChevronRight } from 'lucide-react';

const Hero = () => {
    const [isIOS, setIsIOS] = useState(false);
    const [theme, setTheme] = useState(document.documentElement.getAttribute('data-theme') || 'light');

    useEffect(() => {
        // Simple iOS detection
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;
        if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            setIsIOS(true);
        }

        // Theme detection
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'data-theme') {
                    setTheme(document.documentElement.getAttribute('data-theme'));
                }
            });
        });

        observer.observe(document.documentElement, { attributes: true });
        return () => observer.disconnect();
    }, []);

    return (
        <section id="hero" className="hero-section">
            <div className="container hero-container">

                {/* Left Content */}
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.5rem 1rem',
                        backgroundColor: 'rgba(46, 125, 50, 0.1)',
                        color: 'var(--color-primary)',
                        borderRadius: '50px',
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        marginBottom: '1.5rem',
                        border: '1px solid rgba(46, 125, 50, 0.2)'
                    }}>
                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-primary)' }}></span>
                        v1.0 Now Available
                    </div>

                    <h1 className="hero-title">
                        Heal Your Harvest with AI-Powered Care.
                    </h1>

                    <p className="hero-subtitle">
                        TomatoDx helps Ethiopian farmers detect tomato diseases on the phone—offline, in English, Amharic, or Afaan Oromoo—with treatment guidance after each scan.
                    </p>

                    <div className="hero-metrics" aria-label="TomatoDx highlights">
                        <span className="hero-metric">Offline AI</span>
                        <span className="hero-metric">10 disease classes</span>
                        <span className="hero-metric">3 languages</span>
                    </div>

                    <div className="hero-buttons">
                        <a
                            href="https://drive.google.com/uc?export=download&id=1NtmCJ8tT1PzOxomjkbGOnR9r1GQdfwYS"
                            className="btn btn-primary"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Download size={20} /> Download App
                        </a>
                        <a
                            href="https://t.me/TomatoDx"
                            className="btn btn-secondary"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Send size={20} /> Join Community
                        </a>
                    </div>

                    {/* <div style={{ marginTop: '2.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div style={{ display: 'flex' }}>
                            //  User avatars placeholder 
                            <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '2px solid #fff', backgroundColor: '#ddd', backgroundImage: 'url(https://randomuser.me/api/portraits/men/32.jpg)', backgroundSize: 'cover' }}></div>
                            <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '2px solid #fff', backgroundColor: '#ddd', backgroundImage: 'url(https://randomuser.me/api/portraits/women/44.jpg)', backgroundSize: 'cover', marginLeft: '-15px' }}></div>
                            <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '2px solid #fff', backgroundColor: '#ddd', backgroundImage: 'url(https://randomuser.me/api/portraits/men/85.jpg)', backgroundSize: 'cover', marginLeft: '-15px' }}></div>
                        </div>
                        <p style={{ fontSize: '0.9rem', color: '#666' }}>Trusted by <strong>500+ farmers</strong></p>
                    </div> */}

                </motion.div>

                {/* Right Image (Mockup) */}
                <motion.div
                    className="hero-image-container"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="hero-phone-frame">
                        <div className={`hero-phone-notch ${isIOS ? 'notch-ios' : 'notch-android'}`}></div>
                        <div className="hero-phone-screen">
                            <img
                                src={theme === 'dark' ? "assets/real_app_ui_dark.jpg" : "assets/real_app_ui.jpg"}
                                alt="TomatoDx App Interface"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />

                            {/* Floating Badge */}
                            {/* <motion.div
                                style={{
                                    position: 'absolute',
                                    bottom: '20px',
                                    right: '0px',
                                    background: '#fff',
                                    padding: '1rem',
                                    borderRadius: '16px',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.75rem',
                                    maxWidth: '200px'
                                }}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 1, type: "spring" }}
                            >
                                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#E8F5E9', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)' }}>
                                    <ChevronRight size={24} />
                                </div>
                                <div>
                                    <p style={{ fontSize: '0.8rem', color: '#666' }}>Diagnosis Speed</p>
                                    <p style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--color-dark)' }}>&lt; 500ms</p>
                                </div>
                            </motion.div> */}
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
