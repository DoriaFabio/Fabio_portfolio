// Sidebar mobile toggle functionality
const hamburgerBtn = document.getElementById('hamburger-btn'); 
const sidebar = document.getElementById('sidebar'); 
const overlay_sidebar = document.getElementById('overlay-sidebar');

if (hamburgerBtn && sidebar && overlay_sidebar) {
    // Apri/Chiudi sidebar al click sull'hamburger button
    hamburgerBtn.addEventListener('click', () => {
        sidebar.classList.toggle('translate-x-full');
        overlay_sidebar.classList.toggle('hidden');
    });

    // Chiudi sidebar al click sull'overlay
    overlay_sidebar.addEventListener('click', () => {
        sidebar.classList.add('translate-x-full');
        overlay_sidebar.classList.add('hidden');
    });

    // Chiudi sidebar al click su una voce di menu
    const menuItems = sidebar.querySelectorAll('a');
    menuItems.forEach((item) => {
        item.addEventListener('click', () => {
            sidebar.classList.add('translate-x-full');
            overlay_sidebar.classList.add('hidden');
        });
    });
}

// CV Overlay functionality with Carousel
const cvBtn = document.getElementById('cv-btn');
const cvOverlay = document.getElementById('cv-overlay');
const cvCloseBtn = document.getElementById('cv-close-btn');
const cvImage = document.getElementById('cv-image');
const cvDownloadBtn = document.getElementById('cv-download-btn');
const cvTitle = document.getElementById('cv-title');
const cvPrev = document.getElementById('cv-prev');
const cvNext = document.getElementById('cv-next');

// CV data array
const cvData = [
    {
        image: './image/Fabio Doria CV.png',
        pdf: './image/Fabio Doria CV.pdf',
        title: 'CV Italiano'
    },
    {
        image: './image/Fabio Doria CV International.png',
        pdf: './image/Fabio Doria CV International.pdf',
        title: 'CV International'
    }
];

let currentCvIndex = 0;

function updateCv(index) {
    currentCvIndex = index;
    cvImage.src = cvData[index].image;
    cvDownloadBtn.href = cvData[index].pdf;
    cvTitle.textContent = cvData[index].title;

    // Update dots
    document.querySelectorAll('[id^="dot-"]').forEach((dot, i) => {
        if (i === index) {
            dot.classList.remove('bg-gray-500');
            dot.classList.add('bg-[#FF0642]');
        } else {
            dot.classList.remove('bg-[#FF0642]');
            dot.classList.add('bg-gray-500');
        }
    });
}

function closeOverlay() {
    cvOverlay.classList.add('opacity-0', 'pointer-events-none');
    cvOverlay.classList.remove('opacity-100 pointer-events-auto');
    document.body.style.overflow = '';
}

if (cvBtn && cvOverlay && cvCloseBtn) {
    cvBtn.addEventListener('click', () => {
        currentCvIndex = 0;
        updateCv(0);
        cvOverlay.classList.remove('opacity-0', 'pointer-events-none');
        cvOverlay.classList.add('opacity-100 pointer-events-auto');
        document.body.style.overflow = 'hidden';
    });

    cvCloseBtn.addEventListener('click', closeOverlay);

    // Frecce navigazione
    cvPrev.addEventListener('click', () => {
        const newIndex = currentCvIndex === 0 ? cvData.length - 1 : currentCvIndex - 1;
        updateCv(newIndex);
    });

    cvNext.addEventListener('click', () => {
        const newIndex = currentCvIndex === cvData.length - 1 ? 0 : currentCvIndex + 1;
        updateCv(newIndex);
    });

    // Click sui dots
    document.querySelectorAll('[id^="dot-"]').forEach((dot, i) => {
        dot.addEventListener('click', () => updateCv(i));
    });

    // Swipe gesture per mobile
    let touchStartX = 0;
    let touchEndX = 0;

    cvOverlay.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    cvOverlay.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        const diff = touchStartX - touchEndX;
        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                // Swipe left - next
                const newIndex = currentCvIndex === cvData.length - 1 ? 0 : currentCvIndex + 1;
                updateCv(newIndex);
            } else {
                // Swipe right - prev
                const newIndex = currentCvIndex === 0 ? cvData.length - 1 : currentCvIndex - 1;
                updateCv(newIndex);
            }
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!cvOverlay.classList.contains('pointer-events-none')) {
            if (e.key === 'ArrowLeft') {
                const newIndex = currentCvIndex === 0 ? cvData.length - 1 : currentCvIndex - 1;
                updateCv(newIndex);
            } else if (e.key === 'ArrowRight') {
                const newIndex = currentCvIndex === cvData.length - 1 ? 0 : currentCvIndex + 1;
                updateCv(newIndex);
            } else if (e.key === 'Escape') {
                closeOverlay();
            }
        }
    });
}
