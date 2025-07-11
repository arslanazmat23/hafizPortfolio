import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Github, Linkedin, MoveRight, Twitter } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export default function AboutMeSection() {
  return (
    <section id="about-me" className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
          <div className="lg:col-span-2">
            <p className="font-headline text-sm font-semibold uppercase text-primary tracking-wider mb-2">
              Know About Me
            </p>
            <h2 className="font-headline text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
              QA Automation Engineer and a little bit of{" "}
              <span className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
                everything
              </span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              I'm a proactive QA automation engineer passionate about creating
              robust testing solutions. From UI to API, I thrive on solving
              complex problems with clean, efficient code. My expertise spans
              Selenium, Cypress, and Playwright, and I'm always eager to learn
              more.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              When I'm not immersed in work, I'm exploring new testing
              methodologies and staying curious. Life's about balance, and I love
              embracing every part of it.
            </p>
            <div className="mt-8 flex items-center gap-6">
              <Button asChild size="lg" variant="outline">
                <Link href="/about">
                  Work Experience <MoveRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <div className="flex items-center gap-4">
                 <Link href="#" className="text-muted-foreground hover:text-primary"><Linkedin className="h-6 w-6" /></Link>
                 <Link href="#" className="text-muted-foreground hover:text-primary"><Github className="h-6 w-6" /></Link>
                 <Link href="#" className="text-muted-foreground hover:text-primary"><Twitter className="h-6 w-6" /></Link>
              </div>
            </div>
          </div>
          <div className="relative w-full max-w-xs mx-auto lg:max-w-none lg:mx-0">
             <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-3xl blur-2xl opacity-50 animate-pulse-slow"></div>
             <Card className="relative rounded-3xl overflow-hidden shadow-2xl">
                 <Image
                    src="https://placehold.co/400x500.png"
                    alt="Professional Portrait"
                    width={400}
                    height={500}
                    className="object-cover w-full h-full"
                    data-ai-hint="professional portrait"
                 />
             </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
