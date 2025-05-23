import Link from "next/link";
import { Button } from "./ui/button";
import { FaqAccordion } from "./faq-accordion";
import { Badge } from "./ui/badge";

export default function FaqSection() {
  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <Badge className="mb-2" variant="outline">
            Preguntas Frecuentes
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight gradient-heading">
            Resolvemos tus dudas
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Encuentra respuestas a las preguntas más comunes sobre nuestros servicios y proceso de trabajo.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-3xl py-12">
        <FaqAccordion />
      </div>
      <div className="text-center">
        <p className="text-muted-foreground mb-4">¿No encuentras la respuesta que buscas?</p>
        <Button size="lg" className="btn-primary" asChild>
          <Link href="#contacto">Contáctanos</Link>
        </Button>
      </div>
    </div>
  </section>
  );
}