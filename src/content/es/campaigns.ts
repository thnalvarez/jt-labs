export type CampaignContent = {
  serviceName: string;
  eyebrow: string;
  title: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  cta: string;
  challenge: string;
  approach: string;
  deliverables: string[];
  process: Array<{ title: string; description: string }>;
  faqs: Array<{ question: string; answer: string }>;
};

export const campaigns = {
  "sitio-web": {
    serviceName: "Diseño y desarrollo de sitios web",
    eyebrow: "SITIOS WEB PROFESIONALES",
    title: "Haz que tu negocio inspire confianza.",
    description:
      "Creamos sitios web claros, rápidos y preparados para convertir visitas en nuevas oportunidades.",
    seoTitle: "Diseño de páginas web en Perú | JT Labs",
    seoDescription:
      "Creamos sitios web profesionales, rápidos y adaptables para negocios en Perú y Latinoamérica.",
    cta: "Quiero mi sitio web",
    challenge:
      "Cuando la información está dispersa o la presencia digital no refleja el nivel del negocio, las personas pueden dudar antes de contactarte.",
    approach:
      "Ordenamos tu propuesta, servicios y canales de contacto en una experiencia profesional que se entiende desde el primer vistazo.",
    deliverables: [
      "Arquitectura de información y mensaje principal",
      "Diseño adaptable para celular, tableta y escritorio",
      "Secciones de servicios, confianza y contacto",
      "Base técnica preparada para SEO y evolución futura",
    ],
    process: [
      {
        title: "Definimos la prioridad",
        description:
          "Entendemos tu negocio, público y objetivo para decidir qué información necesita cada visita.",
      },
      {
        title: "Diseñamos el recorrido",
        description:
          "Convertimos el contenido en una estructura clara, con jerarquías y acciones fáciles de encontrar.",
      },
      {
        title: "Construimos y revisamos",
        description:
          "Desarrollamos, comprobamos la experiencia en distintos tamaños y dejamos una base lista para crecer.",
      },
    ],
    faqs: [
      {
        question: "¿Qué información necesita un sitio web corporativo?",
        answer:
          "Partimos de tus servicios, propuesta de valor, datos de contacto y los recursos que ya tengas. Te ayudamos a definir qué falta antes de diseñar.",
      },
      {
        question: "¿Podré ampliar el sitio más adelante?",
        answer:
          "Sí. La arquitectura se plantea para incorporar nuevas páginas, contenidos, formularios o integraciones cuando el negocio lo necesite.",
      },
      {
        question: "¿El sitio estará preparado para buscadores?",
        answer:
          "Incluimos una base técnica orientada a SEO: estructura semántica, metadata y rendimiento. El posicionamiento sostenido requiere una estrategia de contenidos posterior.",
      },
    ],
  },
  ecommerce: {
    serviceName: "Desarrollo de tiendas online y e-commerce",
    eyebrow: "E-COMMERCE LISTO PARA VENDER",
    title: "Tu tienda online, lista para vender.",
    description:
      "Catálogo, carrito y pedidos directos para que vendas tus productos con una experiencia simple y rápida.",
    seoTitle: "Tiendas online y e-commerce en Perú | JT Labs",
    seoDescription:
      "Creamos tiendas online con catálogo, carrito y pedidos directos para negocios en Perú y Latinoamérica.",
    cta: "Quiero vender online",
    challenge:
      "Vender por mensajes o catálogos dispersos hace más difícil que cada persona encuentre productos, compare opciones y complete un pedido.",
    approach:
      "Diseñamos una tienda ordenada que acompaña desde la exploración del catálogo hasta el canal de cierre que mejor encaje con tu operación.",
    deliverables: [
      "Catálogo organizado por productos o categorías",
      "Carrito de compras y flujo de pedido claro",
      "Cierre por WhatsApp o preparación para pagos",
      "Experiencia mobile first preparada para crecer",
    ],
    process: [
      {
        title: "Ordenamos la venta",
        description:
          "Revisamos productos, categorías, reglas comerciales y la forma en que hoy recibes pedidos.",
      },
      {
        title: "Diseñamos la compra",
        description:
          "Definimos un recorrido simple para descubrir productos, revisar el carrito y avanzar sin fricciones innecesarias.",
      },
      {
        title: "Preparamos el lanzamiento",
        description:
          "Probamos los casos principales y dejamos la tienda lista para publicar y seguir mejorando según la operación real.",
      },
    ],
    faqs: [
      {
        question: "¿La tienda puede empezar con pedidos por WhatsApp?",
        answer:
          "Sí. Podemos configurar un cierre de pedido por WhatsApp y dejar la arquitectura preparada para evaluar pagos online cuando sea conveniente.",
      },
      {
        question: "¿Puedo vender muchos tipos de productos?",
        answer:
          "La estructura se define según el catálogo real: categorías, variantes, precios y reglas de pedido que tu negocio necesite comunicar.",
      },
      {
        question: "¿Quién carga los productos?",
        answer:
          "Lo definimos en el alcance inicial. Podemos partir de tu catálogo actual y acordar la forma más ordenada de preparar los contenidos para publicar.",
      },
    ],
  },
  "landing-page": {
    serviceName: "Diseño y desarrollo de landing pages",
    eyebrow: "LANDING PAGES PARA CONVERTIR",
    title: "Convierte campañas en contactos.",
    description:
      "Páginas enfocadas en una oferta, una acción clara y una experiencia pensada para captar oportunidades.",
    seoTitle: "Landing pages en Perú para campañas | JT Labs",
    seoDescription:
      "Diseñamos landing pages rápidas y claras para campañas y captación de oportunidades en Perú y Latinoamérica.",
    cta: "Quiero una landing page",
    challenge:
      "Una campaña pierde fuerza cuando el anuncio, la oferta y el siguiente paso no hablan el mismo idioma o compiten entre sí.",
    approach:
      "Concentramos la propuesta en una sola página, con argumentos relevantes y una acción principal fácil de reconocer en cualquier dispositivo.",
    deliverables: [
      "Mensaje y estructura centrados en una oferta",
      "Llamados a la acción y formulario o WhatsApp",
      "Diseño rápido y adaptable para campañas móviles",
      "Base para medir el origen de cada consulta",
    ],
    process: [
      {
        title: "Aterrizamos la oferta",
        description:
          "Definimos el público, el beneficio principal y la acción que debe completar cada visita.",
      },
      {
        title: "Construimos la página",
        description:
          "Organizamos los argumentos, pruebas disponibles y llamados a la acción en un recorrido directo.",
      },
      {
        title: "Validamos antes de lanzar",
        description:
          "Revisamos el contenido, los canales de contacto y el comportamiento en móvil para dejar la campaña lista.",
      },
    ],
    faqs: [
      {
        question: "¿Una landing page sirve para cualquier campaña?",
        answer:
          "Funciona mejor cuando responde a una oferta o necesidad concreta. Si tienes varias propuestas distintas, conviene evaluar páginas separadas.",
      },
      {
        question: "¿Puedo usarla con publicidad digital?",
        answer:
          "Sí. La página puede prepararse para recibir tráfico de campañas y registrar el origen interno de los contactos por formulario o WhatsApp.",
      },
      {
        question: "¿Incluye textos y diseño?",
        answer:
          "Trabajamos la estructura, el diseño y los mensajes clave. El alcance final se acuerda según la oferta, materiales disponibles y objetivo de la campaña.",
      },
    ],
  },
} satisfies Record<string, CampaignContent>;
