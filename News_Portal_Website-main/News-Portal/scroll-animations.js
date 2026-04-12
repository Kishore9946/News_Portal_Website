// ========== SCROLL ANIMATIONS SYSTEM ==========

class ScrollAnimationManager {
    constructor() {
        this.elements = [];
        this.scrollProgress = 0;
        this.lastScrollY = 0;
        this.ticking = false;
        this.parallaxElements = [];
        this.init();
    }

    init() {
        this.cacheElements();
        this.setupEventListeners();
        this.triggerInitialAnimations();
        this.createScrollProgressBar();
    }

    cacheElements() {
        // Collect all elements that should animate
        this.elements = document.querySelectorAll(
            '.news-card, .section-header, .hero-content, .footer-col, [data-animate]'
        );

        // Collect parallax elements
        this.parallaxElements = document.querySelectorAll('[data-parallax]');
    }

    setupEventListeners() {
        // Throttled scroll event
        window.addEventListener('scroll', () => this.handleScroll(), { passive: true });
        window.addEventListener('resize', () => this.recalculatePositions(), { passive: true });
    }

    handleScroll() {
        this.lastScrollY = window.scrollY;

        if (!this.ticking) {
            requestAnimationFrame(() => {
                this.updateScrollProgress();
                this.checkElementsInViewport();
                this.updateParallax();
                this.ticking = false;
            });
            this.ticking = true;
        }
    }

    updateScrollProgress() {
        const winScroll = window.scrollY;
        const height = document.documentElement.scrollHeight - window.innerHeight;
        this.scrollProgress = height > 0 ? (winScroll / height) * 100 : 0;

        // Update progress bar
        const progressBar = document.querySelector('.scroll-progress-bar');
        if (progressBar) {
            progressBar.style.width = this.scrollProgress + '%';
        }
    }

    checkElementsInViewport() {
        const viewportHeight = window.innerHeight;

        this.elements.forEach((element, index) => {
            if (element.classList.contains('animated')) return;

            const rect = element.getBoundingClientRect();
            const elementCenter = rect.top + rect.height / 2;

            // Trigger animation when element is in viewport
            if (rect.top < viewportHeight - 100 && rect.bottom > 100) {
                this.animateElement(element, index);
            }
        });
    }

    animateElement(element, index) {
        element.classList.add('scroll-animate');
        element.classList.add('animated');

        // Determine animation type
        const animationType = element.dataset.animation || 'fade-in';
        element.classList.add(animationType);

        // Add stagger delay
        const delay = (index % 6) * 0.1;
        element.style.animationDelay = delay + 's';

        // Add glow effect for featured cards
        if (element.classList.contains('featured')) {
            element.classList.add('scroll-glow');
        }
    }

    updateParallax() {
        this.parallaxElements.forEach((element) => {
            const rect = element.getBoundingClientRect();
            const speed = element.dataset.parallaxSpeed || 0.5;

            // Calculate parallax offset
            const yOffset = rect.top * speed;
            element.style.transform = `translateY(${yOffset}px)`;
        });

        // Hero parallax effect
        const hero = document.querySelector('.hero');
        if (hero) {
            const rect = hero.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                const parallaxFactor = rect.top * 0.3;
                const heroBg = hero.querySelector('.mesh-gradient-bg');
                if (heroBg) {
                    heroBg.style.transform = `translateY(${parallaxFactor}px) scale(1.1)`;
                }
            }
        }
    }

    triggerInitialAnimations() {
        // Immediately animate elements already in viewport on page load
        setTimeout(() => {
            this.checkElementsInViewport();
        }, 100);
    }

    recalculatePositions() {
        // Recalculate on window resize
        this.cacheElements();
    }

    createScrollProgressBar() {
        // Create scroll progress bar if it doesn't exist
        if (!document.querySelector('.scroll-progress-bar')) {
            const progressBar = document.createElement('div');
            progressBar.className = 'scroll-progress-bar';
            document.body.insertBefore(progressBar, document.body.firstChild);
        }
    }

    // Reverse animation on scroll up
    reverseAnimation(element) {
        const rect = element.getBoundingClientRect();
        if (rect.top > window.innerHeight || rect.bottom < 0) {
            element.classList.remove('animated');
            element.style.animationDelay = '0s';
        }
    }
}

// ========== ENHANCED SCROLL EFFECTS ==========

class ScrollEffects {
    constructor() {
        this.init();
    }

    init() {
        this.setupHeroParallax();
        this.setupImageParallax();
        this.setupBlurEffect();
        this.setupSmoothScroll();
    }

    setupHeroParallax() {
        const hero = document.querySelector('.hero');
        if (!hero) return;

        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            const parallaxBg = hero.querySelector('.mesh-gradient-bg');
            if (parallaxBg) {
                parallaxBg.style.transform = `translateY(${scrollY * 0.5}px) scale(1.05)`;
            }
        }, { passive: true });
    }

    setupImageParallax() {
        const images = document.querySelectorAll('[data-parallax-img]');
        images.forEach((img) => {
            window.addEventListener('scroll', () => {
                const rect = img.getBoundingClientRect();
                const speed = 0.3;
                const yPos = -(rect.top * speed);
                img.style.backgroundPosition = `center ${yPos}px`;
            }, { passive: true });
        });
    }

    setupBlurEffect() {
        const blurElements = document.querySelectorAll('.scroll-blur');
        
        window.addEventListener('scroll', () => {
            const scrollSpeed = Math.abs(window.scrollY - this.lastScroll) || 0;
            this.lastScroll = window.scrollY;

            blurElements.forEach((element) => {
                const rect = element.getBoundingClientRect();
                const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

                if (isVisible) {
                    element.classList.remove('out-of-view');
                } else {
                    element.classList.add('out-of-view');
                }
            });
        }, { passive: true });
    }

    setupSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
            anchor.addEventListener('click', (e) => {
                const href = anchor.getAttribute('href');
                if (href === '#') return;

                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
}

// ========== TEXT REVEAL ANIMATION ==========

class TextRevealAnimation {
    constructor() {
        this.init();
    }

    init() {
        this.setupTextReveal();
    }

    setupTextReveal() {
        const revealElements = document.querySelectorAll('[data-text-reveal]');

        revealElements.forEach((element) => {
            const text = element.innerText;
            const words = text.split(' ');

            element.innerHTML = words
                .map((word) => `<span class="word-reveal">${word}</span>`)
                .join(' ');

            const wordSpans = element.querySelectorAll('.word-reveal');

            // Observe each word
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.style.animation = `slideInUp 0.6s ease-out forwards`;
                    }
                });
            }, { threshold: 0.1 });

            wordSpans.forEach((span, index) => {
                span.style.opacity = '0';
                span.style.animationDelay = index * 0.05 + 's';
                observer.observe(span);
            });
        });
    }
}

// ========== SCROLL COUNTER ANIMATION ==========

class CounterAnimation {
    constructor() {
        this.counters = document.querySelectorAll('[data-counter]');
        this.init();
    }

    init() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                    this.animateCounter(entry.target);
                    entry.target.classList.add('counted');
                }
            });
        }, { threshold: 0.5 });

        this.counters.forEach((counter) => {
            observer.observe(counter);
        });
    }

    animateCounter(element) {
        const target = parseInt(element.getAttribute('data-counter'), 10);
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;

        const updateCounter = () => {
            current += increment;
            if (current >= target) {
                element.innerText = target;
            } else {
                element.innerText = Math.floor(current);
                requestAnimationFrame(updateCounter);
            }
        };

        updateCounter();
    }
}

// ========== INTERSECTION OBSERVER FOR LAZY ANIMATIONS ==========

class LazyAnimationObserver {
    constructor() {
        this.init();
    }

    init() {
        const options = {
            threshold: [0, 0.25, 0.5, 0.75, 1],
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    
                    // Trigger custom event
                    entry.target.dispatchEvent(new CustomEvent('animateIn'));
                } else {
                    entry.target.classList.remove('in-view');
                }
            });
        }, options);

        // Observe all animated elements
        document.querySelectorAll('[data-animate], .news-card, .section-header').forEach((el) => {
            observer.observe(el);
        });
    }
}

// ========== MOUSE PARALLAX ON HERO ==========

class MouseParallax {
    constructor() {
        this.hero = document.querySelector('.hero');
        if (this.hero) {
            this.init();
        }
    }

    init() {
        this.hero.addEventListener('mousemove', (e) => {
            this.updateParallax(e);
        });
        this.hero.addEventListener('mouseleave', () => {
            this.resetParallax();
        });
    }

    updateParallax(event) {
        const { clientX, clientY } = event;
        const { clientWidth, clientHeight } = this.hero;

        const x = (clientX / clientWidth - 0.5) * 20; // Max offset: 20px
        const y = (clientY / clientHeight - 0.5) * 20;

        const parallaxBg = this.hero.querySelector('.mesh-gradient-bg');
        if (parallaxBg) {
            parallaxBg.style.transform = `translate(${x}px, ${y}px) scale(1.05)`;
        }
    }

    resetParallax() {
        const parallaxBg = this.hero.querySelector('.mesh-gradient-bg');
        if (parallaxBg) {
            parallaxBg.style.transform = 'translate(0, 0) scale(1.05)';
        }
    }
}

// ========== SCROLL-TRIGGERED VIDEO PLAY ==========

class ScrollTriggeredMedia {
    constructor() {
        this.init();
    }

    init() {
        const mediaElements = document.querySelectorAll('[data-scroll-play]');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const element = entry.target;
                if (entry.isIntersecting && element.tagName === 'VIDEO') {
                    element.play().catch(() => {});
                } else if (element.tagName === 'VIDEO') {
                    element.pause();
                }
            });
        }, { threshold: 0.5 });

        mediaElements.forEach((el) => {
            observer.observe(el);
        });
    }
}

// ========== INITIALIZATION ==========

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all scroll animation systems
    const animationManager = new ScrollAnimationManager();
    const scrollEffects = new ScrollEffects();
    const textReveal = new TextRevealAnimation();
    const counterAnimation = new CounterAnimation();
    const lazyObserver = new LazyAnimationObserver();
    const mouseParallax = new MouseParallax();
    const scrollMedia = new ScrollTriggeredMedia();

    // Expose manager to global scope for manual control
    window.scrollAnimationManager = animationManager;

    // Log initialization
    console.log('✨ Scroll Animation System Initialized');
});

// ========== UTILITY FUNCTIONS ==========

// Function to manually trigger animation on an element
window.triggerScrollAnimation = function(selector, animationType = 'fade-in') {
    const elements = document.querySelectorAll(selector);
    elements.forEach((el) => {
        el.classList.add('scroll-animate', animationType);
    });
};

// Function to get current scroll progress
window.getScrollProgress = function() {
    return window.scrollAnimationManager?.scrollProgress || 0;
};

// Function to enable/disable animations
window.toggleScrollAnimations = function(enabled) {
    document.body.style.pointerEvents = enabled ? 'auto' : 'none';
    const style = document.querySelector('style[data-animations]');
    if (style) {
        style.disabled = !enabled;
    }
};

// Debug function to visualize animation elements
window.debugScrollAnimations = function() {
    const elements = document.querySelectorAll('.scroll-animate');
    console.log(`Found ${elements.length} scroll animation elements`);
    elements.forEach((el, i) => {
        console.log(`${i + 1}. ${el.className}`, el);
    });
};
