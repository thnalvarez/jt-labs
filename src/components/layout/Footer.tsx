import { BrandLogo } from "@/components/ui/BrandLogo";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { footerContent } from "@/content/es/footer";
import { navigationItems } from "@/content/es/navigation";
import { getWhatsAppUrl } from "@/utils/whatsapp";
import type { ReactNode } from "react";

const social = [
  process.env.NEXT_PUBLIC_INSTAGRAM_URL && ["Instagram", process.env.NEXT_PUBLIC_INSTAGRAM_URL],
  process.env.NEXT_PUBLIC_LINKEDIN_URL && ["LinkedIn", process.env.NEXT_PUBLIC_LINKEDIN_URL],
  process.env.NEXT_PUBLIC_GITHUB_URL && ["GitHub", process.env.NEXT_PUBLIC_GITHUB_URL],
].filter(Boolean) as [string, string][];

export function Footer() {
  const whatsapp = getWhatsAppUrl();
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
  return (
    <footer id="contacto" className="border-t border-white/10 bg-[#071326] py-14 text-white">
      <Container>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <BrandLogo width={130} height={44} sizes="130px" />
            <p className="mt-5 max-w-xs leading-7 text-[#A8B5C7]">{footerContent.slogan}</p>
            <p className="mt-3 text-sm text-[#A8B5C7]">{footerContent.laboratory}</p>
            {social.length > 0 && (
              <div className="mt-5 flex gap-4">
                {social.map(([name, url]) => (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-white transition-colors hover:text-[#A8FF00]"
                  >
                    {name}
                  </a>
                ))}
              </div>
            )}
          </div>
          <FooterColumn
            title="Navegación"
            items={navigationItems
              .filter((item) =>
                ["Inicio", "Servicios", "Proyectos", "Proceso", "Preguntas frecuentes"].includes(
                  item.label,
                ),
              )
              .map((item) => [item.label, item.href])}
          />
          <FooterColumn
            title="Servicios"
            items={footerContent.services.map((service) => [service, "#servicios"])}
          />
          <div>
            <h2 className="font-bold">Contacto</h2>
            <ul className="mt-5 space-y-4 text-sm text-[#A8B5C7]">
              <ContactItem icon="message">
                {whatsapp ? (
                  <a className="hover:text-[#A8FF00]" href={whatsapp}>
                    WhatsApp
                  </a>
                ) : (
                  "WhatsApp próximamente"
                )}
              </ContactItem>
              <ContactItem icon="code">
                {email ? (
                  <a className="hover:text-[#A8FF00]" href={`mailto:${email}`}>
                    {email}
                  </a>
                ) : (
                  "Correo próximamente"
                )}
              </ContactItem>
              <ContactItem icon="globe">{footerContent.location}</ContactItem>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-white/15 pt-6 text-sm text-[#A8B5C7] sm:flex-row sm:items-center sm:justify-between">
          <p>{footerContent.closing}</p>
          <p>{footerContent.copyright}</p>
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
            <a className="transition-colors hover:text-[#A8FF00]" href={href}>
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
  icon: "message" | "code" | "globe";
  children: ReactNode;
}) {
  return (
    <li className="flex items-center gap-3">
      <Icon name={icon} size={17} className="shrink-0 text-[#16B9FF]" />
      <span>{children}</span>
    </li>
  );
}
