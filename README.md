# Cold Esthetic Reform

Página web oficial del centro estético **Cold Esthetic Reform** en Bogotá, Colombia. Sitio desarrollado con Next.js 14, TypeScript y Tailwind CSS.

## 🌟 Características

- **Diseño Responsivo**: Optimizado para todos los dispositivos (mobile-first)
- **SEO Optimizado**: Meta tags, Open Graph, sitemap y robots.txt
- **Accesibilidad**: Cumple con estándares WCAG AA
- **Performance**: Optimizado para Core Web Vitals
- **TypeScript**: Código tipado para mayor seguridad
- **Tailwind CSS**: Diseño consistente y mantenible

## 🎨 Paleta de Colores

- **Primary**: `#079145` (Verde principal)
- **Secondary**: `#339EAB` (Azul secundario)
- **Accent**: `#BACFCA` (Verde claro)
- **Dark**: `#161E21` (Texto oscuro)
- **Light**: `#F5FAF9` (Fondo claro)
- **White**: `#FFFFFF` (Blanco)

## 📄 Páginas

- **`/`** - Página principal con hero, servicios, antes/después, pasos, testimonios y FAQ
- **`/servicios`** - Lista de todos los servicios
- **`/servicios/[slug]`** - Detalle de cada servicio
- **`/resultados`** - Galería de antes y después
- **`/agenda`** - Formulario para agendar citas
- **`/contacto`** - Información de contacto y formulario

## 🚀 Tecnologías

- **Framework**: Next.js 14 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Componentes**: React con Server/Client Components
- **SEO**: Metadata API, Open Graph, Sitemap
- **Formularios**: Formularios controlados con validación

## 📦 Estructura del Proyecto

```
src/
├── app/                    # App Router (Next.js 14)
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página de inicio
│   ├── sitemap.ts         # Sitemap dinámico
│   ├── opengraph-image.tsx # Imagen Open Graph
│   ├── servicios/         # Páginas de servicios
│   ├── resultados/        # Página de galería
│   ├── agenda/            # Página de citas
│   └── contacto/          # Página de contacto
├── components/            # Componentes reutilizables
│   ├── Header.tsx         # Navegación principal
│   ├── Footer.tsx         # Pie de página
│   └── home/              # Componentes de la página principal
├── data/                  # Datos estáticos
│   ├── services.ts        # Servicios disponibles
│   ├── faq.ts            # Preguntas frecuentes
│   ├── testimonials.ts   # Testimonios de clientes
│   └── gallery.ts        # Imágenes antes/después
├── styles/               # Estilos globales
├── types/                # Definiciones de tipos
└── utils/                # Funciones utilitarias
```

## ⚙️ Instalación

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/ximenabaquero/Cold-Esthetic-Reform.git
   cd Cold-Esthetic-Reform
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**:
   ```bash
   cp .env.example .env.local
   ```
   
   Editar `.env.local` con tus valores:
   ```
   NEXT_PUBLIC_WA_URL=https://wa.me/5731XXXXXXXX
   ```

4. **Ejecutar en desarrollo**:
   ```bash
   npm run dev
   ```

5. **Abrir en el navegador**: http://localhost:3000

## 🛠️ Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Construir para producción
- `npm run start` - Servidor de producción
- `npm run lint` - Linter de código

## 🌐 Variables de Entorno

| Variable | Descripción | Ejemplo |
|----------|-------------|---------|
| `NEXT_PUBLIC_WA_URL` | URL de WhatsApp para contacto | `https://wa.me/5731XXXXXXXX` |

## 📝 Desarrollo

### Agregar Nuevos Servicios

1. Editar `src/data/services.ts`
2. Agregar el nuevo servicio al array con todos los campos requeridos
3. Las páginas dinámicas se generarán automáticamente

### Agregar Testimonios

1. Editar `src/data/testimonials.ts`
2. Agregar el nuevo testimonio con rating y comentario

### Agregar Imágenes de Galería

1. Editar `src/data/gallery.ts`
2. Agregar nuevas imágenes con rutas before/after

### Personalizar Colores

1. Editar `tailwind.config.js` para cambiar la paleta
2. Actualizar `src/styles/globals.css` para las variables CSS

## 🔍 SEO y Rendimiento

- **Sitemap**: Generado dinámicamente en `/sitemap.xml`
- **Robots.txt**: Configurado en `/public/robots.txt`
- **Open Graph**: Imagen generada dinámicamente
- **Meta Tags**: Configurados en cada página
- **Lighthouse Score**: Optimizado para 90+ en todas las métricas

## ♿ Accesibilidad

- **Alt Text**: Todas las imágenes incluyen texto alternativo
- **Navegación por Teclado**: Todos los elementos son navegables
- **Contraste**: Colores cumplen con WCAG AA
- **Screen Readers**: Elementos semánticamente correctos
- **Focus Management**: Estados de foco visibles

## 📱 Responsive Design

- **Mobile First**: Diseñado primero para móviles
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Touch Friendly**: Botones y enlaces optimizados para touch

## 🔒 Seguridad

- **CSP Headers**: Content Security Policy configurado
- **XSS Protection**: Sanitización de inputs
- **HTTPS Only**: Forzar conexiones seguras en producción

## 📞 Contacto

- **Desarrollado por**: Alexander Gil Roa
- **Cliente**: Cold Esthetic Reform
- **Ubicación**: Bogotá, Colombia

## 📄 Licencia

Este proyecto está desarrollado exclusivamente para Cold Esthetic Reform.

---

## 🚧 TODOs

- [ ] Integrar con backend/CMS para gestión de contenido
- [ ] Implementar sistema de citas en línea
- [ ] Agregar integración con Google Maps
- [ ] Implementar chat en vivo
- [ ] Agregar blog/noticias
- [ ] Optimizar imágenes con next/image
- [ ] Implementar analytics (Google Analytics 4)
- [ ] Agregar testimonios en video
- [ ] Implementar sistema de notificaciones
- [ ] Agregar soporte multiidioma (inglés)
