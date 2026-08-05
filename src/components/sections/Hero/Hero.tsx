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
      className="hero-pattern relative isolate overflow-hidden bg-[#071529] py-10 sm:py-12 min-[900px]:min-h-[640px] min-[900px]:py-[clamp(64px,5vw,80px)]"
    >
      <div aria-hidden="true" className="hero-grid absolute inset-0" />
      <div
        aria-hidden="true"
        className="absolute -right-32 -top-36 size-[34rem] rounded-full bg-[#16B9FF]/10 blur-3xl sm:-right-20"
      />
      <Container className={`${heroStyles.content} hero-content`}>
        <div className="hero-enter max-w-[680px] min-[900px]:w-[48%]">
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
              className="!border-white/70 !bg-transparent !text-white shadow-[0_6px_18px_rgba(0,0,0,.14)] transition-all duration-300 hover:-translate-y-1 hover:!border-white hover:!bg-white/12 hover:!text-white hover:shadow-[0_12px_24px_rgba(0,0,0,.22)]"
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
      </Container>
      <div className={`${heroStyles.visual} hero-enter hero-enter--visual`}>
        <Image
          src="/images/hero/hero-workspace.jpg"
          alt="Espacio de trabajo de JT Labs con un notebook"
          fill
          priority
          quality={90}
          sizes="(max-width: 899px) calc(100vw - 40px), 60vw"
          className="object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 hidden bg-[linear-gradient(90deg,#071529_0%,rgba(7,21,41,.98)_28%,rgba(7,21,41,.88)_42%,rgba(7,21,41,.52)_58%,rgba(7,21,41,.12)_78%,transparent_100%)] min-[900px]:block"
        />
      </div>
    </section>
  );
}
