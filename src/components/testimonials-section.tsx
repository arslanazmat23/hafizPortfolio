import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    quote: "A talented and passionate frontend developer who transforms visions into reality. His attention to detail and dedication to creating seamless user experiences have greatly enhanced our projects.",
    name: "Lena Torres",
    title: "Product Lead",
    company: "Creatify",
    image: "https://placehold.co/100x100.png",
    aiHint: "woman portrait",
    gradient: "from-pink-500/20 to-rose-500/20",
  },
  {
    quote: "Working with Aayush has been a fantastic experience. He’s not only highly skilled in frontend technologies but also brings a refreshing creativity to every project. He's a great collaborator who makes the work environment better for everyone.",
    name: "Emma Thompson",
    title: "Senior Designer",
    company: "PixelCraft",
    image: "https://placehold.co/100x100.png",
    aiHint: "woman portrait",
    gradient: "from-blue-500/20 to-indigo-500/20",
  },
  {
    quote: "Aayush delivered exceptional work on our project. His meticulous approach and strong communication skills greatly enhanced the quality of our web applications. He's a dependable developer who collaborates seamlessly with the team.",
    name: "Ethan Parker",
    title: "Manager",
    company: "TechFusion",
    image: "https://placehold.co/100x100.png",
    aiHint: "man portrait",
    gradient: "from-purple-500/20 to-violet-500/20",
  },
  {
    quote: "Aayush is a standout frontend developer. His ability to deliver high-quality code and engaging user interfaces consistently makes him a valuable team member. He’s proactive, reliable, and always willing to go the extra mile.",
    name: "Ryan Mitchell",
    title: "CTO",
    company: "Innovate Solutions",
    image: "https://placehold.co/100x100.png",
    aiHint: "man portrait",
    gradient: "from-sky-500/20 to-cyan-500/20",
  },
  {
    quote: "Aayush is a fantastic frontend developer! He took our requirements and turned them into something amazing. His attention to detail, creativity, and clear communication made the whole process smooth.",
    name: "Emily Thompson",
    title: "Creative Director",
    company: "H. Studios",
    image: "https://placehold.co/100x100.png",
    aiHint: "woman portrait",
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
];


export default function TestimonialsSection() {
    return (
        <section id="testimonials" className="py-20 sm:py-32">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <p className="font-headline text-sm font-semibold uppercase text-primary tracking-wider mb-2">
                        Testimonials
                    </p>
                    <h2 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
                        Word on the street{' '}
                        <span className="bg-gradient-to-r from-primary via-purple-400 to-accent bg-clip-text text-transparent">
                            about me
                        </span>
                    </h2>
                </div>

                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full"
                >
                    <CarouselContent>
                        {testimonials.map((testimonial, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                <div className="p-1 h-full">
                                    <Card className={cn("h-full flex flex-col justify-between p-6 border-transparent", `bg-gradient-to-br ${testimonial.gradient}`)}>
                                        <CardContent className="p-0 text-lg text-foreground/80">
                                            <p>"{testimonial.quote}"</p>
                                        </CardContent>
                                        <div className="flex items-center gap-4 mt-6">
                                            <Avatar>
                                                <AvatarImage src={testimonial.image} alt={testimonial.name} data-ai-hint={testimonial.aiHint} />
                                                <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <p className="font-semibold text-foreground">{testimonial.name}</p>
                                                <p className="text-sm text-foreground/70">{testimonial.title} • {testimonial.company}</p>
                                            </div>
                                        </div>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="hidden sm:flex" />
                    <CarouselNext className="hidden sm:flex" />
                </Carousel>
            </div>
        </section>
    )
}
