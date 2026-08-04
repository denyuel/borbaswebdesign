import React, { useState, useEffect } from 'react';

const basePrices = {
    landing: 150000,
    business: 250000,
    webshop: 450000
};

const featurePrices = {
    reviews: 20000,
    chat: 15000,
    seo: 35000,
    admin: 70000,
    support: 25000
};

const meetingPrices = {
    online: 0,
    szeged: 15000,
    budapest: 50000
};

const packageFeatures = {
    landing: [
        "1 oldalas, bemutatkozó és értékesítő felépítés",
        "Célzott üzenet & felhívás gombok",
        "Online időpontfoglaló (Salonic, Google Calendar) integráció",
        "Egyedi, rád szabott arculati design",
        "Maximális betöltési sebesség (gyors oldal)",
        "Google kereső regisztráció (SEO alapok)",
        "Teljes átadás (tárhely & domain beállítása)"
    ],
    business: [
        "Több aloldalas struktúra (5-7 aloldal)",
        "Online időpontfoglaló (Salonic, Google Calendar) integráció",
        "Képgaléria / Portfólió a munkáidról",
        "Google Térkép & Kapcsolati rész",
        "Egyedi, rád szabott arculati design",
        "Maximális betöltési sebesség (gyors oldal)",
        "Google kereső regisztráció (SEO alapok)",
        "Teljes átadás (tárhely & domain beállítása)"
    ],
    webshop: [
        "Termékkatalógus & kategóriák",
        "Bankkártyás fizetés (Stripe / Barion)",
        "Automata számlázó & Szállítási rendszer",
        "Egyedi, rád szabott arculati design",
        "Maximális betöltési sebesség (gyors oldal)",
        "Google kereső regisztráció (SEO alapok)",
        "Teljes átadás (tárhely & domain beállítása)"
    ]
};

export default function Calculator({ onCtaClick }) {
    const [selectedType, setSelectedType] = useState('landing');
    const [selectedFeatures, setSelectedFeatures] = useState([]);
    const [selectedMeeting, setSelectedMeeting] = useState('online');
    
    const [openGroups, setOpenGroups] = useState({
        type: true,
        features: false,
        meeting: false
    });

    const [displayPrice, setDisplayPrice] = useState(150000);

    const targetPrice = basePrices[selectedType] + 
        selectedFeatures.reduce((sum, f) => sum + featurePrices[f], 0) + 
        meetingPrices[selectedMeeting];

    useEffect(() => {
        let start = displayPrice;
        let end = targetPrice;
        if (start === end) return;
        
        let duration = 400;
        let startTime = performance.now();
        let frameId;

        const update = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeProgress = progress * (2 - progress);
            const current = Math.floor(start + (end - start) * easeProgress);
            setDisplayPrice(current);
            
            if (progress < 1) {
                frameId = requestAnimationFrame(update);
            }
        };

        frameId = requestAnimationFrame(update);
        return () => cancelAnimationFrame(frameId);
    }, [targetPrice]);

    const handleTypeChange = (type) => {
        setSelectedType(type);
        setTimeout(() => {
            setOpenGroups(prev => ({
                ...prev,
                type: false,
                features: true
            }));
        }, 300);
    };

    const handleFeatureToggle = (feature) => {
        setSelectedFeatures(prev => 
            prev.includes(feature) 
                ? prev.filter(f => f !== feature) 
                : [...prev, feature]
        );
    };

    const handleMeetingChange = (meet) => {
        setSelectedMeeting(meet);
    };

    const toggleGroup = (group) => {
        setOpenGroups(prev => ({
            ...prev,
            [group]: !prev[group]
        }));
    };

    const handleCalculatorSubmit = () => {
        const featureNames = {
            reviews: 'Google Értékelések',
            chat: 'Azonnali Ügyfélchat',
            seo: 'Google Helyezésjavítás',
            admin: 'Saját Szerkesztőfelület',
            support: '3 hónap VIP támogatás'
        };
        const meetingNames = {
            online: 'Online konzultáció',
            szeged: 'Személyes találkozó Szegeden',
            budapest: 'Személyes találkozó Budapesten'
        };

        let message = '';
        if (selectedFeatures.length > 0) {
            message += `Érdekelne az árajánlat az alábbi extra opciókkal:\n- ${selectedFeatures.map(f => featureNames[f]).join('\n- ')}\n\n`;
        }
        message += `Konzultáció / Találkozó: ${meetingNames[selectedMeeting]}`;

        onCtaClick(selectedType, message);
    };

    const formatPrice = (num) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "\u00A0") + "\u00A0Ft-tól";
    };

    return (
        <section className="section-padding" id="kalkulator">
            <div className="container">
                <div className="section-title-wrap">
                    <span className="badge">Interaktív Kalkulátor</span>
                    <h2 className="section-title">Számolj ki egy <span>irányárat</span>!</h2>
                    <p>Válaszd ki a projekted igényeit, és lásd azonnal a hozzávetőleges árat és a benne foglalt szolgáltatásokat.</p>
                </div>
                
                <div className="calculator-container">
                    {/* Left: Options Selection */}
                    <div className="calc-options-wrap">
                        {/* Group 1: Project Type */}
                        <div className={`calc-group ${openGroups.type ? 'active' : ''}`} id="calc-group-type">
                            <button type="button" className="calc-group-trigger" onClick={() => toggleGroup('type')}>
                                <span className="calc-label">1. Weboldal Típusa</span>
                                <span className="calc-group-icon">{openGroups.type ? '−' : '+'}</span>
                            </button>
                            <div className="calc-group-content">
                                <div className="calc-grid">
                                    <label className={`calc-card ${selectedType === 'landing' ? 'selected' : ''}`} id="type-landing">
                                        <input 
                                            type="radio" 
                                            name="project-type" 
                                            value="landing" 
                                            checked={selectedType === 'landing'}
                                            onChange={() => handleTypeChange('landing')}
                                        />
                                        <h4>Landing Page</h4>
                                        <p>Egyoldalas weboldal beépített online időpontfoglalóval.</p>
                                    </label>
                                    <label className={`calc-card ${selectedType === 'business' ? 'selected' : ''}`} id="type-business">
                                        <input 
                                            type="radio" 
                                            name="project-type" 
                                            value="business"
                                            checked={selectedType === 'business'}
                                            onChange={() => handleTypeChange('business')}
                                        />
                                        <h4>Bemutatkozó Oldal</h4>
                                        <p>Több aloldalas, céges bemutatkozó weboldal.</p>
                                    </label>
                                    <label className={`calc-card ${selectedType === 'webshop' ? 'selected' : ''}`} id="type-webshop">
                                        <input 
                                            type="radio" 
                                            name="project-type" 
                                            value="webshop"
                                            checked={selectedType === 'webshop'}
                                            onChange={() => handleTypeChange('webshop')}
                                        />
                                        <h4>Webáruház (Webshop)</h4>
                                        <p>Online értékesítés fizetési kapuval és katalógussal.</p>
                                    </label>
                                </div>
                            </div>
                        </div>

                        {/* Group 2: Additional Features */}
                        <div className={`calc-group ${openGroups.features ? 'active' : ''}`} id="calc-group-features">
                            <button type="button" className="calc-group-trigger" onClick={() => toggleGroup('features')}>
                                <span className="calc-label">2. Kiegészítő funkciók</span>
                                <span className="calc-group-icon">{openGroups.features ? '−' : '+'}</span>
                            </button>
                            <div className="calc-group-content">
                                <div className="calc-features-grid">
                                    <label className={`calc-card ${selectedFeatures.includes('reviews') ? 'selected' : ''}`} id="feature-reviews">
                                        <input 
                                            type="checkbox" 
                                            name="calc-features" 
                                            value="reviews"
                                            checked={selectedFeatures.includes('reviews')}
                                            onChange={() => handleFeatureToggle('reviews')}
                                        />
                                        <h4>Google Értékelések</h4>
                                        <p>A Google profilodon lévő 5 csillagos vendégvélemények automatikus megjelenítése.</p>
                                    </label>
                                    <label className={`calc-card ${selectedFeatures.includes('chat') ? 'selected' : ''}`} id="feature-chat">
                                        <input 
                                            type="checkbox" 
                                            name="calc-features" 
                                            value="chat"
                                            checked={selectedFeatures.includes('chat')}
                                            onChange={() => handleFeatureToggle('chat')}
                                        />
                                        <h4>Azonnali Ügyfélchat</h4>
                                        <p>Lebegő Messenger és WhatsApp gomb a gyors, egykattintásos bejelentkezésekhez.</p>
                                    </label>
                                    <label className={`calc-card ${selectedFeatures.includes('seo') ? 'selected' : ''}`} id="feature-seo">
                                        <input 
                                            type="checkbox" 
                                            name="calc-features" 
                                            value="seo"
                                            checked={selectedFeatures.includes('seo')}
                                            onChange={() => handleFeatureToggle('seo')}
                                        />
                                        <h4>Google Helyezésjavítás</h4>
                                        <p>Segít, hogy a konkurenciáid előtt jelenj meg a helyi kereséseknél (pl. "fodrász Szeged").</p>
                                    </label>
                                    <label className={`calc-card ${selectedFeatures.includes('admin') ? 'selected' : ''}`} id="feature-admin">
                                        <input 
                                            type="checkbox" 
                                            name="calc-features" 
                                            value="admin"
                                            checked={selectedFeatures.includes('admin')}
                                            onChange={() => handleFeatureToggle('admin')}
                                        />
                                        <h4>Saját Szerkesztőfelület</h4>
                                        <p>Könnyen használható admin felület árak, szövegek és képek önálló frissítéséhez.</p>
                                    </label>
                                    <label className={`calc-card ${selectedFeatures.includes('support') ? 'selected' : ''}`} id="feature-support">
                                        <input 
                                            type="checkbox" 
                                            name="calc-features" 
                                            value="support"
                                            checked={selectedFeatures.includes('support')}
                                            onChange={() => handleFeatureToggle('support')}
                                        />
                                        <h4>3 hónap VIP támogatás</h4>
                                        <p>Kisebb szöveg-, kép- és ármódosítások átadás utáni elvégzése díjmentesen (egyébként 15&nbsp;000 Ft/óra).</p>
                                    </label>
                                </div>
                            </div>
                        </div>

                        {/* Group 3: Meeting Location */}
                        <div className={`calc-group ${openGroups.meeting ? 'active' : ''}`} id="calc-group-meeting">
                            <button type="button" className="calc-group-trigger" onClick={() => toggleGroup('meeting')}>
                                <span className="calc-label">3. Konzultáció / Találkozó</span>
                                <span className="calc-group-icon">{openGroups.meeting ? '−' : '+'}</span>
                            </button>
                            <div className="calc-group-content">
                                <div className="calc-grid">
                                    <label className={`calc-card ${selectedMeeting === 'online' ? 'selected' : ''}`} id="meet-online">
                                        <input 
                                            type="radio" 
                                            name="meet-location" 
                                            value="online" 
                                            checked={selectedMeeting === 'online'}
                                            onChange={() => handleMeetingChange('online')}
                                        />
                                        <h4>Online konzultáció</h4>
                                        <p>Ingyenes egyeztetés (Google Meet / telefon) az ország bármely pontjáról.</p>
                                    </label>
                                    <label className={`calc-card ${selectedMeeting === 'szeged' ? 'selected' : ''}`} id="meet-szeged">
                                        <input 
                                            type="radio" 
                                            name="meet-location" 
                                            value="szeged"
                                            checked={selectedMeeting === 'szeged'}
                                            onChange={() => handleMeetingChange('szeged')}
                                        />
                                        <h4>Személyes találkozó Szegeden</h4>
                                        <p>Személyes egyeztetés Szegeden (+15&nbsp;000 Ft kiszállási díj és útidő).</p>
                                    </label>
                                    <label className={`calc-card ${selectedMeeting === 'budapest' ? 'selected' : ''}`} id="meet-budapest">
                                        <input 
                                            type="radio" 
                                            name="meet-location" 
                                            value="budapest"
                                            checked={selectedMeeting === 'budapest'}
                                            onChange={() => handleMeetingChange('budapest')}
                                        />
                                        <h4>Személyes találkozó Budapesten</h4>
                                        <p>Személyes egyeztetés Budapesten (+50&nbsp;000 Ft oda-vissza útidő és költségek).</p>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Summary & Action */}
                    <div className="calc-summary-panel">
                        <img src="/logo_monogram.png?v=79" className="calc-summary-watermark" alt="" />
                        <div className="calc-summary-header">
                            <span className="calc-label">Becsült kalkuláció</span>
                            <div className="calc-price-display">
                                <span className="calc-price-label">Egyszeri irányár (Nincs havidíj):</span>
                                <div className="calc-price-value" id="calc-total-price">
                                    {formatPrice(displayPrice).replace("Ft-tól", "")} <span>Ft-tól</span>
                                </div>
                            </div>
                            <p style={{ fontSize: '0.85rem', marginBottom: '20px', lineHeight: '1.4', color: 'var(--text-gray)' }}>
                                Az ár egyszeri fejlesztési díj, amely tartalmazza a tárhely és a domain kezdeti beállítását.<br />
                                <span style={{ display: 'block', marginTop: '6px', color: 'var(--text-gray-light)' }}>
                                    <strong>Átadás utáni support (opcionális):</strong> 15&nbsp;000 Ft / óra
                                </span>
                            </p>
                        </div>
                        
                        <div>
                            <ul className="calc-features-list">
                                {/* Default package features */}
                                {packageFeatures[selectedType].map((feat, idx) => (
                                    <li className="calc-feature-item" key={`base-${idx}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                        {feat}
                                    </li>
                                ))}
                                
                                {/* Extra features */}
                                {selectedFeatures.includes('reviews') && (
                                    <li className="calc-feature-item" style={{ fontWeight: 600 }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                        Google Értékelések beépítése
                                    </li>
                                )}
                                {selectedFeatures.includes('chat') && (
                                    <li className="calc-feature-item" style={{ fontWeight: 600 }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                        Messenger &amp; WhatsApp chat integráció
                                    </li>
                                )}
                                {selectedFeatures.includes('seo') && (
                                    <li className="calc-feature-item" style={{ fontWeight: 600 }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                        Google Helyezésjavítás csomag
                                    </li>
                                )}
                                {selectedFeatures.includes('admin') && (
                                    <li className="calc-feature-item" style={{ fontWeight: 600 }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                        Saját Szerkesztőfelület (árak, szövegek, képek)
                                    </li>
                                )}
                                {selectedFeatures.includes('support') && (
                                    <li className="calc-feature-item" style={{ fontWeight: 600 }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                        3 hónap VIP támogatás
                                    </li>
                                )}

                                {/* Selected meeting */}
                                <li className="calc-feature-item" style={{ fontWeight: 600 }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                    {selectedMeeting === 'online' && 'Konzultáció: Ingyenes online'}
                                    {selectedMeeting === 'szeged' && 'Személyes konzultáció Szegeden'}
                                    {selectedMeeting === 'budapest' && 'Személyes találkozó Budapesten'}
                                </li>
                            </ul>
                            
                            <button 
                                className="btn-primary" 
                                id="calc-cta-btn" 
                                style={{ width: '100%', justifyContent: 'center' }}
                                onClick={handleCalculatorSubmit}
                            >
                                Ajánlatot kérek ezen adatokkal <span className="arrow">→</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
