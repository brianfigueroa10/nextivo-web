import { TestimonialCard } from "./testimonial-card";
import { Badge } from "./ui/badge";

export default function TestimonialSection() {
  return (
    <section id="testimonios" className="w-full py-12 md:py-24 lg:py-32 bg-background">
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <Badge className="mb-2" variant="outline">
            Testimonios
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight gradient-heading">
            Lo que dicen nuestros clientes
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Descubre por qué nuestros clientes confían en nosotros para sus proyectos web.
          </p>
        </div>
      </div>
      <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
        <TestimonialCard
          quote="Nextivo transformó completamente nuestra presencia online. El sitio web que crearon no solo es hermoso, sino que también ha aumentado nuestras conversiones en un 40%."
          author="María González"
          company="CEO, Moda Express"
          avatarUrl="https://images.pexels.com/photos/31431921/pexels-photo-31431921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
        <TestimonialCard
          quote="El equipo de Nextivo entendió perfectamente nuestras necesidades y entregó un sitio web que superó todas nuestras expectativas. Profesionales y atentos en todo momento."
          author="Carlos Rodríguez"
          company="Director, Inmobiliaria Luxury"
          avatarUrl="https://images.pexels.com/photos/29501966/pexels-photo-29501966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
        <TestimonialCard
          quote="La landing page que crearon para nuestro lanzamiento fue clave para el éxito de la campaña. Diseño impecable y optimizado para conversiones."
          author="Laura Martínez"
          company="Marketing Manager, TechPro"
          avatarUrl="https://images.pexels.com/photos/31431921/pexels-photo-31431921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
        <TestimonialCard
          quote="Trabajar con Nextivo fue una experiencia excepcional. Entendieron nuestra visión y la plasmaron perfectamente en nuestro sitio web."
          author="Javier López"
          company="Fundador, Estudio Arquitectura"
          avatarUrl="https://images.pexels.com/photos/29501966/pexels-photo-29501966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
        <TestimonialCard
          quote="El sistema de administración de contenido que implementaron es intuitivo y fácil de usar. Ahora podemos actualizar nuestro sitio sin depender de nadie."
          author="Ana Sánchez"
          company="Gerente, Restaurante Gourmet"
          avatarUrl="https://images.pexels.com/photos/31431921/pexels-photo-31431921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
        <TestimonialCard
          quote="La atención al detalle y el soporte post-lanzamiento han sido excepcionales. Recomiendo Nextivo a cualquier empresa que busque calidad y profesionalismo."
          author="Pedro Díaz"
          company="Director de Eventos, Corporate Events"
          avatarUrl="https://images.pexels.com/photos/29501966/pexels-photo-29501966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
      </div>
    </div>
  </section>
  );
}