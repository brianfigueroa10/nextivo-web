import Link from "next/link";
import { Button } from "./ui/button";

export default function CtaSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-primary via-secondary to-accent relative overflow-hidden">
    <div className="absolute inset-0 bg-dark-grid opacity-10"></div>
    <div className="container px-4 md:px-6 relative z-10">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-white">
            ¿Listo para transformar tu presencia digital?
          </h2>
          <p className="mx-auto max-w-[700px] md:text-xl text-white/90">
            Comienza hoy mismo y lleva tu negocio al siguiente nivel con un sitio web profesional.
          </p>
        </div>
        <div className="flex flex-col gap-2 min-[400px]:flex-row">
          <div className="glow group">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90 relative z-10 w-full sm:w-auto"
              asChild
            >
              <Link href="#contacto">Solicitar Cotización</Link>
            </Button>
          </div>
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent text-white border-white hover:bg-white/10"
            asChild
          >
            <Link href="#planes">Ver Planes</Link>
          </Button>
        </div>
      </div>
    </div>
  </section>
  );
}