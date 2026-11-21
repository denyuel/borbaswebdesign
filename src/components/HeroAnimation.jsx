import React from 'react';

export default function HeroAnimation({ onContactClick }) {
    return (
        <section className="hero" id="hero">
            <div className="container hero-grid">
                <div className="hero-text-wrap">
                    <span className="badge">Akár 48 órás expressz átadás</span>
                    <h1>Profi és villámgyors weboldal a vállalkozásodnak – akár <span className="gradient-text">48 órán belül</span>!</h1>
                    <p>Tiszta, kézzel írt kóddal építem meg a honlapodat – villámgyors betöltéssel, 0 Ft kötelező havidíjjal, akár 48 órán belül.</p>
                    <div className="hero-actions">
                        <button 
                            className="btn-primary trigger-contact" 
                            id="hero-primary-cta"
                            onClick={() => onContactClick('landing', '')}
                        >
                            Kérj ajánlatot <span className="arrow">→</span>
                        </button>
                        <a href="#kalkulator" className="btn-secondary" id="hero-secondary-cta">Árkalkulátor <span className="arrow">→</span></a>
                    </div>
                    <div className="hero-trust-strip">
                        <span className="trust-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                            48 órás átadás
                        </span>
                        <span className="trust-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                            Google PageSpeed 95+
                        </span>
                        <span className="trust-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                            0 Ft havidíj
                        </span>
                    </div>
                </div>
                <div className="hero-visual-wrap">
                    <div className="hero-image-wrapper-outer">
                        <div className="hero-image-container">
                            <div className="hero-image-glow"></div>
                            <img src="/hero-graphic.png?v=17" alt="Borbás Webdesign Visual" className="hero-image" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
