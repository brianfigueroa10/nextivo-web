import { Badge } from "./ui/badge";

export default function AboutUs() {
  return (
    <section id="nosotros" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <Badge className="mb-2" variant="outline">
          Nuestra Misión
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight gradient-heading">
            Comprometidos con la excelencia
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          En Nextivo, nuestra misión es transformar ideas en experiencias digitales excepcionales que impulsen
            el crecimiento de nuestros clientes. Nos comprometemos a ofrecer soluciones web innovadoras,
            funcionales y estéticamente atractivas que generen resultados tangibles.
          </p>
        </div>
      </div>

    </div>
  </section>
  );
}