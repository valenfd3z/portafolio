// Datos de habilidades organizadas por categoría
const skills = [
    // Lenguajes
    { name: 'Python', icon: 'fab fa-python', category: 'Lenguajes' },
    { name: 'Bash', icon: 'devicon-bash-plain colored', category: 'Lenguajes' },
    { name: 'Go', icon: 'devicon-go-original-wordmark colored', category: 'Lenguajes' },
    { name: 'Node.js', icon: 'fab fa-node-js', category: 'Lenguajes' },
    { name: 'SQL', icon: 'fas fa-database', category: 'Lenguajes' },
    
    // Frameworks
    { name: 'Django', icon: 'devicon-django-plain colored', category: 'Frameworks' },
    { name: 'Flask', icon: 'devicon-flask-original colored', category: 'Frameworks' },
    { name: 'Echo', icon: 'devicon-go-original-wordmark colored', category: 'Frameworks' },
    { name: 'Express', icon: 'devicon-express-original colored', category: 'Frameworks' },
    { name: 'React + TypeScript', icon: 'fab fa-react', category: 'Frameworks' },
    
    // Herramientas
    { name: 'Git', icon: 'fab fa-git-alt', category: 'Herramientas' },
    { name: 'Burp Suite', icon: 'fas fa-bug', category: 'Herramientas' },
    { name: 'Docker', icon: 'fab fa-docker', category: 'Herramientas' },
    { name: 'Nmap', icon: 'fas fa-network-wired', category: 'Herramientas' },
    { name: 'SQLMap', icon: 'fas fa-database', category: 'Herramientas' },
    
    // Aptitudes
    { name: 'Web Scraping', icon: 'fas fa-spider', category: 'Aptitudes' },
    { name: 'SQL Injection', icon: 'fas fa-database', category: 'Aptitudes' },
    { name: 'HTML Injection', icon: 'fab fa-html5', category: 'Aptitudes' },
    { name: 'Pentesting', icon: 'fas fa-shield-alt', category: 'Aptitudes' },
    { name: 'Linux', icon: 'fab fa-linux', category: 'Aptitudes' }
];

// Datos de proyectos
const projects = [
    {
        title: 'CIBERSEGURO',
        description: 'Plataforma web que contiene herramientas legales de ciberseguridad automatizadas para usuarios inexpertos. Incluye funcionalidades como búsqueda de información en redes sociales (tipo Sherlock), análisis de URLs sospechosas y más.',
        image: 'img/project-ciberseguro.jpg',
        technologies: ['Python', 'Flask', 'HTML/CSS', 'JavaScript', 'Web Scraping'],
        link: '#'
    },
    {
        title: 'SQLMap GUI',
        description: 'Aplicación de escritorio que proporciona una interfaz gráfica para SQLMap, facilitando las pruebas de inyección SQL en entornos controlados para principiantes.',
        image: 'img/project-sqlmap.jpg',
        technologies: ['Python', 'Tkinter', 'SQLMap', 'Bash'],
        link: '#'
    },
    {
        title: 'HTML Injection Tester',
        description: 'Herramienta de escritorio para probar vulnerabilidades de inyección HTML en aplicaciones web locales. Diseñada para entornos de pruebas controladas.',
        image: 'img/project-html-injector.jpg',
        technologies: ['Python', 'Tkinter', 'Web Scraping', 'Bash'],
        link: '#'
    }
];

// Datos de entradas de blog (simuladas)
const blogPosts = [
    {
        title: 'Resolución de Máquina THM',
        excerpt: 'Guía detallada de resolución de la máquina X en TryHackMe.',
        date: '30 de Julio, 2025',
        readTime: '5 min',
        link: '#'
    },
    {
        title: 'Introducción al Pentesting',
        excerpt: 'Conceptos básicos y primeros pasos en pruebas de penetración.',
        date: '25 de Julio, 2025',
        readTime: '8 min',
        link: '#'
    },
    {
        title: 'Herramientas Esenciales',
        excerpt: 'Lista de herramientas imprescindibles para ciberseguridad.',
        date: '20 de Julio, 2025',
        readTime: '6 min',
        link: '#'
    }
];

// Función para cargar habilidades en 4 tarjetas
function loadSkills() {
    const skillsContainer = document.querySelector('#skills .container');
    skillsContainer.innerHTML = '<h2>Habilidades</h2><div class="skills-grid"></div>';
    
    const skillsGrid = skillsContainer.querySelector('.skills-grid');
    
    // Orden de las categorías
    const categories = ['Lenguajes', 'Frameworks', 'Herramientas', 'Aptitudes'];
    
    // Crear una tarjeta por categoría
    categories.forEach(category => {
        const categorySkills = skills.filter(skill => skill.category === category);
        
        const card = document.createElement('div');
        card.className = 'skill-category-card';
        
        const skillsList = categorySkills.map(skill => 
            `<div class="skill-item">
                <i class="${skill.icon}"></i>
                <span>${skill.name}</span>
            </div>`
        ).join('');
        
        card.innerHTML = `
            <div class="skill-category-header">
                <h3>${category}</h3>
            </div>
            <div class="skill-category-content">
                ${skillsList}
            </div>
        `;
        
        skillsGrid.appendChild(card);
    });
}

// Función para cargar proyectos
function loadProjects() {
    const projectsContainer = document.querySelector('.projects-grid');
    
    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.className = 'project-card';
        
        const techTags = project.technologies.map(tech => 
            `<span class="tech-tag">${tech}</span>`
        ).join('');
        
        projectElement.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-img">
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="tech-tags">${techTags}</div>
                <a href="${project.link}" class="btn">Ver más</a>
            </div>
        `;
        projectsContainer.appendChild(projectElement);
    });
}

// Función para cargar entradas de blog
function loadBlogPosts() {
    const blogContainer = document.querySelector('.blog-posts');
    
    blogPosts.forEach(post => {
        const postElement = document.createElement('article');
        postElement.className = 'blog-card';
        postElement.innerHTML = `
            <div class="blog-content">
                <div class="blog-meta">
                    <span class="date">${post.date}</span>
                    <span class="read-time">${post.readTime} de lectura</span>
                </div>
                <h3>${post.title}</h3>
                <p>${post.excerpt}</p>
                <a href="${post.link}" class="read-more">Leer más →</a>
            </div>
        `;
        blogContainer.appendChild(postElement);
    });
}

// ==========================================================================
// THEME MANAGEMENT
// ==========================================================================

// Constants
const THEME = {
    LIGHT: 'light',
    DARK: 'dark',
    STORAGE_KEY: 'theme',
    TRANSITION: 'background-color 0.5s ease, color 0.5s ease'
};

// Theme management functions
const ThemeManager = {
    elements: {
        toggle: document.getElementById('theme-toggle'),
        icon: null,
        backToTop: document.getElementById('back-to-top')
    },
    
    /**
     * Initialize theme manager
     */
    init() {
        // Cache DOM elements
        if (this.elements.toggle) {
            this.elements.icon = this.elements.toggle.querySelector('i');
        }
        
        // Set up event listeners
        this.setupEventListeners();
        
        // Apply saved theme or system preference
        this.applyTheme(this.getPreferredTheme());
    },
    
    /**
     * Set up event listeners
     */
    setupEventListeners() {
        // Theme toggle
        if (this.elements.toggle) {
            this.elements.toggle.addEventListener('click', () => this.toggleTheme());
        }
        
        // Watch for system theme changes
        window.matchMedia('(prefers-color-scheme: dark)')
            .addEventListener('change', (e) => {
                if (!localStorage.getItem(THEME.STORAGE_KEY)) {
                    this.applyTheme(e.matches ? THEME.DARK : THEME.LIGHT);
                }
            });
    },
    
    /**
     * Get the preferred theme (saved or system)
     * @returns {string} The preferred theme
     */
    getPreferredTheme() {
        return localStorage.getItem(THEME.STORAGE_KEY) || 
               (window.matchMedia('(prefers-color-scheme: dark)').matches ? THEME.DARK : THEME.LIGHT);
    },
    
    /**
     * Apply the specified theme
     * @param {string} theme - Theme to apply (light/dark)
     */
    applyTheme(theme) {
        // Set theme attribute
        document.documentElement.setAttribute('data-theme', theme);
        
        // Update icon
        this.updateIcon(theme);
        
        // Save preference
        localStorage.setItem(THEME.STORAGE_KEY, theme);
    },
    
    /**
     * Update the theme icon
     * @param {string} theme - Current theme
     */
    updateIcon(theme) {
        if (this.elements.icon) {
            this.elements.icon.className = theme === THEME.DARK ? 'fas fa-sun' : 'fas fa-moon';
        }
    },
    
    /**
     * Toggle between light and dark themes
     */
    toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === THEME.DARK ? THEME.LIGHT : THEME.DARK;
        
        // Apply smooth transition
        document.documentElement.style.transition = THEME.TRANSITION;
        
        // Apply new theme
        this.applyTheme(newTheme);
        
        // Clean up transition after animation
        setTimeout(() => {
            document.documentElement.style.transition = '';
        }, 500);
    }
};

// Smooth scroll with offset for fixed header
function smoothScrollTo(target) {
    const headerHeight = document.querySelector('header')?.offsetHeight || 80; // Default to 80px if header not found
    const targetElement = document.querySelector(target);
    
    if (targetElement) {
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = targetPosition - headerHeight - 20; // 20px extra space
        
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}

// Handle navigation clicks
document.addEventListener('click', (e) => {
    // Check if the clicked element is a navigation link
    if (e.target.closest('a[href^="#"]') && !e.target.closest('.card-link')) {
        e.preventDefault();
        const target = e.target.closest('a').getAttribute('href');
        
        // Only process if it's a section link (not back-to-top or other # links)
        if (target !== '#') {
            smoothScrollTo(target);
            
            // Update URL without jumping
            if (history.pushState) {
                history.pushState(null, null, target);
            } else {
                location.hash = target;
            }
        }
    }
});

// Initialize theme management when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    ThemeManager.init();
    
    // Back to top functionality
    const backToTop = document.getElementById('back-to-top');
    
    // Handle initial page load with hash
    if (window.location.hash) {
        // Small delay to ensure all elements are loaded
        setTimeout(() => {
            smoothScrollTo(window.location.hash);
        }, 100);
    }
    
    // Mostrar/ocultar botón de volver arriba
    function toggleBackToTop() {
        if (backToTop) {
            if (window.scrollY > 300) {
                backToTop.classList.add('show');
            } else {
                backToTop.classList.remove('show');
            }
        }
    }
    
    // Inicializar
    initTheme();
    
    // Event Listeners
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    if (backToTop) {
        window.addEventListener('scroll', toggleBackToTop);
        backToTop.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Efecto de carga suave
    if (document.body) {
        document.body.style.opacity = '0';
        window.addEventListener('load', () => {
            document.body.style.transition = 'opacity 0.5s ease';
            document.body.style.opacity = '1';
        });
    }
    
    // Efecto de hover en tarjetas de proyectos
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });
});

// Función para manejar la navegación suave
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Función para actualizar el año actual en el footer
function updateCurrentYear() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// Función para manejar el scroll y resaltar la sección activa
function handleScroll() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('#navbar a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Inicialización cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    // Cargar contenido dinámico
    loadSkills();
    loadProjects();
    loadBlogPosts();
    
    // Configurar tema
    initTheme();
    
    // Configurar eventos
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
    
    // Configurar navegación suave
    setupSmoothScrolling();
    
    // Actualizar año en el footer
    updateCurrentYear();
    
    // Configurar scroll para resaltar sección activa
    window.addEventListener('scroll', handleScroll);
    
    // Llamar una vez al cargar para establecer el estado inicial
    handleScroll();
});

// Manejar el evento de carga de la ventana
window.addEventListener('load', () => {
    // Asegurarse de que el tema se aplique correctamente
    initTheme();
});
