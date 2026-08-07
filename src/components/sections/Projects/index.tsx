import Image from "next/image";
import { Reveal } from "@/components/common/Reveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { homeContent } from "@/content/es/home";

export function Projects() {
  return (
    <Section id="proyectos" className="bg-[#F5F8FC]">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="Modelos de referencia"
            title="Imagina cómo podría verse tu proyecto"
            description="Ejemplos conceptuales para explorar una posible experiencia digital según el tipo de negocio. No representan clientes ni resultados realizados."
          />
        </Reveal>
        <p className="mt-6 text-sm font-bold text-[#526176] lg:hidden">
          Desliza para conocer los modelos.
        </p>
        <Reveal
          delay={80}
          className="mt-6 flex snap-x snap-mandatory items-stretch gap-4 overflow-x-auto pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 xl:mt-10 xl:grid-cols-3 xl:gap-6"
        >
          {homeContent.projectModels.map((model) => (
            <article
              key={model.title}
              className="group flex h-full w-[86vw] max-w-[360px] shrink-0 snap-center flex-col overflow-hidden rounded-3xl border border-[#DFE7F0] bg-white shadow-[0_6px_24px_rgba(7,19,38,.07)] transition duration-200 hover:-translate-y-1 hover:border-[#16B9FF]/55 hover:shadow-[0_16px_36px_rgba(7,19,38,.12)] sm:w-auto sm:max-w-none"
            >
              <div className="relative aspect-[3/2] overflow-hidden border-b border-[#DFE7F0] bg-[#071326]">
                <Image
                  src={model.image}
                  alt={`Modelo visual conceptual para ${model.title}`}
                  fill
                  sizes="(max-width: 639px) 86vw, (max-width: 1279px) 50vw, 380px"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
                <span className="absolute left-4 top-4 rounded-full bg-[#071326]/90 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm">
                  Modelo conceptual
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="text-xs font-bold uppercase tracking-[.12em] text-[#0078B5]">
                  {model.industry}
                </span>
                <h3 className="mt-3 text-xl font-bold text-[#071326]">{model.title}</h3>
                <p className="mt-3 leading-7 text-[#526176]">{model.description}</p>
                <Button href="#contacto" variant="outline" className="mt-6 self-start">
                  {model.cta}
                </Button>
              </div>
            </article>
          ))}
        </Reveal>
      </Container>
    </Section>
  );
}
