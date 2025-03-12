// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    const icon = themeToggle.querySelector('i');
    icon.classList.replace(
        body.classList.contains('light-theme') ? 'fa-moon' : 'fa-sun',
        body.classList.contains('light-theme') ? 'fa-sun' : 'fa-moon'
    );
});

// Mobile Menu
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenu.querySelector('i').classList.toggle('fa-times');
    mobileMenu.querySelector('i').classList.toggle('fa-bars');
});

// Close menu on link click
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenu.querySelector('i').classList.replace('fa-times', 'fa-bars');
    });
});

// Projects Data
const projects = [
    {
        title: 'Proyecto ML',
        description: 'Sistema de recomendación basado en Machine Learning',
        technologies: ['Python', 'TensorFlow', 'scikit-learn'],
        github: 'https://github.com/yourusername/project1',
        demo: 'https://demo.project1.com'
    },
    {
        title: 'App Web Full-Stack',
        description: 'Aplicación web con autenticación y base de datos',
        technologies: ['React', 'Node.js', 'MongoDB'],
        github: 'https://github.com/yourusername/project2',
        demo: 'https://demo.project2.com'
    },
    {
        title: 'API REST',
        description: 'API RESTful con documentación automática',
        technologies: ['FastAPI', 'PostgreSQL', 'Docker'],
        github: 'https://github.com/yourusername/project3',
        demo: 'https://demo.project3.com'
    }
];

// Populate Projects Securely
const projectsGrid = document.querySelector('.projects-grid');
projects.forEach(project => {
    const card = document.createElement('div');
    card.classList.add('project-card');
    card.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="skill-tags">
            ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
        </div>
        <div class="project-links">
            <a href="${project.github}" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-github"></i> GitHub
            </a>
            <a href="${project.demo}" target="_blank" rel="noopener noreferrer">
                <i class="fas fa-external-link-alt"></i> Demo
            </a>
        </div>
    `;
    projectsGrid.appendChild(card);
});

// Form Handling
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const formProps = Object.fromEntries(formData);
    
    if (!formProps.name || !formProps.email || !formProps.message) {
        alert('Por favor, completa todos los campos antes de enviar.');
        return;
    }
    
    alert('¡Gracias por tu mensaje! Te contactaré pronto.');
    contactForm.reset();
});

// Smooth Scrolling
const scrollLinks = document.querySelectorAll('a[href^="#"]');
scrollLinks.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Update Current Year
document.getElementById('current-year').textContent = new Date().getFullYear();

// Intersection Observer for Animations
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(section => {
    section.classList.add('fade-out');
    observer.observe(section);
});
