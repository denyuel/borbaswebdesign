import React, { useState, useEffect } from 'react';
import Logo from './Logo';

export default function Navbar({ onContactClick }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(prev => !prev);
    };

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`} id="header">
            <div className="container nav-container">
                <Logo id="logo-link" />
                
                <nav>
                    <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                        <li><a href="#hero" className="nav-link active" onClick={() => setIsMobileMenuOpen(false)}>Főoldal</a></li>
                        <li><a href="#szolgaltatasok" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Szolgáltatások</a></li>
                        <li><a href="#referenciak" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Referenciák</a></li>
                        <li><a href="#folyamat" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Hogyan dolgozom?</a></li>
                        <li><a href="#kalkulator" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Árkalkulátor</a></li>
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
