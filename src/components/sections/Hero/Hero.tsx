import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import { homeContent } from "@/content/es/home";
import { heroStyles } from "./Hero.styles";

export function Hero() {
  return (
    <section
      id="inicio"
      className="hero-pattern relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
    >
      <Container className={heroStyles.grid}>
        <div className="hero-enter">
          <p className="mb-5 text-sm font-bold uppercase tracking-[.16em] text-[#0078B5]">
            Diseño + tecnología con propósito
          </p>
          <h1 className={heroStyles.title}>
            Desarrollamos <span className="text-[#4D8700]">experiencias digitales</span> que
            impulsan negocios.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-[#526176]">
            {homeContent.hero.description}
          </p>
          <div className="hero-enter hero-enter--late mt-8 flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton size="lg">
              Cotiza por WhatsApp <Icon name="arrow" size={18} className="button-arrow" />
            </WhatsAppButton>
            <Button href="#proyectos" size="lg" variant="outline">
              Ver nuestros proyectos
            </Button>
          </div>
          <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-[#526176]">
            {homeContent.hero.trust.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <Icon name="check" size={18} className="text-[#4D8700]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className={`${heroStyles.visual} hero-enter hero-enter--visual`}>
          <div className="absolute -right-12 -top-12 size-48 rounded-full bg-[#16B9FF]/20 blur-3xl" />
          <div className="absolute inset-y-10 -left-px w-1 rounded-full bg-[#A8FF00]" />
          <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-[#0B1A30] p-4 shadow-[0_24px_55px_rgba(7,19,38,.28)] sm:p-5">
            <div className="mb-5 flex items-center gap-2">
              <span className="size-2 rounded-full bg-[#A8FF00]" />
              <span className="size-2 rounded-full bg-white/30" />
              <span className="size-2 rounded-full bg-white/30" />
              <span className="ml-auto h-1.5 w-16 rounded-full bg-white/10" />
            </div>
            <div className="relative grid min-h-72 place-items-center overflow-hidden rounded-xl border border-white/10 bg-[linear-gradient(135deg,#071326,#12345a)] p-8 before:absolute before:inset-0 before:bg-[linear-gradient(120deg,transparent_30%,rgba(255,255,255,.09)_48%,transparent_62%)] before:translate-x-[-100%] before:animate-[screen-shine_7s_ease-in-out_infinite]">
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
      className={`absolute ${position} ${optional ? "hidden lg:block" : "hidden sm:block"} ${animation} rounded-xl border border-white/50 bg-white/88 px-4 py-3 shadow-[0_10px_25px_rgba(7,19,38,.12)] backdrop-blur`}
    >
      <p className="text-xs font-bold text-[#071326]">{text}</p>
      <p className="mt-1 text-xs text-[#526176]">{value}</p>
    </div>
  );
}
