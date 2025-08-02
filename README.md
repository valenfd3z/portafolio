# Portfolio Personal - Marco Valentín Fernández

¡Hola! 👋 Soy Marco Valentín Fernández, estudiante de Licenciatura en Informática con pasión por la ciberseguridad ofensiva. Este es mi portfolio personal donde muestro mis habilidades, proyectos y experiencia en el campo de la seguridad informática.

## 🚀 Características

- **Diseño Responsive**: Se adapta perfectamente a cualquier dispositivo
- **Tema Claro/Oscuro**: Cambio suave entre modos de visualización
- **Navegación Intuitiva**: Menú de navegación fijo para fácil acceso
- **Secciones Organizadas**: Habilidades, proyectos y blog en secciones claras
- **Formulario de Contacto**: Fácil manera de ponerse en contacto

## Estructura del Proyecto

```
portfolio/
├── index.html          # Página principal
├── css/
│   └── styles.css      # Estilos CSS
├── js/
│   └── script.js       # Funcionalidad JavaScript
└── img/                # Imágenes del proyecto
    ├── profile.jpg     # Tu foto de perfil
    ├── project1.jpg    # Imágenes de proyectos
    ├── project2.jpg
    └── project3.jpg
```

## 🛠️ Cómo Usar

1. Clona este repositorio:
   ```bash
   git clone https://github.com/valenfd3z/portafolio.git
   ```
2. Abre el archivo `index.html` en tu navegador
3. Explora las diferentes secciones del portafolio

## Personalización

### Cambiar la información personal
Edita el archivo `index.html` para actualizar:
- Tu nombre
- Tu descripción
- Tu foto de perfil (colócala en la carpeta `img/` como `profile.jpg`)
- Tus enlaces de redes sociales

### Agregar o modificar habilidades
Edita el arreglo `skills` en `js/script.js` para incluir tus habilidades:

```javascript
const skills = [
    { name: 'Python', icon: 'fab fa-python', category: 'Lenguajes' },
    // Agrega más habilidades aquí
];
```

### Agregar proyectos
Modifica el arreglo `projects` en `js/script.js` para incluir tus proyectos:

```javascript
const projects = [
    {
        title: 'Nombre del Proyecto',
        description: 'Descripción del proyecto',
        image: 'img/project1.jpg',
        technologies: ['Tecnología 1', 'Tecnología 2'],
        link: '#'
    }
    // Agrega más proyectos aquí
];
```

### Agregar entradas al blog
Edita el arreglo `blogPosts` en `js/script.js` para incluir tus publicaciones:

```javascript
const blogPosts = [
    {
        title: 'Título del Post',
        excerpt: 'Resumen del post',
        date: '1 de Enero, 2025',
        readTime: '5 min',
        link: '#'
    }
    // Agrega más publicaciones acá
];
```

## 💻 Tecnologías Utilizadas

- **Frontend**:
  - HTML5 semántico
  - CSS3 (Flexbox, Grid, Custom Properties, Variables CSS)
  - JavaScript (ES6+)
  - Font Awesome (para íconos)
  - Google Fonts (Inter)
  - ReportLab (para generación de PDF)

## 📄 Licencia

Este proyecto está bajo la [Licencia MIT](LICENSE). Siéntete libre de usarlo como base para tu propio portfolio, pero por favor dame crédito si lo haces.

## 🌟 Créditos

- Diseñado y desarrollado por [Marco Valentín Fernández](https://github.com/valenfd3z)
- Íconos por [Font Awesome](https://fontawesome.com/)
- Fuente [Inter](https://rsms.me/inter/) de Rasmus Andersson
