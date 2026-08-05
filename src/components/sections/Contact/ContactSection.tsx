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
        </Reveal>
        <Reveal delay={50}>
          <aside className="mt-8 rounded-2xl bg-[#071326] p-5 text-white sm:flex sm:items-center sm:justify-between sm:gap-6">
            <div>
              <p className="text-sm font-bold uppercase tracking-[.14em] text-[#55CFFF]">
                Experiencia aplicada
              </p>
              <p className="mt-2 text-sm leading-6 text-[#C2D0E0]">
                Soluciones digitales pensadas para negocios locales que quieren vender y crecer.
              </p>
            </div>
            <ul className="mt-4 flex flex-wrap gap-2 text-xs font-bold sm:mt-0 sm:justify-end">
              <li className="rounded-full bg-white/10 px-3 py-2">Tasty Burger · Proyecto modelo</li>
              <li className="rounded-full bg-white/10 px-3 py-2">Taka no Copão · En desarrollo</li>
            </ul>
          </aside>
        </Reveal>
        <Reveal
          delay={80}
          className="mx-auto mt-10 max-w-3xl rounded-3xl border border-[#DFE7F0] bg-white p-6 shadow-[0_8px_28px_rgba(7,19,38,.06)] sm:p-8"
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
