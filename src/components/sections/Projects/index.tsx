import Image from "next/image";
import { Reveal } from "@/components/common/Reveal";
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
            title="Proyectos destacados"
            description="Conceptos y soluciones creadas para negocios que buscan vender y crecer en digital."
          />
        </Reveal>
        <Reveal delay={80} className="mt-10 grid items-stretch gap-6 lg:grid-cols-2">
          {homeContent.projects.map((project) => (
            <article
              key={project.name}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[#DFE7F0] bg-white shadow-[0_6px_24px_rgba(7,19,38,.07)] transition duration-200 hover:-translate-y-1 hover:border-[#16B9FF]/55 hover:shadow-[0_16px_36px_rgba(7,19,38,.12)]"
            >
              <div className="border-b border-[#173452] bg-[#071326] p-3 sm:p-5">
                <div className="relative aspect-[8/5] overflow-hidden rounded-xl shadow-[0_4px_14px_rgba(0,0,0,.18)]">
                  <Image
                    src={project.image}
                    alt={`Vista previa conceptual de ${project.name}`}
                    fill
                    sizes="(max-width: 1023px) calc(100vw - 48px), 560px"
                    className="object-cover transition-transform duration-200 group-hover:scale-[1.03]"
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <div className="flex flex-wrap items-center gap-3">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-bold ${project.status === "Demostración" ? "bg-[#EEFFC8] text-[#315700]" : "bg-[#E7F7FF] text-[#0078B5]"}`}
                  >
                    {project.status}
                  </span>
                  <span className="text-sm text-[#526176]">{project.type}</span>
                </div>
                <h3 className="mt-5 text-2xl font-bold text-[#071326]">{project.name}</h3>
                <p className="mt-1 font-semibold text-[#0078B5]">{project.category}</p>
                <p className="mt-4 leading-7 text-[#526176]">{project.description}</p>
                <dl className="mt-6 grid gap-4 border-y border-[#DFE7F0] py-5 text-sm">
                  <div>
                    <dt className="font-bold text-[#071326]">Objetivo</dt>
                    <dd className="mt-1 leading-6 text-[#526176]">{project.objective}</dd>
                  </div>
                  <div>
                    <dt className="font-bold text-[#071326]">Solución</dt>
                    <dd className="mt-1 leading-6 text-[#526176]">{project.solution}</dd>
                  </div>
                </dl>
                <div className="mt-5">
                  <p className="text-xs font-bold uppercase tracking-[.12em] text-[#526176]">
                    Tecnologías
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <li
                        key={technology}
                        className="rounded-full border border-[#CFEFFF] bg-[#F5FBFF] px-3 py-1 text-xs font-semibold text-[#0078B5]"
                      >
                        {technology}
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  type="button"
                  disabled
                  aria-disabled="true"
                  className="mt-7 min-h-11 self-start rounded-xl border border-[#DFE7F0] px-4 text-sm font-bold text-[#526176] opacity-75"
                >
                  Próximamente
                </button>
              </div>
            </article>
          ))}
        </Reveal>
      </Container>
    </Section>
  );
}
