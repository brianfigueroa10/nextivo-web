"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FaqAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1" className="border-b-primary/30 group">
        <AccordionTrigger className="group-hover:text-primary transition-colors duration-300">
          ¿Cuánto tiempo toma desarrollar un sitio web?
        </AccordionTrigger>
        <AccordionContent className="text-muted-foreground border-l-2 border-l-primary/30 pl-4">
          El tiempo de desarrollo varía según la complejidad del proyecto. Una landing page simple puede estar lista en
          1-2 semanas, mientras que un sitio autoadministrable completo puede tomar de 3 a 6 semanas. Durante nuestra
          consulta inicial, te proporcionaremos un cronograma detallado para tu proyecto específico.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className="border-b-secondary/30 group">
        <AccordionTrigger className="group-hover:text-secondary transition-colors duration-300">
          ¿Qué información necesitan para comenzar mi proyecto?
        </AccordionTrigger>
        <AccordionContent className="text-muted-foreground border-l-2 border-l-secondary/30 pl-4">
          Para comenzar, necesitamos entender tus objetivos de negocio, público objetivo, preferencias de diseño y
          cualquier contenido que desees incluir (textos, imágenes, logotipos). Te proporcionaremos un cuestionario
          detallado para recopilar esta información de manera eficiente.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" className="border-b-accent/30 group">
        <AccordionTrigger className="group-hover:text-accent transition-colors duration-300">
          ¿Ofrecen mantenimiento para los sitios web?
        </AccordionTrigger>
        <AccordionContent className="text-muted-foreground border-l-2 border-l-accent/30 pl-4">
          Sí, ofrecemos planes de mantenimiento mensuales que incluyen actualizaciones de seguridad, copias de
          seguridad, soporte técnico y pequeñas modificaciones. Esto garantiza que tu sitio permanezca seguro,
          actualizado y funcionando correctamente.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4" className="border-b-primary/30 group">
        <AccordionTrigger className="group-hover:text-primary transition-colors duration-300">
          ¿Puedo actualizar el contenido de mi sitio por mi cuenta?
        </AccordionTrigger>
        <AccordionContent className="text-muted-foreground border-l-2 border-l-primary/30 pl-4">
          Absolutamente. Nuestros sitios autoadministrables están diseñados con interfaces intuitivas que te permiten
          actualizar contenido, añadir páginas, modificar imágenes y más, sin necesidad de conocimientos técnicos.
          Además, proporcionamos capacitación y documentación para que puedas gestionar tu sitio con confianza.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5" className="border-b-secondary/30 group">
        <AccordionTrigger className="group-hover:text-secondary transition-colors duration-300">
          ¿Incluyen hosting y dominio en sus servicios?
        </AccordionTrigger>
        <AccordionContent className="text-muted-foreground border-l-2 border-l-secondary/30 pl-4">
          Ofrecemos recomendaciones de hosting y podemos gestionar la configuración por ti. El costo del hosting y
          dominio no está incluido en nuestros precios base, pero podemos incluirlos como parte de un paquete completo
          si lo prefieres. También podemos trabajar con tu proveedor de hosting actual si ya tienes uno.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6" className="border-b-accent/30 group">
        <AccordionTrigger className="group-hover:text-accent transition-colors duration-300">
          ¿Cómo es el proceso de pago?
        </AccordionTrigger>
        <AccordionContent className="text-muted-foreground border-l-2 border-l-accent/30 pl-4">
          Generalmente solicitamos un 50% de anticipo para comenzar el proyecto y el 50% restante al finalizar, antes de
          la publicación. Para proyectos más grandes, podemos establecer un calendario de pagos por etapas. Aceptamos
          transferencias bancarias y tarjetas de crédito.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-7" className="border-b-primary/30 group">
        <AccordionTrigger className="group-hover:text-primary transition-colors duration-300">
          ¿Ofrecen servicios de SEO y marketing digital?
        </AccordionTrigger>
        <AccordionContent className="text-muted-foreground border-l-2 border-l-primary/30 pl-4">
          Sí, ofrecemos servicios de optimización SEO básica en todos nuestros sitios web. También disponemos de
          servicios avanzados de SEO y marketing digital como complemento, incluyendo estrategias de contenido, campañas
          de PPC, email marketing y gestión de redes sociales.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
