"use client";

import { useRef, useState, type FormEvent } from "react";
import { trackEvent } from "@/utils/analytics";
import { getWhatsAppUrl } from "@/utils/whatsapp";
import { Button } from "@/components/ui/Button";

const fields = [
  "name",
  "email",
  "projectType",
  "message",
  "preferredContact",
  "privacyAccepted",
] as const;
type Field = (typeof fields)[number];
type FormStatus = "idle" | "loading" | "success" | "pending" | "error";

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [started, setStarted] = useState(false);
  const [fallbackUrl, setFallbackUrl] = useState<string | null>(null);

  function validate(data: FormData) {
    const next: Partial<Record<Field, string>> = {};
    if (!String(data.get("name") || "").trim()) next.name = "Ingresa tu nombre.";
    const email = String(data.get("email") || "").trim();
    if (!/^\S+@\S+\.\S+$/.test(email)) next.email = "Ingresa un correo válido.";
    if (!String(data.get("projectType") || ""))
      next.projectType = "Selecciona un tipo de proyecto.";
    if (String(data.get("message") || "").trim().length < 20)
      next.message = "Cuéntanos un poco más sobre tu proyecto (mínimo 20 caracteres).";
    if (!String(data.get("preferredContact") || ""))
      next.preferredContact = "Elige un medio de contacto.";
    if (data.get("privacyAccepted") !== "on")
      next.privacyAccepted = "Necesitamos tu autorización para contactarte.";
    return next;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const nextErrors = validate(data);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      const first = fields.find((field) => nextErrors[field]);
      document.getElementById(first || "name")?.focus();
      return;
    }
    setStatus("loading");
    trackEvent("contact_form_submit", { projectType: String(data.get("projectType")) });
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(data)),
      });
      const result = (await response.json()) as {
        status?: "success" | "pending";
        message?: string;
      };
      if (response.ok && result.status === "success") {
        setStatus("success");
        formRef.current?.reset();
        return;
      }
      if (result.status === "pending") {
        const summary = `Hola, quiero solicitar una cotización con JT Labs.\n\nNombre: ${data.get("name")}\nEmpresa: ${data.get("company") || "No indicada"}\nTipo de proyecto: ${data.get("projectType")}\nPresupuesto: ${data.get("budgetRange") || "Aún no lo sé"}\nMensaje: ${data.get("message")}`;
        setFallbackUrl(getWhatsAppUrl(summary));
        setStatus("pending");
        return;
      }
      setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      ref={formRef}
      noValidate
      onSubmit={handleSubmit}
      onFocus={() => {
        if (!started) {
          setStarted(true);
          trackEvent("contact_form_start");
        }
      }}
      className="mt-8 grid gap-5 sm:grid-cols-2"
    >
      <Field label="Nombre" name="name" error={errors.name} autoComplete="name" />
      <Field label="Empresa" name="company" autoComplete="organization" />
      <Field label="País" name="country" autoComplete="country-name" />
      <Field label="Correo" name="email" type="email" error={errors.email} autoComplete="email" />
      <Field label="Teléfono o WhatsApp" name="phone" type="tel" autoComplete="tel" />
      <Select
        label="Tipo de proyecto"
        name="projectType"
        error={errors.projectType}
        options={[
          "Landing Page",
          "Sitio Corporativo",
          "E-commerce",
          "Delivery propio",
          "Mantenimiento",
          "Otro",
        ]}
      />
      <Select
        label="Presupuesto estimado"
        name="budgetRange"
        options={[
          "Menos de US$ 500",
          "US$ 500–1.000",
          "US$ 1.000–2.500",
          "Más de US$ 2.500",
          "Aún no lo sé",
        ]}
      />
      <fieldset className="sm:col-span-2">
        <legend className="text-sm font-bold text-[#071326]">Medio de contacto preferido</legend>
        <div className="mt-3 flex flex-wrap gap-4">
          <Radio label="WhatsApp" value="WhatsApp" error={errors.preferredContact} />
          <Radio label="Correo" value="Correo" error={errors.preferredContact} />
        </div>
        {errors.preferredContact && <Error message={errors.preferredContact} />}
      </fieldset>
      <div className="sm:col-span-2">
        <label htmlFor="message" className="text-sm font-bold text-[#071326]">
          Cuéntanos sobre tu proyecto
        </label>
        <textarea
          id="message"
          name="message"
          maxLength={1200}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="mt-2 min-h-32 w-full rounded-xl border border-[#C7D3E0] bg-white px-4 py-3 leading-6 outline-none transition focus:border-[#16B9FF]"
        />
        {errors.message && <Error id="message-error" message={errors.message} />}
      </div>
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">No completar este campo</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="sm:col-span-2">
        <label className="flex items-start gap-3 text-sm leading-6 text-[#526176]">
          <input
            id="privacyAccepted"
            name="privacyAccepted"
            type="checkbox"
            className="mt-1 size-4 accent-[#0078B5]"
            aria-describedby={errors.privacyAccepted ? "privacy-error" : undefined}
          />
          Acepto ser contactado por JT Labs y he leído la{" "}
          <a href="/politica-de-privacidad" className="font-semibold text-[#0078B5] underline">
            política de privacidad
          </a>
          .
        </label>
        {errors.privacyAccepted && <Error id="privacy-error" message={errors.privacyAccepted} />}
      </div>
      <div className="sm:col-span-2">
        <Button type="submit" size="lg" loading={status === "loading"}>
          Enviar solicitud
        </Button>
        <div aria-live="polite" className="mt-4 text-sm">
          {status === "success" && (
            <p className="text-[#315700]">
              Recibimos tu solicitud. Te contactaremos por el medio que indicaste.
            </p>
          )}
          {status === "pending" && (
            <p className="text-[#526176]">
              La recepción por correo está pendiente de configuración.{" "}
              {fallbackUrl ? (
                <a
                  href={fallbackUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#0078B5] underline"
                >
                  Continuar por WhatsApp con el resumen
                </a>
              ) : (
                "Puedes volver a intentar cuando el canal de contacto esté habilitado."
              )}
            </p>
          )}
          {status === "error" && (
            <p className="text-red-700">
              No pudimos procesar la solicitud. Revisa tus datos e inténtalo nuevamente.
            </p>
          )}
        </div>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-bold text-[#071326]">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        maxLength={type === "email" ? 160 : 120}
        autoComplete={autoComplete}
        aria-describedby={error ? `${name}-error` : undefined}
        className="mt-2 min-h-12 w-full rounded-xl border border-[#C7D3E0] bg-white px-4 outline-none transition focus:border-[#16B9FF]"
      />
      {error && <Error id={`${name}-error`} message={error} />}
    </div>
  );
}
function Select({
  label,
  name,
  options,
  error,
}: {
  label: string;
  name: string;
  options: string[];
  error?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-bold text-[#071326]">
        {label}
      </label>
      <select
        id={name}
        name={name}
        defaultValue=""
        aria-describedby={error ? `${name}-error` : undefined}
        className="mt-2 min-h-12 w-full rounded-xl border border-[#C7D3E0] bg-white px-4 outline-none transition focus:border-[#16B9FF]"
      >
        <option value="" disabled>
          Selecciona una opción
        </option>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
      {error && <Error id={`${name}-error`} message={error} />}
    </div>
  );
}
function Radio({ label, value, error }: { label: string; value: string; error?: string }) {
  return (
    <label className="flex items-center gap-2 text-sm font-semibold text-[#071326]">
      <input
        name="preferredContact"
        type="radio"
        value={value}
        aria-describedby={error ? "preferredContact-error" : undefined}
      />
      {label}
    </label>
  );
}
function Error({ id, message }: { id?: string; message: string }) {
  return (
    <p id={id} className="mt-2 text-sm text-red-700">
      {message}
    </p>
  );
}
