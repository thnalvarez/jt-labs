import { Reveal } from "@/components/common/Reveal";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
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
        </Reveal>
        <Reveal
          delay={80}
          className="mx-auto mt-10 max-w-3xl rounded-3xl border border-[#DFE7F0] bg-white p-6 shadow-[0_8px_28px_rgba(7,19,38,.06)] sm:p-8"
        >
          <ContactForm />
        </Reveal>
      </Container>
    </Section>
  );
}
