import { contact } from "@/config/contact";

export const whatsappMessage = "Hola, quiero solicitar una cotización con JT Labs.";
export function getWhatsAppUrl(message = whatsappMessage) {
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
