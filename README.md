Clon de Pinterest (Simple)

¡Hola! Este es un proyecto sencillo para clonar la interfaz de Pinterest usando puras herramientas web. Lo hice para practicar JavaScript vanilla y el famoso diseño de cuadrícula tipo Masonry. Las imágenes se cargan solas con scroll infinito gracias a la API gratuita de Unsplash.

Lo que hace

Galería de Imágenes: Muestra muchas fotos en un layout dinámico (como Pinterest).
Diseño que se adapta: Se ve bien en tu teléfono, tablet o computadora (responsive).
   Móvil: 2 columnas.
   Tablet: 4 columnas.
   Desktop: 5 columnas.
Buscador: Puedes buscar cualquier imagen que quieras.
Scroll Infinito: Las imágenes se cargan automáticamente mientras vas bajando.

Tecnologías que usé
JavaScript ES6+      La lógica principal del proyecto (cargar imágenes, buscar, scroll).
Sass/SCSS            Para escribir el CSS de forma más ordenada y rápida.
Masonry Layout       El plugin que hace la cuadrícula de Pinterest. 
Unsplash API         La fuente de donde obtengo todas las fotos gratis.
Vite                 Para poder desarrollar y probar el código súper rápido.

Cómo Probarlo
Necesitas tener Node.js (versión 14+) instalado en tu computadora.
1. PreparaciónClona el código: git clone https://github.com/GabiLuke/proyecto2.git
cd proyecto2
Instala las cosas necesarias: npm install
2. ¡Muy Importante! La API Key 
Para que carguen las fotos, necesitas una API Key de Unsplash (es gratis).
   Consigue una key en Unsplash Developers.
   Abre el archivo src/app.js y pega tu clave donde dice:
   JavaScriptconst apiKey = `TU_API_KEY_AQUI`; // ¡Pon tu clave aquí!
3. ¡A desarrollar!
Inicia el servidor:  npm run dev
Abre la URL que te diga Vite (normalmente http://localhost:5173) en tu navegador.

Estructura del Código
Para que sepas dónde está cada cosa:proyecto2/
├── src/
│   ├── app.js              # La magia de JS (API, Masonry, Scroll)
│   ├── style.scss          # Estilos globales
│   ├── galeria.scss        # Estilos de las imágenes
│   └── ... (otros archivos)
├── index.html              # El HTML principal
└── package.json            # Dependencias