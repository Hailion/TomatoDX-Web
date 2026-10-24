import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const feedback = [
    {
        text: "TomatoDx has changed the way we handle disease outbreaks. Being able to get an instant diagnosis in areas with zero connectivity is a game-changer.",
        author: "Endashaw T.",
        role: "Agriculture Extension Worker"
    },
    {
        text: "Having treatment advice, scan history, and Amharic plus Afaan Oromoo in one offline app makes it easier to follow up after a diagnosis.",
        author: "Teshome M.",
        role: "Plant Pathology Researcher"
    }
];

const Feedback = () => {
    return (
        <section style={{ padding: '80px 0', backgroundColor: 'var(--bg-body)' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {feedback.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            style={{
                                padding: '2.5rem',
                                backgroundColor: 'var(--bg-card)',
                                borderRadius: '24px',
                                border: '1px solid var(--color-border)',
                                position: 'relative'
                            }}
                        >
                            <Quote
                                size={40}
                                style={{ position: 'absolute', top: '20px', left: '20px', opacity: 0.1, color: 'var(--color-primary)' }}
                            />
                            <p style={{ fontSize: '1.1rem', fontStyle: 'italic', marginBottom: '1.5rem', position: 'relative', zIndex: 1, color: 'var(--color-dark)' }}>
                                "{item.text}"
                            </p>
                            <div>
                                <h4 style={{ marginBottom: '0.2rem', color: 'var(--color-dark)' }}>{item.author}</h4>
                                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-light)' }}>{item.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Feedback;
