export const whatsappMessage="Hola, quiero solicitar una cotización con JT Labs.";
export function getWhatsAppUrl(){const number=process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g,""); return number?`https://wa.me/${number}?text=${encodeURIComponent(whatsappMessage)}`:null;}
