import React from 'react';
import { motion } from 'framer-motion';

const Impact = () => {
    return (
        <section id="impact" className="section" style={{ backgroundColor: 'var(--bg-subtle)' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                    <style>{`
             @media (max-width: 968px) {
              #impact .container > div { grid-template-columns: 1fr !important; }
            }
          `}</style>

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', height: '100%', minHeight: '400px' }}
                    >
                        {/* Using a custom generated image for impact visual */}
                        <img
                            src="/assets/ethiopian_farmer.png"
                            alt="Ethiopian Farmer in Tomato Field"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="section-title" style={{ textAlign: 'left', left: 0, transform: 'none' }}>
                            Impact on Ethiopian Agriculture
                        </h2>
                        <div className="section-title-underline" style={{ width: '60px', height: '4px', backgroundColor: 'var(--color-primary)', marginBottom: '2rem' }}></div>

                        <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: 'var(--color-text-main)' }}>
                            The primary objective of TomatoDx is to support early disease detection and improve decision-making for Ethiopian farmers through an offline-capable, uncertainty-aware diagnosis tool.
                        </p>

                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {[
                                "Supports Ethiopia's 2 million tomato farmers.",
                                "Reduces yield losses (currently 8-10%) due to disease.",
                                "Prevents misleading 'forced' classifications for unknown issues.",
                                "Accessible to low-literate users with minimal interaction steps.",
                                "Promotes sustainable agriculture and food security."
                            ].map((item, i) => (
                                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem' }}>
                                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-secondary)' }}></span>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <div style={{ marginTop: '3rem', display: 'flex', gap: '2rem' }}>
                            <div>
                                <h3 style={{ fontSize: '2.5rem', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>30%</h3>
                                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-light)' }}>Potential Yield Increase</p>
                            </div>
                            <div>
                                <h3 style={{ fontSize: '2.5rem', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>0s</h3>
                                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-light)' }}>Internet Latency</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Impact;
