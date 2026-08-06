const formatPhoneNumber = (value: string) => value.replace(/\D/g, "");

export const contact = {
  email: "contacto@jtlabs.online",
  whatsappNumber: formatPhoneNumber("+51 994 957 032"),
  whatsappLabel: "+51 994 957 032",
  tiktokUrl: "https://www.tiktok.com/@agenciajtlabs",
} as const;
