export const runtime = "nodejs";

const allowedProjectTypes = new Set([
  "Landing Page",
  "Sitio Corporativo",
  "E-commerce",
  "Delivery propio",
  "Mantenimiento",
  "Otro",
]);
const allowedContacts = new Set(["WhatsApp", "Correo"]);

function text(value: unknown, limit: number) {
  return typeof value === "string" ? value.trim().slice(0, limit) : "";
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return Response.json({ message: "Solicitud inválida." }, { status: 400 });
  }
  if (text(body.website, 100)) return Response.json({ status: "success" });
  const name = text(body.name, 120);
  const email = text(body.email, 160);
  const projectType = text(body.projectType, 80);
  const message = text(body.message, 1200);
  const preferredContact = text(body.preferredContact, 20);
  if (
    !name ||
    !/^\S+@\S+\.\S+$/.test(email) ||
    !allowedProjectTypes.has(projectType) ||
    message.length < 20 ||
    !allowedContacts.has(preferredContact) ||
    body.privacyAccepted !== "on"
  )
    return Response.json({ message: "Revisa los campos obligatorios." }, { status: 400 });
  return Response.json(
    { status: "pending", message: "La recepción de solicitudes está pendiente de configuración." },
    { status: 503 },
  );
}
