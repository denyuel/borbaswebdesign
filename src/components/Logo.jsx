import React from 'react';

export default function Logo({ className = '', id = '' }) {
    return (
        <a href="#hero" className={`logo ${className}`} id={id}>
            <img src="/logo_full.png" alt="Borbás Webdesign" className="logo-img" />
        </a>
    );
}
