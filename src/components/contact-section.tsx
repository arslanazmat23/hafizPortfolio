import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import Link from "next/link";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 sm:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Get In Touch
        </h2>
        <p className="mt-4 text-lg leading-8 text-muted-foreground">
          I'm open to new opportunities and collaborations. Feel free to reach out.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <a href="/resume.pdf" download="QA-Automation-Engineer-Resume.pdf">
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </a>
          </Button>
        </div>
        <div className="mt-12 flex justify-center space-x-6">
          <Link href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Github className="h-8 w-8" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="h-8 w-8" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="mailto:email@example.com" className="text-muted-foreground hover:text-primary transition-colors">
            <Mail className="h-8 w-8" />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
