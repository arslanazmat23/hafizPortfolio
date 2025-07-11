import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function HeroSection() {
  return (
    <section id="hero" className="py-20 sm:py-32 bg-card">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <Avatar className="w-32 h-32 mx-auto mb-6 ring-4 ring-primary ring-offset-4 ring-offset-background">
          <AvatarImage src="https://placehold.co/200x200.png" alt="QA Automation Engineer" />
          <AvatarFallback>QA</AvatarFallback>
        </Avatar>
        <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
          QA Automation Engineer
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto" data-ai-hint="professional portrait">
          Passionate about quality and automation. I specialize in building robust test frameworks and ensuring software excellence from development to deployment.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button asChild size="lg">
            <Link href="#projects">
              View My Work <ArrowDown className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#contact">Contact Me</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
