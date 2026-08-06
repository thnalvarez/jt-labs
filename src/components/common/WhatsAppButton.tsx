"use client";
import { Button } from "@/components/ui/Button";
import { usePathname } from "next/navigation";
import { useToast } from "./ToastProvider";
import { getWhatsAppUrl } from "@/utils/whatsapp";
import { trackEvent } from "@/utils/analytics";
import type { ReactNode } from "react";
type Props = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  className?: string;
  source?: string;
};
export function WhatsAppButton({ source, ...props }: Props) {
  const { showToast } = useToast();
  const pathname = usePathname();
  const campaignSource = source || (pathname === "/" ? undefined : pathname.slice(1));
  const url = getWhatsAppUrl();
  if (url)
    return (
      <Button {...props} href={url} target="_blank" onClick={() => trackEvent("whatsapp_click", campaignSource ? { source: campaignSource } : undefined)} />
    );
  return (
    <Button
      {...props}
      onClick={() => showToast("El canal de WhatsApp estará disponible próximamente.")}
    />
  );
}
