"use client";

import { useEffect, useRef, useState } from "react";
import { navigationItems } from "@/content/es/navigation";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import { navbarStyles } from "./Navbar.styles";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#inicio");
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateScroll = () => setScrolled(window.scrollY > 8);
    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  useEffect(() => {
    const sections = navigationItems
      .map(({ href }) => document.querySelector(href))
      .filter((section): section is Element => Boolean(section));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: [0.05, 0.3] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    const panel = panelRef.current;
    const toggle = toggleRef.current;
    document.body.style.overflow = "hidden";
    panel?.querySelector<HTMLAnchorElement>("a")?.focus();
    const keydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
      if (event.key !== "Tab" || !panel) return;
      const focusable = Array.from(
        panel.querySelectorAll<HTMLElement>("a, button:not([disabled])"),
      );
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable.at(-1)!;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      }
      if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", keydown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", keydown);
      toggle?.focus();
    };
  }, [open]);

  return (
    <header className={`${navbarStyles.root} ${scrolled ? navbarStyles.scrolled : ""}`}>
      <Container className={navbarStyles.inner}>
        <a href="#inicio" aria-label="Ir al inicio de JT Labs">
          <BrandLogo width={112} height={38} priority sizes="112px" />
        </a>
        <nav aria-label="Navegación principal" className={navbarStyles.links}>
          {navigationItems.map((item) => (
            <a
              key={item.href}
              className={`nav-link ${active === item.href ? "nav-link--active" : ""}`}
              href={item.href}
              aria-current={active === item.href ? "page" : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:block">
          <WhatsAppButton size="sm">
            Cotiza por WhatsApp <Icon name="arrow" size={15} className="button-arrow" />
          </WhatsAppButton>
        </div>
        <button
          ref={toggleRef}
          type="button"
          className="grid size-11 place-items-center rounded-xl text-[#071326] transition hover:bg-[#F5F8FC] lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen(!open)}
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
        {open && (
          <div ref={panelRef} id="mobile-navigation" className={navbarStyles.mobile}>
            <nav aria-label="Navegación móvil" className="flex flex-col divide-y divide-[#DFE7F0]">
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-4 font-semibold text-[#071326] hover:bg-[#F5F8FC]"
                >
                  {item.label}
                </a>
              ))}
              <WhatsAppButton fullWidth className="mt-5">
                Cotiza por WhatsApp <Icon name="arrow" size={16} className="button-arrow" />
              </WhatsAppButton>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}
