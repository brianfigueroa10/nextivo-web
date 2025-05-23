import { Code, Globe, LayoutGrid } from "lucide-react";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";

export default function ServicesSection() {
  return (
    <section id="servicios" className="w-full py-12 md:py-24 lg:py-32 bg-background">
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <Badge className="mb-2" variant="outline">
            Nuestros Servicios
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight gradient-heading">
            Soluciones web a la medida de tu negocio
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Ofrecemos servicios completos de desarrollo web con tecnologías modernas y enfoque en resultados.
          </p>
        </div>
      </div>
      <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
        <Card className="transition-all hover:shadow-lg border-l-4 border-l-primary card-hover bg-card/50 backdrop-blur">
          <CardHeader className="pb-2">
            <div className="mb-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Globe className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Landing Pages</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Páginas de aterrizaje optimizadas para convertir visitantes en clientes. Diseño atractivo y enfocado
              en la acción.
            </p>
          </CardContent>
          <CardFooter>
            <Button
              variant="ghost"
              size="sm"
              className="gap-1 text-primary hover:text-primary hover:bg-primary/10"
              asChild
            >
              <Link href="#contacto">Más información</Link>
            </Button>
          </CardFooter>
        </Card>
        <Card className="transition-all hover:shadow-lg border-l-4 border-l-secondary card-hover bg-card/50 backdrop-blur">
          <CardHeader className="pb-2">
            <div className="mb-2 w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
              <LayoutGrid className="h-6 w-6 text-secondary" />
            </div>
            <CardTitle>Sitios Autoadministrables</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Sitios web completos con panel de administración para que gestiones tu contenido sin conocimientos
              técnicos.
            </p>
          </CardContent>
          <CardFooter>
            <Button
              variant="ghost"
              size="sm"
              className="gap-1 text-secondary hover:text-secondary hover:bg-secondary/10"
              asChild
            >
              <Link href="#contacto">Más información</Link>
            </Button>
          </CardFooter>
        </Card>
        <Card className="transition-all hover:shadow-lg border-l-4 border-l-accent card-hover bg-card/50 backdrop-blur">
          <CardHeader className="pb-2">
            <div className="mb-2 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
              <Code className="h-6 w-6 text-accent" />
            </div>
            <CardTitle>Desarrollo a Medida</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Soluciones personalizadas para necesidades específicas. Aplicaciones web complejas con tecnologías
              modernas.
            </p>
          </CardContent>
          <CardFooter>
            <Button
              variant="ghost"
              size="sm"
              className="gap-1 text-accent hover:text-accent hover:bg-accent/10"
              asChild
            >
              <Link href="#contacto">Más información</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
      <div className="flex justify-center">
        <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10" asChild>
          <Link href="#contacto">Consulta por servicios personalizados</Link>
        </Button>
      </div>
    </div>
  </section>
  );
}