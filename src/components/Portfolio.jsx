import React, { useState, useEffect } from 'react';

const projects = [
    {
        id: 'funkcionalistest',
        img: '/portfolio-funkcionalistest.png?v=1',
        badge: 'Craniosacralis & Rehabilitáció',
        category: 'Egészség & Terápiás Weboldal',
        title: 'FunkcionálisTest',
        desc: 'Prémium terápiás és rehabilitációs weboldal Craniosacralis kezelésekkel, Balance² mozgással és online időpontfoglalással.',
        url: 'https://funkcionalistest.hu'
    },
    {
        id: 'vegsobucsu',
        img: '/portfolio-vegsobucsu.png?v=1',
        badge: 'Személyre szabott búcsúztatás',
        category: 'Polgári búcsúztató Weboldal',
        title: 'Végső Búcsú',
        desc: 'Méltóságteljes, empatikus hangvételű polgári búcsúztatói weboldal egyedi történetekkel, blogrendszerrel és közvetlen kapcsolatfelvétellel.',
        url: 'https://vegsobucsu.hu'
    },
    {
        id: 'szertartasmester',
        img: '/portfolio-szertartasmester.png?v=1',
        badge: 'Esküvői arculat & ajánlatkérés',
        category: 'Szertartásvezetői Weboldal',
        title: 'Szertartásmester',
        desc: 'Prémium, személyre szabott esküvői szertartásvezetői bemutatkozó oldal interaktív csomagokkal, referenciákkal és blogrendszerrel.',
        url: 'https://szertartasmester.hu'
    },
    {
        id: 'winery',
        img: '/portfolio-winery.png?v=3',
        badge: 'Egyedi design & borkatalógus',
        category: 'Bemutatkozó oldal & Borkatalógus',
        title: 'Wine&Sofi',
        desc: 'Prémium badacsonyi butikborászat egyedi tervezésű weboldala, hangulatos bemutatkozással és digitális termékkatalógussal.',
        url: 'https://winesofi.hu'
    },
    {
        id: 'hotel',
        img: '/portfolio-hotel.png?v=20',
        badge: '180° balatoni panoráma',
        category: 'Bemutatkozó & Foglalási oldal',
        title: 'Vine&Roof',
        desc: 'Panorámás badacsonyi vendégház bemutató oldala digitális detox élménnyel.',
        url: 'https://vineroof.hu'
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
        url: 'https://szazszorszep-kozmetika.hu'
    }
];

export default function Portfolio({ onContactClick }) {
    const totalProjects = projects.length;
    const [currentIndex, setCurrentIndex] = useState(totalProjects);
    const [useTransition, setUseTransition] = useState(true);
    const touchStart = React.useRef(0);
    const touchEnd = React.useRef(0);

    const handleTouchStart = (e) => {
        touchStart.current = e.targetTouches[0].clientX;
        touchEnd.current = e.targetTouches[0].clientX;
    };

    const handleTouchMove = (e) => {
        touchEnd.current = e.targetTouches[0].clientX;
    };

    const handleTouchEnd = () => {
        const distance = touchStart.current - touchEnd.current;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe) {
            slideNext();
        } else if (isRightSwipe) {
            slidePrev();
        }
    };

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
        if (currentIndex < totalProjects) {
            setUseTransition(false);
            setCurrentIndex(currentIndex + totalProjects);
        } else if (currentIndex >= totalProjects * 2) {
            setUseTransition(false);
            setCurrentIndex(currentIndex - totalProjects);
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
        setCurrentIndex(index + totalProjects);
    };

    // Padded list for infinite carousel (fully pad with a complete set on left and right)
    const paddedProjects = [
        ...projects,
        ...projects,
        ...projects
    ];

    const activeDotIndex = ((currentIndex % totalProjects) + totalProjects) % totalProjects;

    return (
        <section className="section-padding" id="referenciak">
            <div className="container">
                <div className="section-title-wrap">
                    <span className="badge">Referenciák</span>
                    <h2 className="section-title">Legutóbbi <span>munkáim</span></h2>
                    <p>Tekintsd meg az elkészült weboldalaim és design terveim válogatását.</p>
                </div>
                
                <div className="portfolio-carousel-wrapper">
                    <div 
                        className="portfolio-carousel-viewport"
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >
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
                                </div>
                                <div className="portfolio-card-body">
                                    <span className="portfolio-badge">{project.badge}</span>
                                    <span className="portfolio-category">{project.category}</span>
                                    <h4>{project.title}</h4>
                                    <p>{project.desc}</p>
                                    <div className="portfolio-drawer-actions">
                                        {project.url && (
                                            <a 
                                                href={project.url} 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className="btn-primary" 
                                            >
                                                Megtekintés &rarr;
                                            </a>
                                        )}
                                        <button 
                                            className="btn-secondary" 
                                            onClick={() => onContactClick(project.title)}
                                        >
                                            Ajánlatkérés &rarr;
                                        </button>
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
