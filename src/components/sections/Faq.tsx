"use client";

import { useState } from "react";
import { faqItems } from "@/content/es/faq";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/common/Reveal";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section id="preguntas">
      <Container>
        <Reveal>
          <SectionHeader
            title="Preguntas frecuentes"
            description="Resolvemos las dudas más comunes antes de iniciar un proyecto."
          />
        </Reveal>
        <Reveal
          delay={80}
          className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-2xl border border-[#DFE7F0]"
        >
          {faqItems.map(([question, answer], index) => {
            const expanded = open === index;
            const id = `faq-answer-${index}`;
            return (
              <div key={question} className="border-b border-[#DFE7F0] last:border-b-0">
                <h3>
                  <button
                    type="button"
                    className="flex min-h-16 w-full items-center justify-between gap-4 px-5 py-4 text-left font-bold transition-colors hover:bg-[#F5F8FC]"
                    aria-expanded={expanded}
                    aria-controls={id}
                    onClick={() => setOpen(expanded ? null : index)}
                  >
                    {question}
                    <span
                      className={`grid size-8 shrink-0 place-items-center rounded-full bg-[#E7F7FF] text-[#0078B5] transition-transform ${expanded ? "rotate-45" : ""}`}
                    >
                      <Icon name="arrow" size={17} className="rotate-90" />
                    </span>
                  </button>
                </h3>
                <div id={id} hidden={!expanded} className="px-5 pb-5 leading-7 text-[#526176]">
                  {answer}
                </div>
              </div>
            );
          })}
        </Reveal>
      </Container>
    </Section>
  );
}
