import React, { useState, useEffect } from 'react';

export default function ContactModal({ isOpen, onClose, defaultProject, defaultMessage }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [projectType, setProjectType] = useState('landing');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    useEffect(() => {
        if (isOpen) {
            if (defaultProject) setProjectType(defaultProject);
            if (defaultMessage) setMessage(defaultMessage);
            setIsSuccess(false);
        }
    }, [isOpen, defaultProject, defaultMessage]);

    if (!isOpen) return null;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const data = {
            Név: name,
            Email: email,
            Telefonszám: phone || 'Nem adott meg',
            "Projekt Típusa": projectType,
            Üzenet: message,
            _honey: '',
            _subject: 'Új weboldal árajánlatkérés!',
            _captcha: 'false'
        };

        try {
            const response = await fetch("https://formsubmit.co/ajax/daniel.borbas@borbaswebdesign.hu", {
                method: "POST",
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(data)
            });
            const result = await response.json();
            if (result.success === "true" || result.success === true) {
                setIsSuccess(true);
                setName('');
                setEmail('');
                setPhone('');
                setMessage('');
                
                // Track Meta Pixel Lead Conversion safely
                try {
                    if (typeof window !== 'undefined' && window.fbq) {
                        window.fbq('track', 'Lead', {
                            content_name: projectType,
                            content_category: 'Webdesign Quote',
                            currency: 'HUF'
                        });
                    }
                } catch (err) {
                    console.warn('Pixel lead tracking notice:', err);
                }
            } else {
                alert("Hiba történt az üzenet küldése során. Kérlek próbáld újra, vagy írj közvetlenül a daniel.borbas@borbaswebdesign.hu címre!");
            }
        } catch (error) {
            alert("Hálózati hiba történt. Kérlek ellenőrizd az internetkapcsolatod vagy írj közvetlenül a daniel.borbas@borbaswebdesign.hu címre!");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="modal-overlay active" onClick={(e) => e.target.classList.contains('modal-overlay') && onClose()}>
            <div className="modal-content">
                <button className="modal-close" onClick={onClose}>&times;</button>
                
                {!isSuccess ? (
                    <div id="modal-form-block">
                        <div className="modal-header">
                            <h3>Kérj egyedi árajánlatot</h3>
                            <p>Add meg a részleteket, és 24 órán belül felveszem veled a kapcsolatot egy egyedi ajánlattal.</p>
                        </div>
                        
                        <form id="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="contact-name" className="form-label">Teljes név *</label>
                                <input 
                                    type="text" 
                                    id="contact-name" 
                                    className="form-input" 
                                    placeholder="Pl. Borbás Dániel" 
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required 
                                />
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="contact-email" className="form-label">E-mail cím *</label>
                                <input 
                                    type="email" 
                                    id="contact-email" 
                                    className="form-input" 
                                    placeholder="Pl. daniel.borbas@borbaswebdesign.hu" 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required 
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="contact-phone" className="form-label">Telefonszám (opcionális a gyors visszahíváshoz)</label>
                                <input 
                                    type="tel" 
                                    id="contact-phone" 
                                    className="form-input" 
                                    placeholder="Pl. +36 30 123 4567" 
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="contact-project" className="form-label">Projekt Típusa</label>
                                <select 
                                    id="contact-project" 
                                    className="form-input"
                                    value={projectType}
                                    onChange={(e) => setProjectType(e.target.value)}
                                >
                                    <option value="landing">Landing Page</option>
                                    <option value="business">Bemutatkozó Oldal</option>
                                    <option value="webshop">Webáruház (Webshop)</option>
                                    <option value="other">Egyéb egyedi fejlesztés</option>
                                </select>
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="contact-message" className="form-label">Rövid leírás / igények</label>
                                <textarea 
                                    id="contact-message" 
                                    className="form-textarea" 
                                    placeholder="Milyen weboldalt szeretnél? Van-e már meglévő arculat vagy domain név?"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                ></textarea>
                            </div>
                            
                            <button type="submit" className="btn-primary form-submit-btn" disabled={isSubmitting}>
                                {isSubmitting ? 'Küldés folyamatban...' : <>Ingyenes ajánlatkérés küldése <span className="arrow">→</span></>}
                            </button>
                            <div className="modal-trust-reassurance">
                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                                <span>100% ingyenes &amp; kötelezettségmentes • 24 órán belül visszahívlak</span>
                            </div>
                        </form>
                    </div>
                ) : (
                    <div className="form-success-message active" id="modal-success-block">
                        <div className="form-success-icon">✓</div>
                        <h3>Köszönöm az ajánlatkérést!</h3>
                        <p style={{ marginTop: '12px', marginBottom: '24px' }}>
                            Az üzeneted sikeresen elküldve. Hamarosan, de legfeljebb 24 órán belül keresni foglak a megadott e-mail címen.
                        </p>
                        <button className="btn-secondary" onClick={onClose} style={{ margin: '0 auto' }}>Bezárás</button>
                    </div>
                )}
            </div>
        </div>
    );
}
