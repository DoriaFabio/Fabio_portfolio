const projects = [
    {
        title: "Bool B&B",
        description: "Replica di una pattaforma per la ricerca e gestione di immobili in affitto.",
        imageUrl: "./image/mockup.png",
        projectUrl: "",
    },
    {
        title: "Boolflix",
        description: "Piattaforma di streaming video che offre una vasta selezione di film e serie TV.",
        imageUrl: "./image/mockup.png",
        projectUrl: "",
    },
    {
        title: "Yogakounseling",
        description: "Sito vetrina per un servizio di yoga counseling",
        imageUrl: "./image/mockup.png",
        projectUrl: "",
    },
    {
        title: "Confronto risorse",
        description: "Applicazione web per confrontare diverse risorse online in base a vari criteri.",
        imageUrl: "./image/mockup.png",
        projectUrl: "",
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
            <a href="${project.projectUrl}" class="inline-block w-fit bg-[#FF0642] hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300">Vedi Progetto</a>
        </div>
    `;
    projectsContainer.appendChild(card);
});