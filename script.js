// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Animate feature cards when they come into view
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
        card.style.setProperty('--i', index);
        card.style.animationDelay = `${index * 0.1}s`;
    });

    // Animate steps when they come into view
    const steps = document.querySelectorAll('.step');
    steps.forEach((step, index) => {
        step.style.setProperty('--i', index);
        step.style.animationDelay = `${index * 0.2}s`;
    });

    // Form submission handler
    const form = document.getElementById('request-form');
    const successMessage = document.getElementById('success-message');
    const closeSuccessButton = document.getElementById('close-success');

    if (form) {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();

            const formData = new FormData(form);

            try {
                const response = await fetch('https://formcarry.com/s/4AgmnoXA0El', {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json',
                    }
                });

                if (response.ok) {
                    successMessage.style.display = 'flex';
                    form.reset();
                }
            } catch (error) {
                console.error('Error:', error);
            }
        });
    }

    if (closeSuccessButton) {
        closeSuccessButton.addEventListener('click', function() {
            successMessage.style.display = 'none';
        });
    }

    // Timeline animation on About page
    const timelineItems = document.querySelectorAll('.timeline-item');
    if (timelineItems.length > 0) {
        timelineItems.forEach((item, index) => {
            item.style.setProperty('--i', index);
            item.style.animationDelay = `${index * 0.5}s`;
        });
    }

    // Team members animation
    const teamMembers = document.querySelectorAll('.team-member');
    if (teamMembers.length > 0) {
        teamMembers.forEach((member, index) => {
            member.style.setProperty('--i', index);
            member.style.animationDelay = `${index * 0.2}s`;
        });
    }

    // Stats counter animation
    const stats = document.querySelectorAll('.stat');
    if (stats.length > 0) {
        stats.forEach((stat, index) => {
            stat.style.setProperty('--i', index);
            stat.style.animationDelay = `${index * 0.2}s`;
        });

        // Animate the counter when in viewport
        const observerOptions = {
            threshold: 0.5,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target.querySelector('.stat-number'));
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        stats.forEach(stat => {
            observer.observe(stat);
        });
    }

    // Function to animate counters
    function animateCounter(element) {
        const target = parseInt(element.getAttribute('data-count'));
        const duration = 2000; // 2 seconds
        const step = target / (duration / 16); // 60fps
        let current = 0;
        
        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, 16);
    }

    // Add scrolling animation for all sections
    const allSections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    allSections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(section);
    });

    // Get Started button scroll to contact section
    const scrollToContactBtn = document.getElementById('scroll-to-contact');
    if (scrollToContactBtn) {
        scrollToContactBtn.addEventListener('click', function() {
            const contactSection = document.getElementById('contact');
            contactSection.scrollIntoView({ behavior: 'smooth' });
        });
    }
});