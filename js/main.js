/**
 * Main JavaScript for Personal Website
 * Handles smooth scrolling, scroll animations, navigation effects, and data rendering
 */

document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimations();
    initNavigation();
    initSmoothScroll();
    initDataRendering();
});

/**
 * Scroll-triggered fade-in animations
 */
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll(
        '.about, .background, .interests, .post-section, .blog-card'
    );

    animatedElements.forEach(el => {
        el.classList.add('fade-in');
    });

    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

/**
 * Navigation scroll effects
 */
function initNavigation() {
    const nav = document.querySelector('.nav');
    let ticking = false;

    function updateNav() {
        const scrollY = window.scrollY;

        if (scrollY > 50) {
            nav.style.background = 'rgba(13, 13, 13, 0.95)';
            nav.style.backdropFilter = 'blur(10px)';
            nav.style.webkitBackdropFilter = 'blur(10px)';
            nav.classList.add('scrolled');
        } else {
            nav.style.background = 'linear-gradient(to bottom, rgba(13, 13, 13, 1) 0%, transparent 100%)';
            nav.style.backdropFilter = 'none';
            nav.style.webkitBackdropFilter = 'none';
            nav.classList.remove('scrolled');
        }

        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateNav);
            ticking = true;
        }
    }, { passive: true });
}

/**
 * Smooth scrolling for anchor links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');

            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                e.preventDefault();

                const navHeight = document.querySelector('.nav').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                history.pushState(null, null, targetId);
            }
        });
    });
}

/**
 * Data-driven rendering from data.js
 */
function initDataRendering() {
    if (typeof SOCIAL_LINKS !== 'undefined') {
        renderSocialLinks();
    }
    if (typeof CONTRIBUTIONS !== 'undefined') {
        renderContributions();
    }
}

const ARROW_SVG = '<svg class="link-arrow" width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';

function renderSocialLinks() {
    const container = document.getElementById('social-links');
    if (!container) return;

    container.innerHTML = SOCIAL_LINKS.map(link => `
        <a href="${link.url}" target="_blank" class="social-link">
            <span class="link-text">${link.name}</span>
            ${ARROW_SVG}
        </a>
    `).join('');
}

function renderContributions() {
    const container = document.getElementById('contributions-list');
    if (!container) return;

    container.innerHTML = CONTRIBUTIONS.map(item => {
        const nameHtml = item.url
            ? `<a href="${item.url}" target="_blank">${item.name}</a>`
            : `<strong>${item.name}</strong>`;
        return `<li>${nameHtml}<span class="contribution-desc">${item.description}</span></li>`;
    }).join('');
}

/**
 * Utility: Debounce function
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Utility: Check if element is in viewport
 */
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
