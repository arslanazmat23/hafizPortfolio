import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/projects-data";
import { ArrowRight, Check, Code, MoveRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { getTechIcon } from "@/lib/projects-data";
import { Button } from "./ui/button";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            Curated{' '}
            <span className="bg-gradient-to-r from-primary via-purple-400 to-accent bg-clip-text text-transparent">
              Work
            </span>
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
            A selection of my projects that demonstrate my passion for automation and quality.
          </p>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <div
              key={project.slug}
              className={cn(
                "group relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              )}
            >
              <div
                className={cn(
                  "absolute -inset-4 sm:-inset-8 bg-gradient-to-r rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 blur-2xl",
                  index % 2 === 0
                    ? "from-pink-500/30 to-purple-500/30"
                    : "from-blue-500/30 to-teal-500/30"
                )}
              ></div>
              <div
                className={cn(
                  "relative h-full w-full rounded-2xl bg-card/50 p-6 sm:p-8 flex flex-col justify-center items-center shadow-lg border border-border/20",
                  index % 2 === 0 ? "lg:order-last" : ""
                )}
              >
                <h3 className="font-headline text-3xl font-bold text-foreground">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  {project.description}
                </p>
                <ul className="space-y-3 mt-6 self-start w-full">
                  {project.keyFeatures.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">{feature.title}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-6 self-start">
                  {project.techStack.slice(0, 6).map((tech) => {
                    const Icon = tech.icon || getTechIcon(tech.name);
                    return (
                      <Badge key={tech.name} variant="secondary" className="px-3 py-1 text-sm">
                        <Icon className="w-4 h-4 mr-2" />
                        {tech.name}
                      </Badge>
                    );
                  })}
                </div>
              </div>
              
              <Link href={`/projects/${project.slug}`} className="relative h-[350px] sm:h-[450px] flex flex-col justify-between rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-105">
                  <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      data-ai-hint={project.aiHint}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

                  <div className="relative p-6 sm:p-8 z-10">
                      <p className="text-white font-headline text-xl sm:text-2xl max-w-sm">
                        {project.overview.length > 100 ? project.overview.substring(0, 100) + '...' : project.overview}
                      </p>
                  </div>

                  <div className="relative p-6 sm:p-8 z-10 self-end">
                      <Button variant="outline" size="icon" className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 rounded-full h-14 w-14">
                        <MoveRight className="h-6 w-6" />
                      </Button>
                  </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
