import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroAnimation from '../components/HeroAnimation';
import AboutSection from '../components/AboutSection';
import Features from '../components/Features';
import Portfolio from '../components/Portfolio';
import Workflow from '../components/Workflow';
import Calculator from '../components/Calculator';
import Faq from '../components/Faq';
import Footer from '../components/Footer';
import ContactModal from '../components/ContactModal';

export default function Index() {
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [contactProject, setContactProject] = useState('landing');
    const [contactMessage, setContactMessage] = useState('');

    const openContact = (projectType = 'landing', defaultMsg = '') => {
        setContactProject(projectType);
        setContactMessage(defaultMsg);
        setIsContactOpen(true);
    };

    const closeContact = () => {
        setIsContactOpen(false);
    };

    useEffect(() => {
        const scrollToHash = () => {
            const hash = window.location.hash;
            if (hash) {
                if (hash === '#kapcsolat' || hash === '#ajanlatkeres' || hash === '#ajanlat') {
                    openContact('landing', '');
                    return;
                }
                const target = document.querySelector(hash);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        };

        // Scroll immediately, and also retry shortly after React components finish mounting and images paint
        scrollToHash();
        const t1 = setTimeout(scrollToHash, 150);
        const t2 = setTimeout(scrollToHash, 500);

        window.addEventListener('hashchange', scrollToHash);
        return () => {
            clearTimeout(t1);
            clearTimeout(t2);
            window.removeEventListener('hashchange', scrollToHash);
        };
    }, []);

    return (
        <>
            <Navbar onContactClick={() => openContact('landing', '')} />
            
            <main>
                <HeroAnimation onContactClick={() => openContact('landing', '')} />
                <AboutSection />
                <Features />
                <Portfolio onContactClick={(title) => openContact('other', `Hasonló oldalt szeretnék, mint a ${title} projekt.`)} />
                <Workflow />
                <Calculator onCtaClick={(type, msg) => openContact(type, msg)} />
                <Faq />
            </main>
            
            <Footer />
            
            <ContactModal 
                isOpen={isContactOpen} 
                onClose={closeContact} 
                defaultProject={contactProject}
                defaultMessage={contactMessage}
            />
        </>
    );
}
