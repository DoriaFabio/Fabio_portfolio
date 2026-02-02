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
const cvImage = document.getElementById('cv-image');
const cvDownloadBtn = document.getElementById('cv-download-btn');
const cvTitle = document.getElementById('cv-title');
const cvPrev = document.getElementById('cv-prev');
const cvNext = document.getElementById('cv-next');

// ==================== CV DATA ====================

const cvData = [
    {
        image: './image/Fabio Doria CV.png',
        pdf: './image/Fabio Doria CV.pdf',
        title: 'Italian CV'
    },
    {
        image: './image/Fabio Doria CV International.png',
        pdf: './image/Fabio Doria CV International.pdf',
        title: 'CV International'
    }
];

let currentCvIndex = 0;

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

function updateCv(index) {
    currentCvIndex = index;
    cvImage.src = cvData[index].image;
    cvDownloadBtn.href = cvData[index].pdf;
    cvTitle.textContent = cvData[index].title;

    // Update indicator dots
    document.querySelectorAll('[id^="dot-"]').forEach((dot, i) => {
        dot.classList.toggle('bg-[#FF0642]', i === index);
        dot.classList.toggle('bg-gray-500', i !== index);
    });
}

function openCvOverlay() {
    currentCvIndex = 0;
    updateCv(0);
    cvOverlay.classList.remove('opacity-0', 'pointer-events-none');
    cvOverlay.classList.add('opacity-100', 'pointer-events-auto');
    document.body.style.overflow = 'hidden';
}

function closeCvOverlay() {
    cvOverlay.classList.add('opacity-0', 'pointer-events-none');
    cvOverlay.classList.remove('opacity-100', 'pointer-events-auto');
    document.body.style.overflow = '';
}

function nextCv() {
    const newIndex = currentCvIndex === cvData.length - 1 ? 0 : currentCvIndex + 1;
    updateCv(newIndex);
}

function prevCv() {
    const newIndex = currentCvIndex === 0 ? cvData.length - 1 : currentCvIndex - 1;
    updateCv(newIndex);
}

// ==================== SWIPE GESTURE HANDLER ====================

function initSwipeGestures(element, onSwipeLeft, onSwipeRight) {
    let touchStartX = 0;
    let touchEndX = 0;
    const SWIPE_THRESHOLD = 50;

    element.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    element.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > SWIPE_THRESHOLD) {
            if (diff > 0) {
                onSwipeLeft();
            } else {
                onSwipeRight();
            }
        }
    });
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

    // Navigation arrows
    cvPrev.addEventListener('click', prevCv);
    cvNext.addEventListener('click', nextCv);

    // Indicator dots
    document.querySelectorAll('[id^="dot-"]').forEach((dot, i) => {
        dot.addEventListener('click', () => updateCv(i));
    });

    // Swipe gestures for mobile
    initSwipeGestures(cvOverlay, nextCv, prevCv);

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (cvOverlay.classList.contains('pointer-events-none')) return;

        switch (e.key) {
            case 'ArrowLeft':
                prevCv();
                break;
            case 'ArrowRight':
                nextCv();
                break;
            case 'Escape':
                closeCvOverlay();
                break;
        }
    });
}
