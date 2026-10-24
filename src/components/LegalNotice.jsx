
const LegalNotice = () => {
    return (
        <section id="privacy" style={{ padding: '80px 0', backgroundColor: 'var(--bg-body)' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--color-dark)' }}>Privacy Policy</h2>
                <div style={{ color: 'var(--color-text-light)', lineHeight: '1.8' }}>
                    <p style={{ marginBottom: '1.5rem' }}>Last Updated: January 2026</p>
                    <p style={{ marginBottom: '1.5rem' }}>
                        At TomatoDx, we are committed to protecting the privacy of our users, particularly the smallholder farmers and agricultural workers who use our offline AI diagnosis tools.
                    </p>
                    <h3 style={{ color: 'var(--color-dark)', marginTop: '2rem', marginBottom: '1rem' }}>1. Offline Processing</h3>
                    <p style={{ marginBottom: '1.5rem' }}>
                        The core function of TomatoDx—the AI-powered disease diagnosis—happens entirely on your device. We do not upload your photos to any server for processing.
                    </p>
                    <h3 style={{ color: 'var(--color-dark)', marginTop: '2rem', marginBottom: '1rem' }}>2. Data Collection</h3>
                    <p style={{ marginBottom: '1.5rem' }}>
                        The TomatoDx application does not require registration. We do not collect personally identifiable information (PII) such as names, phone numbers, or exact GPS locations unless explicitly shared by the user for research purposes.
                    </p>
                    <h3 style={{ color: 'var(--color-dark)', marginTop: '2rem', marginBottom: '1rem' }}>3. Scan History</h3>
                    <p style={{ marginBottom: '1.5rem' }}>
                        Scan history is stored in a local SQLite database on your device. Sharing results is optional and happens only when you start it.
                    </p>
                    <h3 style={{ color: 'var(--color-dark)', marginTop: '2rem', marginBottom: '1rem' }}>4. Contact Us</h3>
                    <p style={{ marginBottom: '1.5rem' }}>
                        For any questions regarding this policy, please contact us at tomatodx615@gmail.com.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default LegalNotice;
