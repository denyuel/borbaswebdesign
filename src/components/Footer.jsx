import React from 'react';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-content" style={{ display: 'flex', flexDirection: 'column', gap: '32px', alignItems: 'center' }}>
                {/* Top Section: Logo & Socials */}
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'flex-start', flexWrap: 'wrap', gap: '20px' }} className="footer-top-wrap">
                    <div className="footer-logo">
                        <a href="#hero" className="logo">
                            <img src="/logo_full.png" alt="Borbás Webdesign" className="logo-img" />
                        </a>
                        <p style={{ margin: 0 }}>© 2026 Borbás Webdesign. Minden jog fenntartva.</p>
                    </div>
                    
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }} className="footer-contact-wrap">
                        <span style={{ fontSize: '0.9rem', color: 'var(--text-gray-light)' }}>Kapcsolat:</span>
                        <div className="social-links">
                            {/* Email Link */}
                            <a 
                                href="mailto:daniel.borbas@borbaswebdesign.hu" 
                                className="social-link" 
                                title="Írj e-mailt!"
                                style={{ width: 'auto', padding: '0 16px', borderRadius: 'var(--radius-pill)', fontSize: '0.85rem', fontWeight: 500 }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px' }}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                                daniel.borbas@borbaswebdesign.hu
                            </a>
                            
                            {/* Facebook Link (Placeholder) */}
                            <a 
                                href="#" 
                                className="social-link" 
                                title="Kövess Facebookon! (Hamarosan)"
                                onClick={(e) => {
                                    e.preventDefault();
                                    alert("A Facebook oldal hamarosan elérhető!");
                                }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Section: Legal Impressum */}
                <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '20px', width: '100%', textAlign: 'center' }}>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-gray-dark)', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto' }}>
                        <strong>Egyéni vállalkozói adatok (Impresszum):</strong><br />
                        Szolgáltató: Borbás Dániel e.v. | Székhely: 6787 Zákányszék, Tanya 424. | Adószám: 52458655-1-26 | Nyilvántartási szám: 57851211<br />
                        Főtevékenység: 621004 - Weblap tervezése (webdizájn) | Tárhelyszolgáltató: Cloudflare, Inc. (101 Townsend St, San Francisco, CA 94107, USA, support@cloudflare.com)
                    </div>
                </div>
            </div>
        </footer>
    );
}
