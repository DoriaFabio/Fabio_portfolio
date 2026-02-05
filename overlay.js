/**
 * ==========================================
 * FABIO DORIA PORTFOLIO - Main JavaScript
 * ==========================================
 */

// ==================== DOM ELEMENTS ====================

// Sidebar Elements
const hamburgerBtn = document.getElementById('hamburger-btn');
const sidebar = document.getElementById('sidebar');
const overlaySidebar = document.getElementById('overlay-sidebar');

// CV Overlay Elements
const cvBtn = document.getElementById('cv-btn');
const cvOverlay = document.getElementById('cv-overlay');
const cvCloseBtn = document.getElementById('cv-close-btn');

// ==================== SIDEBAR FUNCTIONS ====================

function openSidebar() {
    sidebar.classList.remove('translate-x-full');
    overlaySidebar.classList.remove('hidden');
}

function closeSidebar() {
    sidebar.classList.add('translate-x-full');
    overlaySidebar.classList.add('hidden');
}

function toggleSidebar() {
    sidebar.classList.toggle('translate-x-full');
    overlaySidebar.classList.toggle('hidden');
}

// ==================== CV OVERLAY FUNCTIONS ====================

function openCvOverlay() {
    cvOverlay.classList.remove('opacity-0', 'pointer-events-none');
    cvOverlay.classList.add('opacity-100', 'pointer-events-auto');
    document.body.style.overflow = 'hidden';
}

function closeCvOverlay() {
    cvOverlay.classList.add('opacity-0', 'pointer-events-none');
    cvOverlay.classList.remove('opacity-100', 'pointer-events-auto');
    document.body.style.overflow = '';
}

// ==================== EVENT LISTENERS ====================

// Sidebar Events
if (hamburgerBtn && sidebar && overlaySidebar) {
    hamburgerBtn.addEventListener('click', toggleSidebar);
    overlaySidebar.addEventListener('click', closeSidebar);

    // Close sidebar when clicking menu items
    sidebar.querySelectorAll('a').forEach((item) => {
        item.addEventListener('click', closeSidebar);
    });
}

// CV Overlay Events
if (cvBtn && cvOverlay && cvCloseBtn) {
    cvBtn.addEventListener('click', openCvOverlay);
    cvCloseBtn.addEventListener('click', closeCvOverlay);

    // Close when clicking the background
    cvOverlay.addEventListener('click', (e) => {
        if (e.target.closest('#cv-close-btn, #cv-download-btn, #cv-image')) return;
        closeCvOverlay();
    });

    // Close with Escape key
    document.addEventListener('keydown', (e) => {
        if (cvOverlay.classList.contains('pointer-events-none')) return;
        if (e.key === 'Escape') closeCvOverlay();
    });
}
