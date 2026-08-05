export const homeContent = {
  hero: {
    title: "Desarrollamos experiencias digitales que impulsan negocios.",
    description:
      "Creamos sitios web, e-commerce y sistemas de delivery para negocios que quieren vender más, trabajar mejor y crecer en digital.",
    trust: ["Diseño moderno", "Desarrollo rápido", "Enfoque en conversión"],
  },
  industries: [
    "Restaurantes",
    "Bares y bodegas",
    "Clínicas y salud",
    "Gimnasios y fitness",
    "Inmobiliarias",
    "Estudios y abogados",
    "Comercios y tiendas",
    "Otros negocios",
  ],
  services: [
    {
      title: "Landing Pages",
      description: "Páginas enfocadas en campañas, promociones, captación de leads y conversión.",
      icon: "rocket",
      benefits: [
        "Mensaje directo",
        "CTA estratégico",
        "Velocidad",
        "Integración con publicidad",
        "Seguimiento de conversiones",
      ],
    },
    {
      title: "Sitios web corporativos",
      description:
        "Sitios profesionales para presentar tu empresa, servicios, propuesta de valor y generar nuevos contactos.",
      icon: "building",
      benefits: [
        "Imagen profesional",
        "Servicios organizados",
        "Formularios de contacto",
        "SEO inicial",
        "Diseño responsive",
      ],
    },
    {
      title: "E-commerce",
      description:
        "Tiendas online rápidas, seguras y preparadas para vender productos, gestionar pedidos y crecer.",
      icon: "shopping",
      benefits: [
        "Catálogo organizado",
        "Carrito de compras",
        "Experiencia mobile first",
        "Pagos o WhatsApp",
        "Base preparada para crecer",
      ],
    },
    {
      title: "Delivery Propio",
      description:
        "Catálogo, carrito y pedidos directos para vender sin depender únicamente de marketplaces.",
      icon: "store",
      benefits: [
        "Catálogo digital",
        "Carrito",
        "Pedido por WhatsApp",
        "Reglas de entrega",
        "Control comercial propio",
      ],
    },
    {
      title: "SEO y Performance",
      description: "Estructuras optimizadas para buscadores, velocidad y experiencia de usuario.",
      icon: "globe",
      benefits: [],
    },
    {
      title: "Hosting y Publicación",
      description: "Configuración de dominio, SSL, deploy y publicación profesional.",
      icon: "code",
      benefits: [],
    },
    {
      title: "Mantenimiento",
      description: "Actualizaciones, mejoras, monitoreo y soporte técnico continuo.",
      icon: "layers",
      benefits: [],
    },
  ],
  process: [
    "Entendemos tu negocio",
    "Planificamos",
    "Diseñamos",
    "Desarrollamos",
    "Probamos",
    "Publicamos y acompañamos",
  ],
  projects: [
    {
      name: "Tasty Burger",
      type: "Proyecto demostrativo",
      category: "Restaurante y delivery",
      problem: "El negocio necesitaba presentar su menú y facilitar pedidos digitales.",
      solution: "Creamos una experiencia con catálogo, carrito y cierre del pedido por WhatsApp.",
      status: "Demostración",
      image: "/images/projects/tasty-burger-preview.png",
      features: [
        "Catálogo por categorías",
        "Carrito de compras",
        "Pedido por WhatsApp",
        "Diseño responsive",
        "Arquitectura preparada para crecer",
      ],
      technologies: ["Next.js", "React", "TypeScript", "Vercel"],
    },
    {
      name: "Adega Taka no Copão",
      type: "Proyecto en desarrollo",
      category: "Bodega y delivery",
      problem: "El negocio necesitaba prepararse para iniciar un canal propio de delivery.",
      solution: "Diseñamos un catálogo digital con carrito y simulación temporal de entrega.",
      status: "En desarrollo",
      image: "/images/projects/taka-no-copao-preview.png",
      features: [
        "Catálogo de productos",
        "Carrito",
        "Pedido mínimo",
        "Simulación de entrega",
        "WhatsApp",
        "Control de acceso 18+",
      ],
      technologies: ["Next.js", "React", "TypeScript", "Vercel"],
    },
  ],
  technologies: [
    {
      name: "Next.js",
      symbol: "N",
      description: "Aplicaciones web rápidas, modernas y preparadas para SEO.",
    },
    {
      name: "React",
      symbol: "R",
      description: "Interfaces reutilizables, dinámicas y fáciles de evolucionar.",
    },
    {
      name: "TypeScript",
      symbol: "TS",
      description: "Código más seguro, predecible y mantenible.",
    },
    {
      name: "Tailwind CSS",
      symbol: "TW",
      description: "Diseños consistentes, responsivos y eficientes.",
    },
    {
      name: "Node.js",
      symbol: "N",
      description: "Base moderna para integraciones y lógica del servidor.",
    },
    {
      name: "Vercel",
      symbol: "V",
      description: "Publicación continua, previews y distribución global.",
    },
    {
      name: "Git",
      symbol: "G",
      description: "Historial, control de versiones y trabajo organizado.",
    },
    {
      name: "GitHub",
      symbol: "GH",
      description: "Colaboración, respaldo y automatización del desarrollo.",
    },
  ],
} as const;
