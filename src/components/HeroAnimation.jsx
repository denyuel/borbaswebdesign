import React from 'react';

export default function HeroAnimation({ onContactClick }) {
    return (
        <section className="hero" id="hero">
            <div className="container hero-grid">
                <div className="hero-text-wrap">
                    <span className="badge">Akár 48 órás expressz átadás</span>
                    <h1>Profi és villámgyors weboldal a vállalkozásodnak – akár <span className="gradient-text">48 órán belül</span>!</h1>
                    <p>Ha átadod a kész szövegeket, képeket és a dizájn elképzeléseidet, 2 nap alatt kész, Google-barát honlapot adok a kezedbe, rejtett havidíjak nélkül.</p>
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
