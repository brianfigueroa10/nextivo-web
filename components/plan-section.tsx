import { CheckCircle2 } from "lucide-react";
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Button } from "./ui/button";
import Link from "next/link";

export default function PlanSection() {
  return (
    <section id="planes" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge className="mb-2" variant="outline">
              Nuestros Planes
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight gradient-heading">
              Elige el plan perfecto para tu proyecto
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Ofrecemos diferentes opciones para adaptarnos a tus necesidades y
              presupuesto.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-5xl py-12">
          <Tabs defaultValue="landing" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="landing">Landing Pages</TabsTrigger>
              <TabsTrigger value="cms">Sitios Autoadministrables</TabsTrigger>
            </TabsList>
            <TabsContent value="landing" className="space-y-4">
              <div className="grid gap-6 lg:grid-cols-3">
                <Card className="transition-all hover:shadow-lg border-t-4 border-t-primary card-hover bg-card/50 backdrop-blur">
                  <CardHeader>
                    <CardTitle>Básico</CardTitle>
                    <CardDescription>Para pequeños negocios</CardDescription>
                    <div className="mt-4 text-4xl font-bold text-primary">
                      $180.000
                    </div>
                    <p className="text-sm text-muted-foreground">Pago único</p>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        <span>Diseño responsive</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        <span>1 página</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        <span>Formulario de contacto</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        <span>SEO básico</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        <span>Entrega en 7 días</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full btn-primary" asChild>
                      <Link href="#contacto">Solicitar</Link>
                    </Button>
                  </CardFooter>
                </Card>
                <Card className="transition-all hover:shadow-lg border-2 border-secondary card-hover relative overflow-hidden bg-card/50 backdrop-blur">
                  <div className="absolute top-0 right-0 bg-secondary text-secondary-foreground px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-bl-lg">
                    Popular
                  </div>
                  <CardHeader>
                    <CardTitle>Profesional</CardTitle>
                    <CardDescription>
                      Para empresas en crecimiento
                    </CardDescription>
                    <div className="mt-4 text-4xl font-bold text-secondary">
                      $200.000
                    </div>
                    <p className="text-sm text-muted-foreground">Pago único</p>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-secondary" />
                        <span>Todo lo del plan Básico</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-secondary" />
                        <span>Hasta 3 secciones</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-secondary" />
                        <span>Animaciones avanzadas</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-secondary" />
                        <span>Integración con redes sociales</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-secondary" />
                        <span>Entrega en 10 días</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full btn-secondary" asChild>
                      <Link href="#contacto">Solicitar</Link>
                    </Button>
                  </CardFooter>
                </Card>
                <Card className="transition-all hover:shadow-lg border-t-4 border-t-accent card-hover bg-card/50 backdrop-blur">
                  <CardHeader>
                    <CardTitle>Premium</CardTitle>
                    <CardDescription>
                      Para negocios establecidos
                    </CardDescription>
                    <div className="mt-4 text-4xl font-bold text-accent">
                      $410.000
                    </div>
                    <p className="text-sm text-muted-foreground">Pago único</p>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-accent" />
                        <span>Todo lo del plan Profesional</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-accent" />
                        <span>Hasta 5 secciones</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-accent" />
                        <span>Integración con CRM/Email</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-accent" />
                        <span>Análisis de conversión</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-accent" />
                        <span>Entrega en 14 días</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full btn-accent" asChild>
                      <Link href="#contacto">Solicitar</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="cms" className="space-y-4">
              <div className="grid gap-6 lg:grid-cols-3">
                <Card className="transition-all hover:shadow-lg bg-card/50 backdrop-blur">
                  <CardHeader>
                    <CardTitle>Básico</CardTitle>
                    <CardDescription>Para pequeños negocios</CardDescription>
                    <div className="mt-4 text-4xl font-bold">$350.000</div>
                    <p className="text-sm text-muted-foreground">Pago único</p>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        <span>Diseño responsive</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        <span>Hasta 5 páginas</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        <span>Panel de administración</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        <span>SEO básico</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        <span>Entrega en 14 días</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" asChild>
                      <Link href="#contacto">Solicitar</Link>
                    </Button>
                  </CardFooter>
                </Card>
                <Card className="transition-all hover:shadow-lg border-secondary bg-card/50 backdrop-blur">
                <div className="absolute top-0 right-0 bg-secondary text-secondary-foreground px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-bl-lg rounded-tr-md">
                    Popular
                  </div>
                  <CardHeader>
                  <CardTitle>Profesional</CardTitle>
                    <CardDescription>
                      Para empresas en crecimiento
                    </CardDescription>
                    <div className="mt-4 text-4xl font-bold text-secondary">
                      $430.000
                    </div>
                    <p className="text-sm text-muted-foreground">Pago único</p>
                  </CardHeader>
                  <CardContent className="space-y-2 pt-6">
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        <span>Todo lo del plan Básico</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        <span>Hasta 10 páginas</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        <span>Blog integrado</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        <span>Integración con redes sociales</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        <span>Entrega en 21 días</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" asChild>
                      <Link href="#contacto">Solicitar</Link>
                    </Button>
                  </CardFooter>
                </Card>
                <Card className="transition-all hover:shadow-lg bg-card/50 backdrop-blur">
                  <CardHeader>
                    <CardTitle>Premium</CardTitle>
                    <CardDescription>
                      Para negocios establecidos
                    </CardDescription>
                    <div className="mt-4 text-4xl font-bold">$560.000</div>
                    <p className="text-sm text-muted-foreground">Pago único</p>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        <span>Todo lo del plan Profesional</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        <span>Páginas ilimitadas</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        <span>E-commerce integrado</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        <span>Análisis avanzado</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        <span>Entrega en 30 días</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" asChild>
                      <Link href="#contacto">Solicitar</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            ¿Necesitas una solución personalizada?
          </p>
          <Button size="lg" className="btn-primary" asChild>
            <Link href="#contacto">Contacta para un presupuesto a medida</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
