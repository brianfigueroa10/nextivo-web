import Link from "next/link";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Star } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full py-12 md:pb-24 lg:pb-32 xl:pb-48 bg-dark-grid relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-30"></div>
    <div className="container px-4 md:px-6 relative z-10">
      <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <Badge className="inline-flex mb-2 bg-secondary text-secondary-foreground hover:bg-secondary/80">
              Diseño Web Profesional
            </Badge>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none gradient-heading">
              Transformamos ideas en sitios web impactantes
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Creamos landing pages y sitios autoadministrables que convierten visitantes en clientes. Diseño
              moderno, código limpio y resultados excepcionales.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <div className="glow group">
              <Button size="lg" className="btn-primary relative z-10 w-full sm:w-auto" asChild>
                <Link href="#contacto">Solicitar Cotización</Link>
              </Button>
            </div>
            <Button size="lg" variant="outline" className="btn-outline-secondary" asChild>
              <Link href="#proyectos">Ver Proyectos</Link>
            </Button>
          </div>
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 fill-secondary text-secondary" />
              <Star className="h-4 w-4 fill-secondary text-secondary" />
              <Star className="h-4 w-4 fill-secondary text-secondary" />
              <Star className="h-4 w-4 fill-secondary text-secondary" />
              <Star className="h-4 w-4 fill-secondary text-secondary" />
            </div>
            <div className="text-muted-foreground">Más de 100 clientes satisfechos</div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative w-full h-[350px] md:h-[450px] lg:h-[500px] animate-bounce-slow">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-secondary to-accent rounded-lg blur opacity-30"></div>
            <Image
              src="https://images.pexels.com/photos/16129703/pexels-photo-16129703/free-photo-of-hombre-escritorio-trabajando-sentado.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Hero Image"
              fill
              className="object-cover object-right rounded-lg relative"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}