document.addEventListener('DOMContentLoaded', () => {
    renderCurrentYear();

    if (typeof SOCIAL_LINKS !== 'undefined') {
        renderSocialLinks();
    }

    if (typeof CONTRIBUTIONS !== 'undefined') {
        renderContributions();
    }
});

function renderCurrentYear() {
    document.querySelectorAll('[data-current-year]').forEach((element) => {
        element.textContent = new Date().getFullYear();
    });
}

function renderSocialLinks() {
    const container = document.getElementById('social-links');
    if (!container) return;

    container.innerHTML = SOCIAL_LINKS.map((link) => `
        <a class="social-link" href="${link.url}" target="_blank" rel="noopener">
            <span>${link.name}</span>
            <span aria-hidden="true">↗</span>
        </a>
    `).join('');
}

function renderContributions() {
    const container = document.getElementById('contributions-list');
    if (!container) return;

    container.innerHTML = CONTRIBUTIONS.map((item) => {
        const title = item.url
            ? `<a href="${item.url}" target="_blank" rel="noopener">${item.name}</a>`
            : item.name;

        return `
            <article class="work-item">
                <div class="work-title">
                    <h3>${title}</h3>
                    <span>Model contribution</span>
                </div>
                <p>${item.description}</p>
                <span class="work-arrow" aria-hidden="true">${item.url ? '↗' : '·'}</span>
            </article>
        `;
    }).join('');
}
