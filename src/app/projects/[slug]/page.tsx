import { notFound } from "next/navigation";
import { projects } from "@/lib/projects-data";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowLeft, CheckCircle2, ListChecks, Target, BrainCircuit, BarChart2 } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getTechIcon } from "@/lib/projects-data";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/footer";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectDetailsPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const sections = [
    {
      title: "Key Features",
      icon: <ListChecks className="w-5 h-5 mr-3 text-primary" />,
      content: (
        <ul className="space-y-3">
          {project.keyFeatures.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle2 className="w-5 h-5 mr-3 mt-1 text-green-500 flex-shrink-0" />
              <span>{feature.title}</span>
            </li>
          ))}
        </ul>
      ),
    },
    {
      title: "Challenges & Learnings",
      icon: <BrainCircuit className="w-5 h-5 mr-3 text-primary" />,
      content: <p>{project.challenges}</p>,
    },
    {
      title: "Outcome",
      icon: <BarChart2 className="w-5 h-5 mr-3 text-primary" />,
      content: <p>{project.outcome}</p>,
    },
  ];

  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <Button asChild variant="ghost" className="mb-8">
          <Link href="/#projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </Button>

        <header className="text-center mb-12">
          <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground">
            {project.title}
          </h1>
          <p className="mt-4 text-lg max-w-3xl mx-auto text-muted-foreground">
            {project.overview}
          </p>
        </header>
        
        <div className="relative h-[300px] sm:h-[400px] md:h-[550px] w-full overflow-hidden rounded-2xl shadow-2xl shadow-primary/20 mb-12">
            <Image src={project.image} alt={project.title} fill className="object-cover" data-ai-hint={project.aiHint} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <Card className="bg-card/50">
              <CardContent className="p-6">
                <Accordion type="single" collapsible defaultValue="item-0">
                  {sections.map((section, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-xl font-semibold font-headline text-foreground hover:no-underline">
                        <div className="flex items-center">
                          {section.icon} {section.title}
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pt-2 text-base text-muted-foreground">
                        {section.content}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>

          <aside className="space-y-8">
            <Card className="bg-card/50">
              <CardContent className="p-6">
                <h3 className="font-headline text-xl font-semibold text-foreground flex items-center mb-4">
                  <Target className="w-5 h-5 mr-3 text-primary" />
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => {
                    const Icon = tech.icon || getTechIcon(tech.name);
                    return (
                        <Badge key={tech.name} variant="secondary" className="px-3 py-1 text-sm">
                           <Icon className="w-4 h-4 mr-2" />
                           {tech.name}
                        </Badge>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50">
              <CardContent className="p-6 space-y-4">
                <Button asChild className="w-full">
                  <Link href={project.live || '#'} target="_blank" rel="noopener noreferrer" aria-disabled={!project.live} className={!project.live ? "pointer-events-none opacity-50" : ""}>
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Live Demo
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <Link href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Source Code
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>
      <Footer />
    </div>
  );
}
