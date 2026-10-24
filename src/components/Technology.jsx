import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Layers, Database } from 'lucide-react';

const Technology = () => {
    return (
        <section id="technology" className="section" style={{ padding: '6rem 0' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <div style={{ textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 'bold', color: 'var(--color-text-light)', marginBottom: '1rem' }}>Methodology</div>
                    <h2 className="section-title">Powered by Advanced Machine Learning</h2>
                    <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.2rem', color: 'var(--color-text-light)' }}>
                        TomatoDx uses a Convolutional Neural Network based on MobileNetV2. Images are resized to 224×224 and normalized to [-1, 1] before on-device TensorFlow.js inference.
                    </p>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {[
                        {
                            icon: <Layers size={32} />,
                            title: "Image Preprocessing Pipeline",
                            text: "Rigorous transformation pipeline implementing cropping (224x224), tensor conversion, normalization to [-1, 1], and batching for optimal model compatibility."
                        },
                        {
                            icon: <Cpu size={32} />,
                            title: "Edge Inference with TFJS",
                            text: "The serialized model runs directly on the device using TensorFlow.js. The .predict() method outputs a confidence vector, selecting the highest probability class instantly."
                        },
                        {
                            icon: <Database size={32} />,
                            title: "10 Conditions + Unknown",
                            text: "The model classifies Early Blight, Late Blight, Leaf Mold, Septoria Leaf Spot, Tomato Yellow Leaf Curl, Target Spot, Spider Mites, Tomato Mosaic Virus, Bacterial Spot, and Healthy leaves, and can return Unknown for unrecognized inputs. Held-out test accuracy is 91.65% on 15,253 images; field photos have not yet been evaluated."
                        }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            style={{
                                padding: '2rem',
                                border: '1px solid var(--color-border)',
                                borderRadius: 'var(--border-radius)',
                                backgroundColor: 'var(--bg-card)'
                            }}
                        >
                            <div style={{ width: '60px', height: '60px', backgroundColor: 'rgba(46, 125, 50, 0.1)', color: 'var(--color-primary)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                                {item.icon}
                            </div>
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: 'var(--color-dark)' }}>{item.title}</h3>
                            <p style={{ lineHeight: '1.7', color: 'var(--color-text-light)' }}>{item.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Technology;
