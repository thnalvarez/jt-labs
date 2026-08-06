import { ToastProvider } from "@/components/common/ToastProvider";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import { Faq } from "@/components/sections/Faq";
import { Hero } from "@/components/sections/Hero";
import {
  Contact,
  FinalCta,
  Industries,
  Process,
  Projects,
  Services,
  Technologies,
  Trust,
} from "@/components/sections/HomeSections";

export default function Home() {
  return (
    <ToastProvider>
      <a
        href="#contenido-principal"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-3"
      >
        Saltar al contenido principal
      </a>
      <Navbar />
      <main id="contenido-principal">
        <Hero />
        <Projects />
        <Services />
        <Industries />
        <Process />
        <Trust />
        <Technologies />
        <Faq />
        <Contact />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppButton className="fixed bottom-5 right-5 z-50 shadow-[0_12px_28px_rgba(146,230,0,.38)] sm:bottom-7 sm:right-7">
        WhatsApp
      </WhatsAppButton>
    </ToastProvider>
  );
}
