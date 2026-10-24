import React from 'react';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

const Languages = () => {
    const languages = [
        { name: "English", native: "English", code: "EN", color: "rgba(227, 242, 253, 0.5)", border: "#1976D2", text: "#0D47A1" },
        { name: "Amharic", native: "አማርኛ", code: "AM", color: "rgba(232, 245, 233, 0.5)", border: "#2E7D32", text: "#1B5E20" },
        { name: "Afaan Oromoo", native: "Afaan Oromoo", code: "ORO", color: "rgba(255, 235, 238, 0.5)", border: "#C62828", text: "#B71C1C" }
    ];

    return (
        <section id="languages" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Background Decoration */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '120%',
                height: '120%',
                background: 'radial-gradient(circle at center, rgba(46, 125, 50, 0.03) 0%, transparent 70%)',
                zIndex: -1
            }}></div>

            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        background: 'var(--bg-subtle)',
                        boxShadow: 'var(--shadow-sm)',
                        marginBottom: '1.5rem',
                        border: '1px solid var(--color-border)'
                    }}>
                        <Globe size={32} color="var(--color-primary)" />
                    </div>
                    <h2 className="section-title" style={{ display: 'block', marginBottom: '1rem', left: 'auto', transform: 'none' }}>
                        Built for Everyone
                    </h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--color-text-light)', fontSize: '1.1rem' }}>
                        TomatoDx speaks your language. We believe technology should be accessible to every farmer, regardless of the language they speak.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2rem',
                    maxWidth: '1000px',
                    margin: '0 auto'
                }}>
                    {languages.map((lang, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -5, scale: 1.02 }}
                            style={{
                                padding: '2.5rem',
                                backgroundColor: 'var(--bg-card)',
                                borderRadius: '24px',
                                border: `1px solid var(--color-border)`,
                                boxShadow: 'var(--shadow-md)',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center',
                                position: 'relative',
                                overflow: 'hidden',
                                cursor: 'default'
                            }}
                        >
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '6px',
                                backgroundColor: lang.border
                            }}></div>

                            <div style={{
                                width: '50px',
                                height: '50px',
                                borderRadius: '12px',
                                backgroundColor: lang.color,
                                color: lang.text,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontWeight: '800',
                                fontSize: '1.2rem',
                                marginBottom: '1.5rem',
                                border: `1px solid ${lang.border}30`
                            }}>
                                {lang.code}
                            </div>

                            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--color-dark)', marginBottom: '0.5rem' }}>
                                {lang.native}
                            </h3>
                            <p style={{ fontSize: '1rem', color: 'var(--color-text-light)', fontWeight: '500' }}>
                                {lang.name}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Languages;
