import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  company: string
  avatarUrl: string
}

export function TestimonialCard({ quote, author, company, avatarUrl }: TestimonialCardProps) {
  return (
    <Card className="card-hover relative overflow-hidden bg-card/50 backdrop-blur">
      <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary via-secondary to-accent"></div>
      <CardContent className="p-6 pl-8">
        <Quote className="h-8 w-8 text-primary/20 mb-4" />
        <p className="mb-6 text-muted-foreground">&quot;{quote}&quot;</p>
        <div className="flex items-center gap-4">
          <Avatar className="border-2 border-secondary">
            <AvatarImage src={avatarUrl || "/placeholder.svg"} alt={author} />
            <AvatarFallback className="bg-secondary/10 text-secondary">
              {author
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">{author}</p>
            <p className="text-sm text-secondary">{company}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
