document.addEventListener('DOMContentLoaded', () => {
    
    // --- STICKY HEADER EFFECT ---
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- MOBILE MENU TOGGLE ---
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', () => {
            navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
            mobileMenuToggle.classList.toggle('active');
            
            // Toggle hamburger animation in CSS if needed, or simple inline style
            const spans = mobileMenuToggle.querySelectorAll('span');
            if (mobileMenuToggle.classList.contains('active')) {
                navMenu.style.position = 'absolute';
                navMenu.style.top = '80px';
                navMenu.style.left = '0';
                navMenu.style.width = '100%';
                navMenu.style.backgroundColor = 'var(--bg-slate)';
                navMenu.style.flexDirection = 'column';
                navMenu.style.padding = '24px';
                navMenu.style.borderBottom = '1px solid var(--border-subtle)';
                
                spans[0].style.transform = 'translateY(8px) rotate(45deg)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'translateY(-8px) rotate(-45deg)';
            } else {
                navMenu.style.display = '';
                spans[0].style.transform = '';
                spans[1].style.opacity = '';
                spans[2].style.transform = '';
            }
        });
    }

    // --- PRICING CALCULATOR LOGICA ---
    const prices = {
        types: {
            landing: 150000,
            business: 250000,
            webshop: 450000
        },
        features: {
            multilang: 45000,
            animations: 30000,
            seo: 35000,
            admin: 70000,
            support: 25000
        },
        meetings: {
            online: 0,
            szeged: 15000,
            budapest: 50000
        }
    };

    const packageFeatures = {
        landing: [
            "1 oldalas, bemutatkozó és értékesítő felépítés",
            "Célzott üzenet & felhívás gombok",
            "Online időpontfoglaló (Salonic, Google Calendar) integráció",
            "Egyedi, rád szabott arculati design",
            "Maximális betöltési sebesség (gyors oldal)",
            "Google kereső regisztráció (SEO alapok)",
            "Teljes átadás (tárhely & domain beállítása)"
        ],
        business: [
            "Több aloldalas struktúra (5-7 aloldal)",
            "Online időpontfoglaló (Salonic, Google Calendar) integráció",
            "Képgaléria / Portfólió a munkáidról",
            "Google Térkép & Kapcsolati rész",
            "Egyedi, rád szabott arculati design",
            "Maximális betöltési sebesség (gyors oldal)",
            "Google kereső regisztráció (SEO alapok)",
            "Teljes átadás (tárhely & domain beállítása)"
        ],
        webshop: [
            "Termékkatalógus & kategóriák",
            "Bankkártyás fizetés (Stripe / Barion)",
            "Automata számlázó & Szállítási rendszer",
            "Egyedi, rád szabott arculati design",
            "Maximális betöltési sebesség (gyors oldal)",
            "Google kereső regisztráció (SEO alapok)",
            "Teljes átadás (tárhely & domain beállítása)"
        ]
    };

    const typeRadios = document.querySelectorAll('input[name="project-type"]');
    const featureCheckboxes = document.querySelectorAll('input[name="calc-features"]');
    const meetingRadios = document.querySelectorAll('input[name="meet-location"]');
    const totalPriceDisplay = document.getElementById('calc-total-price');
    const calcCards = document.querySelectorAll('.calc-card');

    function formatPrice(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "\u00A0") + "\u00A0Ft-tól";
    }

    function calculateTotal() {
        let total = 0;
        
        // Find selected project type
        let selectedType = 'landing';
        typeRadios.forEach(radio => {
            const card = radio.closest('.calc-card');
            if (radio.checked) {
                selectedType = radio.value;
                card.classList.add('selected');
            } else {
                card.classList.remove('selected');
            }
        });
        
        total += prices.types[selectedType];

        // Find selected features
        featureCheckboxes.forEach(checkbox => {
            const card = checkbox.closest('.calc-card');
            if (checkbox.checked) {
                total += prices.features[checkbox.value];
                card.classList.add('selected');
            } else {
                card.classList.remove('selected');
            }
        });

        // Find selected meeting location
        let selectedMeeting = 'online';
        meetingRadios.forEach(radio => {
            const card = radio.closest('.calc-card');
            if (radio.checked) {
                selectedMeeting = radio.value;
                card.classList.add('selected');
            } else {
                card.classList.remove('selected');
            }
        });
        
        total += prices.meetings[selectedMeeting];

        // Update dynamic summary checklist
        const featuresListContainer = document.querySelector('.calc-features-list');
        if (featuresListContainer) {
            featuresListContainer.innerHTML = '';
            
            // Add base package features
            const baseFeatures = packageFeatures[selectedType] || [];
            baseFeatures.forEach(feat => {
                const li = document.createElement('li');
                li.className = 'calc-feature-item';
                li.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    ${feat}
                `;
                featuresListContainer.appendChild(li);
            });
            
            // Add extra selected features
            featureCheckboxes.forEach(checkbox => {
                if (checkbox.checked) {
                    let featText = '';
                    if (checkbox.value === 'multilang') featText = 'Nyelvválasztó (magyar + angol/egyéb)';
                    else if (checkbox.value === 'animations') featText = 'Prémium animációk és vizuális effektek';
                    else if (checkbox.value === 'seo') featText = 'Google Helyezésjavítás csomag';
                    else if (checkbox.value === 'admin') featText = 'Saját Szerkesztőfelület (árak, szövegek, képek)';
                    else if (checkbox.value === 'support') featText = '3 hónap VIP támogatás';
                    
                    if (featText) {
                        const li = document.createElement('li');
                        li.className = 'calc-feature-item';
                        li.style.fontWeight = '600';
                        li.innerHTML = `
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                            ${featText}
                        `;
                        featuresListContainer.appendChild(li);
                    }
                }
            });

            // Add selected meeting option to checklist
            let meetText = 'Konzultáció: Ingyenes online';
            if (selectedMeeting === 'szeged') meetText = 'Személyes konzultáció Szegeden';
            else if (selectedMeeting === 'budapest') meetText = 'Személyes találkozó Budapesten';
            
            const liMeet = document.createElement('li');
            liMeet.className = 'calc-feature-item';
            liMeet.style.fontWeight = '600';
            liMeet.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                ${meetText}
            `;
            featuresListContainer.appendChild(liMeet);
        }

        // Animate price change
        animatePriceUpdate(total);
    }

    let currentPriceValue = 180000;
    function animatePriceUpdate(targetPrice) {
        const start = currentPriceValue;
        const end = targetPrice;
        const duration = 400; // ms
        const startTime = performance.now();

        function update(now) {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Ease out quad
            const easeProgress = progress * (2 - progress);
            const current = Math.floor(start + (end - start) * easeProgress);
            
            totalPriceDisplay.innerHTML = formatPrice(current).replace("Ft-tól", "<span>Ft-tól</span>");
            
            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                currentPriceValue = targetPrice;
            }
        }
        
        requestAnimationFrame(update);
    }

    // Set up change events for the inputs inside the styled cards
    calcCards.forEach(card => {
        const input = card.querySelector('input');
        if (input) {
            input.addEventListener('change', calculateTotal);
        }
    });

    // --- CALCULATOR ACCORDION ---
    const calcGroups = document.querySelectorAll('.calc-group');
    calcGroups.forEach(group => {
        const trigger = group.querySelector('.calc-group-trigger');
        const icon = group.querySelector('.calc-group-icon');
        
        if (trigger) {
            trigger.addEventListener('click', () => {
                const isActive = group.classList.contains('active');
                
                // Close all groups
                calcGroups.forEach(g => {
                    g.classList.remove('active');
                    const gIcon = g.querySelector('.calc-group-icon');
                    if (gIcon) gIcon.innerText = '+';
                });
                
                // Open if it wasn't active
                if (!isActive) {
                    group.classList.add('active');
                    if (icon) icon.innerText = '−';
                }
            });
        }
    });

    // Auto-step: when selecting a project type, close group 1 and open group 2
    typeRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            setTimeout(() => {
                const groupFeatures = document.getElementById('calc-group-features');
                if (groupFeatures && !groupFeatures.classList.contains('active')) {
                    calcGroups.forEach(g => g.classList.remove('active'));
                    groupFeatures.classList.add('active');
                    const gIcon = groupFeatures.querySelector('.calc-group-icon');
                    if (gIcon) gIcon.innerText = '−';
                }
            }, 300);
        });
    });

    // Initial calculation
    calculateTotal();

    // --- MODAL DIALOG LOGIC ---
    const contactModal = document.getElementById('contact-modal');
    const triggerButtons = document.querySelectorAll('.trigger-contact');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const contactProjectSelect = document.getElementById('contact-project');
    const calcCtaBtn = document.getElementById('calc-cta-btn');

    // Open Modal
    function openModal(defaultProject = 'landing') {
        if (contactProjectSelect) {
            contactProjectSelect.value = defaultProject;
        }
        contactModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    // Close Modal
    function closeModal() {
        contactModal.classList.remove('active');
        document.body.style.overflow = '';
        
        // Reset form and success state after fade out transition
        setTimeout(() => {
            document.getElementById('modal-form-block').style.display = 'block';
            document.getElementById('modal-success-block').classList.remove('active');
            document.getElementById('contact-form').reset();
        }, 400);
    }

    triggerButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Find currently selected radio option to prefill modal
            let selectedType = 'landing';
            typeRadios.forEach(radio => {
                if (radio.checked) selectedType = radio.value;
            });
            openModal(selectedType);
        });
    });

    if (calcCtaBtn) {
        calcCtaBtn.addEventListener('click', () => {
            let selectedType = 'landing';
            typeRadios.forEach(radio => {
                if (radio.checked) selectedType = radio.value;
            });
            
            // Optionally, add selected checkboxes details to message
            let selectedFeatures = [];
            featureCheckboxes.forEach(checkbox => {
                if (checkbox.checked) {
                    const cardTitle = checkbox.closest('.calc-card').querySelector('h4').innerText;
                    selectedFeatures.push(cardTitle);
                }
            });
            
            // Get selected meeting
            let meetingTitle = 'Online konzultáció';
            meetingRadios.forEach(radio => {
                if (radio.checked) {
                    meetingTitle = radio.closest('.calc-card').querySelector('h4').innerText;
                }
            });
            
            const messageTextarea = document.getElementById('contact-message');
            if (messageTextarea) {
                let msg = '';
                if (selectedFeatures.length > 0) {
                    msg += `Érdekelne az árajánlat az alábbi extra opciókkal:\n- ${selectedFeatures.join('\n- ')}\n\n`;
                }
                msg += `Konzultáció / Találkozó: ${meetingTitle}`;
                messageTextarea.value = msg;
            }
            
            openModal(selectedType);
        });
    }

    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', closeModal);
    }

    // Close modal on click outside content
    contactModal.addEventListener('click', (e) => {
        if (e.target === contactModal) {
            closeModal();
        }
    });

    // --- FORM SUBMISSION HANDLING ---
    const contactForm = document.getElementById('contact-form');
    const formSuccessCloseBtn = document.getElementById('modal-success-close-btn');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerHTML;
            
            // Show loading animation on button
            submitBtn.disabled = true;
            submitBtn.innerHTML = 'Küldés folyamatban...';
            
            // Collect Form Data
            const formData = new FormData(contactForm);
            
            // Send to FormSubmit using Daniel's email routing
            fetch('https://formsubmit.co/ajax/daniel.borbas@borbaswebdesign.hu', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => response.json())
            .then(data => {
                if (data.success === "true" || data.success === true) {
                    document.getElementById('modal-form-block').style.display = 'none';
                    document.getElementById('modal-success-block').classList.add('active');
                } else {
                    alert('Hiba történt az üzenet küldése során. Kérlek próbáld meg újra, vagy küldj közvetlen emailt a daniel.borbas@borbaswebdesign.hu címre!');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Hiba történt a kapcsolódásban. Kérlek próbáld meg újra, vagy küldj közvetlen emailt a daniel.borbas@borbaswebdesign.hu címre!');
            })
            .finally(() => {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnText;
            });
        });
    }

    if (formSuccessCloseBtn) {
        formSuccessCloseBtn.addEventListener('click', closeModal);
    }

    // --- SCROLL REVEAL ANIMATIONS ---
    const revealElements = document.querySelectorAll('.glass-card, .timeline-item, .calculator-container, .section-title-wrap');
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => {
        // Initial setup for transitions in JS
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
        
        revealObserver.observe(el);
    });





    // Add dynamic CSS class rule for reveal state in JS directly
    const styleSheet = document.createElement("style");
    styleSheet.innerText = `
        .revealed {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(styleSheet);

    // --- FAQ ACCORDION ---
    const faqTriggers = document.querySelectorAll('.faq-trigger');
    faqTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const faqItem = trigger.parentElement;
            const icon = trigger.querySelector('.faq-icon');
            
            // Toggle active class
            faqItem.classList.toggle('active');
            
            // Toggle icon
            if (faqItem.classList.contains('active')) {
                icon.textContent = '−';
            } else {
                icon.textContent = '+';
            }
        });
    });
});
