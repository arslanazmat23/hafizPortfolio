import { Briefcase, Building, Calendar, Github } from 'lucide-react';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Header from '@/components/header';

const experienceData = [
  {
    role: "Senior QA Automation Engineer",
    company: "Tech Solutions Inc.",
    duration: "Jan 2021 - Present",
    description: "Lead the design and implementation of automation frameworks. Mentored junior engineers and improved test coverage by 40%.",
  },
  {
    role: "QA Automation Engineer",
    company: "Innovate LLC",
    duration: "Jun 2018 - Dec 2020",
    description: "Developed and maintained automated test scripts for web applications using Selenium and Java. Reduced regression testing time by 60%.",
  },
  {
    role: "Software QA Tester",
    company: "Data Corp",
    duration: "Jul 2016 - May 2018",
    description: "Performed manual testing, reported bugs, and contributed to the creation of test plans and test cases.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Header />
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <header className="text-center mb-16">
          <Avatar className="w-24 h-24 mx-auto mb-4 border-4 border-primary/50 shadow-lg">
            <AvatarImage src="https://placehold.co/100x100.png" alt="QA Automation Engineer" data-ai-hint="professional portrait" />
            <AvatarFallback>QA</AvatarFallback>
          </Avatar>
          <h1 className="font-headline text-4xl sm:text-5xl font-bold text-foreground">
            Aayush Bharti
          </h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-muted-foreground">
            I'm a proactive QA Automation Engineer passionate about building robust testing solutions and ensuring software quality.
          </p>
        </header>

        <section id="experience">
          <h2 className="font-headline text-3xl font-bold text-center mb-12 text-foreground">Work Experience</h2>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-5 top-0 h-full w-0.5 bg-border/50"></div>
            {experienceData.map((item, index) => (
              <div key={index} className="relative pl-12 mb-10">
                <div className="absolute left-0 top-1">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-card ring-8 ring-background">
                    <Briefcase className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <Card className="bg-card/50 border border-border/20 shadow-sm hover:shadow-primary/10 hover:border-primary/30 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between flex-col sm:flex-row sm:items-center">
                      <h3 className="text-xl font-bold text-primary">{item.role}</h3>
                      <div className="flex items-center text-sm text-muted-foreground mt-2 sm:mt-0 gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{item.duration}</span>
                      </div>
                    </div>
                    <div className="flex items-center text-md font-semibold text-muted-foreground gap-2">
                      <Building className="w-4 h-4" />
                      <span>{item.company}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </section>

        <section id="github-activity" className="mt-20">
            <h2 className="font-headline text-3xl font-bold text-center mb-12 text-foreground">GitHub Activity</h2>
            <div className="max-w-3xl mx-auto text-center">
                <Card className="bg-card/50 border border-border/20 p-8">
                    <Github className="h-12 w-12 mx-auto text-primary mb-4" />
                    <h3 className="text-2xl font-bold text-foreground mb-2">My GitHub Contributions</h3>
                    <p className="text-muted-foreground mb-6">This section can be used to showcase GitHub stats like commit history, repositories, and contribution graphs once connected to the GitHub API.</p>
                    <Link href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        Visit my GitHub profile
                    </Link>
                </Card>
            </div>
        </section>

      </div>
    </div>
  );
}
