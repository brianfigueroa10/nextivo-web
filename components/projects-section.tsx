import { ProjectCard } from "./project-card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export default function ProjectsSection() {
  return (
    <section id="proyectos" className="w-full py-12 md:py-24 lg:py-32 bg-background">
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <Badge className="mb-2" variant="outline">
            Portafolio
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight gradient-heading">
            Proyectos destacados
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Explora algunos de nuestros trabajos recientes y descubre cómo hemos ayudado a nuestros clientes a
            alcanzar sus objetivos.
          </p>
        </div>
      </div>
      <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
        <ProjectCard
          title="E-commerce de Moda"
          description="Tienda online completa con catálogo, carrito y pasarela de pagos."
          category="Sitio Autoadministrable"
          imageUrl="https://images.pexels.com/photos/26796159/pexels-photo-26796159/free-photo-of-moda-piernas-patas-zapatos.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
        <ProjectCard
          title="Inmobiliaria Premium"
          description="Plataforma para mostrar propiedades con filtros avanzados y formularios de contacto."
          category="Sitio Autoadministrable"
          imageUrl="https://images.pexels.com/photos/32130812/pexels-photo-32130812/free-photo-of-edificios-de-oficinas-modernos-en-redmond-wa.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
        <ProjectCard
          title="Lanzamiento de Producto"
          description="Landing page para el lanzamiento de un nuevo producto tecnológico."
          category="Landing Page"
          imageUrl="https://images.pexels.com/photos/4202325/pexels-photo-4202325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
        <ProjectCard
          title="Estudio de Arquitectura"
          description="Portafolio elegante para mostrar proyectos arquitectónicos."
          category="Sitio Autoadministrable"
          imageUrl="https://images.pexels.com/photos/6615234/pexels-photo-6615234.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
        <ProjectCard
          title="Evento Corporativo"
          description="Landing page para un evento empresarial con registro de asistentes."
          category="Landing Page"
          imageUrl="https://images.pexels.com/photos/8761520/pexels-photo-8761520.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
        <ProjectCard
          title="Restaurante Gourmet"
          description="Sitio web con menú digital, reservas online y blog de recetas."
          category="Sitio Autoadministrable"
          imageUrl="https://images.pexels.com/photos/16789511/pexels-photo-16789511/free-photo-of-plato-mujer-beber-bebida.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
      </div>
      <div className="text-center">
        <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
          Ver más proyectos
        </Button>
      </div>
    </div>
  </section>
  );
}