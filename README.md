# JT Labs — Landing Page Demo V1.0

Landing page de demostración para JT Labs, enfocada en soluciones digitales para negocios locales.

## Estado

Demo local lista para revisión. No incluye publicación ni canales reales de contacto.

## Tecnologías

Next.js 16, React 19, TypeScript, Tailwind CSS, ESLint y Prettier.

## Instalación

```bash
npm install
npm run dev
```

## Comandos

```bash
npm run lint
npm run build
npm run format:check
```

## Variables de entorno

Copia `.env.example` a `.env.local`. No se deben inventar teléfonos, correos ni perfiles sociales: cuando una variable no existe, el sitio muestra un estado de disponibilidad futura o no muestra el enlace.

## Estructura

`src/content/es` concentra contenido; `src/components` contiene UI, layout y secciones; `src/theme` centraliza tokens como referencia; `src/utils` incluye utilidades reutilizables.

El contenido visible y la documentación se escriben en español. El código se mantiene en inglés. El deploy futuro podrá hacerse en Vercel cuando exista una URL y una configuración aprobada.
