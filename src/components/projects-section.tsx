import { Card, CardFooter, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-commerce Test Automation Framework",
    description: "A comprehensive test automation framework for a large-scale e-commerce platform, covering UI, API, and database testing. Built with Selenium, TestNG, and Rest-Assured.",
    image: "https://placehold.co/600x400.png",
    aiHint: "e-commerce abstract",
    tags: ["Java", "Selenium", "TestNG", "Rest-Assured", "Maven"],
    github: "#",
    live: "#"
  },
  {
    title: "Cypress Dashboard for a SaaS App",
    description: "Developed an end-to-end testing suite using Cypress for a complex SaaS application. Integrated with Cypress Dashboard for test analytics and reporting.",
    image: "https://placehold.co/600x400.png",
    aiHint: "dashboard analytics",
    tags: ["Cypress", "TypeScript", "Mocha", "CI/CD"],
    github: "#",
    live: "#"
  },
  {
    title: "Mobile App Performance Testing",
    description: "Led performance testing efforts for a native mobile application using Appium and JMeter. Identified and helped resolve critical performance bottlenecks.",
    image: "https://placehold.co/600x400.png",
    aiHint: "mobile performance",
    tags: ["Appium", "JMeter", "Android", "Performance"],
    github: "#",
    live: null
  },
  {
    title: "API Test Automation with Python",
    description: "Created a lightweight and scalable API test automation framework using Python, Pytest, and Requests library for a microservices-based architecture.",
    image: "https://placehold.co/600x400.png",
    aiHint: "api code",
    tags: ["Python", "Pytest", "Requests", "Docker"],
    github: "#",
    live: null
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 sm:py-32 bg-card">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Automation Projects
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            A selection of projects that demonstrate my skills in action.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative h-48 w-full">
                <Image src={project.image} alt={project.title} fill className="object-cover" data-ai-hint={project.aiHint} />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <CardTitle className="font-headline text-2xl">{project.title}</CardTitle>
                <CardDescription className="mt-2 flex-grow text-muted-foreground">{project.description}</CardDescription>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
                <CardFooter className="mt-4 flex justify-end gap-2 p-0">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </Link>
                  </Button>
                  {project.live && (
                    <Button variant="default" size="sm" asChild>
                      <Link href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Link>
                    </Button>
                  )}
                </CardFooter>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
