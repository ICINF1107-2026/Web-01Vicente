#### **Estación 2: Requerimientos**



* **Objetivo:** Especificar el alcance del proyecto estático.

* **Entregables:**

* Redacción en el tablero de al menos 4 a 6 historias de usuario o tarjetas de tareas claras (ej. *"Como usuario quiero ver una galería de proyectos para conocer la experiencia del desarrollador"*).

* Definición de las secciones fijas del sitio (Inicio, Sobre mí, Proyectos, Habilidades, Contacto).

USO DE IA

CHATGPT-5.6 Luna.

PROMPT: 
dame un codigo para una plana de portafolio, estilo see and feel
OUTPUT:
Sí. Si con **“See and Feel”** te refieres a un portafolio **visual, minimalista, con mucho espacio, tipografía grande, imágenes protagonistas y pequeñas animaciones**, puedes partir con este HTML + CSS + JS.

Te dejo una versión que puedes pegar directamente en `index.html` y abrir en VS Code:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>Portafolio — Tu Nombre</title>

  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      background: #f1f0eb;
      color: #111;
      font-family: Arial, Helvetica, sans-serif;
      overflow-x: hidden;
    }

    /* ---------- NAVBAR ---------- */

    nav {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      padding: 25px 40px;

      display: flex;
      justify-content: space-between;
      align-items: center;

      z-index: 100;
      mix-blend-mode: difference;
      color: white;
    }

    nav .logo {
      font-size: 20px;
      font-weight: bold;
      letter-spacing: -1px;
    }

    nav ul {
      display: flex;
      gap: 30px;
      list-style: none;
    }

    nav a {
      color: inherit;
      text-decoration: none;
      font-size: 14px;
    }

    /* ---------- HERO ---------- */

    .hero {
      height: 100vh;
      padding: 140px 40px 40px;

      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .hero-top {
      display: flex;
      justify-content: space-between;
      font-size: 13px;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .hero-title {
      font-size: clamp(70px, 13vw, 190px);
      line-height: 0.8;
      letter-spacing: -10px;
      font-weight: 700;
    }

    .hero-title span {
      display: block;
    }

    .hero-bottom {
      display: flex;
      justify-content: space-between;
      align-items: end;
    }

    .hero-description {
      max-width: 400px;
      font-size: 18px;
      line-height: 1.4;
    }

    .scroll {
      font-size: 12px;
      text-transform: uppercase;
    }

    /* ---------- PROJECTS ---------- */

    .projects {
      padding: 160px 40px;
    }

    .section-title {
      font-size: 14px;
      text-transform: uppercase;
      margin-bottom: 80px;
      letter-spacing: 1px;
    }

    .project {
      margin-bottom: 180px;
    }

    .project-image {
      width: 100%;
      height: 70vh;
      overflow: hidden;
      background: #ccc;
    }

    .project-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;

      transition: transform 0.8s cubic-bezier(.2,.8,.2,1);
    }

    .project:hover img {
      transform: scale(1.04);
    }

    .project-info {
      display: flex;
      justify-content: space-between;
      padding-top: 20px;
    }

    .project-name {
      font-size: 32px;
      letter-spacing: -1px;
    }

    .project-category {
      font-size: 13px;
      text-transform: uppercase;
    }

    /* ---------- ABOUT ---------- */

    .about {
      min-height: 100vh;
      padding: 160px 40px;

      display: grid;
      grid-template-columns: 1fr 2fr;
      gap: 80px;
    }

    .about h2 {
      font-size: 14px;
      text-transform: uppercase;
    }

    .about-text {
      font-size: clamp(40px, 5vw, 80px);
      line-height: 0.95;
      letter-spacing: -3px;
    }

    /* ---------- CONTACT ---------- */

    .contact {
      padding: 160px 40px 50px;
      min-height: 80vh;

      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .contact h2 {
      font-size: clamp(60px, 12vw, 180px);
      line-height: 0.8;
      letter-spacing: -8px;
    }

    .contact-info {
      display: flex;
      justify-content: space-between;
      border-top: 1px solid #111;
      padding-top: 20px;
    }

    .contact a {
      color: #111;
      text-decoration: none;
    }

    /* ---------- ANIMATIONS ---------- */

    .reveal {
      opacity: 0;
      transform: translateY(40px);
      animation: reveal 1s forwards;
    }

    @keyframes reveal {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* ---------- MOBILE ---------- */

    @media (max-width: 700px) {

      nav {
        padding: 20px;
      }

      nav ul {
        gap: 15px;
      }

      .hero {
        padding: 120px 20px 30px;
      }

      .hero-title {
        font-size: 22vw;
        letter-spacing: -5px;
      }

      .hero-bottom {
        flex-direction: column;
        align-items: start;
        gap: 30px;
      }

      .projects {
        padding: 100px 20px;
      }

      .project-image {
        height: 50vh;
      }

      .project-info {
        flex-direction: column;
        gap: 10px;
      }

      .about {
        padding: 100px 20px;
        display: block;
      }

      .about h2 {
        margin-bottom: 50px;
      }

      .about-text {
        font-size: 45px;
      }

      .contact {
        padding: 100px 20px 30px;
      }

      .contact h2 {
        font-size: 22vw;
      }

      .contact-info {
        flex-direction: column;
        gap: 15px;
      }
    }
  </style>
</head>

<body>

  <!-- NAVBAR -->

  <nav>
    <div class="logo">TU NOMBRE</div>

    <ul>
      <li><a href="#work">Trabajo</a></li>
      <li><a href="#about">Sobre mí</a></li>
      <li><a href="#contact">Contacto</a></li>
    </ul>
  </nav>


  <!-- HERO -->

  <section class="hero">

    <div class="hero-top">
      <span>Portafolio 2026</span>
      <span>Diseño / Desarrollo</span>
    </div>

    <h1 class="hero-title reveal">
      <span>SEE</span>
      <span>&</span>
      <span>FEEL</span>
    </h1>

    <div class="hero-bottom">

      <p class="hero-description">
        Creo experiencias digitales que buscan ser
        vistas, sentidas y recordadas.
      </p>

      <div class="scroll">
        ↓ Scroll para explorar
      </div>

    </div>

  </section>


  <!-- PROJECTS -->

  <section class="projects" id="work">

    <div class="section-title">
      01 — Proyectos seleccionados
    </div>


    <article class="project">

      <div class="project-image">
        <img
          src="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=2000&q=90"
          alt="Proyecto de diseño">
      </div>

      <div class="project-info">
        <h2 class="project-name">
          Proyecto Uno
        </h2>

        <span class="project-category">
          Branding / 2026
        </span>
      </div>

    </article>


    <article class="project">

      <div class="project-image">
        <img
          src="https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=2000&q=90"
          alt="Proyecto digital">
      </div>

      <div class="project-info">

        <h2 class="project-name">
          Proyecto Dos
        </h2>

        <span class="project-category">
          Web Design / 2026
        </span>

      </div>

    </article>


    <article class="project">

      <div class="project-image">
        <img
          src="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=2000&q=90"
          alt="Proyecto creativo">
      </div>

      <div class="project-info">

        <h2 class="project-name">
          Proyecto Tres
        </h2>

        <span class="project-category">
          Dirección de arte / 2026
        </span>

      </div>

    </article>

  </section>


  <!-- ABOUT -->

  <section class="about" id="about">

    <h2>
      02 — Sobre mí
    </h2>

    <p class="about-text">
      Soy diseñador y desarrollador interesado
      en crear cosas que no solamente se vean
      bien, sino que también se sientan bien.
    </p>

  </section>


  <!-- CONTACT -->

  <section class="contact" id="contact">

    <h2>
      HABLEMOS.
    </h2>

    <div class="contact-info">

      <span>
        © 2026 Tu Nombre
      </span>

      <a href="mailto:correo@ejemplo.com">
        correo@ejemplo.com
      </a>

      <a href="#">
        Instagram ↗
      </a>

    </div>

  </section>


  <script>

    // Pequeño efecto al hacer scroll

    const projects = document.querySelectorAll(".project");

    const observer = new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

          }

        });

      },
      {
        threshold: 0.15
      }
    );


    projects.forEach(project => {

      project.style.opacity = "0";
      project.style.transform = "translateY(50px)";
      project.style.transition = "all 1s ease";

      observer.observe(project);

    });

  </script>

</body>
</html>
```

### Qué tiene este diseño

* **Hero gigante** con `SEE & FEEL`.
* Navegación fija y minimalista.
* Proyectos a pantalla grande.
* Imágenes que hacen **zoom suavemente al pasar el mouse**.
* Animaciones cuando aparecen los proyectos.
* Sección **Sobre mí** con tipografía enorme.
* Contacto muy grande al final.
* Responsive para celular.
* Sin frameworks: **HTML + CSS + JavaScript puro**, ideal para practicar lo que estás viendo en Frontend.

Para cambiar las imágenes, simplemente reemplaza las URLs de `src` por tus propias imágenes:

```html
<img src="imagenes/proyecto1.jpg" alt="Mi proyecto">
```

Y si quieres que tenga un estilo **muchísimo más parecido a un portafolio moderno de diseñador**, puedo hacerte una segunda versión con **cursor personalizado, texto que se mueve con el mouse, imágenes que siguen el cursor, transiciones entre páginas y efectos tipo “Apple/Studio A24”**.

PROMPT:
tengo una sopa de divs, pero quiero arreglarlo

OUTPUT:
Sí, totalmente. Si ahora mismo tienes una **“sopa de `<div>`”**, podemos ordenarla sin necesidad de rehacer todo desde cero.

Pégame aquí tu **HTML y CSS actual** (aunque esté horrible o desordenado) y te ayudo a:

* 🧹 Reemplazar `<div>` innecesarios por etiquetas semánticas (`header`, `nav`, `main`, `section`, `article`, `footer`, etc.).
* 📐 Ordenar la estructura para que sea fácil de entender.
* 🎨 Mantener el diseño que ya tienes.
* 📱 Dejarlo preparado para responsive.
* ♿ Mejorar la accesibilidad.
* 🧠 Explicarte **por qué** hacemos cada cambio, para que no sea simplemente copiar y pegar.

Si tienes una captura de cómo se ve actualmente, también puedes subirla para que pueda ver qué estructura estás intentando conseguir:

**Pásame primero el HTML** y partimos ordenándolo desde arriba, sin saltarnos pasos.
