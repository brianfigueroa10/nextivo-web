"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)

    // Simulación de envío de formulario
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "Formulario enviado",
        description: "Nos pondremos en contacto contigo pronto.",

      })

      // Reset form
      const form = event.target as HTMLFormElement
      form.reset()
    }, 1500)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 relative">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-radial from-primary/20 to-transparent -z-10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-radial from-secondary/20 to-transparent -z-10 rounded-full blur-2xl"></div>

      <div className="space-y-4">
        <div className="grid gap-2">
          <Label htmlFor="name" className="text-foreground/80">
            Nombre completo
          </Label>
          <Input
            id="name"
            name="name"
            required
            placeholder="Tu nombre"
            className="border-input focus-visible:ring-primary transition-all duration-300 focus-visible:border-primary bg-card/50"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email" className="text-foreground/80">
            Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="tu@email.com"
            className="border-input focus-visible:ring-primary transition-all duration-300 focus-visible:border-primary bg-card/50"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="phone" className="text-foreground/80">
            Teléfono (opcional)
          </Label>
          <Input
            id="phone"
            name="phone"
            placeholder="+54 11 1234-5678"
            className="border-input focus-visible:ring-primary transition-all duration-300 focus-visible:border-primary bg-card/50"
          />
        </div>
        <div className="grid gap-2">
          <Label className="text-foreground/80">Tipo de proyecto</Label>
          <RadioGroup defaultValue="landing" className="grid grid-cols-2 gap-2">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="landing" id="landing" className="text-primary border-primary" />
              <Label htmlFor="landing" className="font-normal">
                Landing Page
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="cms" id="cms" className="text-primary border-primary" />
              <Label htmlFor="cms" className="font-normal">
                Sitio Autoadministrable
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="ecommerce" id="ecommerce" className="text-primary border-primary" />
              <Label htmlFor="ecommerce" className="font-normal">
                E-commerce
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="other" id="other" className="text-primary border-primary" />
              <Label htmlFor="other" className="font-normal">
                Otro
              </Label>
            </div>
          </RadioGroup>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="budget" className="text-foreground/80">
            Presupuesto aproximado
          </Label>
          <select
            id="budget"
            name="budget"
            className="flex h-10 w-full rounded-md border border-input bg-card/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300"
          >
            <option value="">Selecciona un rango</option>
            <option value="less-500">Menos de $180.000</option>
            <option value="500-1000">$180.000 - $250.000</option>
            <option value="1000-2000">$250.000 - $400.000</option>
            <option value="more-2000">Más de $400.000</option>
          </select>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="message" className="text-foreground/80">
            Mensaje
          </Label>
          <Textarea
            id="message"
            name="message"
            required
            placeholder="Cuéntanos sobre tu proyecto..."
            className="min-h-[120px] border-input focus-visible:ring-primary transition-all duration-300 focus-visible:border-primary bg-card/50"
          />
        </div>
      </div>
      <div className="glow group">
        <Button type="submit" className="w-full btn-primary relative z-10" disabled={isSubmitting}>
          {isSubmitting ? "Enviando..." : "Enviar mensaje"}
        </Button>
      </div>
    </form>
  )
}
