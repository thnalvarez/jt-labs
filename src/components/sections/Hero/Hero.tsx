"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { homeContent } from "@/content/es/home";
import { heroStyles } from "./Hero.styles";

const heroSlides = [
  {
    eyebrow: "Sitios web que generan confianza",
    title: "Creamos",
    highlight: "sitios web",
    suffix: "que impulsan negocios.",
    description:
      "Presenta tu negocio con una experiencia profesional, clara y preparada para captar oportunidades.",
    image: "/images/hero/hero-development.webp",
    alt: "Espacio de trabajo de JT Labs para desarrollo de sitios web",
    mobileObjectPosition: "object-[66%_center]",
  },
  {
    eyebrow: "E-commerce listo para vender",
    title: "Lanzamos",
    highlight: "tiendas online",
    suffix: "para hacer crecer tus ventas.",
    description:
      "Catálogo, carrito y pedidos directos para que vendas tus productos con una experiencia simple y rápida.",
    image: "/images/hero/hero-delivery.webp",
    alt: "Preparación de pedidos para una tienda online",
    mobileObjectPosition: "object-[72%_center]",
  },
  {
    eyebrow: "Landing pages para convertir",
    title: "Diseñamos",
    highlight: "landing pages",
    suffix: "que convierten visitas en oportunidades.",
    description:
      "Páginas enfocadas en campañas, captación de leads y acciones claras para transformar interés en contacto.",
    image: "/images/hero/hero-ecommerce.webp",
    alt: "Diseño de una landing page para e-commerce",
    mobileObjectPosition: "object-[68%_center]",
  },
];

export function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const slide = heroSlides[activeSlide];

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);
    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const intervalId = window.setInterval(() => {
      setActiveSlide((currentSlide) => (currentSlide + 1) % heroSlides.length);
    }, 10_000);
    return () => window.clearInterval(intervalId);
  }, [prefersReducedMotion]);

  const showPreviousSlide = () => {
    setActiveSlide((currentSlide) => (currentSlide - 1 + heroSlides.length) % heroSlides.length);
  };

  const showNextSlide = () => {
    setActiveSlide((currentSlide) => (currentSlide + 1) % heroSlides.length);
  };

  return (
    <section
      id="inicio"
      className="hero-pattern relative isolate min-h-[720px] overflow-hidden bg-[#081525] py-10 sm:py-12 min-[900px]:min-h-[640px] min-[900px]:py-[clamp(64px,5vw,80px)]"
    >
      <div aria-hidden="true" className="hero-grid absolute inset-0" />
      <div
        aria-hidden="true"
        className="absolute -right-32 -top-36 size-[34rem] rounded-full bg-[#16B9FF]/10 blur-3xl sm:-right-20"
      />
      <Container className={`${heroStyles.content} hero-content`}>
        <div key={slide.image} className="hero-enter max-w-[680px] min-[900px]:w-[48%]">
          <p className="mb-5 text-sm font-bold uppercase tracking-[.18em] text-[#55CFFF]">
            {slide.eyebrow}
          </p>
          <h1 className={heroStyles.title}>
            {slide.title} <span className="text-[#4D8700]">{slide.highlight}</span> {slide.suffix}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-[#C2D0E0] sm:text-xl sm:leading-9">
            {slide.description}
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
        <div className="mt-8 hidden items-center gap-3 min-[900px]:flex">
          <button
            type="button"
            aria-label="Ver servicio anterior"
            onClick={showPreviousSlide}
            className="grid size-10 place-items-center rounded-full border border-white/30 text-white transition-colors hover:border-white hover:bg-white/10 focus-visible:border-white focus-visible:bg-white/10"
          >
            <Icon name="arrow" size={18} className="-rotate-180" />
          </button>
          <div className="flex gap-2" aria-label={`Servicio ${activeSlide + 1} de ${heroSlides.length}`}>
            {heroSlides.map((item, index) => (
              <button
                key={item.image}
                type="button"
                aria-label={`Ver ${item.highlight}`}
                aria-current={index === activeSlide ? "true" : undefined}
                onClick={() => setActiveSlide(index)}
                className={`h-2 rounded-full transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#55CFFF] ${
                  index === activeSlide ? "w-8 bg-[#A8FF00]" : "w-2 bg-white/45 hover:bg-white"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            aria-label="Ver siguiente servicio"
            onClick={showNextSlide}
            className="grid size-10 place-items-center rounded-full border border-white/30 text-white transition-colors hover:border-white hover:bg-white/10 focus-visible:border-white focus-visible:bg-white/10"
          >
            <Icon name="arrow" size={18} />
          </button>
        </div>
      </Container>
      <div className={`${heroStyles.visual} hero-enter hero-enter--visual`}>
        <div aria-live="polite" className="sr-only">
          {slide.alt}
        </div>
        {heroSlides.map((item, index) => (
          <Image
            key={item.image}
            src={item.image}
            alt={index === activeSlide ? item.alt : ""}
            fill
            priority={index === 0}
            quality={90}
            sizes="(max-width: 899px) 100vw, 60vw"
            className={`object-cover ${item.mobileObjectPosition} transition-opacity duration-1000 ease-in-out min-[900px]:object-center ${
              index === activeSlide ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,21,41,.96)_0%,rgba(7,21,41,.9)_36%,rgba(7,21,41,.72)_62%,rgba(7,21,41,.42)_100%)] min-[900px]:bg-[linear-gradient(90deg,#081525_0%,rgba(8,21,37,.98)_28%,rgba(8,21,37,.88)_42%,rgba(8,21,37,.52)_58%,rgba(8,21,37,.12)_78%,transparent_100%)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 hidden h-28 bg-[linear-gradient(180deg,#081525_0%,rgba(8,21,37,.84)_36%,transparent_100%)] min-[900px]:block"
        />
      </div>
    </section>
  );
}
