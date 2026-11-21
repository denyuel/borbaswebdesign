import React from 'react';

export default function SocialLinks() {
    return (
        <div className="social-links-wrap">
            {/* Email Pill */}
            <a 
                href="mailto:daniel.borbas@borbaswebdesign.hu" 
                className="social-email-pill" 
                title="Írj e-mailt!"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                <span>daniel.borbas@borbaswebdesign.hu</span>
            </a>
            
            {/* Social Icons */}
            <div className="social-icons-row">
                <a 
                    href="https://www.facebook.com/profile.php?id=61593077453422" 
                    className="social-link" 
                    title="Kövess Facebookon!"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>

                <a 
                    href="https://www.instagram.com/borbaswebdesign" 
                    className="social-link" 
                    title="Kövess Instagramon!"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </a>
            </div>
        </div>
    );
}
