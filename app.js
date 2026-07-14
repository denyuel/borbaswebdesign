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
            admin: 70000
        }
    };

    const packageFeatures = {
        landing: [
            "1 oldalas, vendégszerző felépítés",
            "Célzott üzenet & felhívás gombok",
            "Kapcsolatfelvételi űrlap",
            "Egyedi, rád szabott arculati design",
            "Maximális betöltési sebesség (gyors oldal)",
            "Google kereső regisztráció (SEO alapok)",
            "Teljes átadás (tárhely & domain beállítása)"
        ],
        business: [
            "Több aloldalas struktúra (5-7 aloldal)",
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
    const totalPriceDisplay = document.getElementById('calc-total-price');
    const calcCards = document.querySelectorAll('.calc-card');

    function formatPrice(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " Ft-tól";
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
                    else if (checkbox.value === 'admin') featText = 'Saját Szerkesztőfelület az árakhoz';
                    
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
            
            const messageTextarea = document.getElementById('contact-message');
            if (messageTextarea && selectedFeatures.length > 0) {
                messageTextarea.value = `Érdekelne az árajánlat az alábbi extra opciókkal:\n- ${selectedFeatures.join('\n- ')}`;
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
            
            // Simulate API request (delay)
            setTimeout(() => {
                document.getElementById('modal-form-block').style.display = 'none';
                document.getElementById('modal-success-block').classList.add('active');
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnText;
            }, 1000);
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

    // --- SPOTLIGHT CARD EFFECT ---
    const spotlightCards = document.querySelectorAll('.glass-card');
    spotlightCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    // --- SCROLL PARALLAX & 3D TILT ON HERO ---
    const heroOuter = document.querySelector('.hero-image-wrapper-outer');
    const heroCode = document.querySelector('.floating-code');
    const heroAudit = document.querySelector('.floating-audit');
    const heroCursor = document.querySelector('.floating-cursor');
    
    if (heroOuter && heroCode && heroAudit && heroCursor) {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            // Only update transforms when hero is visible to conserve performance
            if (scrolled < 800) {
                // Subtle 3D tilt back on scroll
                const tiltX = scrolled * 0.03;
                const tiltY = scrolled * -0.015;
                heroOuter.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
                
                // Parallax offsets for floating assets
                const codeY = scrolled * 0.06;
                const auditY = scrolled * -0.08;
                const cursorX = scrolled * -0.04;
                const cursorY = scrolled * 0.05;
                
                heroCode.style.transform = `translateY(${codeY}px)`;
                heroAudit.style.transform = `translateY(${auditY}px)`;
                heroCursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
            }
        });
    }

    // --- INTERACTIVE PARTICLES CANVAS ---
    const canvas = document.getElementById('bg-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;
        
        const particles = [];
        const maxParticles = 55; // Highly optimized for performance
        const connectionDistance = 120;
        const mouse = { x: null, y: null, radius: 140 };
        
        window.addEventListener('resize', () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        });
        
        window.addEventListener('mousemove', (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        });
        
        window.addEventListener('mouseleave', () => {
            mouse.x = null;
            mouse.y = null;
        });
        
        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 0.35;
                this.vy = (Math.random() - 0.5) * 0.35;
                this.radius = Math.random() * 2 + 1;
            }
            
            update() {
                this.x += this.vx;
                this.y += this.vy;
                
                // Bounce off edges
                if (this.x < 0 || this.x > width) this.vx = -this.vx;
                if (this.y < 0 || this.y > height) this.vy = -this.vy;
                
                // Mouse interaction (repulsion)
                if (mouse.x !== null && mouse.y !== null) {
                    const dx = this.x - mouse.x;
                    const dy = this.y - mouse.y;
                    const dist = Math.hypot(dx, dy);
                    if (dist < mouse.radius) {
                        const force = (mouse.radius - dist) / mouse.radius;
                        const angle = Math.atan2(dy, dx);
                        this.x += Math.cos(angle) * force * 1.5;
                        this.y += Math.sin(angle) * force * 1.5;
                    }
                }
            }
            
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(15, 118, 110, 0.15)'; // Teal primary theme accent
                ctx.fill();
            }
        }
        
        // Initialize
        for (let i = 0; i < maxParticles; i++) {
            particles.push(new Particle());
        }
        
        function animate() {
            ctx.clearRect(0, 0, width, height);
            
            // Update and draw particles
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            
            // Draw connection lines
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.hypot(dx, dy);
                    
                    if (dist < connectionDistance) {
                        const alpha = (1 - dist / connectionDistance) * 0.08;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = `rgba(15, 118, 110, ${alpha})`;
                        ctx.lineWidth = 0.8;
                        ctx.stroke();
                    }
                }
            }
            
            requestAnimationFrame(animate);
        }
        
        animate();
    }

    // Add dynamic CSS class rule for reveal state in JS directly
    const styleSheet = document.createElement("style");
    styleSheet.innerText = `
        .revealed {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(styleSheet);
});
