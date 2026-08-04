# Arquitectura de la landing page

La página principal se compone de Navbar, Hero, industrias, servicios, proceso, proyectos, tecnologías, FAQ, CTA final y Footer. El orden está centralizado en `src/app/page.tsx`.

Los textos viven en `src/content/es/` para preparar futuros idiomas sin añadir i18n todavía. Los proyectos demostrativos usan SVG propios ubicados en `public/images/projects/`.

Los componentes interactivos son Navbar, ToastProvider, WhatsAppButton y FAQ. El resto se renderiza en el servidor por defecto.
