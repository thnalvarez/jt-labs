import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ToastProvider } from "@/components/common/ToastProvider";
import { campaigns } from "@/content/es/campaigns";

type CampaignKey = keyof typeof campaigns;

const sectionLabels = ["01", "02", "03"];

export function generateStaticParams() {
  return Object.keys(campaigns).map((campaign) => ({ campaign }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ campaign: string }>;
}): Promise<Metadata> {
  const { campaign } = await params;
  const content = campaigns[campaign as CampaignKey];

  if (!content) return {};

  return {
    title: content.seoTitle,
    description: content.seoDescription,
    alternates: { canonical: `/${campaign}` },
    openGraph: {
      title: content.seoTitle,
      description: content.seoDescription,
      url: `/${campaign}`,
    },
    twitter: {
      title: content.seoTitle,
      description: content.seoDescription,
    },
  };
}

export default async function CampaignPage({ params }: { params: Promise<{ campaign: string }> }) {
  const { campaign } = await params;
  const content = campaigns[campaign as CampaignKey];

  if (!content) notFound();

  return (
    <ToastProvider>
      <Navbar />
      <main>
        <section className="relative overflow-hidden bg-[#071326] py-24 text-white">
          <Container>
            <p className="text-sm font-bold tracking-[.18em] text-[#55CFFF]">{content.eyebrow}</p>
            <h1 className="mt-5 max-w-3xl text-5xl font-bold tracking-tight sm:text-6xl">
              {content.title}
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-[#C2D0E0]">{content.description}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <WhatsAppButton size="lg">{content.cta}</WhatsAppButton>
              <Button
                href="#solucion"
                variant="outline"
                size="lg"
                className="!border-white !text-white"
              >
                Ver la solución
              </Button>
            </div>
          </Container>
        </section>

        <section id="solucion" className="bg-[#F5F8FC] py-20">
          <Container>
            <div className="grid gap-6 lg:grid-cols-2">
              <article className="rounded-3xl bg-white p-8 shadow-sm">
                <p className="text-sm font-bold tracking-[.14em] text-[#0078B5]">EL RETO</p>
                <h2 className="mt-3 text-3xl font-bold text-[#071326]">
                  Una experiencia que acompañe a tu negocio
                </h2>
                <p className="mt-4 leading-7 text-[#526176]">{content.challenge}</p>
              </article>
              <article className="rounded-3xl bg-[#071326] p-8 text-white">
                <p className="text-sm font-bold tracking-[.14em] text-[#55CFFF]">NUESTRO ENFOQUE</p>
                <h2 className="mt-3 text-3xl font-bold">Decisiones claras desde el inicio</h2>
                <p className="mt-4 leading-7 text-[#C2D0E0]">{content.approach}</p>
              </article>
            </div>

            <div className="mt-16">
              <p className="text-sm font-bold tracking-[.14em] text-[#0078B5]">ALCANCE INICIAL</p>
              <h2 className="mt-3 text-3xl font-bold text-[#071326]">
                Lo que tu negocio necesita para avanzar
              </h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {content.deliverables.map((deliverable) => (
                  <article
                    key={deliverable}
                    className="rounded-2xl bg-white p-6 font-bold text-[#071326] shadow-sm"
                  >
                    ✓ {deliverable}
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-20">
              <p className="text-sm font-bold tracking-[.14em] text-[#0078B5]">PROCESO</p>
              <h2 className="mt-3 text-3xl font-bold text-[#071326]">
                Cómo llevamos la idea a una solución útil
              </h2>
              <div className="mt-8 grid gap-4 lg:grid-cols-3">
                {content.process.map((step, index) => (
                  <article
                    key={step.title}
                    className="rounded-2xl border border-[#DFE7F0] bg-white p-6"
                  >
                    <p className="text-sm font-bold text-[#0078B5]">{sectionLabels[index]}</p>
                    <h3 className="mt-4 text-xl font-bold text-[#071326]">{step.title}</h3>
                    <p className="mt-3 leading-7 text-[#526176]">{step.description}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-20 max-w-3xl">
              <p className="text-sm font-bold tracking-[.14em] text-[#0078B5]">
                PREGUNTAS FRECUENTES
              </p>
              <h2 className="mt-3 text-3xl font-bold text-[#071326]">
                Resolvemos lo importante antes de empezar
              </h2>
              <div className="mt-8 space-y-3">
                {content.faqs.map((faq) => (
                  <details key={faq.question} className="rounded-2xl bg-white p-6 shadow-sm">
                    <summary className="cursor-pointer pr-8 font-bold text-[#071326]">
                      {faq.question}
                    </summary>
                    <p className="mt-4 leading-7 text-[#526176]">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>

            <div className="mt-20 rounded-3xl bg-[#071326] p-8 text-white">
              <h2 className="text-3xl font-bold">Hablemos de tu proyecto</h2>
              <p className="mt-3 max-w-2xl text-[#C2D0E0]">
                Cuéntanos tu objetivo y te orientamos sobre el alcance que puede aportar más valor a
                tu negocio.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <WhatsAppButton>Solicitar una cotización</WhatsAppButton>
                <Button href="/#contacto" variant="outline" className="!border-white !text-white">
                  Enviar solicitud
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer homePath="/" />
    </ToastProvider>
  );
}
