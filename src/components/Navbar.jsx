import { Leaf, Menu, X, Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);

        // Initialize theme
        document.documentElement.setAttribute('data-theme', theme);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [theme]);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Impact', href: '#impact' },
        { name: 'Team', href: '#team' },
        { name: 'FAQ', href: '#faq' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                // Use a slight transparency for glassmorphism, adapt to theme
                backgroundColor: isScrolled ? 'var(--bg-nav)' : 'transparent',
                backdropFilter: isScrolled ? 'blur(10px)' : 'none',
                boxShadow: isScrolled ? 'var(--shadow-sm)' : 'none',
                transition: 'all 0.3s ease',
                padding: isScrolled ? '1rem 0' : '1.5rem 0',
            }}
        >
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.5rem', fontWeight: '700', color: 'var(--color-primary)' }}>
                    <Leaf size={28} fill="currentColor" />
                    TomatoDx
                </a>

                {/* Desktop Nav */}
                <div style={{ display: 'none', gap: '2rem', alignItems: 'center' }} className="desktop-nav">
                    <style>{`
            @media (min-width: 768px) {
              .desktop-nav { display: flex !important; }
              .mobile-toggle { display: none !important; }
            }
          `}</style>
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            style={{
                                fontWeight: '500',
                                color: isScrolled ? 'var(--color-text-main)' : (theme === 'dark' ? 'var(--color-text-main)' : 'var(--color-dark)'),
                                opacity: isScrolled ? 1 : 0.9
                            }}
                        >
                            {link.name}
                        </a>
                    ))}

                    {/* Theme Toggle */}
                    <button
                        onClick={toggleTheme}
                        style={{
                            background: 'none',
                            border: 'none',
                            color: isScrolled ? 'var(--color-text-main)' : (theme === 'dark' ? 'var(--color-text-main)' : 'var(--color-dark)'),
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '0.5rem'
                        }}
                        aria-label="Toggle Dark Mode"
                    >
                        {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                    </button>

                    <a href="#download" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                        Download App
                    </a>
                </div>

                {/* Mobile Toggle */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }} className="mobile-toggle">
                    <button
                        onClick={toggleTheme}
                        style={{
                            background: 'none',
                            border: 'none',
                            color: 'var(--color-text-main)',
                            cursor: 'pointer'
                        }}
                    >
                        {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                    </button>

                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        style={{ background: 'none', color: 'var(--color-text-main)' }}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div style={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        right: 0,
                        backgroundColor: 'var(--bg-card)',
                        padding: '2rem',
                        boxShadow: 'var(--shadow-lg)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1.5rem',
                        alignItems: 'center',
                        color: 'var(--color-text-main)'
                    }}>
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                style={{ fontSize: '1.1rem', fontWeight: '500' }}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a href="#download" className="btn btn-primary" onClick={() => setIsMobileMenuOpen(false)}>
                            Download App
                        </a>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
