# 📱 FAMVAR — Catálogo Digital & E-Commerce

> Catálogo web moderno, elegante y optimizado para la exhibición de celulares (iPhone, Samsung), accesorios importados, termos Stanley y productos de variedad. Diseñado bajo principios de **Refactoring UI**, arquitectura de color **HSL en Tailwind CSS v4** y conversión rápida hacia WhatsApp.

![React 19](https://img.shields.io/badge/React-19.0-61DAFB?logo=react&logoColor=black)
![Vite 8](https://img.shields.io/badge/Vite-8.0-646CFF?logo=vite&logoColor=white)
![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.0-06B6D4?logo=tailwindcss&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?logo=typescript&logoColor=white)

---

## 📸 Vista Previa de la Interfaz

La interfaz cuenta con un diseño *Warm Canvas & Navy Slate* con contraste refinado, badges semánticos con inversión de contraste y llamada a la acción única en Terracota Accent:

- **Hero Banner**: Presentación clara del catálogo con llamado directo a consulta por WhatsApp.
- **Grilla de Productos**: Badges dinámicos de disponibilidad (`En stock`, `A pedido`, `Sellado`, `Usado`) con jerarquía tipográfica limpia.
- **Historias Destacadas (Instagram)**: Muestra de testimonios y envíos reales con lightbox modal interactivo.
- **Ficha Técnica & Acordeones**: Detalle exhaustivo de especificaciones por producto (pantalla, chip, cámaras, batería, etc.).

---

## 🎨 Arquitectura de UI & Sistema de Color

El sistema visual sigue estrictamente las directrices de **Refactoring UI**:

### 1. Escala de Tokens HSL (`src/index.css`)
- **Warm Canvas**: `--color-bone` (`hsl(45, 25%, 96%)`), `--color-canvas-subtle`, `--color-card`, `--color-border-subtle`.
- **Navy Slate**: `--color-navy` (`hsl(215, 55%, 16%)`), `--color-navy-hover`, `--color-navy-border`, `--color-text-muted`.
- **Terracota Accent**: `--color-accent` (`hsl(15, 75%, 44%)`), `--color-accent-hover`.

### 2. Inversión de Contraste en Badges (*Flipping Contrast*)
Los badges no compiten con la fotografía del producto gracias a tonos suaves en fondo y texto oscuro contrastante con bordes al 15% de opacidad:
- `En stock`: Verde suave HSL con texto bosque oscuro.
- `A pedido`: Azul grisáceo HSL con texto navy profundo.
- `Sellado / Nuevo`: Gris neutro HSL con texto pizarra.
- `Usado`: Naranja cálido suave HSL con texto terracota oscuro.

### 3. Singularidad de Acción (*Action Singularity*)
- El color **Terracota Accent** se reserva **exclusivamente para los botones interactivos primarios** de consulta (CTAs).
- Los precios de los productos utilizan la tipografía **Navy Slate Bold**, manteniendo un contraste alto y ordenado.

---

## 🛠️ Stack Tecnológico

| Tecnología | Versión | Uso / Función |
| :--- | :--- | :--- |
| **React** | 19.0.0 | UI Library & Estado Declarativo |
| **TypeScript** | 5.7.0 | Tipado Estático Estricto |
| **Vite** | 8.0.0 | Build Tool & Dev Server Ultra-Rápido |
| **Tailwind CSS** | 4.0.0 | Utility-First CSS Framework (Vite Plugin) |

---

## 🚀 Instalación y Desarrollo Local

### Requisitos Previos
- **Node.js** v18+ 
- **npm** o **pnpm** / **yarn**

### Pasos

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/nadiaescobbb/famvar.git
   cd famvar
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   Accedé a `http://localhost:5173` en tu navegador.

4. **Compilar para producción:**
   ```bash
   npm run build
   ```

5. **Previsualizar la build de producción:**
   ```bash
   npm run preview
   ```

---

## 📂 Estructura del Proyecto

```text
famvar/
├── public/                 # Assets estáticos e imágenes AVIF optimizadas
├── src/
│   ├── index.css           # Tokens HSL @theme y estilos globales Tailwind v4
│   ├── main.tsx            # Punto de entrada React 19
│   ├── vite-env.d.ts       # Tipos de Vite
│   └── App.tsx             # Monolito principal (Tipos, Datos, Componentes y Pantallas)
├── index.html              # HTML de entrada y Google Fonts (Space Grotesk & Inter)
├── package.json            # Scripts y dependencias
├── tsconfig.json           # Configuración de TypeScript
└── vite.config.ts          # Configuración de Vite con @tailwindcss/vite
```

---

## 📄 Licencia

Este proyecto fue desarrollado para el comercio **FAMVAR** (La Escondida, Chaco, Argentina).  
Diseñado por **heytrama**.
