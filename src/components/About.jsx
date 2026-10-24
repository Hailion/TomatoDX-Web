import { motion } from 'framer-motion';
import { Smartphone, Sprout, WifiOff } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="section" style={{ backgroundColor: 'var(--bg-subtle)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}
                >
                    <h2 className="section-title" style={{ color: 'var(--color-dark)' }}>About TomatoDx</h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-text-main)', marginBottom: '2rem' }}>
                        TomatoDx empowers farmers and gardeners with instant, accurate tomato disease detection using artificial intelligence. Our goal is to make plant healthcare accessible to everyone, helping to increase crop yields and reduce pesticide misuse.
                    </p>
                    <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)', marginBottom: '3rem' }}>
                        Specifically made for farmers and gardeners of Ethiopia, the app operates without internet and provides localized treatment advice in <strong>English, Amharic, and Afaan Oromoo</strong>.
                    </p>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
                    {[
                        { icon: <WifiOff size={40} />, title: "Offline AI-Powered Detection", desc: "Advanced machine learning for accurate disease identification without internet." },
                        { icon: <Smartphone size={40} />, title: "Instant Results", desc: "Get diagnosis in seconds with detailed treatment recommendations." },
                        { icon: <Sprout size={40} />, title: "Scan History", desc: "Track your plant health over time with comprehensive history." }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            style={{ padding: '2rem', backgroundColor: 'var(--bg-card)', borderRadius: 'var(--border-radius)', boxShadow: 'var(--shadow-sm)', textAlign: 'center', border: '1px solid var(--color-border)' }}
                        >
                            <div style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>{item.icon}</div>
                            <h3 style={{ marginBottom: '0.5rem', color: 'var(--color-dark)' }}>{item.title}</h3>
                            <p style={{ color: 'var(--color-text-light)' }}>{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
