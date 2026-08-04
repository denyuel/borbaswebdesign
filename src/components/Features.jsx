import React from 'react';

export default function Features() {
    return (
        <section className="section-padding" id="szolgaltatasok">
            <div className="container">
                <div className="section-title-wrap">
                    <span className="badge">Szolgáltatások — Kisvállalkozásokra Hangolva</span>
                    <h2 className="section-title">Mit kínál a <span>Borbás Webdesign</span>?</h2>
                    <p>Minden weboldal teljesen egyedi kóddal, a legújabb technológiákkal és reszponzív elrendezéssel készül.</p>
                </div>
                
                <div className="services-grid">
                    {/* Service Card 1 */}
                    <div className="glass-card service-card">
                        <div className="service-card-image-wrap">
                            <img src="/service-design.png?v=17" alt="Egyedi Webdesign" className="service-card-img" />
                        </div>
                        <div className="service-card-content">
                            <div className="card-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
                            </div>
                            <h3>Egyedi Webdesign</h3>
                            <p>Nincsenek unalmas sablonok. Minden elrendezés a márkád stílusára szabottan, prémium grafikával és vizuális elemekkel készül.</p>
                            <div className="service-benefits">
                                <span className="service-benefit-tag">✓ Vevőszerző elrendezés</span>
                                <span className="service-benefit-tag">✓ Egyedi prémium arculat</span>
                                <span className="service-benefit-tag">✓ Tűéles grafikai elemek</span>
                            </div>
                        </div>
                    </div>

                    {/* Service Card 2 */}
                    <div className="glass-card service-card">
                        <div className="service-card-image-wrap">
                            <img src="/service-coding.png?v=17" alt="Profi Programozás" className="service-card-img" />
                        </div>
                        <div className="service-card-content">
                            <div className="card-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                            </div>
                            <h3>Profi Programozás</h3>
                            <p>Egyedileg megírt kód sablonok nélkül. Gyors betöltődés, biztonságos működés és tökéletes megjelenés minden mobiltelefonon.</p>
                            <div className="service-benefits">
                                <span className="service-benefit-tag">✓ 0 Ft havidíj (Saját kód)</span>
                                <span className="service-benefit-tag">✓ Google PageSpeed 95+</span>
                                <span className="service-benefit-tag">✓ Villámgyors betöltés</span>
                            </div>
                        </div>
                    </div>

                    {/* Service Card 3 */}
                    <div className="glass-card service-card">
                        <div className="service-card-image-wrap">
                            <img src="/service-booking.png?v=17" alt="Online Időpontfoglalás" className="service-card-img" />
                        </div>
                        <div className="service-card-content">
                            <div className="card-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
                            </div>
                            <h3>Online Időpontfoglalás</h3>
                            <p>Automatizált naptárrendszer (pl. Salonic, Google Calendar) beállítása, hogy ne kelljen munka közben telefonálnod. Vendégeid éjjel-nappal kényelmesen foglalhatnak.</p>
                            <div className="service-benefits">
                                <span className="service-benefit-tag">✓ Salonic &amp; Google naptár</span>
                                <span className="service-benefit-tag">✓ 0 elfelejtett időpont</span>
                                <span className="service-benefit-tag">✓ 24/7 automata recepció</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
