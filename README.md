# JT Labs

Sitio comercial de JT Labs: e-commerce, delivery y desarrollo web para negocios que buscan crecer en digital. Dominio oficial: [jtlabs.online](https://jtlabs.online).

## Instalación

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Variables de entorno

- `NEXT_PUBLIC_SITE_URL`: URL pública del sitio.
- `NEXT_PUBLIC_WHATSAPP_NUMBER`: número internacional para el canal rápido.
- `NEXT_PUBLIC_CONTACT_EMAIL`: correo visible si está configurado.
- `CONTACT_FORM_RECIPIENT` y `RESEND_API_KEY`: reservadas para habilitar la recepción por correo. Sin proveedor configurado, la API comunica el estado pendiente y ofrece fallback a WhatsApp cuando existe número.

## Flujo de contacto

El formulario valida en cliente y servidor, protege con honeypot y limita longitudes. No confirma envíos inexistentes: mientras no haya un proveedor configurado, informa el estado pendiente y permite continuar por WhatsApp.

## Arquitectura

`src/app` contiene rutas, metadata y handlers; `src/components` agrupa UI, layout y secciones; `src/content/es` centraliza contenido en español; `src/utils` incluye integraciones seguras sin proveedor acoplado. El código se mantiene en inglés y el contenido visible en español latino.

## Despliegue

El proyecto está preparado para Vercel. Configura las variables de entorno en el proveedor antes de habilitar canales de contacto. Cada push a la rama principal puede iniciar el despliegue automático según la configuración del repositorio.

## Comandos

```bash
npm run lint
npm run build
npm run format:check
```
