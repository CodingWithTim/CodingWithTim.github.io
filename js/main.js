/**
 * BLAME! × NGE — Main JavaScript
 * Atmospheric effects, animations, data rendering
 */

document.addEventListener('DOMContentLoaded', () => {
    initGrain();
    initDataStream();
    initScrollReveal();
    initNavigation();
    initSmoothScroll();
    initDataRendering();
    initSyncCounter();
});

/* ============================================
   Grain Texture — manga ink on paper
   Canvas-based animated noise, ~12fps
   ============================================ */
function initGrain() {
    const overlay = document.getElementById('grain-overlay');
    if (!overlay || !window.HTMLCanvasElement) return;

    const canvas = document.createElement('canvas');
    canvas.width  = 256;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');

    function renderGrain() {
        const img = ctx.createImageData(256, 256);
        const d   = img.data;
        for (let i = 0; i < d.length; i += 4) {
            const v = (Math.random() * 255) | 0;
            d[i]     = v;
            d[i + 1] = v;
            d[i + 2] = v;
            d[i + 3] = 255;
        }
        ctx.putImageData(img, 0, 0);
        overlay.style.backgroundImage = `url(${canvas.toDataURL('image/png')})`;
    }

    renderGrain();
    setInterval(renderGrain, 80); // ~12fps
}

/* ============================================
   Data Stream — right-side scrolling hex column
   The City's maintenance telemetry
   ============================================ */
function initDataStream() {
    const container = document.getElementById('data-stream');
    if (!container) return;

    const HEX = '0123456789ABCDEF';
    const lines = [];
    for (let i = 0; i < 140; i++) {
        const len = 4 + ((Math.random() * 4) | 0);
        lines.push(
            Array.from({ length: len }, () => HEX[(Math.random() * 16) | 0]).join('')
        );
    }

    // Double the array so the CSS animation loops seamlessly
    const inner = document.createElement('div');
    inner.className = 'data-stream-inner';
    inner.textContent = [...lines, ...lines].join('\n');
    container.appendChild(inner);
}

/* ============================================
   Scroll Reveal
   Sections materialize like terminal data loading.
   Elements already in the viewport are revealed
   immediately; others reveal on scroll.
   ============================================ */
function initScrollReveal() {
    const elements = document.querySelectorAll('.section-reveal, .fade-in, .blog-card');

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            root: null,
            rootMargin: '0px 0px -20px 0px',
            threshold: 0,
        }
    );

    elements.forEach(el => observer.observe(el));

    // Force-reveal elements already in the viewport on load
    // (IntersectionObserver fires async; this handles the first paint)
    requestAnimationFrame(() => {
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                el.classList.add('visible');
            }
        });
    });
}

/* ============================================
   Navigation — scroll state
   ============================================ */
function initNavigation() {
    const nav = document.querySelector('.nav');
    let ticking = false;

    function updateNav() {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
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

/* ============================================
   Smooth Scroll
   ============================================ */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const navH = document.querySelector('.nav').offsetHeight;
                window.scrollTo({
                    top: target.getBoundingClientRect().top + window.scrollY - navH - 24,
                    behavior: 'smooth',
                });
                history.pushState(null, null, targetId);
            }
        });
    });
}

/* ============================================
   Data Rendering — from data.js
   ============================================ */
function initDataRendering() {
    if (typeof SOCIAL_LINKS !== 'undefined') renderSocialLinks();
    if (typeof CONTRIBUTIONS !== 'undefined') renderContributions();
}

const ARROW_SVG = '<svg class="link-arrow" width="11" height="11" viewBox="0 0 12 12" fill="none"><path d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';

function renderSocialLinks() {
    const container = document.getElementById('social-links');
    if (!container) return;

    container.innerHTML = SOCIAL_LINKS.map(link => `
        <a href="${link.url}" target="_blank" rel="noopener" class="social-link">
            <span class="link-text">${link.name}</span>
            ${ARROW_SVG}
        </a>
    `).join('');
}

/* ============================================
   Sync Counter — counts 0% → 100% matching
   the CSS bar animation (2s, 0.7s delay)
   ============================================ */
function initSyncCounter() {
    const el = document.querySelector('.sync-val');
    if (!el) return;

    const duration = 2000;
    const delay    = 700;

    // Set to 0% immediately so there's no flash of the HTML default
    el.textContent = '0%';

    let start = null;

    function step(ts) {
        if (!start) start = ts;
        const pct = Math.min((ts - start) / duration, 1);
        el.textContent = (pct * 100).toFixed(1) + '%';
        if (pct < 1) requestAnimationFrame(step);
        else el.textContent = '100.0%';
    }

    setTimeout(() => requestAnimationFrame(step), delay);
}

function renderContributions() {
    const container = document.getElementById('contributions-list');
    if (!container) return;

    container.innerHTML = CONTRIBUTIONS.map(item => {
        const nameHtml = item.url
            ? `<a href="${item.url}" target="_blank" rel="noopener">${item.name}</a>`
            : `<strong>${item.name}</strong>`;
        return `<li>${nameHtml}<span class="contribution-desc">${item.description}</span></li>`;
    }).join('');
}
