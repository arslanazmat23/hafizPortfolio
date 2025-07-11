import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Cog, Server, TestTube } from "lucide-react";
import SkillBar from "./skill-bar";

const skillsData = {
  languages: [
    { name: "Java", level: 90 },
    { name: "Python", level: 85 },
    { name: "JavaScript / TypeScript", level: 80 },
    { name: "SQL", level: 75 },
  ],
  automationTools: [
    { name: "Selenium WebDriver", level: 95 },
    { name: "Cypress", level: 85 },
    { name: "Playwright", level: 80 },
    { name: "Rest-Assured", level: 90 },
  ],
  testingFrameworks: [
    { name: "TestNG", level: 90 },
    { name: "JUnit", level: 85 },
    { name: "Pytest", level: 80 },
    { name: "Mocha & Chai", level: 75 },
  ],
  cicd: [
    { name: "Jenkins", level: 85 },
    { name: "Git & GitHub Actions", level: 90 },
    { name: "Docker", level: 70 },
  ],
};

const SectionCard = ({ title, icon: Icon, children }: { title: string, icon: React.ElementType, children: React.ReactNode }) => (
  <Card className="transition-shadow duration-300 hover:shadow-xl">
    <CardHeader className="flex flex-row items-center gap-4">
      <Icon className="h-8 w-8 text-primary" />
      <CardTitle className="font-headline text-2xl">{title}</CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
      {children}
    </CardContent>
  </Card>
);

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 sm:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Technical Skills
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            A snapshot of my technical capabilities and tools I excel in.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          <SectionCard title="Languages" icon={Code}>
            {skillsData.languages.map((skill) => <SkillBar key={skill.name} {...skill} />)}
          </SectionCard>
          <SectionCard title="Automation Tools" icon={Cog}>
            {skillsData.automationTools.map((skill) => <SkillBar key={skill.name} {...skill} />)}
          </SectionCard>
          <SectionCard title="Testing Frameworks" icon={TestTube}>
            {skillsData.testingFrameworks.map((skill) => <SkillBar key={skill.name} {...skill} />)}
          </SectionCard>
          <SectionCard title="CI/CD & DevOps" icon={Server}>
            {skillsData.cicd.map((skill) => <SkillBar key={skill.name} {...skill} />)}
          </SectionCard>
        </div>
      </div>
    </section>
  );
}
