import { Reveal } from "@/components/common/Reveal";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { homeContent } from "@/content/es/home";
export function Technologies() {
  return (
    <Section id="tecnologias" className="bg-[#071326]">
      <Container>
        <Reveal>
          <SectionHeader
            title="Tecnologías que utilizamos"
            description="Elegimos herramientas modernas y apropiadas para construir experiencias mantenibles y rápidas."
            dark
          />
        </Reveal>
        <Reveal delay={80} className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {homeContent.technologies.map((technology) => (
            <article
              key={technology.name}
              className="group min-h-52 rounded-2xl border border-[#16B9FF]/25 bg-white/5 p-5 transition duration-200 hover:-translate-y-1 hover:border-[#16B9FF]/70 hover:bg-white/[.08]"
            >
              <span
                aria-hidden="true"
                className="grid size-10 place-items-center rounded-xl border border-[#A8FF00]/30 bg-[#A8FF00]/10 text-xs font-black text-[#A8FF00]"
              >
                {technology.symbol}
              </span>
              <h3 className="mt-5 font-bold text-white">{technology.name}</h3>
              <p className="mt-2 text-sm leading-6 text-[#A8B5C7]">{technology.description}</p>
            </article>
          ))}
        </Reveal>
      </Container>
    </Section>
  );
}
