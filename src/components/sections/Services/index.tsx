import { Reveal } from "@/components/common/Reveal";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { homeContent } from "@/content/es/home";
export function Services() {
  return (
    <Section id="servicios">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="Nuestros servicios"
            title="Soluciones digitales diseñadas para generar resultados."
          />
        </Reveal>
        <Reveal
          delay={80}
          className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {homeContent.services.map((service, index) => (
            <article
              key={service.title}
              className="group flex min-h-80 flex-col rounded-2xl border border-[#DFE7F0] bg-[linear-gradient(145deg,#fff,#f8fbff)] p-6 shadow-[0_4px_18px_rgba(7,19,38,.05)] transition duration-200 hover:-translate-y-1 hover:border-[#16B9FF]/55 hover:shadow-[0_14px_30px_rgba(7,19,38,.11)]"
            >
              <div
                className={`grid size-12 place-items-center rounded-xl ${index % 2 ? "bg-[#E7F7FF] text-[#0078B5]" : "bg-[#EEFFC8] text-[#315700]"}`}
              >
                <Icon name={service.icon} />
              </div>
              <h3 className="mt-6 text-xl font-bold leading-7 text-[#071326]">{service.title}</h3>
              <p className="mt-3 leading-7 text-[#526176]">{service.description}</p>
              <a
                href="#contacto"
                className="mt-auto inline-flex min-h-11 items-center gap-2 pt-6 text-sm font-bold text-[#0078B5] underline-offset-4 hover:underline"
              >
                Conocer más{" "}
                <Icon
                  name="arrow"
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </article>
          ))}
        </Reveal>
      </Container>
    </Section>
  );
}
