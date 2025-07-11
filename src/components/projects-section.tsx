import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/projects-data";
import { Code, Eye, Plus } from "lucide-react";

export default function ProjectsSection() {
  const featuredProject = projects[0];

  return (
    <section id="projects" className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="font-headline text-sm font-semibold uppercase tracking-widest text-primary">
            Featured Case Studies
          </p>
          <h2 className="mt-4 font-headline text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            Curated{' '}
            <span className="bg-gradient-to-r from-primary via-purple-400 to-accent bg-clip-text text-transparent">
              Work
            </span>
          </h2>
        </div>
        <div className="mt-16">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl shadow-primary/20">
              <Image
                src={featuredProject.image}
                alt={featuredProject.title}
                fill
                className="object-cover transition-transform duration-500 hover:scale-110"
                data-ai-hint={featuredProject.aiHint}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3 className="font-headline text-2xl sm:text-3xl font-bold text-white">
                  {featuredProject.title}
                </h3>
                <p className="mt-2 text-white/80 max-w-md">
                  A online space for entrepreneurs to pitch ideas, explore others, and gain exposure with clean design.
                </p>
              </div>
              <Link href={`/projects/${featuredProject.slug}`} className="absolute top-4 right-4 group">
                <div className="relative w-24 h-24">
                  <svg className="w-full h-full view-details-spin" viewBox="0 0 100 100">
                    <path
                      d="M 50,50 m -40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
                      fill="none"
                      stroke="hsl(var(--primary))"
                      strokeWidth="2"
                      strokeDasharray="251.2"
                      strokeDashoffset="0"
                    />
                    <text fill="white" x="50" y="50" dy=".3em" textAnchor="middle" className="text-xs uppercase font-headline">
                      View Details
                    </text>
                  </svg>
                  <Eye className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-6 w-6 text-primary transition-transform group-hover:scale-125" />
                </div>
              </Link>
            </div>
            <div className="space-y-6">
              <h3 className="font-headline text-3xl font-bold text-foreground">
                {featuredProject.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {featuredProject.description}
              </p>
              <ul className="space-y-4">
                {featuredProject.keyFeatures.slice(0, 3).map((feature, index) => (
                   <li key={index} className="flex items-start gap-3">
                     <Plus className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                     <span>{feature.title}</span>
                   </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {featuredProject.tags.slice(0, 6).map((tag) => (
                  <Badge key={tag} variant="secondary" className="gap-1">
                    <Code className="h-3 w-3" /> {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
