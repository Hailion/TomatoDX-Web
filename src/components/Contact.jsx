import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, MessageCircle, Send } from 'lucide-react';

const Contact = () => {
    const [status, setStatus] = useState('');

    return (
        <section id="contact" style={{ padding: '80px 0', backgroundColor: 'var(--bg-subtle)' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
                    {/* ... (left side contact info remains same) ... */}
                    <div>
                        <h2 style={{ fontSize: '2.5rem', color: 'var(--color-dark)', marginBottom: '1.5rem' }}>Get in Touch</h2>
                        <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)', marginBottom: '2.5rem' }}>
                            Have questions about our research or need technical support with the app? Our team is here to help.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                <div style={{ color: 'var(--color-primary)', padding: '0.5rem', backgroundColor: 'rgba(46, 125, 50, 0.1)', borderRadius: '8px' }}>
                                    <Mail size={24} />
                                </div>
                                <div style={{ color: 'var(--color-text-main)' }}>
                                    <h4 style={{ marginBottom: '0.25rem' }}>Email Us</h4>
                                    <p style={{ color: 'var(--color-text-light)' }}>tomatodx615@gmail.com</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                <div style={{ color: '#0088cc', padding: '0.5rem', backgroundColor: 'rgba(0, 136, 204, 0.1)', borderRadius: '8px' }}>
                                    <MessageCircle size={24} />
                                </div>
                                <div style={{ color: 'var(--color-text-main)' }}>
                                    <h4 style={{ marginBottom: '0.25rem' }}>Phone</h4>
                                    <p style={{ color: 'var(--color-text-light)' }}>+251 904 781 246</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                <div style={{ color: '#ef4444', padding: '0.5rem', backgroundColor: 'rgba(239, 68, 68, 0.1)', borderRadius: '8px' }}>
                                    <MapPin size={24} />
                                </div>
                                <div style={{ color: 'var(--color-text-main)' }}>
                                    <h4 style={{ marginBottom: '0.25rem' }}>Location</h4>
                                    <p style={{ color: 'var(--color-text-light)' }}>
                                        Samara University<br />
                                        College of Engineering and Technology<br />
                                        Department of Computer Science
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        style={{
                            backgroundColor: 'var(--bg-card)',
                            padding: '2.5rem',
                            borderRadius: '16px',
                            boxShadow: 'var(--shadow-md)',
                            border: '1px solid var(--color-border)'
                        }}
                    >
                        {status === 'success' ? (
                            <div style={{ textAlign: 'center', padding: '2rem 0', color: 'var(--color-primary)' }}>
                                <div style={{ marginBottom: '1rem' }}>
                                    <Send size={48} />
                                </div>
                                <h3 style={{ marginBottom: '0.5rem' }}>Message Sent!</h3>
                                <p style={{ color: 'var(--color-text-light)' }}>Thank you for reaching out. We'll get back to you shortly.</p>
                                <button onClick={() => setStatus('')} className="btn" style={{ marginTop: '1.5rem', textDecoration: 'underline', color: 'var(--color-primary)' }}>
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form
                                onSubmit={async (e) => {
                                    e.preventDefault();
                                    const form = e.target;
                                    setStatus('sending');
                                    const data = new FormData(form);

                                    try {
                                        const response = await fetch("https://formspree.io/f/mqebajbw", {
                                            method: "POST",
                                            body: data,
                                            headers: {
                                                'Accept': 'application/json'
                                            }
                                        });

                                        if (response.ok) {
                                            form.reset();
                                            setStatus('success');
                                        } else {
                                            setStatus('error');
                                        }
                                    } catch (error) {
                                        setStatus('error');
                                    }
                                }}
                                style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
                            >
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <label style={{ fontWeight: '600', fontSize: '0.9rem', color: 'var(--color-text-main)' }}>Full Name</label>
                                    <input
                                        id="name"
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        required
                                        style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--color-border)', backgroundColor: 'var(--bg-body)', color: 'var(--color-text-main)', width: '100%' }}
                                    />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <label style={{ fontWeight: '600', fontSize: '0.9rem', color: 'var(--color-text-main)' }}>Email Address</label>
                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        placeholder="your@email.com"
                                        required
                                        style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--color-border)', backgroundColor: 'var(--bg-body)', color: 'var(--color-text-main)', width: '100%' }}
                                    />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <label style={{ fontWeight: '600', fontSize: '0.9rem', color: 'var(--color-text-main)' }}>Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        placeholder="How can we help you?"
                                        rows="4"
                                        required
                                        style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--color-border)', backgroundColor: 'var(--bg-body)', color: 'var(--color-text-main)', width: '100%', resize: 'none' }}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={status === 'sending'}
                                    className="btn btn-primary"
                                    style={{ width: '100%', justifyContent: 'center', padding: '1rem', opacity: status === 'sending' ? 0.7 : 1 }}
                                >
                                    <Send size={18} /> {status === 'sending' ? "Sending..." : "Send Message"}
                                </button>
                                {status === 'error' && (
                                    <p style={{ color: 'var(--color-secondary)', textAlign: 'center', fontSize: '0.9rem' }}>Something went wrong. Please try again.</p>
                                )}
                            </form>
                        )}
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
