import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-[#F5F8FC] px-5">
      <Container className="max-w-2xl text-center">
        <p className="text-sm font-bold uppercase tracking-[.18em] text-[#0078B5]">Error 404</p>
        <h1 className="mt-5 text-4xl font-bold tracking-tight text-[#071326] sm:text-5xl">
          Esta página no está disponible.
        </h1>
        <p className="mx-auto mt-5 max-w-xl leading-7 text-[#526176]">
          Volvamos a JT Labs para encontrar una solución digital para tu negocio.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href="/" size="lg">
            Volver al inicio
          </Button>
          <Button href="/#contacto" size="lg" variant="outline">
            Solicitar una cotización
          </Button>
        </div>
      </Container>
    </main>
  );
}
