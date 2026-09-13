import React from 'react';

export default function CalculatorStickyBar({ displayPrice, onCtaClick, isVisible }) {
    const formattedPrice = displayPrice 
        ? displayPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "\u00A0") + "\u00A0Ft-tól"
        : "150\u00A0000\u00A0Ft-tól";

    return (
        <aside 
            className={`calc-sticky-bar ${isVisible ? 'is-visible' : ''}`}
            aria-label="Kalkuláció gyors összesítő és ajánlatkérés"
        >
            <div className="calc-sticky-bar__inner">
                <div className="calc-sticky-bar__info">
                    <span className="calc-sticky-bar__label">Irányár (0 Ft havidíj):</span>
                    <span className="calc-sticky-bar__price">{formattedPrice}</span>
                </div>
                <button 
                    type="button"
                    className="btn-primary calc-sticky-bar__btn"
                    onClick={onCtaClick}
                >
                    Ajánlatkérés <span className="arrow">→</span>
                </button>
            </div>
        </aside>
    );
}
