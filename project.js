const projects = [
    {
        id: "boolbnb",
        title: "Bool B&B",
        description: "Replica of a webApp for searching and managing rental properties.",
        imageUrl: "./image/BoolBnb.png",
        imageDetailUrl: "./image/BoolBnbDetail.png",
        detailedDescription: "Bool B&B is a comprehensive web application that replicates the functionality of popular property rental platforms. The application allows users to search for properties, view detailed listings, and manage their rental properties.",
        technologies: ["React", "Javascript", "Node.js", "Express", "MySQL", "Tailwind CSS"],
        features: [
            "Advanced property search with filters",
            "Property management dashboard",
            "Responsive design for all devices",
            "Add property listings",
            "AI-powered search suggestions",
        ],
        githubUrl: "https://github.com/AndySMT/BoolBnB",
        liveUrl: ""
    },
    {
        id: "boolflix",
        title: "Boolflix",
        description: "A platform offering a database of movies and TV series.",
        imageUrl: "./image/Boolflix.png",
        imageDetailUrl: "./image/BoolflixDetail.png",
        detailedDescription: "Boolflix is a Netflix-inspired web application that offers users a comprehensive database of movies and TV series. Users can search, add to favorites and watchlists, and explore a vast collection of entertainment content.",
        technologies: ["React", "Rest API", "Tailwind CSS", "JavaScript"],
        features: [
            "Real-time search functionality",
            "Favorites and watchlist management",
            "Detailed content information cards",
            "Rating system display",
            "Responsive design for all devices",
            "Cast and recommendation sections",
        ],
        githubUrl: "https://github.com/DoriaFabio/react-boolflix",
        liveUrl: "https://boolflixfeb.netlify.app/"
    },
    {
        id: "yogakounseling",
        title: "Yogakounseling",
        description: "Showcase website for a yoga counseling service.",
        imageUrl: "./image/yogaKounseling.png",
        imageDetailUrl: "./image/yogaKounselingDetail.png",
        detailedDescription: "Yogakounseling is an elegant showcase website designed for a yoga counseling service. The website presents the services, philosophy, and contact information in a calming and professional manner.",
        technologies: ["HTML5", "Tailwind CSS", "JavaScript", "jQuery"],
        features: [
            "Responsive and elegant design",
            "Service showcase sections",
            "Contact form integration",
            "Smooth scrolling navigation",
        ],
        githubUrl: "https://github.com/DoriaFabio/yogaKounseling",
        liveUrl: "https://yogakounseling.it/"
    },
    {
        id: "campo-minato",
        title: "Campo Minato",
        description: "Classic Minesweeper game built with JavaScript.",
        imageUrl: "./image/campoMinato.png",
        imageDetailUrl: "./image/campoMinatoDetail.png",
        detailedDescription: "Campo Minato is a classic Minesweeper game built with JavaScript. The game features a grid-based layout where players must uncover safe tiles while avoiding hidden mines.",
        technologies: ["HTML5", "Tailwind CSS", "JavaScript"],
        features: [
            "Classic Minesweeper gameplay",
            "Responsive design for all devices",
            "Score tracking",
        ],
        githubUrl: "https://github.com/DoriaFabio/campo-minato",
        liveUrl: "https://minatecamp.netlify.app/"
    }
];

const projectsContainer = document.getElementById('projects-container');
projects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'w-full bg-white/5 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 overflow-hidden hover:shadow-lg hover:shadow-[#FF0642]/20 flex flex-col md:flex-row';
    card.innerHTML = `
        <div class="w-full md:w-1/2 aspect-video md:aspect-auto overflow-hidden">
            <img src="${project.imageUrl}" alt="${project.title}" class="w-full h-full object-cover transition-transform duration-300 hover:scale-105">
        </div>
        <div class="w-full md:w-1/2 p-5 md:p-8 flex flex-col justify-center">
            <h3 class="text-xl md:text-2xl font-semibold mb-3 text-white">${project.title}</h3>
            <p class="text-gray-300 text-sm md:text-base mb-5">${project.description}</p>
            <button onclick="viewProjectDetail('${project.id}')" class="inline-block w-fit bg-[#FF0642] hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300">Vedi Progetto</button>
        </div>
    `;
    projectsContainer.appendChild(card);
});

// Function to navigate to project detail page
function viewProjectDetail(projectId) {
    // Save project data to localStorage for the detail page
    const project = projects.find(p => p.id === projectId);
    if (project) {
        localStorage.setItem('currentProject', JSON.stringify(project));
        window.location.href = './project-detail.html';
    }
}