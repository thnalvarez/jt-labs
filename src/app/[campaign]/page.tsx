import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import { ToastProvider } from "@/components/common/ToastProvider";

const campaigns = {
  "sitio-web": { eyebrow: "SITIOS WEB PROFESIONALES", title: "Haz que tu negocio inspire confianza.", description: "Creamos sitios web claros, rápidos y preparados para convertir visitas en nuevas oportunidades.", points: ["Propuesta de valor clara", "Diseño adaptable a celular", "Formulario y WhatsApp", "Base SEO preparada"], cta: "Quiero mi sitio web" },
  ecommerce: { eyebrow: "E-COMMERCE LISTO PARA VENDER", title: "Tu tienda online, lista para vender.", description: "Catálogo, carrito y pedidos directos para que vendas tus productos con una experiencia simple y rápida.", points: ["Catálogo organizado", "Carrito de compras", "Pedidos directos", "Experiencia mobile first"], cta: "Quiero vender online" },
  "landing-page": { eyebrow: "LANDING PAGES PARA CONVERTIR", title: "Convierte campañas en contactos.", description: "Páginas enfocadas en una oferta, una acción clara y una experiencia pensada para captar oportunidades.", points: ["Mensaje directo", "CTA estratégico", "Carga rápida", "Preparada para publicidad"], cta: "Quiero una landing page" },
} as const;

export function generateStaticParams() { return Object.keys(campaigns).map((campaign) => ({ campaign })); }

export default async function CampaignPage({ params }: { params: Promise<{ campaign: string }> }) {
  const { campaign } = await params;
  const content = campaigns[campaign as keyof typeof campaigns];
  if (!content) notFound();
  return <ToastProvider><Navbar /><main><section className="relative overflow-hidden bg-[#071326] py-24 text-white"><Container><p className="text-sm font-bold tracking-[.18em] text-[#55CFFF]">{content.eyebrow}</p><h1 className="mt-5 max-w-3xl text-5xl font-bold tracking-tight sm:text-6xl">{content.title}</h1><p className="mt-6 max-w-2xl text-xl leading-8 text-[#C2D0E0]">{content.description}</p><div className="mt-9 flex flex-wrap gap-3"><WhatsAppButton size="lg">{content.cta}</WhatsAppButton><Button href="#solucion" variant="outline" size="lg" className="!border-white !text-white">Ver la solución</Button></div></Container></section><section id="solucion" className="bg-[#F5F8FC] py-20"><Container><h2 className="text-3xl font-bold text-[#071326]">Lo que tu negocio necesita para avanzar</h2><div className="mt-8 grid gap-4 sm:grid-cols-2">{content.points.map((point) => <article key={point} className="rounded-2xl bg-white p-6 font-bold text-[#071326] shadow-sm">✓ {point}</article>)}</div><div className="mt-10 rounded-3xl bg-[#071326] p-8 text-white"><h2 className="text-3xl font-bold">Hablemos de tu proyecto</h2><p className="mt-3 text-[#C2D0E0]">Atendemos proyectos en España y América Latina, incluido Brasil.</p><WhatsAppButton className="mt-6">Solicitar una cotización</WhatsAppButton></div></Container></section></main><Footer homePath="/" /></ToastProvider>;
}
