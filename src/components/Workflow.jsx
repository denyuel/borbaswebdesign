import React from 'react';

const steps = [
    {
        number: '01',
        tag: '15 perces egyeztetés',
        title: 'Konzultáció & Célok',
        badge: 'Kötetlen & Ingyenes',
        desc: 'Átbeszéljük a céljaidat, a célközönségedet és a vevőszerző felépítést. Nem kell hetekig meetingelni.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                <path d="M8 9h8"/>
                <path d="M8 13h5"/>
            </svg>
        )
    },
    {
        number: '02',
        tag: 'Dizájn & Koncepció',
        title: 'Tervezés & Szöveg',
        badge: 'Átvállalom a szöveget',
        desc: 'Megtervezem a prémium arculatot, és összeállítom a vevőszerző szövegeket – nem kell magadtól írogatnod.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20h9"/>
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
            </svg>
        )
    },
    {
        number: '03',
        tag: '100% Egyedi kód',
        title: 'Fejlesztés & 95+ SEO',
        badge: '0 Ft kötelező havidíj',
        desc: 'Kézzel, tiszta kóddal építem meg sablonok nélkül. Villámgyors sebesség mobilon és Google regisztráció.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6"/>
                <polyline points="8 6 2 12 8 18"/>
                <line x1="12" y1="2" x2="12" y2="22" strokeDasharray="3 3"/>
            </svg>
        )
    },
    {
        number: '04',
        tag: 'Kulcsrakész átadás',
        title: '48h Élesítés & Start',
        badge: 'Azonnali vevőszerzés',
        desc: 'Bekötöm a domaint, az online foglalót vagy űrlapot, betanítom a kezelést, és indulhat az ügyfélszerzés.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
            </svg>
        )
    }
];

export default function Workflow() {
    return (
        <section className="section-padding workflow-section" id="folyamat">
            <div className="container">
                <div className="section-title-wrap text-center">
                    <span className="badge">Munkafolyamat</span>
                    <h2 className="section-title">Hogyan készül a <span>weboldalad</span>?</h2>
                    <p>Zéró macera és átlátható lépések: a tervezéstől a 48 órán belüli élesítésig.</p>
                </div>
                
                <div className="workflow-grid">
                    {steps.map((step, idx) => (
                        <div key={idx} className="workflow-card">
                            <div className="workflow-card-top">
                                <span className="workflow-step-num">{step.number}</span>
                                <div className="workflow-icon-box">
                                    {step.icon}
                                </div>
                            </div>
                            
                            <div className="workflow-card-body">
                                <span className="workflow-badge-pill">{step.badge}</span>
                                <h3 className="workflow-card-heading">{step.title}</h3>
                                <p className="workflow-card-text">{step.desc}</p>
                            </div>

                            <div className="workflow-card-progress">
                                <div className="workflow-progress-line"></div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="workflow-footer-reassurance">
                    <div className="workflow-reassurance-item">
                        <svg className="reassurance-svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                        <span>Akár 48 órás szállítási garancia</span>
                    </div>
                    <div className="workflow-reassurance-item">
                        <svg className="reassurance-svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                        <span>0 Ft kötelező havidíj, 100% saját tulajdon</span>
                    </div>
                    <div className="workflow-reassurance-item">
                        <svg className="reassurance-svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                        <span>Személyes figyelem, közvetlen kapcsolat</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
