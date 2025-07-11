import { Briefcase } from "lucide-react";

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

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 sm:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Professional Experience
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            My career journey and key accomplishments.
          </p>
        </div>
        <div className="relative mt-16 max-w-3xl mx-auto">
          <div className="absolute left-5 top-0 h-full w-0.5 bg-border"></div>
          {experienceData.map((item, index) => (
            <div key={index} className="relative pl-12 mb-10">
              <div className="absolute left-0 top-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground ring-8 ring-background">
                  <Briefcase className="h-5 w-5" />
                </div>
              </div>
              <div className="rounded-lg bg-card p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl">
                <div className="flex items-start justify-between flex-col sm:flex-row sm:items-center">
                  <h3 className="text-xl font-bold text-primary">{item.role}</h3>
                  <p className="text-sm font-medium text-muted-foreground mt-1 sm:mt-0">{item.duration}</p>
                </div>
                <p className="mt-1 text-lg font-semibold">{item.company}</p>
                <p className="mt-4 text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
