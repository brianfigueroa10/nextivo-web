import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  category: string
  imageUrl: string
}

export function ProjectCard({ title, description, category, imageUrl }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden card-hover group bg-card/50 backdrop-blur">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 w-full">
            <Link href="#" className="text-sm font-medium text-white hover:underline">
              Ver proyecto
            </Link>
          </div>
        </div>
      </div>
      <CardContent className="p-6">
        <Badge variant="secondary" className="mb-2 bg-secondary/10 text-secondary hover:bg-secondary/20">
          {category}
        </Badge>
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
      </CardContent>
    </Card>
  )
}
