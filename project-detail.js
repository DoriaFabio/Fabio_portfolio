// Load project data from localStorage
document.addEventListener('DOMContentLoaded', () => {
    const projectData = localStorage.getItem('currentProject');

    if (!projectData) {
        // If no project data found, redirect to home page
        window.location.href = './index.html#projects';
        return;
    }

    const project = JSON.parse(projectData);

    // Update page title
    document.getElementById('page-title').textContent = `${project.title} - Fabio Doria`;

    // Update project title and description
    document.getElementById('project-title').textContent = project.title;
    document.getElementById('project-description').textContent = project.description;

    // Update project image
    const projectImage = document.getElementById('project-image');
    projectImage.src = project.imageDetailUrl || project.imageUrl;
    projectImage.alt = project.title;

    // Update detailed description
    document.getElementById('detailed-description').textContent = project.detailedDescription;

    // Update technologies list
    const technologiesList = document.getElementById('technologies-list');
    project.technologies.forEach(tech => {
        const techBadge = document.createElement('span');
        techBadge.className = 'bg-[#FF0642] text-white px-3 py-1 rounded-full text-sm font-semibold';
        techBadge.textContent = tech;
        technologiesList.appendChild(techBadge);
    });

    // Update features list
    const featuresList = document.getElementById('features-list');
    project.features.forEach(feature => {
        const featureItem = document.createElement('li');
        featureItem.className = 'text-white/80 flex items-start gap-2';
        featureItem.innerHTML = `
            <i class="fa-solid fa-check-circle text-[#FF0642] mt-1 shrink-0"></i>
            <span>${feature}</span>
        `;
        featuresList.appendChild(featureItem);
    });

    // Update GitHub link if available
    if (project.githubUrl) {
        const githubLink = document.getElementById('github-link');
        githubLink.href = project.githubUrl;
        githubLink.classList.remove('hidden');
        githubLink.classList.add('flex');
    }

    // Update Live link if available
    if (project.liveUrl) {
        const liveLink = document.getElementById('live-link');
        liveLink.href = project.liveUrl;
        liveLink.classList.remove('hidden');
        liveLink.classList.add('flex');
    }
});
