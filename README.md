# 📌 Pinterest Clone

Clon de Pinterest desarrollado con JavaScript vanilla, Sass y Masonry layout. Utiliza la API de Unsplash para cargar imágenes de forma dinámica con scroll infinito.


## 🚀 Características

- ✨ Diseño responsive adaptado a móvil, tablet y desktop
- 🖼️ Galería de imágenes con layout tipo Pinterest (Masonry)
- 🔍 Buscador de imágenes integrado
- ♾️ Scroll infinito para carga continua de contenido
- 🎨 Interfaz moderna con efectos hover
- 📱 2 columnas en móvil, 4 en tablet y 5 en desktop
- 🌐 Integración con API de Unsplash

## 🛠️ Tecnologías Utilizadas

- **JavaScript ES6+** - Módulos, async/await, fetch API
- **Sass/SCSS** - Preprocesador CSS con mixins y variables
- **Masonry Layout** - Sistema de grid tipo Pinterest
- **ImagesLoaded** - Control de carga de imágenes
- **Vite** - Build tool y servidor de desarrollo
- **Unsplash API** - Fuente de imágenes de alta calidad

## 📋 Requisitos Previos

- Node.js (versión 14 o superior)
- npm o yarn
- API Key de Unsplash (gratuita)

## 🔧 Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/pinterest-clone.git
   cd pinterest-clone
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar API Key**
   
   Abre el archivo `src/app.js` y reemplaza la API key con la tuya:
   ```javascript
   const apiKey = `TU_API_KEY_AQUI`;
   ```
   
   Puedes obtener una API key gratuita en [Unsplash Developers](https://unsplash.com/developers)

4. **Iniciar servidor de desarrollo**
   ```bash
   npm run dev
   ```

5. **Abrir en el navegador**
   
   Vite te mostrará la URL (normalmente `http://localhost:5173`)

## 📦 Scripts Disponibles

```bash
npm run dev      # Inicia el servidor de desarrollo
npm run build    # Genera la build de producción
npm run preview  # Preview de la build de producción
```

## 📁 Estructura del Proyecto

```
pinterest-clone/
├── src/
│   ├── app.js              # Lógica principal de la galería
│   ├── navbar.js           # Componente del navbar
│   ├── main.js             # Punto de entrada
│   ├── style.scss          # Estilos globales
│   ├── navbar.scss         # Estilos del navbar
│   ├── galeria.scss        # Estilos de la galería
│   ├── variables.scss      # Variables Sass
│   ├── mixins.scss         # Mixins reutilizables
│   └── pinterest.svg       # Logo
├── index.html              # HTML principal
├── package.json            # Dependencias y scripts
└── README.md              # Documentación
```

## 🎨 Características de Diseño

### Responsive Breakpoints

- **Móvil** (< 768px): 2 columnas
- **Tablet** (≥ 768px): 4 columnas
- **Desktop** (≥ 1024px): 5 columnas

### Componentes Principales

- **Navbar**: Buscador, logo, menú de navegación y perfil
- **Galería Masonry**: Layout dinámico que se adapta al contenido
- **Pin Cards**: Tarjetas con imagen, overlay interactivo y datos del autor
- **Scroll Infinito**: Carga automática al llegar al final

## 🔍 Funcionalidades

### Búsqueda de Imágenes

1. Escribe un término en el buscador
2. Presiona Enter o click en el botón de búsqueda
3. La galería se limpia y muestra resultados

### Interacción con las Imágenes

- **Hover**: Muestra overlay con información
- **Botón Visitar**: Abre la imagen en Unsplash
- **Estadísticas**: Visualiza likes y descargas

### Scroll Infinito

- Detecta cuando llegas al final de la página
- Carga automáticamente más imágenes
- Mantiene el layout consistente

## 🐛 Solución de Problemas

### Las imágenes no cargan

- Verifica que tu API key sea válida
- Comprueba la consola del navegador para errores
- Asegúrate de tener conexión a internet

### El layout no se ve bien

- Limpia la caché del navegador
- Ejecuta `npm run build` y prueba la versión de producción
- Verifica que todas las dependencias estén instaladas

### Error CORS

- No abras el `index.html` directamente
- Usa siempre `npm run dev` para desarrollo

## 🚀 Build para Producción

```bash
npm run build
```

Esto generará una carpeta `dist/` con los archivos optimizados listos para desplegar.

## 📝 Mejoras Futuras

- [ ] Sistema de favoritos con localStorage
- [ ] Modo oscuro
- [ ] Filtros por categorías
- [ ] Modal de vista previa de imagen
- [ ] Autenticación de usuario
- [ ] Descarga directa de imágenes
- [ ] Compartir en redes sociales

## 👤 Autor

**Tu Nombre**

- GitHub: [@tu-usuario](https://github.com/tu-usuario)
- Email: tu-email@ejemplo.com

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - mira el archivo [LICENSE](LICENSE) para más detalles.

## 🙏 Agradecimientos

- [Unsplash](https://unsplash.com) por la API y las imágenes
- [Masonry](https://masonry.desandro.com/) por el layout
- Inspiración: [Pinterest](https://www.pinterest.com)

---

⭐ Si te ha gustado este proyecto, ¡dale una estrella en GitHub!