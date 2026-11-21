import React from 'react';

export default function ClosingCta({ onContactClick }) {
    return (
        <section className="section-padding closing-cta-section">
            <div className="container">
                <div className="closing-cta-card">
                    <div className="closing-cta-glow"></div>
                    <div className="closing-cta-content">
                        <span className="closing-cta-badge">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                            Akár 48 órás indulás
                        </span>
                        <h2 className="closing-cta-title">
                            Készen állsz egy <span>vevőszerző</span> weboldalra?
                        </h2>
                        <p className="closing-cta-desc">
                            Beszéljünk 15 percet kötetlenül, és megmutatom, hogyan tudunk 0 Ft kötelező havidíjjal egy villámgyors, modern honlapot építeni a vállalkozásodnak.
                        </p>
                        <div className="closing-cta-actions">
                            <button
                                className="btn-primary closing-cta-btn"
                                onClick={() => onContactClick('landing', '')}
                            >
                                Ingyenes ajánlatkérés <span className="arrow">→</span>
                            </button>
                            <a
                                href="mailto:daniel.borbas@borbaswebdesign.hu"
                                className="closing-cta-email"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                                <span>daniel.borbas@borbaswebdesign.hu</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
