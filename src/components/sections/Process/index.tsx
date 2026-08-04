import { Reveal } from "@/components/common/Reveal";
import { Container } from "@/components/ui/Container";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { homeContent } from "@/content/es/home";
const descriptions = [
  "Escuchamos tu contexto, objetivos y necesidades.",
  "Definimos prioridades, alcance y una ruta de trabajo.",
  "Convertimos la estrategia en una interfaz clara.",
  "Construimos una experiencia rápida y adaptable.",
  "Revisamos detalles, contenido y funcionamiento.",
  "Lanzamos y te acompañamos en los siguientes pasos.",
];
const icons: IconName[] = ["message", "layers", "spark", "code", "check", "rocket"];
export function Process() {
  return (
    <Section
      id="proceso"
      className="relative overflow-hidden bg-[#071326] before:absolute before:inset-0 before:opacity-20 before:[background-image:linear-gradient(90deg,transparent_49%,rgba(22,185,255,.2)_50%,transparent_51%)] before:[background-size:80px_80px]"
    >
      <Container className="relative">
        <Reveal>
          <SectionHeader
            title="Nuestro proceso"
            description="Un proceso claro, organizado y transparente desde la idea hasta la publicación."
            dark
          />
        </Reveal>
        <Reveal
          delay={80}
          className="relative mt-12 grid gap-7 before:absolute before:bottom-2 before:left-5 before:top-3 before:w-px before:bg-[#16B9FF]/35 md:grid-cols-3 md:before:left-8 md:before:right-8 md:before:top-5 md:before:h-px md:before:w-auto lg:grid-cols-6"
        >
          {homeContent.process.map((title, index) => (
            <article key={title} className="group relative pl-14 md:pl-0">
              <div className="absolute left-0 top-0 grid size-10 place-items-center rounded-full bg-[#A8FF00] text-sm font-black text-[#071326] ring-8 ring-[#071326] md:relative md:mb-6">
                {String(index + 1).padStart(2, "0")}
              </div>
              <Icon
                name={icons[index]}
                className="mb-4 text-[#16B9FF] transition-transform group-hover:scale-110"
              />
              <h3 className="font-bold text-white">{title}</h3>
              <p className="mt-2 max-w-44 text-sm leading-6 text-[#A8B5C7]">
                {descriptions[index]}
              </p>
            </article>
          ))}
        </Reveal>
      </Container>
    </Section>
  );
}
