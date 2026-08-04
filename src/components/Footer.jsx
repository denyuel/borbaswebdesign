import React from 'react';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-logo">
                    <a href="#hero" className="logo" style={{ marginBottom: '8px' }}>
                        <img src="/logo_full.png" alt="Borbás Webdesign" className="logo-img" />
                    </a>
                    <p>© 2026 Borbás Webdesign. Minden jog fenntartva.</p>
                </div>
            </div>
        </footer>
    );
}
