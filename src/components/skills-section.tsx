import { Badge } from "@/components/ui/badge";
import { Code, Cog, Server, TestTube, Cpu, Database, GitBranch, Cloud } from "lucide-react";

const skillsData = [
  { name: "Java", icon: <Code className="w-4 h-4" /> },
  { name: "Python", icon: <Code className="w-4 h-4" /> },
  { name: "JavaScript / TypeScript", icon: <Code className="w-4 h-4" /> },
  { name: "SQL", icon: <Database className="w-4 h-4" /> },
  { name: "Selenium WebDriver", icon: <Cog className="w-4 h-4" /> },
  { name: "Cypress", icon: <Cog className="w-4 h-4" /> },
  { name: "Playwright", icon: <Cog className="w-4 h-4" /> },
  { name: "Rest-Assured", icon: <Cpu className="w-4 h-4" /> },
  { name: "TestNG", icon: <TestTube className="w-4 h-4" /> },
  { name: "JUnit", icon: <TestTube className="w-4 h-4" /> },
  { name: "Pytest", icon: <TestTube className="w-4 h-4" /> },
  { name: "Mocha & Chai", icon: <TestTube className="w-4 h-4" /> },
  { name: "Jenkins", icon: <Server className="w-4 h-4" /> },
  { name: "Git & GitHub Actions", icon: <GitBranch className="w-4 h-4" /> },
  { name: "Docker", icon: <Cloud className="w-4 h-4" /> },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
            <p className="font-headline text-base font-semibold uppercase tracking-wider text-muted-foreground">
                My Skills
            </p>
          <h2 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-6xl mt-2">
            The Secret{' '}
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              Sauce
            </span>
          </h2>
          <div className="mt-16 flex flex-wrap justify-center gap-4">
            {skillsData.map((skill) => (
              <Badge key={skill.name} variant="secondary" className="text-sm px-4 py-2 rounded-lg cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1">
                {skill.icon}
                <span>{skill.name}</span>
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
