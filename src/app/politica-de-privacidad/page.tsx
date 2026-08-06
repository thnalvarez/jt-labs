import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Política de privacidad | JT Labs",
  description: "Información inicial sobre el tratamiento de datos de contacto en JT Labs.",
  alternates: { canonical: "/politica-de-privacidad" },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#F5F8FC] py-16 sm:py-24">
      <Container>
        <article className="mx-auto max-w-3xl rounded-3xl border border-[#DFE7F0] bg-white p-6 shadow-[0_8px_28px_rgba(7,19,38,.06)] sm:p-10">
          <Link href="/" className="text-sm font-bold text-[#0078B5] hover:underline">
            ← Volver al inicio
          </Link>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-[#071326]">
            Política de privacidad
          </h1>
          <p className="mt-5 leading-7 text-[#526176]">
            Esta política inicial explica cómo JT Labs trata la información que una persona comparte
            al solicitar una cotización. Deberá revisarse y ajustarse según la operación real del
            servicio.
          </p>
          <div className="mt-10 space-y-8 leading-7 text-[#526176]">
            <section>
              <h2 className="text-xl font-bold text-[#071326]">Datos recopilados</h2>
              <p className="mt-2">
                Podemos recibir los datos incluidos voluntariamente en el formulario: nombre,
                empresa, país, correo, teléfono, detalles del proyecto y medio de contacto
                preferido.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-[#071326]">Finalidad</h2>
              <p className="mt-2">
                Usamos esta información para comprender una consulta comercial y responder por el
                medio elegido. No se vende la información personal.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-[#071326]">Conservación y derechos</h2>
              <p className="mt-2">
                Los datos se conservarán solo el tiempo necesario para atender la solicitud y
                gestionar una posible relación comercial. Puedes solicitar información,
                actualización o eliminación mediante los canales de contacto disponibles en el
                sitio.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-[#071326]">Servicios externos</h2>
              <p className="mt-2">
                La web puede utilizar infraestructura de alojamiento, analítica o canales de
                contacto configurados para operar el servicio. Esta política no reemplaza las
                condiciones de esos proveedores.
              </p>
            </section>
          </div>
        </article>
      </Container>
    </main>
  );
}
