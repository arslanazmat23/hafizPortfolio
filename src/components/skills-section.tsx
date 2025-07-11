
import { Database, GitBranch, TestTube } from "lucide-react";

// SVG Icon Components for specific technologies
const JavaIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256" preserveAspectRatio="xMidYMid"><path fill="currentColor" d="M152 40a8 8 0 0 1-8 8h-10.3l-12 24h34.3a8 8 0 0 1 0 16h-40.3l-12 24h58.3a8 8 0 0 1 0 16H101.4l-12 24h66.6a8 8 0 0 1 0 16H89.3l-18.61 37.22a8 8 0 1 1-14.18-7.07L74.83 176H32a8 8 0 0 1 0-16h48.3l12-24H44a8 8 0 0 1 0-16h54.3l12-24H80a8 8 0 0 1 0-16h30.6l12-24H72a8 8 0 0 1 0-16h72a8 8 0 0 1 8 8Z"></path></svg>
);
const PythonIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.09 13.43a2.33 2.33 0 1 0-4.13-1.8c-.33.2-.56.44-.73.7a2.5 2.5 0 0 0-1.23 2.1v.23a2.5 2.5 0 0 0 2.5 2.5h1.23a2.5 2.5 0 0 0 2.1-1.23c.16-.26.36-.5.64-.67a2.33 2.33 0 0 0 2.43-3.23zm8.29-5.06a2.33 2.33 0 1 0-4.13-1.8c-.33.2-.56.44-.73.7a2.5 2.5 0 0 0-1.23 2.1v.23a2.5 2.5 0 0 0 2.5 2.5h1.23a2.5 2.5 0 0 0 2.1-1.23c.16-.26.36-.5.64-.67a2.33 2.33 0 0 0 2.43-3.23zM12 11.5v1m0-10v1m-7.5-.5h1m-2.5 13h1m13-2.5v1m-13-2.5v1m2.5-13h1m-.5 15h1"/></svg>
);
const JSIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M1 1h22v22H1V1zm20.25 20.25V2.75H2.75v18.5h18.5zM11.625 8.875H9.375v6.5h2.25v-1.625h.113c.487.975 1.5 1.625 2.887 1.625 2.45 0 4.25-1.925 4.25-4.5s-1.8-4.5-4.25-4.5c-1.387 0-2.4.65-2.887 1.625h-.113v-1.625zm4.625 4.125c0 1.55-1.112 2.625-2.75 2.625-.975 0-1.775-.438-2.25-1.2v-3.05c.475-.763 1.275-1.2 2.25-1.2 1.638 0 2.75 1.075 2.75 2.825z"/></svg>
);
const SeleniumIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M15.22 2H8.78A2.3 2.3 0 0 0 6.5 4.3v15.4A2.3 2.3 0 0 0 8.78 22h6.44A2.3 2.3 0 0 0 17.5 19.7V4.3A2.3 2.3 0 0 0 15.22 2M9 13.8a2.3 2.3 0 0 1 2.3-2.3h1.4a2.3 2.3 0 1 1 0 4.6h-1.4A2.3 2.3 0 0 1 9 13.8m6 .38a2.3 2.3 0 1 1 2.3-2.3a2.3 2.3 0 0 1-2.3 2.3Z"/></svg>
);
const CypressIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.476 2 2 6.476 2 12s4.476 10 10 10s10-4.476 10-10S17.524 2 12 2m4.61 3.468a.333.333 0 0 1 .458.204l1.241 4.966a.335.335 0 0 1-.36.402l-4.965-1.24a.335.335 0 0 1-.205-.458l3.83-3.873zm-9.352 1.39a.334.334 0 0 1 .432-.128l4.474 2.238a.334.334 0 0 1 .128.432l-2.238 4.474a.334.334 0 0 1-.432.128l-4.474-2.238a.334.334 0 0 1-.128-.432l2.238-4.474zm11.233 7.828a.334.334 0 0 1 .128.432l-2.238 4.474a.334.334 0 0 1-.432.128l-4.474-2.238a.334.334 0 0 1-.128-.432l2.238-4.474a.334.334 0 0 1 .432-.128l4.474 2.238z"/></svg>
);
const PlaywrightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256" fill="currentColor"><path d="m237.6 114.3-80-56a16 16 0 0 0-16.2 0l-80 56a16 16 0 0 0-8 14.1V184a16 16 0 0 0 16 16h16v-40a8 8 0 0 1 16 0v40h32v-40a8 8 0 0 1 16 0v40h32v-40a8 8 0 0 1 16 0v40h16a16 16 0 0 0 16-16v-55.6a16 16 0 0 0-8.4-14.1ZM224 184h-8v-40a16 16 0 0 0-32 0v40h-32v-40a16 16 0 0 0-32 0v40H88v-40a16 16 0 0 0-32 0v40h-8V128.4l80-56l80 56Z"/></svg>
);
const JenkinsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10c.854 0 1.688-.112 2.49-.32a.752.752 0 0 0 .548-.548A9.957 9.957 0 0 0 22 12c0-5.523-4.477-10-10-10m3.165 6.1c0 .49-.406.896-.897.896s-.897-.405-.897-.896s.406-.897.897-.897s.897.406.897.897M12 8.448c0 .49-.406.897-.897.897s-.897-.406-.897-.897S10.7.55 11.103.55s.897.407.897.898zM9.9 14.352c0 .608-.49.997-1.012.997s-1.012-.39-1.012-1v-2.705c0-.608.49-.997 1.012-.997s1.012.39 1.012 1zm5.176 0c0 .608-.49.997-1.012.997s-1.012-.39-1.012-1v-2.705c0-.608.49-.997 1.012-.997s1.012.39 1.012 1z"/></svg>
);
const DockerIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M22.01 11.95c0-.21 0-.41-.03-.61l-2.09-.72c-.17-1.13-.53-2.19-1.04-3.17l1.32-1.89c-.52-.8-1.14-1.53-1.84-2.17l-1.98 1.1c-.99-.41-2.06-.68-3.18-.79L12.44 2c-.22 0-.43 0-.64 0h-.4c-.21 0-.41 0-.61.03l-.72 2.09c-1.13.17-2.19.53-3.17 1.04l-1.89-1.32c-.8.52-1.53 1.14-2.17 1.84l1.1 1.98c-.41.99-.68 2.06-.79 3.18L2 11.56c0 .22 0 .43 0 .64v.4c0 .21 0 .41.03.61l2.09.72c.17 1.13.53 2.19 1.04 3.17l-1.32 1.89c.52.8 1.14 1.53 1.84 2.17l1.98-1.1c.99.41 2.06.68 3.18.79l.72 2.06c.22 0 .43.03.64.03h.4c.21 0 .41 0 .61-.03l.72-2.09c1.13-.17 2.19-.53 3.17-1.04l1.89 1.32c.8-.52 1.53-1.14 2.17-1.84l-1.1-1.98c.41-.99.68-2.06.79-3.18l2.06-.72c.03-.21.03-.41.03-.61v-.4M8.13 18.06c-1.57-.49-2.85-1.53-3.66-2.92l-.12-.22c-.2-.36-.36-.74-.5-1.14c-.1-.3-.17-.6-.23-.9l-.36-1.32v-.5c0-.1.02-.2.03-.3l.36-1.33c.06-.3.13-.6.23-.9c.14-.4.3-.78.5-1.14l.12-.22c.8-1.38 2.08-2.42 3.65-2.92l.22-.07c.36-.11.75-.19 1.15-.24l1.32-.17h.5c.1 0 .2.02.3.03l1.33.17c.4.05.78.13 1.15.24l.22.07c1.57.49 2.85 1.53 3.66 2.92l.12.22c.2.36.36.74.5 1.14c.1.3.17.6.23.9l.36 1.32v.5c0 .1-.02.2-.03.3l-.36 1.33c-.06.3-.13.6-.23.9c-.14.4-.3.78-.5 1.14l-.12.22c-.8 1.38-2.08 2.42-3.65 2.92l-.22.07c-.36.11-.75.19-1.15.24l-1.32.17h-.5c-.1 0-.2-.02-.3-.03l-1.33-.17c-.4-.05-.78-.13-1.15-.24l-.22-.07M10 9h2v2h-2zm3 0h2v2h-2zm-6 3h2v2H7zm3 0h2v2h-2zm3 0h2v2h-2zm-6 3h2v2H7zm3 0h2v2h-2zm3 0h2v2h-2z"/></svg>
);
const AppiumIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M16.89 2.11a1 1 0 0 0-1.1.28L12 6.55l-3.79-4.16a1 1 0 0 0-1.1-.28l-5.32 2.9A1 1 0 0 0 1.22 6v12.1a1 1 0 0 0 .57.9l5.31 2.9a1 1 0 0 0 1.11-.28L12 17.45l3.79 4.16a1 1 0 0 0 1.1.28l5.32-2.9a1 1 0 0 0 .57-.9V6a1 1 0 0 0-.57-.9ZM7.78 17.52l-4-2.18V8.78l4 2.18Zm1-4.8L4.3 10.3l1.19-.66L9.82 12Zm0-2.4L6.11 9.14l4.5-5l1.39.77Zm8.44 7.2L13.43 15v-3.72l4-2.18Zm1-5.46L13.43 10l.72-1.3l4.5 2.45Zm-1-2.18l-4.5-2.45L13.43 5l4 2.18Z"/></svg>
);
const JMeterIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1200 1200"><g fill="currentColor"><path d="M1100 0H100C44.77 0 0 44.77 0 100v1000c0 55.23 44.77 100 100 100h1000c55.23 0 100-44.77 100-100V100c0-55.23-44.77-100-100-100"/><path d="m812.5 406.25l-212.5 212.5l-212.5-212.5l-187.5 187.5l400 400l400-400z"/></g></svg>
);
const MavenIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12.005 2c-4.902 0-8.623 3.52-8.623 8.324c0 3.332 2.054 5.923 4.61 7.424V11.51l2.583 2.153l-2.583 2.153v6.18C10.046 22.25 12 19.88 12 19.88s1.954 2.37 3.995-.004v-6.18l-2.583-2.154l2.583-2.153v6.234c2.556-1.5 4.61-4.092 4.61-7.424C20.628 5.52 16.907 2 12.005 2m-.03 2.438c1.37 0 2.5.385 2.5 1s-1.13.99-2.5.99c-1.37 0-2.47-.375-2.47-1s1.1-.99 2.47-.99M6.87 7.03c1.13 0 1.95.353 1.95.82s-.82.85-1.95.85c-1.13 0-1.98-.38-1.98-.85s.85-.82 1.98-.82m10.23 0c1.13 0 1.95.353 1.95.82s-.82.85-1.95.85c-1.13 0-1.98-.38-1.98-.85s.85-.82 1.98-.82m-6.42 2.047c1.13 0 2.21.353 2.21.82s-1.08.85-2.21.85c-1.13 0-2.21-.38-2.21-.85s1.08-.82 2.21-.82Z"/></svg>
);


const skillsData = [
  { name: "Java", icon: <JavaIcon /> },
  { name: "Python", icon: <PythonIcon /> },
  { name: "JavaScript / TypeScript", icon: <JSIcon /> },
  { name: "SQL", icon: <Database className="w-6 h-6" /> },
  { name: "Selenium WebDriver", icon: <SeleniumIcon /> },
  { name: "Cypress", icon: <CypressIcon /> },
  { name: "Playwright", icon: <PlaywrightIcon /> },
  { name: "Rest-Assured", icon: <JMeterIcon /> }, // Using JMeter as a stand-in for API testing
  { name: "TestNG", icon: <TestTube className="w-5 h-5" /> },
  { name: "JUnit", icon: <TestTube className="w-5 h-5" /> },
  { name: "Pytest", icon: <TestTube className="w-5 h-5" /> },
  { name: "Mocha & Chai", icon: <TestTube className="w-5 h-5" /> },
  { name: "Jenkins", icon: <JenkinsIcon /> },
  { name: "Git & GitHub Actions", icon: <GitBranch className="w-6 h-6" /> },
  { name: "Docker", icon: <DockerIcon /> },
  { name: "Appium", icon: <AppiumIcon /> },
  { name: "JMeter", icon: <JMeterIcon /> },
  { name: "Maven", icon: <MavenIcon /> },
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
                <div className="h-8 w-8 flex items-center justify-center text-primary">{skill.icon}</div>
                <span className="text-sm font-medium text-center text-foreground">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

    