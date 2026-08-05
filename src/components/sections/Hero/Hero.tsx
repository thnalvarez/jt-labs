import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { homeContent } from "@/content/es/home";
import { heroStyles } from "./Hero.styles";

export function Hero() {
  return (
    <section
      id="inicio"
      className="hero-pattern relative isolate overflow-hidden bg-[linear-gradient(135deg,#fff_0%,#f9fcff_50%,#fff_100%)] py-24 sm:py-28 lg:py-36"
    >
      <div aria-hidden="true" className="hero-grid absolute inset-0" />
      <div
        aria-hidden="true"
        className="absolute -right-32 -top-36 size-[34rem] rounded-full bg-[#16B9FF]/12 blur-3xl sm:-right-20"
      />
      <Container className={`${heroStyles.grid} max-w-[1400px]`}>
        <div className="hero-enter">
          <p className="mb-6 text-sm font-bold uppercase tracking-[.18em] text-[#0078B5]">
            Diseño + tecnología con propósito
          </p>
          <h1 className={heroStyles.title}>
            Desarrollamos <span className="text-[#4D8700]">experiencias digitales</span> que
            impulsan negocios.
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-[#526176] sm:text-xl sm:leading-9">
            {homeContent.hero.description}
          </p>
          <div className="hero-enter hero-enter--late mt-9 flex flex-col gap-3 sm:flex-row">
            <Button
              href="#contacto"
              size="lg"
              className="shadow-[0_10px_24px_rgba(146,230,0,.28)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_30px_rgba(146,230,0,.36)]"
            >
              Solicitar una cotización <Icon name="arrow" size={18} className="button-arrow" />
            </Button>
            <Button
              href="#proyectos"
              size="lg"
              variant="outline"
              className="border-[#B9C8D8] bg-white/70 shadow-[0_6px_18px_rgba(7,19,38,.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(7,19,38,.12)]"
            >
              Ver proyectos
            </Button>
          </div>
          <ul
            aria-label="Compromisos de JT Labs"
            className="mt-9 flex flex-wrap items-center gap-y-2 text-sm font-semibold tracking-[-.01em] text-[#526176]"
          >
            {homeContent.hero.trust.map((item, index) => (
              <li key={item} className="flex items-center">
                <span>{item}</span>
                {index < homeContent.hero.trust.length - 1 && (
                  <span aria-hidden="true" className="mx-3 text-[#9AA9BB]">
                    •
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className={`${heroStyles.visual} hero-enter hero-enter--visual`}>
          <div
            aria-hidden="true"
            className="absolute -right-12 -top-12 size-48 rounded-full bg-[#16B9FF]/25 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-20 left-1/4 size-56 rounded-full bg-[#A8FF00]/18 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute inset-y-10 -left-px w-1 rounded-full bg-[#A8FF00]"
          />
          <div className="hero-device-float relative overflow-hidden rounded-[1.35rem] border border-white/25 bg-[#0B1A30] p-4 shadow-[0_28px_60px_rgba(3,11,24,.36)] ring-1 ring-black/10 sm:p-5">
            <div className="mb-5 flex items-center gap-2">
              <span className="size-2 rounded-full bg-[#A8FF00]" />
              <span className="size-2 rounded-full bg-white/30" />
              <span className="size-2 rounded-full bg-white/30" />
              <span className="ml-auto h-1.5 w-16 rounded-full bg-white/10" />
            </div>
            <div className="relative grid min-h-72 place-items-center overflow-hidden rounded-xl border border-white/10 bg-[linear-gradient(135deg,#071326,#12345a)] p-8">
              <div className="relative text-center">
                <BrandLogo width={180} height={60} sizes="180px" />
                <div className="mt-7 space-y-2 text-left font-mono text-xs leading-5 text-[#A8B5C7]">
                  <p>
                    <span className="text-[#A8FF00]">const</span> growth = true;
                  </p>
                  <p>
                    <span className="text-[#16B9FF]">build</span>(experience);
                  </p>
                  <p className="text-white/50">{"// rápido, claro, adaptable"}</p>
                </div>
              </div>
            </div>
          </div>
          <Metric
            text="Performance"
            value="Optimizada"
            position="-left-2 bottom-9"
            animation="float-one"
          />
          <Metric
            text="Responsive"
            value="Mobile first"
            position="-right-2 top-16"
            animation="float-two"
          />
          <Metric
            text="SEO"
            value="Preparado"
            position="right-8 -bottom-4"
            animation="float-three"
            optional
          />
        </div>
      </Container>
    </section>
  );
}

function Metric({
  text,
  value,
  position,
  animation,
  optional = false,
}: {
  text: string;
  value: string;
  position: string;
  animation: string;
  optional?: boolean;
}) {
  return (
    <div
      className={`absolute ${position} ${optional ? "hidden lg:block" : "hidden sm:block"} ${animation} rounded-2xl border border-white/70 bg-white/75 px-4 py-3 shadow-[0_14px_32px_rgba(7,19,38,.14)] backdrop-blur-md`}
    >
      <p className="text-xs font-bold text-[#071326]">{text}</p>
      <p className="mt-1 text-xs text-[#526176]">{value}</p>
    </div>
  );
}
