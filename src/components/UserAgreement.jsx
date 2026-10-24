
const UserAgreement = () => {
    return (
        <section id="terms" style={{ padding: '80px 0', backgroundColor: 'var(--bg-subtle)' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--color-dark)' }}>Terms of Service</h2>
                <div style={{ color: 'var(--color-text-light)', lineHeight: '1.8' }}>
                    <p style={{ marginBottom: '1.5rem' }}>Last Updated: January 2026</p>
                    <h3 style={{ color: 'var(--color-dark)', marginTop: '2rem', marginBottom: '1rem' }}>1. Acceptance of Terms</h3>
                    <p style={{ marginBottom: '1.5rem' }}>
                        By downloading or using the TomatoDx application, you agree to be bound by these terms. This tool is provided for agricultural educational and diagnostic support.
                    </p>
                    <h3 style={{ color: 'var(--color-dark)', marginTop: '2rem', marginBottom: '1rem' }}>2. Use of AI Diagnosis</h3>
                    <p style={{ marginBottom: '1.5rem' }}>
                        TomatoDx is a decision-support tool for farmers and gardeners. It does not replace professional agronomic advice or laboratory diagnosis. Always consult local agricultural extension services for critical crop health decisions, especially before applying chemical treatments.
                    </p>
                    <h3 style={{ color: 'var(--color-dark)', marginTop: '2rem', marginBottom: '1rem' }}>3. Limitation of Liability</h3>
                    <p style={{ marginBottom: '1.5rem' }}>
                        The developers of TomatoDx are not liable for any crop loss or damage resulting from the use of the application. The tool is intended to support, not replace, professional agricultural advice.
                    </p>
                    <h3 style={{ color: 'var(--color-dark)', marginTop: '2rem', marginBottom: '1rem' }}>4. Open Source & Community</h3>
                    <p style={{ marginBottom: '1.5rem' }}>
                        TomatoDx is a research project. We encourage community feedback and participation through our official Telegram channels and Telegram community groups.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default UserAgreement;
