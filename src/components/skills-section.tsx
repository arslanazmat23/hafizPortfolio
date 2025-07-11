import { Badge } from "@/components/ui/badge";
import { Code, Cog, Server, TestTube, Cpu, Database, GitBranch, Cloud } from "lucide-react";

const skillsData = [
  { name: "Java", icon: <Code className="w-5 h-5" /> },
  { name: "Python", icon: <Code className="w-5 h-5" /> },
  { name: "JavaScript / TypeScript", icon: <Code className="w-5 h-5" /> },
  { name: "SQL", icon: <Database className="w-5 h-5" /> },
  { name: "Selenium WebDriver", icon: <Cog className="w-5 h-5" /> },
  { name: "Cypress", icon: <Cog className="w-5 h-5" /> },
  { name: "Playwright", icon: <Cog className="w-5 h-5" /> },
  { name: "Rest-Assured", icon: <Cpu className="w-5 h-5" /> },
  { name: "TestNG", icon: <TestTube className="w-5 h-5" /> },
  { name: "JUnit", icon: <TestTube className="w-5 h-5" /> },
  { name: "Pytest", icon: <TestTube className="w-5 h-5" /> },
  { name: "Mocha & Chai", icon: <TestTube className="w-5 h-5" /> },
  { name: "Jenkins", icon: <Server className="w-5 h-5" /> },
  { name: "Git & GitHub Actions", icon: <GitBranch className="w-5 h-5" /> },
  { name: "Docker", icon: <Cloud className="w-5 h-5" /> },
  { name: "Appium", icon: <Cog className="w-5 h-5" /> },
  { name: "JMeter", icon: <Cpu className="w-5 h-5" /> },
  { name: "Maven", icon: <Server className="w-5 h-5" /> },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-6xl mt-2">
            The Secret{' '}
            <span className="bg-gradient-to-r from-primary via-purple-400 to-accent bg-clip-text text-transparent">
              Sauce
            </span>
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
            My toolbox of languages, frameworks, and technologies to ensure software quality and robustness.
          </p>
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {skillsData.map((skill) => (
              <div key={skill.name} className="flex flex-col items-center justify-center gap-3 p-4 bg-card rounded-xl border border-border/20 shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 hover:border-primary/50">
                <div className="text-primary">{skill.icon}</div>
                <span className="text-sm font-medium text-center">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
