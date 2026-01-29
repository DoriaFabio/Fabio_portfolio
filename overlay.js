// Sidebar mobile toggle functionality

const hamburgerBtn = document.getElementById('hamburger-btn'); 
const sidebar = document.getElementById('sidebar'); 
const overlay = document.getElementById('overlay');

if (hamburgerBtn && sidebar && overlay) {
    hamburgerBtn.addEventListener('click', () => {
        sidebar.classList.toggle('translate-x-full');
        overlay.classList.toggle('hidden');
    });

    overlay.addEventListener('click', () => {
        sidebar.classList.add('translate-x-full');
        overlay.classList.add('hidden');
    });

    // Chiudi sidebar al click su una voce di menu
    const menuItems = sidebar.querySelectorAll('h2');
    menuItems.forEach((item) => {
        item.addEventListener('click', () => {
            sidebar.classList.add('translate-x-full');
            overlay.classList.add('hidden');
        });
    });
}
