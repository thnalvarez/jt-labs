import { Reveal } from "@/components/common/Reveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";
export function FinalCta() {
  return (
    <Section className="relative overflow-hidden bg-[#071326] before:absolute before:inset-0 before:opacity-30 before:[background-image:radial-gradient(#16B9FF_1px,transparent_1px)] before:[background-size:24px_24px]">
      <Container className="relative">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-[radial-gradient(circle_at_50%_0%,rgba(22,185,255,.3),transparent_48%),linear-gradient(125deg,#0B1A30,#075b8b)] px-6 py-14 text-center shadow-2xl sm:px-12 sm:py-16">
            <div className="mx-auto h-1 w-16 rounded-full bg-[#A8FF00]" />
            <p className="mt-6 text-sm font-bold uppercase tracking-[.16em] text-[#A8FF00]">
              Conversemos
            </p>
            <h2 className="mx-auto mt-4 max-w-3xl text-balance text-3xl font-bold tracking-tight text-white sm:text-5xl">
              ¿Listo para llevar tu negocio al siguiente nivel?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#D5E0EC]">
              Hablemos de tu proyecto y construyamos una solución digital pensada para generar
              resultados.
            </p>
            <div className="mt-8 flex flex-col items-center">
              <Button href="#contacto" size="lg">
                Solicitar una cotización <Icon name="arrow" size={18} className="button-arrow" />
              </Button>
              <p className="mt-4 text-sm text-[#D5E0EC]">
                Cuéntanos sobre tu idea para entender qué solución puede aportar más valor.
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
