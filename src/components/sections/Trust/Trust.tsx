import { Reveal } from "@/components/common/Reveal";
import { Container } from "@/components/ui/Container";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

const pillars: { title: string; description: string; icon: IconName }[] = [
  {
    title: "Comunicación clara",
    description:
      "Explicamos decisiones, avances y próximos pasos sin lenguaje técnico innecesario.",
    icon: "message",
  },
  {
    title: "Proceso organizado",
    description:
      "Cada proyecto avanza por etapas: planificación, diseño, desarrollo, revisión y publicación.",
    icon: "layers",
  },
  {
    title: "Tecnología moderna",
    description: "Construimos con herramientas actuales, arquitectura modular y buenas prácticas.",
    icon: "code",
  },
  {
    title: "Proyecto preparado para crecer",
    description:
      "El sitio se entrega como una base que puede evolucionar con nuevas páginas, funciones e integraciones.",
    icon: "rocket",
  },
];
const commitments = [
  "Mobile first",
  "SEO desde el inicio",
  "Código versionado",
  "Deploy profesional",
  "Soporte posterior",
];

export function Trust() {
  return (
    <Section id="confianza" className="bg-[#F5F8FC]">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="Forma de trabajo"
            title="¿Por qué trabajar con JT Labs?"
            description="Un enfoque cercano y ordenado para convertir necesidades comerciales en soluciones digitales útiles."
          />
        </Reveal>
        <Reveal delay={80} className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="rounded-2xl border border-[#DFE7F0] bg-white p-6 shadow-[0_4px_18px_rgba(7,19,38,.05)]"
            >
              <Icon name={pillar.icon} className="text-[#0078B5]" />
              <h3 className="mt-5 text-lg font-bold text-[#071326]">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#526176]">{pillar.description}</p>
            </article>
          ))}
        </Reveal>
        <Reveal delay={120} className="mt-8 rounded-2xl border border-[#CFEFFF] bg-white px-5 py-5">
          <ul
            aria-label="Compromisos verificables de JT Labs"
            className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-semibold text-[#526176]"
          >
            {commitments.map((commitment) => (
              <li key={commitment} className="flex items-center gap-2">
                <Icon name="check" size={16} className="text-[#4D8700]" />
                {commitment}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </Section>
  );
}
