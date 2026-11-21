import React, { useState, useEffect } from 'react';
import Logo from './Logo';

const NAV_ITEMS = [
    { id: 'hero', label: 'Főoldal' },
    { id: 'rolam', label: 'Rólam' },
    { id: 'szolgaltatasok', label: 'Szolgáltatások' },
    { id: 'referenciak', label: 'Referenciák' },
    { id: 'folyamat', label: 'Folyamat' },
    { id: 'kalkulator', label: 'Árkalkulátor' },
    { id: 'gyik', label: 'GYIK' }
];

export default function Navbar({ onContactClick }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            const scrollPos = window.scrollY + 140;
            let current = 'hero';
            for (const item of NAV_ITEMS) {
                const el = document.getElementById(item.id);
                if (el && el.offsetTop <= scrollPos) {
                    current = item.id;
                }
            }
            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMobileMenuOpen]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(prev => !prev);
    };

    const handleNavClick = (id) => {
        setActiveSection(id);
        setIsMobileMenuOpen(false);
    };

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''} ${isMobileMenuOpen ? 'menu-open' : ''}`} id="header">
            <div className="container nav-container">
                <Logo id="logo-link" />
                
                <nav>
                    <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                        {NAV_ITEMS.map(item => (
                            <li key={item.id}>
                                <a
                                    href={`#${item.id}`}
                                    className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                                    onClick={() => handleNavClick(item.id)}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                
                <div className="nav-cta">
                    <button className="btn-primary trigger-contact" id="nav-cta-btn" onClick={onContactClick}>
                        Kapcsolat <span className="arrow">→</span>
                    </button>
                    <div 
                        className={`mobile-nav-toggle ${isMobileMenuOpen ? 'active' : ''}`} 
                        id="mobile-menu-toggle"
                        onClick={toggleMobileMenu}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </header>
    );
}
