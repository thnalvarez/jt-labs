import { Reveal } from "@/components/common/Reveal";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import { ContactForm } from "./Contact";

export function Contact() {
  return (
    <Section id="contacto" className="bg-[#F5F8FC]">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="Solicitud de cotización"
            title="Cuéntanos sobre tu proyecto"
            description="Completa la información inicial y te contactaremos para entender tu negocio, objetivos y necesidades."
          />
          <p className="mt-4 text-sm font-semibold text-[#526176]">Atendemos proyectos en España y América Latina, incluido Brasil.</p>
        </Reveal>
        <Reveal
          delay={80}
          className="mx-auto mt-8 max-w-3xl rounded-3xl border border-[#DFE7F0] bg-white p-6 shadow-[0_8px_28px_rgba(7,19,38,.06)] sm:p-8"
        >
          <div className="mb-8 rounded-xl bg-[#F5F8FC] p-4 text-sm leading-6 text-[#526176] sm:flex sm:items-center sm:justify-between sm:gap-4">
            <p>¿Prefieres hablar ahora? Escríbenos por WhatsApp y te orientamos sin compromiso.</p>
            <WhatsAppButton variant="link" className="mt-3 shrink-0 sm:mt-0">
              Hablar por WhatsApp
            </WhatsAppButton>
          </div>
          <ContactForm />
        </Reveal>
      </Container>
    </Section>
  );
}
