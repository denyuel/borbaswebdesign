import React, { useState } from 'react';
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
