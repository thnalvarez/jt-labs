export const homeContent = {
  hero: {
    title: "Desarrollamos experiencias digitales que impulsan negocios.",
    description:
      "Creamos sitios web modernos, rápidos y enfocados en conversión para empresas que quieren crecer, vender más y destacar en internet.",
    trust: ["Sitios rápidos", "Diseño moderno", "Enfoque en resultados"],
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
      description: "Páginas enfocadas en campañas, captación de clientes y conversión.",
      icon: "rocket",
    },
    {
      title: "Sitios Web Corporativos",
      description:
        "Sitios profesionales para presentar tu empresa, servicios y propuesta de valor.",
      icon: "building",
    },
    {
      title: "E-commerce",
      description: "Tiendas online rápidas, seguras y preparadas para vender.",
      icon: "shopping",
    },
    {
      title: "Delivery Propio",
      description:
        "Catálogos, carritos y pedidos por WhatsApp sin depender únicamente de marketplaces.",
      icon: "store",
    },
    {
      title: "SEO y Performance",
      description: "Estructuras optimizadas para buscadores, velocidad y experiencia de usuario.",
      icon: "globe",
    },
    {
      title: "Hosting y Publicación",
      description: "Configuración de dominio, SSL, deploy y publicación profesional.",
      icon: "code",
    },
    {
      title: "Mantenimiento",
      description: "Actualizaciones, mejoras, monitoreo y soporte técnico continuo.",
      icon: "layers",
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
      description:
        "Experiencia digital con catálogo, carrito y pedidos por WhatsApp para una hamburguesería artesanal.",
      objective: "Facilitar pedidos digitales y presentar el menú.",
      solution: "Catálogo, carrito y cierre del pedido por WhatsApp.",
      status: "Demostración",
      image: "/images/projects/tasty-burger-preview.png",
      technologies: ["Next.js", "Tailwind CSS"],
    },
    {
      name: "Adega Taka no Copão",
      type: "Proyecto en desarrollo",
      category: "Bodega y delivery",
      description:
        "Catálogo digital, carrito y simulación de entrega para un negocio local de bebidas.",
      objective: "Preparar el negocio para operar un delivery propio.",
      solution: "Catálogo, carrito y simulación temporal de entrega.",
      status: "En desarrollo",
      image: "/images/projects/taka-no-copao-preview.png",
      technologies: ["React", "TypeScript"],
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
