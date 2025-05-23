import { CheckCircle2, Laptop, MessageSquare, Sparkles, Users } from "lucide-react";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { ContactForm } from "./contact-form";

export default function ContactSection() {
  return (
    <section id="contacto" className="w-full py-12 md:py-24 lg:py-32 bg-background">
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <Badge className="mb-2" variant="outline">
            Contacto
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight gradient-heading">
            ¿Hablamos sobre tu proyecto?
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Completa el formulario y nos pondremos en contacto contigo lo antes posible.
          </p>
        </div>
      </div>
      <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold">Información de Contacto</h3>
            <p className="text-muted-foreground mt-2">
              Estamos disponibles para responder a tus preguntas y discutir tu proyecto.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MessageSquare className="h-5 w-5 mt-0.5 text-primary" />
              <div>
                <h4 className="font-medium">Email</h4>
                <p className="text-muted-foreground">info@nextivo.com</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Laptop className="h-5 w-5 mt-0.5 text-primary" />
              <div>
                <h4 className="font-medium">Horario de Atención</h4>
                <p className="text-muted-foreground">Lunes a Viernes: 9:00 - 18:00</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Users className="h-5 w-5 mt-0.5 text-primary" />
              <div>
                <h4 className="font-medium">Redes Sociales</h4>
                <div className="flex gap-4 mt-2">
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    <span className="sr-only">Facebook</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </Link>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    <span className="sr-only">Twitter</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    </svg>
                  </Link>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    <span className="sr-only">Instagram</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </Link>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    <span className="sr-only">LinkedIn</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-muted p-6">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              <h3 className="font-medium">¿Por qué elegirnos?</h3>
            </div>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>Diseño personalizado y único</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>Tecnologías modernas y escalables</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>Enfoque en resultados y conversiones</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>Soporte técnico post-lanzamiento</span>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  </section>
  );
}