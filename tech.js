const techSkills = [
    { name: 'HTML5', image: 'html.png' },
    { name: 'CSS3', image: 'css.png' },
    { name: 'JavaScript', image: 'javascript.png' },
    { name: 'TypeScript', image: 'typescript.png' },
    { name: 'React', image: 'react.png' },
    { name: 'Tailwind', image: 'tailwind.png' },
    { name: 'Bootstrap', image: 'bootstrap.png' },
    { name: 'Node.js', image: 'node.png' },
    { name: 'Express', image: 'express.png' },
    { name: 'REST API', image: 'rest-api.png' },
    { name: 'MySQL', image: 'mysql.png' }
];

// Genera le card delle tecnologie
const techContainer = document.getElementById('tech-container');

techSkills.forEach(tech => {
    const card = document.createElement('div');
    card.className = 'flex flex-col items-center justify-center gap-3 p-6 w-32 h-32 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300';

    card.innerHTML = `
        <img src="./image/loghi/${tech.image}" alt="${tech.name}" class="w-12 h-12 object-contain">
        <span class="text-white font-semibold">${tech.name}</span>
    `;

    techContainer.appendChild(card);
});
