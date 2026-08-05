import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { homeContent } from "@/content/es/home";
import { heroStyles } from "./Hero.styles";

export function Hero() {
  return (
    <section
      id="inicio"
      className="hero-pattern relative isolate overflow-hidden bg-[radial-gradient(circle_at_75%_35%,rgba(0,183,255,.18),transparent_45%),linear-gradient(180deg,#081525_0%,#0B1830_100%)] py-12 sm:py-14 lg:py-10"
    >
      <div aria-hidden="true" className="hero-grid absolute inset-0" />
      <div
        aria-hidden="true"
        className="absolute -right-32 -top-36 size-[34rem] rounded-full bg-[#16B9FF]/10 blur-3xl sm:-right-20"
      />
      <Container className={`${heroStyles.grid} max-w-[1400px]`}>
        <div className="hero-enter">
          <p className="mb-5 text-sm font-bold uppercase tracking-[.18em] text-[#55CFFF]">
            Diseño + tecnología con propósito
          </p>
          <h1 className={heroStyles.title}>
            Desarrollamos <span className="text-[#4D8700]">experiencias digitales</span> que
            impulsan negocios.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-[#C2D0E0] sm:text-xl sm:leading-9">
            {homeContent.hero.description}
          </p>
          <div className="hero-enter hero-enter--late mt-9 flex flex-col gap-3 sm:flex-row">
            <Button
              href="#contacto"
              size="lg"
              className="shadow-[0_12px_28px_rgba(146,230,0,.32)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_34px_rgba(146,230,0,.42)]"
            >
              Solicitar una cotización <Icon name="arrow" size={18} className="button-arrow" />
            </Button>
            <Button
              href="#proyectos"
              size="lg"
              variant="outline"
              className="border-white/35 bg-white/5 text-white shadow-[0_6px_18px_rgba(0,0,0,.14)] transition-all duration-300 hover:-translate-y-1 hover:border-white/60 hover:bg-white/12 hover:text-white hover:shadow-[0_12px_24px_rgba(0,0,0,.22)]"
            >
              Ver proyectos
            </Button>
          </div>
          <ul
            aria-label="Compromisos de JT Labs"
            className="mt-7 flex flex-wrap items-center gap-y-2 text-sm font-semibold tracking-[-.01em] text-[#C2D0E0]"
          >
            {homeContent.hero.trust.map((item, index) => (
              <li key={item} className="flex items-center">
                <span>{item}</span>
                {index < homeContent.hero.trust.length - 1 && (
                  <span aria-hidden="true" className="mx-3 text-[#7F96B0]">
                    •
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className={`${heroStyles.visual} hero-enter hero-enter--visual`}>
          <div className="hero-device-float relative aspect-[16/10] min-h-[280px] overflow-hidden rounded-[24px] border border-white/15 bg-[#0B1830] shadow-[0_32px_80px_rgba(0,0,0,.45)] transition-transform duration-500 group-hover:scale-[1.01] sm:min-h-[380px] lg:min-h-[460px]">
            <Image
              src="/images/hero/hero-workspace.jpg"
              alt="Espacio de trabajo de JT Labs con un notebook"
              fill
              priority
              quality={100}
              sizes="(max-width: 1023px) calc(100vw - 40px), 55vw"
              className="object-contain"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
