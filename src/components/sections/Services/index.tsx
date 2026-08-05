import { Reveal } from "@/components/common/Reveal";
import { ServiceInterestLink } from "@/components/common/ServiceInterestLink";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { homeContent } from "@/content/es/home";

export function Services() {
  const primaryServices = homeContent.services.slice(0, 4);
  const complementaryServices = homeContent.services.slice(4);

  return (
    <Section id="servicios">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="Soluciones comerciales"
            title="Soluciones para tu negocio"
            description="Tecnología y diseño aplicados a necesidades concretas: vender, recibir pedidos, presentar tu empresa y captar oportunidades."
          />
        </Reveal>
        <Reveal delay={80} className="mt-10 grid gap-5 md:grid-cols-2">
          {primaryServices.map((service, index) => (
            <article
              key={service.title}
              className="group flex flex-col rounded-3xl border border-[#DFE7F0] bg-[linear-gradient(145deg,#fff,#f8fbff)] p-6 shadow-[0_4px_18px_rgba(7,19,38,.05)] transition duration-200 hover:-translate-y-1 hover:border-[#16B9FF]/55 hover:shadow-[0_14px_30px_rgba(7,19,38,.11)] sm:p-7"
            >
              <div
                className={`grid size-12 place-items-center rounded-xl ${index % 2 ? "bg-[#E7F7FF] text-[#0078B5]" : "bg-[#EEFFC8] text-[#315700]"}`}
              >
                <Icon name={service.icon} />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-[#071326]">{service.title}</h3>
              <p className="mt-3 max-w-xl leading-7 text-[#526176]">{service.description}</p>
              <ul className="mt-6 grid gap-2 text-sm leading-6 text-[#526176] sm:grid-cols-2">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-2">
                    <Icon name="check" size={16} className="mt-1 shrink-0 text-[#4D8700]" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <ServiceInterestLink
                service={service.title}
                className="mt-7 inline-flex min-h-11 items-center gap-2 self-start text-sm font-bold text-[#0078B5] underline-offset-4 hover:underline"
              >
                Consultar esta solución <Icon name="arrow" size={16} className="button-arrow" />
              </ServiceInterestLink>
            </article>
          ))}
        </Reveal>
        <Reveal
          delay={120}
          className="mt-8 rounded-3xl border border-[#DFE7F0] bg-[#F5F8FC] p-6 sm:p-7"
        >
          <p className="text-sm font-bold uppercase tracking-[.14em] text-[#0078B5]">
            Servicios complementarios
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {complementaryServices.map((service) => (
              <article key={service.title} className="rounded-2xl border border-white bg-white p-5">
                <Icon name={service.icon} size={22} className="text-[#0078B5]" />
                <h3 className="mt-4 font-bold text-[#071326]">{service.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#526176]">{service.description}</p>
                <ServiceInterestLink
                  service={service.title}
                  className="mt-4 inline-flex text-sm font-bold text-[#0078B5] hover:underline"
                >
                  Consultar
                </ServiceInterestLink>
              </article>
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
