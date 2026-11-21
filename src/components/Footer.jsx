import React from 'react';
import Logo from './Logo';
import SocialLinks from './SocialLinks';

export default function Footer() {
    return (
        <footer className="footer" id="footer">
            <div className="container footer-container">
                {/* Main 3-Column Upper Footer */}
                <div className="footer-grid">
                    {/* Col 1: Brand & Copyright */}
                    <div className="footer-brand-col">
                        <div className="footer-logo">
                            <Logo />
                        </div>
                        <p className="footer-tagline">
                            Egyedi kódolású, villámgyors weboldalak kis- és középvállalkozásoknak. 0 Ft havidíj, akár 48 órán belüli indulás.
                        </p>
                        <p className="footer-copyright">
                            © 2026 Borbás Webdesign. Minden jog fenntartva.
                        </p>
                    </div>

                    {/* Col 2: Quick Navigation */}
                    <div className="footer-nav-col">
                        <h4 className="footer-col-title">Navigáció</h4>
                        <ul className="footer-nav-list">
                            <li><a href="#hero">Főoldal</a></li>
                            <li><a href="#rolam">Rólam</a></li>
                            <li><a href="#szolgaltatasok">Szolgáltatások</a></li>
                            <li><a href="#referenciak">Referenciák</a></li>
                            <li><a href="#folyamat">Folyamat</a></li>
                            <li><a href="#kalkulator">Árkalkulátor</a></li>
                            <li><a href="#gyik">GYIK</a></li>
                        </ul>
                    </div>

                    {/* Col 3: Direct Contact & Social */}
                    <div className="footer-contact-col">
                        <h4 className="footer-col-title">Közvetlen kapcsolat</h4>
                        <SocialLinks />
                    </div>
                </div>

                {/* Bottom Section: Legal Impressum */}
                <div className="footer-legal-bar">
                    <div className="footer-legal-text">
                        <strong>Egyéni vállalkozói adatok (Impresszum):</strong>{' '}
                        Szolgáltató: Borbás Dániel e.v. | Székhely: 6787 Zákányszék, Tanya 424. | Adószám: 52458655-1-26 | Nyilvántartási szám: 57851211<br />
                        Főtevékenység: 621004 - Weblap tervezése (webdizájn) | Tárhelyszolgáltató: Cloudflare, Inc. (101 Townsend St, San Francisco, CA 94107, USA, support@cloudflare.com)
                    </div>
                </div>
            </div>
        </footer>
    );
}
