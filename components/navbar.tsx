import { Rocket } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
<header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <Rocket className="h-6 w-6 text-primary" />
              <span className="inline-block font-bold gradient-heading">Nextivo</span>
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link href="#servicios" className="text-sm font-medium transition-colors hover:text-primary">
                Servicios
              </Link>
              <Link href="#planes" className="text-sm font-medium transition-colors hover:text-primary">
                Planes
              </Link>
              <Link href="#proyectos" className="text-sm font-medium transition-colors hover:text-primary">
                Proyectos
              </Link>
              <Link href="#nosotros" className="text-sm font-medium transition-colors hover:text-primary">
                Nosotros
              </Link>
              <Link href="#testimonios" className="text-sm font-medium transition-colors hover:text-primary">
                Testimonios
              </Link>
              <Link href="#faq" className="text-sm font-medium transition-colors hover:text-primary">
                FAQ
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-1">
              <Button asChild variant="default" className="btn-secondary">
                <Link href="#contacto">Contactar</Link>
              </Button>
            </nav>
          </div>
        </div>
      </header>
  );
}