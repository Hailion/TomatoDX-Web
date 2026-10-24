
const Collaborators = () => {
    return (
        <section id="collaborators" style={{ padding: '60px 0', backgroundColor: 'var(--bg-card)', borderBottom: '1px solid var(--color-border)' }}>
            <div className="container">
                <p style={{
                    textAlign: 'center',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    color: 'var(--color-text-light)',
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    marginBottom: '2.5rem'
                }}>
                    Research & Technology Partners
                </p>

                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '4rem',
                    opacity: 0.6
                }}>
                    {/* Using text blocks as placeholders for logos for now, as is professional for research projects */}
                    <div style={{ textAlign: 'center' }}>
                        <span style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--color-dark)' }}>EIAR</span>
                        <p style={{ fontSize: '0.6rem', marginTop: '4px', color: 'var(--color-text-light)' }}>Agrarian Research</p>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <span style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--color-dark)' }}>SU</span>
                        <p style={{ fontSize: '0.6rem', marginTop: '4px', color: 'var(--color-text-light)' }}>Samara University</p>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <span style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--color-dark)' }}>TENSORFLOW</span>
                        <p style={{ fontSize: '0.6rem', marginTop: '4px', color: 'var(--color-text-light)' }}>Edge AI Library</p>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <span style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--color-dark)' }}>PLANT VILLAGE</span>
                        <p style={{ fontSize: '0.6rem', marginTop: '4px', color: 'var(--color-text-light)' }}>Dataset Partner</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Collaborators;
