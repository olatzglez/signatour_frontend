# SignaTour — Frontend React

> Itinerarios culturales accesibles para personas sordas o con discapacidad auditiva.

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)
![CSS Modules](https://img.shields.io/badge/CSS-Modules-blue)
![WCAG AA](https://img.shields.io/badge/Accesibilidad-WCAG%20AA-green)
![License](https://img.shields.io/badge/Licencia-MIT-yellow)

---

## Descripción

SignaTour es una aplicación web frontend desarrollada en React que presenta itinerarios culturales accesibles para personas sordas o con discapacidad auditiva. Permite explorar rutas culturales por ciudades españolas que cuentan con recursos como LSE (Lengua de Signos Española), subtítulos, signoguías y bucle magnético.


---

## Funcionalidades

- 🗺️ Explorar itinerarios culturales accesibles por ciudad.
- 🔍 Ver el detalle de cada itinerario con duración y público objetivo.
- 🏙️ Slider de ciudades disponibles con scroll horizontal.
- 🔐 Registro e inicio de sesión con validación de formularios.
- 🌙 Modo oscuro con persistencia entre sesiones.
- 📱 Diseño responsive (móvil, tablet y escritorio).
- ♿ Accesibilidad WCAG 2.1 nivel AA.

---

## Stack tecnológico

| Tecnología | Versión | Uso |
|---|---|---|
| React | 18+ | Framework principal |
| Vite | 5+ | Bundler y servidor de desarrollo |
| React Router | v6 | Enrutamiento en cliente |
| CSS Modules | — | Estilos con alcance local por componente |
| Context API | — | Estado global de autenticación |
| localStorage | — | Persistencia de sesión y preferencias |

---

## Requisitos previos

- Node.js v18 o superior
- npm v9 o superior

---

## Instalación y arranque

### 1. Clonar el repositorio

```bash
git clone https://github.com/olatzglez/signatour-frontend.git
cd signatour-frontend
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Arrancar en modo desarrollo

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`.

> Si el puerto 5173 está ocupado, Vite asignará automáticamente el siguiente disponible (5174, 5175...).

---

## Credenciales de demo

Para probar el inicio de sesión sin necesidad de registrarse:

| Rol | Email | Contraseña |
|---|---|---|
| Usuario | `usuario@itinerarios.local` | `admin1234` |
| Admin | `admin@admin.com` | `admin1234` |

---

## Estructura del proyecto

```
signatour-frontend/
├── public/
│   └── images/
│       └── itinerarios/      # Imágenes de las ciudades
├── src/
│   ├── components/           # Componentes reutilizables
│   │   ├── Navbar.jsx
│   │   ├── Navbar.module.css
│   │   ├── Footer.jsx
│   │   ├── Footer.module.css
│   │   ├── ItinerarioCard.jsx
│   │   ├── ItinerarioCard.module.css
│   │   ├── Slider.jsx
│   │   └── Slider.module.css
│   ├── pages/                # Páginas asociadas a rutas
│   │   ├── Home.jsx
│   │   ├── Home.module.css
│   │   ├── ItinerarioList.jsx
│   │   ├── ItinerarioList.module.css
│   │   ├── ItinerarioDetail.jsx
│   │   ├── ItinerarioDetail.module.css
│   │   ├── LoginForm.jsx
│   │   └── RegisterForm.jsx
│   ├── hooks/                # Hooks personalizados
│   │   ├── useLocalStorage.js
│   │   └── useDarkMode.js
│   ├── context/              # Estado global
│   │   └── AuthContext.jsx
│   ├── services/             # Capa de abstracción para la API
│   │   └── itinerarios.js
│   ├── mocks/                # Datos de prueba
│   │   ├── itinerarios.js
│   │   ├── ciudades.js
│   │   └── usuarios.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css             # Variables CSS globales y reset
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

---

## Scripts disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Arranca el servidor de desarrollo con HMR |
| `npm run build` | Genera el bundle de producción en `/dist` |
| `npm run preview` | Previsualiza el build de producción |

---

## Hooks implementados

| Hook | Tipo | Descripción |
|---|---|---|
| `useState` | Nativo React | Estado interno de componentes (formularios, loading, errores) |
| `useEffect` | Nativo React | Carga de datos y sincronización de tema oscuro |
| `useRef` | Nativo React | Control programático del scroll del slider |
| `useParams` | React Router | Lectura del `:id` en la URL de detalle |
| `useNavigate` | React Router | Redirección programática tras login/logout |
| `useLocalStorage` | Personalizado | Lectura y escritura en localStorage con estado reactivo |
| `useDarkMode` | Personalizado | Gestión del tema oscuro con persistencia |
| `useAuth` | Personalizado | Acceso al AuthContext desde cualquier componente |

---

## Accesibilidad

El proyecto implementa WCAG 2.1 nivel AA:

- Contraste mínimo de 4.5:1 en todo el texto
- Atributos ARIA: `aria-label`, `aria-expanded`, `aria-controls`, `aria-hidden`, `role="alert"`, `role="dialog"`
- Focus visible para navegación por teclado
- Idioma declarado en el HTML (`lang="es"`)
- Zonas táctiles mínimas de 44×44px
- Testado con SiteImprove y Wave Evaluation Tool

---

## Uso de la Inteligencia Artificial

Durante el desarrollo de este proyecto se ha utilizado **Claude (Anthropic)** como herramienta de apoyo al aprendizaje.

**Usos principales:**
- Resolución de errores específicos con explicación de la causa.
- Aclaración de conceptos nuevos antes de implementarlos (Context API, useRef, CSS Modules).
- Revisión de código para detectar problemas potenciales.
- Generación de datos mock (itinerarios, ciudades, usuarios).
- Apoyo en la redacción de la documentación técnica.

**Criterio propio:**
- Todas las decisiones de arquitectura y estructura del proyecto.
- Las decisiones de diseño visual (paleta de colores, inspiración, degradados).
- La integración de cada fragmento de código en los archivos correctos.
- La detección y descripción de bugs.
- Las pruebas manuales de la aplicación.

> La IA cometió errores durante el proceso (comentarios mal colocados en JSX, imports pegados en archivos CSS) que fue necesario identificar y corregir. Esto requirió comprensión propia del código.

---

## Mejoras futuras

- [ ] Conectar con el backend (Node.js + Express + PostgreSQL).
- [ ] Cambio de idioma (castellano, euskera, inglés) con i18next.
- [ ] Sistema de favoritos.
- [ ] Filtros por ciudad, duración y tipo de recurso de accesibilidad.
- [ ] Despliegue en Vercel.

---

## Autora

**Olatz González**
Bootcamp Full Stack Developer — The Bridge 2026

---

## Licencia

Este proyecto está bajo la licencia MIT.
