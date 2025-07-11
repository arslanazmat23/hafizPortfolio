import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ContactModal from './contact-modal';

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden py-20 sm:py-32 bg-background">
      <div className="stars"></div>
      <div className="twinkling"></div>
      <div className="glow-effect"></div>
      
      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          I help engineering teams build reliable software through{' '}
          <span className="bg-gradient-to-r from-primary via-purple-400 to-accent bg-clip-text text-transparent italic">
            robust test automation.
          </span>
        </h1>
        
        <div className="mt-8 flex items-center justify-center gap-x-4">
            <p className="text-lg text-muted-foreground">Hello, I'm a</p>
            <Avatar className="w-10 h-10">
              <AvatarImage src="https://placehold.co/100x100.png" alt="QA Automation Engineer" data-ai-hint="professional portrait" />
              <AvatarFallback>QA</AvatarFallback>
            </Avatar>
            <p className="text-lg font-semibold text-foreground">QA Automation Engineer</p>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
          <ContactModal>
            <Button size="lg" className="rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-shadow">
              Let's Connect <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </ContactModal>
        </div>
      </div>
    </section>
  );
}
