import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const KeyFeatures = () => {
    const features = [
        "Image Capture & Upload: Photograph a leaf with the camera or pick from the gallery.",
        "Trilingual Support: Full localization in English, Amharic, and Afaan Oromoo.",
        "Offline AI diagnosis: TensorFlow.js inference on the device, no internet required.",
        "10 disease classes + Unknown: Rejects non-leaf or unrecognized inputs instead of forcing a label.",
        "Detailed Diagnosis: Confidence, severity, symptoms, and treatment advice.",
        "History & insights: Local SQLite storage for past scans and crop-health trends.",
        "Daily Reminders: Localized 9:00 AM notifications to inspect crops.",
        "Ethiopian calendar & themes: Local dates plus dark and light modes.",
        "Admin Dashboard: Management of disease database and analytics."
    ];

    return (
        <section id="features" className="section" style={{ backgroundColor: 'var(--bg-card)', color: 'var(--color-text-main)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                    <style>{`
            @media (max-width: 768px) {
              #features .container > div { grid-template-columns: 1fr !important; }
            }
          `}</style>

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="section-title" style={{ textAlign: 'left', color: 'var(--color-dark)', left: 0, transform: 'none' }}>
                            Key Features
                        </h2>
                        <div className="section-title-underline" style={{ width: '60px', height: '4px', backgroundColor: 'var(--color-primary)', marginBottom: '2rem' }}></div>

                        <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)', marginBottom: '2rem', lineHeight: '1.8' }}>
                            Built with the specific needs of Ethiopian farmers in mind, TomatoDx combines advanced technology with accessibility.
                        </p>

                        <a href="#technology" className="btn btn-primary">Learn about the Tech</a>
                    </motion.div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '1rem',
                                    padding: '1rem',
                                    backgroundColor: 'var(--bg-subtle)',
                                    borderRadius: '8px',
                                    border: '1px solid var(--color-border)'
                                }}
                            >
                                <CheckCircle2 color="var(--color-primary)" />
                                <span style={{ fontWeight: '500', color: 'var(--color-text-main)' }}>{feature}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default KeyFeatures;
