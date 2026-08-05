import React from 'react';

export default function SocialLinks() {
    return (
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
            
            {/* Facebook Link */}
            <a 
                href="https://www.facebook.com/profile.php?id=61593077453422" 
                className="social-link" 
                title="Kövess Facebookon!"
                target="_blank"
                rel="noopener noreferrer"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
        </div>
    );
}
