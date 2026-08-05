import React, { useState, useEffect } from 'react';

const projects = [
    {
        id: 'winery',
        img: '/portfolio-winery.png?v=3',
        badge: 'Egyedi design & borkatalógus',
        category: 'Bemutatkozó oldal & Borkatalógus',
        title: 'Wine&Sofi',
        desc: 'Prémium badacsonyi butikborászat egyedi tervezésű weboldala, hangulatos bemutatkozással és digitális termékkatalógussal.',
        url: 'https://wineandsofi.hu'
    },
    {
        id: 'hotel',
        img: '/portfolio-hotel.png?v=20',
        badge: '180° balatoni panoráma',
        category: 'Bemutatkozó & Foglalási oldal',
        title: 'Vine&Roof',
        desc: 'Panorámás badacsonyi vendégház bemutató oldala digitális detox élménnyel.',
        url: 'https://vineandroof.hu'
    },
    {
        id: 'bettina',
        img: '/portfolio-bettina.png?v=1',
        badge: 'Esemény & Személyes Márka',
        category: 'Egyedi Eseményoldal & Blog',
        title: 'bettinabalazs.com',
        desc: 'Balázs Bettina egyedi tervezésű személyes márkája és eseményszervező portálja hawaii életérzéssel.',
        url: 'https://bettinabalazs.com'
    },
    {
        id: 'farm',
        img: '/portfolio-farm.png?v=3',
        badge: 'Egyedi kalkulátor integráció',
        category: 'Szolgáltatás-bemutató Landing Page',
        title: 'Szántóföldi Öntözés',
        desc: 'Öntözéstechnikai szolgáltatások bemutató oldala egyedi, interaktív vízigény-kalkulátorral.',
        url: 'https://szantofoldiontozes.hu'
    },
    {
        id: 'cosmetics',
        img: '/portfolio-cosmetics.png?v=3',
        badge: 'Online időpontfoglalóval',
        category: 'Szalon & Időpontfoglaló Oldal',
        title: 'Százszorszép Kozmetika',
        desc: 'Elegáns szépségszalon weboldala beépített online naptárral és interaktív kezelési katalógussal.',
        url: 'https://szazszorszepkozmetika.hu'
    }
];

export default function Portfolio({ onContactClick }) {
    const [currentIndex, setCurrentIndex] = useState(5);
    const [useTransition, setUseTransition] = useState(true);
    const [activeDrawer, setActiveDrawer] = useState(null); // stores active card index

    useEffect(() => {
        if (!useTransition) {
            const timer = setTimeout(() => {
                setUseTransition(true);
            }, 50);
            return () => clearTimeout(timer);
        }
    }, [useTransition]);

    const handleTransitionEnd = (e) => {
        if (e.target !== e.currentTarget) return; // ignore bubbled transitionend events from drawers or images
        if (currentIndex < 5) {
            setUseTransition(false);
            setCurrentIndex(currentIndex + 5);
        } else if (currentIndex >= 10) {
            setUseTransition(false);
            setCurrentIndex(currentIndex - 5);
        }
    };

    const slideNext = () => {
        if (!useTransition) return;
        setCurrentIndex(prev => prev + 1);
    };

    const slidePrev = () => {
        if (!useTransition) return;
        setCurrentIndex(prev => prev - 1);
    };

    const handleDotClick = (index) => {
        if (!useTransition) return;
        setCurrentIndex(index + 5);
    };

    // Padded list for infinite carousel (fully pad with a complete set on left and right)
    const paddedProjects = [
        ...projects,
        ...projects,
        ...projects
    ];

    const activeDotIndex = (currentIndex - 5 + 5) % 5;

    return (
        <section className="section-padding" id="referenciak">
            <div className="container">
                <div className="section-title-wrap">
                    <span className="badge">Referenciák</span>
                    <h2 className="section-title">Legutóbbi <span>munkáim</span></h2>
                    <p>Tekintsd meg az elkészült weboldalaim és design terveim válogatását.</p>
                </div>
                
                <div className="portfolio-carousel-wrapper">
                    <div className="portfolio-carousel-viewport">
                        <div 
                            className="portfolio-carousel-track"
                            onTransitionEnd={handleTransitionEnd}
                            style={{
                                transform: `translateX(calc(-${currentIndex} * var(--slide-step)))`,
                                transition: useTransition ? 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)' : 'none',
                                display: 'flex',
                                gap: '32px'
                            }}
                        >
                        {paddedProjects.map((project, idx) => (
                            <div 
                                className="portfolio-card glass-card" 
                                key={`${project.id}-${idx}`}
                            >
                                <div className="portfolio-image-wrap">
                                    <img src={project.img} alt={project.title} className="portfolio-img" />
                                    
                                    <div className={`portfolio-details-drawer ${activeDrawer === idx ? 'active' : ''}`}>
                                        <button 
                                            className="drawer-close-btn"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setActiveDrawer(null);
                                            }}
                                        >
                                            &times;
                                        </button>
                                        <div className="drawer-content">
                                            <span className="portfolio-badge">{project.badge}</span>
                                            <span className="portfolio-category">{project.category}</span>
                                            <h4>{project.title}</h4>
                                            <p>{project.desc}</p>
                                            <div style={{ display: 'flex', gap: '10px', marginTop: '16px', flexWrap: 'wrap' }}>
                                                {project.url && (
                                                    <a 
                                                        href={project.url} 
                                                        target="_blank" 
                                                        rel="noopener noreferrer" 
                                                        className="btn-primary" 
                                                        style={{ padding: '10px 16px', fontSize: '0.85rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
                                                    >
                                                        Weboldal megtekintése &rarr;
                                                    </a>
                                                )}
                                                <button 
                                                    className="btn-secondary" 
                                                    style={{ padding: '10px 16px', fontSize: '0.85rem' }}
                                                    onClick={() => onContactClick(project.title)}
                                                >
                                                    Hasonló oldalt szeretnék &rarr;
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div 
                                        className="portfolio-card-toggle"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setActiveDrawer(activeDrawer === idx ? null : idx);
                                        }}
                                    >
                                        <span className="toggle-text">
                                            {activeDrawer === idx ? 'Bezárás' : 'Részletek'}
                                        </span>
                                        <span className="toggle-icon">
                                            {activeDrawer === idx ? '−' : '+'}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                        </div>
                    </div>
                    
                    {/* Carousel Navigation */}
                    <button className="carousel-arrow prev-btn" aria-label="Előző kártya" onClick={slidePrev}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
                    </button>
                    <button className="carousel-arrow next-btn" aria-label="Következő kártya" onClick={slideNext}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                    </button>
                    
                    {/* Carousel Pagination Dots */}
                    <div className="carousel-dots">
                        {projects.map((_, idx) => (
                            <div 
                                className={`carousel-dot ${activeDotIndex === idx ? 'active' : ''}`}
                                key={`dot-${idx}`}
                                onClick={() => handleDotClick(idx)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
