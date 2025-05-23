import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
 
    <section className="container flex flex-col items-center justify-center gap-6 px-4 py-20 text-center">
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full blur-xl opacity-30 animate-pulse-slow"></div>
        <h1 className="text-9xl font-extrabold tracking-tighter gradient-heading">404</h1>
      </div>
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Página no encontrada</h2>
      <p className="max-w-[600px] text-muted-foreground md:text-xl">
        Lo sentimos, la página que estás buscando no existe o ha sido movida.
      </p>
      <div className="flex flex-col gap-4 min-[400px]:flex-row">
        <div className="glow group">
          <Button size="lg" className="btn-primary relative z-10" asChild>
            <Link href="/">Volver al inicio</Link>
          </Button>
        </div>
        <Button size="lg" variant="outline" className="btn-outline-secondary" asChild>
          <Link href="/#contacto">Contactar soporte</Link>
        </Button>
      </div>
    </section>

  );
}