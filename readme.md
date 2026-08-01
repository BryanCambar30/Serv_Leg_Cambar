# ⚖️ Servicios Legales Cámbar

Landing page institucional desarrollada para el bufete **Servicios Legales Cámbar**, construida con **AstroJS** y **Tailwind CSS** siguiendo una arquitectura modular basada en componentes reutilizables y un sistema de diseño escalable.

El objetivo principal del proyecto es ofrecer una presencia web profesional, moderna y de alto rendimiento, enfocada en brindar información clara sobre los servicios jurídicos del bufete y facilitar el contacto con potenciales clientes.

---

# 📋 Tabla de Contenidos

- Tecnologías utilizadas
- Estructura del proyecto
- Sistema de diseño
- Instalación y ejecución
- Decisiones técnicas
- Recursos externos

---

# 🚀 Tecnologías Utilizadas

El proyecto fue desarrollado utilizando tecnologías modernas enfocadas en rendimiento y mantenibilidad.

- **AstroJS v4**
  - Framework web moderno para la creación de sitios estáticos de alto rendimiento.
  - Arquitectura basada en **Islands Architecture**, enviando JavaScript únicamente cuando es necesario.

- **Tailwind CSS v3**
  - Framework CSS utilitario para construir interfaces rápidas, consistentes y altamente personalizables.

- **Google Fonts**
  - **Libre Caslon Text** para títulos y encabezados.
  - **Hanken Grotesk** para texto general y navegación.

- **Material Symbols Outlined**
  - Biblioteca de iconografía oficial de Google.

---

# 📁 Estructura del Proyecto

El proyecto sigue una arquitectura modular, separando componentes reutilizables de las distintas secciones del sitio.

```text
src/
├── assets/
│   ├── images/
│   ├── icons/
│   └── ...
│
├── components/
│   ├── ui/
│   │   └── ...
│   │
│   └── sections/
│       ├── Navbar.astro
│       ├── Hero.astro
│       ├── Team.astro
│       ├── Specialties.astro
│       ├── Services.astro
│       └── Footer.astro
│
├── layouts/
│   └── BaseLayout.astro
│
├── pages/
│   └── index.astro
│
└── styles/
    └── globals.css
```

### Componentes principales

| Componente | Descripción |
|------------|-------------|
| Navbar | Barra de navegación adaptable con menú móvil |
| Hero | Sección principal con imagen destacada y llamado a la acción |
| Team | Presentación del equipo de abogados |
| Specialties | Carrusel infinito de especialidades jurídicas |
| Services | Catálogo de servicios legales organizado en dos columnas |
| Footer | Información de contacto y formulario |

---

# 🎨 Sistema de Diseño

Todos los estilos globales se centralizan mediante **Tailwind CSS**, permitiendo mantener una identidad visual uniforme.

## Colores principales

| Color | Código |
|--------|---------|
| Navy | `#001f3f` |
| Gold | `#B8860B` |
| Surface | `#f7f9ff` |
| Text | `#181c20` |

### Uso de colores

- **Navy:** fondo principal y elementos corporativos.
- **Gold:** detalles visuales, botones y elementos decorativos.
- **Surface:** fondo general del sitio.
- **Text:** color principal para el contenido.

---

## Tipografía

### Encabezados

- Libre Caslon Text

Fuente serif elegante utilizada para:

- Hero
- Títulos
- Encabezados

### Texto general

- Hanken Grotesk

Utilizada en:

- Navegación
- Párrafos
- Formularios
- Botones

---

## Utilidades CSS personalizadas

Dentro de:

```
src/styles/globals.css
```

se implementaron clases específicas para la identidad visual del proyecto.

### `.diamond-rule`

Genera una línea decorativa con un diamante dorado en el centro.

### `.diamond-bullet`

Viñeta personalizada para listas.

### `.infinite-scroll-right`

Animación utilizada para el carrusel infinito de especialidades.

### `.no-scrollbar`

Oculta las barras de desplazamiento manteniendo la funcionalidad del scroll.

---

# 💻 Instalación

## 1. Clonar el proyecto

```bash
git clone https://github.com/usuario/servicios-legales-cambar.git
```

Entrar al directorio:

```bash
cd servicios-legales-cambar
```

---

## 2. Instalar dependencias

```bash
npm install
```

---

## 3. Instalar Tailwind CSS (si es necesario)

```bash
npx astro add tailwind
```

---

## 4. Ejecutar el proyecto

```bash
npm run dev
```

Abrir en el navegador:

```
http://localhost:4321
```

---

## 5. Generar la versión de producción

```bash
npm run build
```

El sitio optimizado será generado dentro de:

```
dist/
```

---

# 🧠 Decisiones Técnicas

## Carrusel infinito sin JavaScript

La sección **Specialties** implementa un carrusel completamente nativo utilizando Astro y CSS.

En lugar de incorporar librerías externas como SwiperJS, se duplicó el arreglo de especialidades mediante:

```javascript
specialties.concat(specialties)
```

Posteriormente, una animación CSS basada en `translateX(-50%)` genera el efecto de desplazamiento infinito.

### Beneficios

- Sin dependencias externas.
- Cero JavaScript adicional.
- Mejor rendimiento.
- Menor peso del sitio.

---

## Menú móvil

El menú hamburguesa fue desarrollado utilizando **JavaScript Vanilla**, incrustado directamente en el componente `Navbar.astro`.

Características:

- Apertura y cierre del menú.
- Cierre automático al seleccionar una opción.
- Sin frameworks adicionales.

---

## Botón Hero

El botón principal utiliza únicamente clases de Tailwind para generar un efecto hover.

Estado inicial:

- Fondo dorado.
- Texto blanco.

Hover:

- Fondo semitransparente.
- Borde dorado.
- Texto dorado.

Todo implementado sin CSS adicional.

---

## Grid para servicios

La sección de servicios utiliza CSS Grid mediante Tailwind:

```css
grid-cols-1
md:grid-cols-2
```

Esto permite una distribución adaptable para escritorio y dispositivos móviles.

El contenedor incorpora:

- Bordes dorados.
- Título flotante.
- Diseño limpio sin imágenes decorativas.

---

# 📦 Características del Proyecto

- Arquitectura modular.
- Componentes reutilizables.
- Diseño responsive.
- Optimización SEO mediante Astro.
- Alto rendimiento.
- JavaScript mínimo.
- Fácil mantenimiento.
- Escalable para futuras funcionalidades.

---

# 🔗 Recursos Externos

El diseño original utiliza recursos gráficos provenientes del prototipo inicial.

Entre ellos:

- Logo institucional.
- Imagen principal del Hero.

Estos recursos pueden sustituirse fácilmente por imágenes locales almacenadas dentro de:

```text
src/assets/
```

para facilitar el despliegue y mantenimiento del proyecto.

---

# 👨‍💻 Autor

**Bryan Fernando Cámbar Donaire**

Desarrollador Front-End especializado en AstroJS, Tailwind CSS y desarrollo de aplicaciones web modernas.

---

# 📄 Licencia

Este proyecto fue desarrollado con fines profesionales para **Servicios Legales Cámbar**.

El código puede utilizarse como referencia para proyectos similares, respetando la atribución correspondiente y la propiedad intelectual del diseño y contenido.

---

© 2024 Servicios Legales Cámbar • Desarrollado con **AstroJS** y **Tailwind CSS**.