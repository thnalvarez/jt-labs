import { Reveal } from "@/components/common/Reveal";
import { Container } from "@/components/ui/Container";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { homeContent } from "@/content/es/home";
const icons: IconName[] = [
  "store",
  "shopping",
  "heart",
  "dumbbell",
  "building",
  "briefcase",
  "shopping",
  "spark",
];
export function Industries() {
  return (
    <Section className="relative overflow-hidden bg-[#071326] before:absolute before:inset-0 before:opacity-40 before:[background-image:radial-gradient(#16B9FF_1px,transparent_1px)] before:[background-size:28px_28px]">
      <Container className="relative">
        <Reveal>
          <SectionHeader
            title="Empresas que atendemos"
            description="Soluciones claras para negocios locales que quieren profesionalizar su presencia digital."
            dark
          />
        </Reveal>
        <Reveal delay={80} className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {homeContent.industries.map((name, index) => (
            <article
              key={name}
              className="group min-h-36 rounded-2xl border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,.08),rgba(255,255,255,.025))] p-5 transition duration-200 hover:-translate-y-1 hover:border-[#16B9FF]/70 hover:bg-white/10"
            >
              <Icon
                name={icons[index]}
                size={25}
                className="mb-7 text-[#A8FF00] transition-transform duration-200 group-hover:scale-110"
              />
              <h3 className="text-sm font-bold leading-6 text-white">{name}</h3>
            </article>
          ))}
        </Reveal>
      </Container>
    </Section>
  );
}
