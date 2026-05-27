document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle Logic
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const themes = ['theme-dark-green', 'theme-midnight', 'theme-light'];
    let currentThemeIndex = 0;

    themeToggle.addEventListener('click', () => {
        body.classList.remove(themes[currentThemeIndex]);
        currentThemeIndex = (currentThemeIndex + 1) % themes.length;
        body.classList.add(themes[currentThemeIndex]);

        // Update particles color based on theme (optional advanced feature to implement later)
        updateParticles();
    });

    // Initialize Particles.js
    /* 
       Note: We need the particles.js library loaded. 
       This configuration is a placeholder for the green sparks.
    */
    if (window.particlesJS) {
        particlesJS("particles-js", {
            "particles": {
                "number": { "value": 60, "density": { "enable": true, "value_area": 800 } },
                "color": { "value": "#D4AF37" }, /* Gold particles */
                "shape": { "type": "circle" },
                "opacity": { "value": 0.3, "random": false },
                "size": { "value": 2, "random": true },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#D4AF37",
                    "opacity": 0.2,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 1, /* Slower, more elegant speed */
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": { "enable": true, "mode": "grab" }, /* Subtle connecting lines on hover */
                    "onclick": { "enable": true, "mode": "push" },
                    "resize": true
                },
                "modes": {
                    "grab": { "distance": 140, "line_linked": { "opacity": 0.5 } }
                }
            },
            "retina_detect": true
        });
    }

    // --- Mobile Navigation Logic ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links li');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            // Toggle Nav
            navLinks.classList.toggle('nav-active');

            // Hamburger Animation
            hamburger.classList.toggle('toggle');

            // Animate Links
            navLinksItems.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });
        });

        // Close menu when clicking a link
        navLinksItems.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('nav-active');
                hamburger.classList.remove('toggle');

                navLinksItems.forEach(item => {
                    item.style.animation = '';
                });
            });
        });
    }

    // Performance Metrics (Mockup for now)
    const loadTimeDisplay = document.getElementById('load-time');
    // Calculate load time
    const performanceTiming = window.performance.timing;
    const loadTime = (performanceTiming.loadEventEnd - performanceTiming.navigationStart) / 1000;
    if (loadTimeDisplay) {
        loadTimeDisplay.textContent = loadTime.toFixed(2);
    }

    // --- Interactive Features ---

    // 1. Scroll Animations (Intersection Observer)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once visible to run animation only once
                // observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    // Observe sections and elements
    document.querySelectorAll('.section-title, .about-text, .about-image, .skill-card, .project-card, .edu-item, .contact-wrapper').forEach(el => {
        el.classList.add('hidden-animate');
        observer.observe(el);
    });

    // 2. Timeline Toggle
    const toggleBtn = document.getElementById('toggle-timeline-btn');
    const timeline = document.getElementById('milestone-timeline');

    if (toggleBtn && timeline) {
        toggleBtn.addEventListener('click', () => {
            if (timeline.style.display === 'block') {
                timeline.style.display = 'none';
                toggleBtn.innerHTML = 'View My Journey <i class="fas fa-angle-down"></i>';
            } else {
                timeline.style.display = 'block';
                timeline.animation = 'slideDown 0.5s ease-out';
                toggleBtn.innerHTML = 'Hide Journey <i class="fas fa-angle-up"></i>';
            }
        });
    }

    // 3. Skill Matcher
    const skillInput = document.getElementById('skill-input');
    const skillCards = document.querySelectorAll('.skill-card');

    if (skillInput) {
        skillInput.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            skillCards.forEach(card => {
                const tags = card.getAttribute('data-tags') || '';
                const title = card.querySelector('h3').textContent.toLowerCase();

                if (term === '') {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                    card.classList.remove('highlighted');
                } else if (tags.includes(term) || title.includes(term)) {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1.1)';
                    card.classList.add('highlighted');
                } else {
                    card.style.opacity = '0.3';
                    card.style.transform = 'scale(0.95)';
                    card.classList.remove('highlighted');
                }
            });
        });
    }

    // 4. Random Project Feature
    const randomBtn = document.getElementById('random-project-btn');
    const projectCards = document.querySelectorAll('.project-card');

    if (randomBtn) {
        randomBtn.addEventListener('click', () => {
            // Reset all first
            projectCards.forEach(card => {
                card.style.display = 'block';
                card.classList.remove('highlight-project');
            });

            // Pick random
            const randomIndex = Math.floor(Math.random() * projectCards.length);
            const selected = projectCards[randomIndex];

            // Hide others momentarily for effect (optional) or just scroll to it/highlight it
            // Let's highlight it and scroll to it
            projectCards.forEach((card, index) => {
                if (index !== randomIndex) {
                    card.style.opacity = '0.3';
                } else {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1.05)';
                    card.classList.add('highlight-project');
                    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            });

            // Reset after a delay
            setTimeout(() => {
                projectCards.forEach(card => {
                    card.style.opacity = '1';
                    card.style.transform = 'none';
                    card.classList.remove('highlight-project');
                });
            }, 3000);
        });
    }

    // 5. Voice Navigation (Simple Implementation)
    const voiceBtn = document.getElementById('voice-nav-btn');
    if (voiceBtn && ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new SpeechRecognition();

        recognition.continuous = false;
        recognition.lang = 'en-US';

        voiceBtn.addEventListener('click', () => {
            voiceBtn.classList.add('listening');
            recognition.start();
        });

        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript.toLowerCase();
            voiceBtn.classList.remove('listening');
            console.log('Voice command:', transcript);

            if (transcript.includes('home')) window.scrollTo({ top: 0, behavior: 'smooth' });
            else if (transcript.includes('about')) document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
            else if (transcript.includes('skill')) document.getElementById('skills').scrollIntoView({ behavior: 'smooth' });
            else if (transcript.includes('project')) document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
            else if (transcript.includes('education')) document.getElementById('education').scrollIntoView({ behavior: 'smooth' });
            else if (transcript.includes('contact')) document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            else alert('Command not recognized: ' + transcript);
        };

        recognition.onerror = () => {
            voiceBtn.classList.remove('listening');
        };
        recognition.onend = () => {
            voiceBtn.classList.remove('listening');
        };
    } else if (voiceBtn) {
        voiceBtn.style.display = 'none'; // Hide if not supported
    }

    // 6. Modal Logic
    const modal = document.getElementById("universal-modal");
    const closeBtn = document.querySelector(".close-modal");
    const certButtons = document.querySelectorAll('.view-cert-btn');

    if (modal && closeBtn) {
        // Open for certificates
        // Open for certificates
        certButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                modal.style.display = "flex";
                const modalBody = document.getElementById('modal-body-content');
                const certType = btn.getAttribute('data-cert');

                if (certType === 'cisco') {
                    modalBody.innerHTML = `
                        <h2 style="margin-bottom: 20px; color: #D4AF37;">HTML Essentials</h2>
                        <div class="cert-container">
                            <img src="./images/cisco-certificate.jpg" alt="Cisco Certificate" style="max-width: 100%; height: auto; border-radius: 5px; box-shadow: 0 0 15px rgba(0,0,0,0.5);">
                        </div>
                    `;
                } else if (certType === 'css') {
                    modalBody.innerHTML = `
                        <h2 style="margin-bottom: 20px; color: #D4AF37;">CSS Essentials</h2>
                        <div class="cert-container">
                            <img src="./images/css certificate.jpg" alt="CSS Certificate" style="max-width: 100%; height: auto; border-radius: 5px; box-shadow: 0 0 15px rgba(0,0,0,0.5);">
                        </div>
                    `;
                } else if (certType === 'js') {
                    modalBody.innerHTML = `
                        <h2 style="margin-bottom: 20px; color: #D4AF37;">JavaScript Essentials</h2>
                        <div class="cert-container">
                            <img src="./images/javascript certifite.jpg" alt="JavaScript Certificate" style="max-width: 100%; height: auto; border-radius: 5px; box-shadow: 0 0 15px rgba(0,0,0,0.5);">
                        </div>
                    `;
                }
            });
        });

        // Close logic
        closeBtn.onclick = function () {
            modal.style.display = "none";
        }
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }

});