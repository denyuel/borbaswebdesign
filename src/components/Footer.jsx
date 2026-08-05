import React from 'react';
import Logo from './Logo';
import SocialLinks from './SocialLinks';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-content" style={{ display: 'flex', flexDirection: 'column', gap: '32px', alignItems: 'center' }}>
                {/* Top Section: Logo & Socials */}
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'flex-start', flexWrap: 'wrap', gap: '20px' }} className="footer-top-wrap">
                    <div className="footer-logo">
                        <Logo />
                        <p style={{ margin: 0 }}>© 2026 Borbás Webdesign. Minden jog fenntartva.</p>
                    </div>
                    
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }} className="footer-contact-wrap">
                        <span style={{ fontSize: '0.9rem', color: 'var(--text-gray-light)' }}>Kapcsolat:</span>
                        <SocialLinks />
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
