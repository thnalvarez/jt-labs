import { BrandLogo } from "@/components/ui/BrandLogo";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { footerContent } from "@/content/es/footer";
import { navigationItems } from "@/content/es/navigation";
import { contact } from "@/config/contact";
import { getWhatsAppUrl } from "@/utils/whatsapp";
import type { ReactNode } from "react";

const social = [
  ["TikTok: @agenciajtlabs", contact.tiktokUrl, "tiktok"],
  process.env.NEXT_PUBLIC_INSTAGRAM_URL && [
    "Instagram",
    process.env.NEXT_PUBLIC_INSTAGRAM_URL,
    "globe",
  ],
  process.env.NEXT_PUBLIC_LINKEDIN_URL && [
    "LinkedIn",
    process.env.NEXT_PUBLIC_LINKEDIN_URL,
    "globe",
  ],
  process.env.NEXT_PUBLIC_GITHUB_URL && ["GitHub", process.env.NEXT_PUBLIC_GITHUB_URL, "code"],
].filter(Boolean) as [string, string, "tiktok" | "globe" | "code"][];

const footerLinkClass =
  "inline-flex min-h-11 items-center text-sm font-semibold transition-colors hover:text-[#A8FF00]";

export function Footer({ homePath = "" }: { homePath?: string }) {
  const whatsapp = getWhatsAppUrl();
  return (
    <footer className="border-t border-white/10 bg-[#071326] py-14 text-white">
      <Container>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <BrandLogo width={130} height={44} sizes="130px" />
            <p className="mt-5 max-w-xs leading-7 text-[#A8B5C7]">{footerContent.slogan}</p>
            <p className="mt-3 text-sm text-[#A8B5C7]">{footerContent.laboratory}</p>
            <div className="mt-5 flex gap-4">
              {social.map(([name, url, icon]) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${footerLinkClass} gap-2 text-white`}
                >
                  <Icon name={icon} size={17} />
                  {name}
                </a>
              ))}
            </div>
          </div>
          <FooterColumn
            title="Navegación"
            items={navigationItems
              .filter((item) =>
                ["Inicio", "Servicios", "Proyectos", "Proceso", "Preguntas frecuentes"].includes(
                  item.label,
                ),
              )
              .map((item) => [item.label, `${homePath}${item.href}`])}
          />
          <FooterColumn
            title="Servicios"
            items={footerContent.services.map((service) => [service, `${homePath}#servicios`])}
          />
          <div>
            <h2 className="font-bold">Contacto</h2>
            <ul className="mt-5 space-y-4 text-sm text-[#A8B5C7]">
              <ContactItem icon="whatsapp">
                <a className={footerLinkClass} href={whatsapp}>
                  WhatsApp: {contact.whatsappLabel}
                </a>
              </ContactItem>
              <ContactItem icon="mail">
                <a className={footerLinkClass} href={`mailto:${contact.email}`}>
                  Correo: {contact.email}
                </a>
              </ContactItem>
              <ContactItem icon="globe">{footerContent.location}</ContactItem>
              <ContactItem icon="message">
                <a className={footerLinkClass} href={`${homePath}#contacto`}>
                  Solicitar cotización
                </a>
              </ContactItem>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-white/15 pt-6 text-sm text-[#A8B5C7] sm:flex-row sm:items-center sm:justify-between">
          <p>{footerContent.closing}</p>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <Link href="/politica-de-privacidad" className={footerLinkClass}>
              Privacidad
            </Link>
            <span>jtlabs.online</span>
            <p>{footerContent.copyright}</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: readonly (readonly [string, string])[];
}) {
  return (
    <div>
      <h2 className="font-bold">{title}</h2>
      <ul className="mt-5 space-y-3 text-sm text-[#A8B5C7]">
        {items.map(([label, href]) => (
          <li key={label}>
            <a className={footerLinkClass} href={href}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
function ContactItem({
  icon,
  children,
}: {
  icon: "message" | "whatsapp" | "mail" | "globe";
  children: ReactNode;
}) {
  return (
    <li className="flex items-center gap-3">
      <Icon name={icon} size={17} className="shrink-0 text-[#16B9FF]" />
      <span>{children}</span>
    </li>
  );
}
