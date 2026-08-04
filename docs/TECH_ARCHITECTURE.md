# Arquitectura técnica

El proyecto usa Next.js 16 con App Router, React 19, TypeScript y Tailwind CSS. La fuente se carga con `next/font`; el logo raster se usa mediante `next/image`.

`NEXT_PUBLIC_SITE_URL` permite completar `metadataBase` y el sitemap cuando exista un dominio aprobado. Las variables de contacto son opcionales. `getWhatsAppUrl` solo genera una URL si existe un número configurado; de lo contrario, el CTA muestra un toast accesible.

Se incluyen `robots.ts`, `sitemap.ts` y `manifest.ts`. La página evita librerías de iconos y animación adicionales mediante iconos SVG reutilizables y transiciones CSS breves.
