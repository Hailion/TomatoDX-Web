import { motion } from 'framer-motion';
import { Activity, BrainCircuit, Camera } from 'lucide-react';

const HowItWorks = () => {
    const steps = [
        {
            icon: <Camera size={48} />,
            title: "1. Capture",
            desc: "Photograph a tomato leaf with the in-app camera or choose an image from the gallery."
        },
        {
            icon: <BrainCircuit size={48} />,
            title: "2. On-device AI",
            desc: "The image is resized to 224×224 and classified locally with TensorFlow.js. Nothing is uploaded."
        },
        {
            icon: <Activity size={48} />,
            title: "3. Diagnose & store",
            desc: "See confidence, severity, symptoms, and treatment, then save the scan in local SQLite history."
        }
    ];

    return (
        <section id="how-it-works" className="section">
            <div className="container">
                <h2 className="section-title">How It Works</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '2rem',
                        position: 'relative'
                    }}>
                        {/* Connecting line for desktop */}
                        <div style={{
                            position: 'absolute',
                            top: '50px',
                            left: '10%',
                            right: '10%',
                            height: '2px',
                            background: '#e0e0e0',
                            zIndex: -1,
                            display: 'none' // Hidden by default, enable via media query if needed but grid makes it hard. Keeping simple for now.
                        }}></div>

                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                style={{ textAlign: 'center', position: 'relative' }}
                            >
                                <div style={{
                                    width: '100px',
                                    height: '100px',
                                    borderRadius: '50%',
                                    backgroundColor: index === 1 ? 'var(--color-primary)' : 'var(--bg-card)',
                                    color: index === 1 ? '#fff' : 'var(--color-primary)',
                                    border: `2px solid var(--color-primary)`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    margin: '0 auto 1.5rem',
                                    boxShadow: 'var(--shadow-md)'
                                }}>
                                    {step.icon}
                                </div>
                                <h3 style={{ color: 'var(--color-dark)' }}>{step.title}</h3>
                                <p style={{ color: 'var(--color-text-light)', marginTop: '0.5rem' }}>{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
