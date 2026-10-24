import React from 'react';
import { Send, Download, Github, Mail, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: 'var(--color-white)', color: 'var(--color-text-main)', paddingTop: '6rem', borderTop: '1px solid var(--color-border)' }}>

            {/* CTA Section */}
            <div id="download" className="container" style={{ marginBottom: '6rem' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>

                    {/* App Download Card */}
                    <div style={{
                        background: 'linear-gradient(135deg, #1B5E20, #2E7D32)',
                        borderRadius: '24px',
                        padding: '3rem 2rem',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        boxShadow: '0 10px 30px rgba(46, 125, 50, 0.3)',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <div style={{ zIndex: 1 }}>
                            <h3 style={{ fontSize: '2rem', color: '#fff', marginBottom: '0.5rem' }}>Get the App</h3>
                            <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '2rem' }}>Instant, offline diagnosis for your crops.</p>

                            <div style={{ background: '#fff', padding: '12px', borderRadius: '16px', display: 'inline-block', marginBottom: '1.5rem' }}>
                                <img
                                    src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://drive.google.com/uc?export=download%26id=1NtmCJ8tT1PzOxomjkbGOnR9r1GQdfwYS"
                                    alt="Download APK QR"
                                    style={{ width: '140px', height: '140px', display: 'block' }}
                                />
                            </div>

                            <a
                                href="https://drive.google.com/uc?export=download&id=1NtmCJ8tT1PzOxomjkbGOnR9r1GQdfwYS"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn"
                                style={{
                                    backgroundColor: '#fff',
                                    color: '#1B5E20',
                                    padding: '0.8rem 1.5rem',
                                    fontSize: '1rem',
                                    width: '100%',
                                    maxWidth: '250px'
                                }}
                            >
                                <Download size={18} /> Download APK
                            </a>
                        </div>
                    </div>

                    {/* Telegram Community Card */}
                    <div style={{
                        background: 'linear-gradient(135deg, #0277BD, #0288D1)',
                        borderRadius: '24px',
                        padding: '3rem 2rem',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        boxShadow: '0 10px 30px rgba(2, 119, 189, 0.3)',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <div style={{ zIndex: 1 }}>
                            <h3 style={{ fontSize: '2rem', color: '#fff', marginBottom: '0.5rem' }}>Join Community</h3>
                            <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '2rem' }}>Connect with experts and other farmers.</p>

                            <div style={{ background: '#fff', padding: '12px', borderRadius: '16px', display: 'inline-block', marginBottom: '1.5rem' }}>
                                <img
                                    src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://t.me/TomatoDx"
                                    alt="Telegram QR"
                                    style={{ width: '140px', height: '140px', display: 'block' }}
                                />
                            </div>

                            <a
                                href="https://t.me/TomatoDx"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn"
                                style={{
                                    backgroundColor: '#fff',
                                    color: '#0277BD',
                                    padding: '0.8rem 1.5rem',
                                    fontSize: '1rem',
                                    width: '100%',
                                    maxWidth: '250px'
                                }}
                            >
                                <Send size={18} /> Join Channel
                            </a>
                        </div>
                    </div>

                </div>
            </div>

            {/* Main Footer Content */}
            <div className="container" style={{ paddingBottom: '4rem', borderTop: '1px solid var(--color-border)', paddingTop: '4rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem' }}>

                    <div>
                        <h3 style={{ color: 'var(--color-dark)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            TomatoDx
                        </h3>
                        <p style={{ color: 'var(--color-text-light)', lineHeight: '1.6' }}>
                            A research-driven initiative improving food security in Ethiopia through accessible AI technology.
                        </p>
                    </div>

                    <div>
                        <h4 style={{ color: 'var(--color-dark)', marginBottom: '1.5rem' }}>Project</h4>
                        <ul style={{ color: 'var(--color-text-light)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <li><a href="#about">About</a></li>
                            <li><a href="#features">Features</a></li>
                            <li><a href="#technology">Methodology</a></li>
                            <li><a href="#impact">Impact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ color: 'var(--color-dark)', marginBottom: '1.5rem' }}>Contact & Support</h4>
                        <ul style={{ color: 'var(--color-text-light)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}><Mail size={18} /> tomatodx615@gmail.com</li>
                            <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}><MapPin size={18} /> Samara University</li>
                            <li>
                                <a
                                    href="https://github.com/Hailion/TomatoDx---Offline-Tomato-Disease-Diagnosis-App"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', color: 'inherit' }}
                                >
                                    <Github size={18} /> GitHub
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

                <div style={{ textAlign: 'center', marginTop: '4rem', color: 'var(--color-text-light)', fontSize: '0.9rem' }}>
                    &copy; {new Date().getFullYear()} TomatoDx Project. All rights reserved. <br />
                    <span style={{ fontSize: '0.8rem', marginTop: '0.5rem', display: 'block', color: 'var(--color-text-light)', opacity: 0.7 }}>Designed for Impact.</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
