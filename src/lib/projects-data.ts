import { Code, TestTube, Server, Cloud, GitBranch, Cpu, Database, ExternalLink, Github } from 'lucide-react';

export const projects = [
  {
    slug: "ecommerce-test-framework",
    title: "E-commerce Test Automation Framework",
    description: "A comprehensive test automation framework for a large-scale e-commerce platform, covering UI, API, and database testing. Built with Selenium, TestNG, and Rest-Assured, it improved regression testing efficiency by 70%.",
    image: "https://placehold.co/800x600.png",
    aiHint: "e-commerce abstract",
    tags: ["Java", "Selenium", "TestNG", "Rest-Assured", "Maven", "Jenkins"],
    github: "#",
    live: "#",
    overview: "This project involved creating a robust, data-driven test automation framework from scratch for a high-traffic e-commerce website. The framework handles UI validation, API testing for microservices, and database integrity checks.",
    keyFeatures: [
      { title: "Leveraged Partial Prerendering and After for faster loading.", icon: Code},
      { title: "Simplified idea submission with a clean, intuitive design.", icon: TestTube},
      { title: "Enhanced browsing with seamless performance optimization.", icon: Server},
      { title: "Page Object Model (POM) for maintainability and scalability.", icon: Code },
      { title: "Parallel test execution using TestNG to reduce run time.", icon: TestTube },
      { title: "CI/CD integration with Jenkins for automated regression runs.", icon: Server },
    ],
    techStack: [
      { name: "Java", icon: Code },
      { name: "Selenium", icon: Cog },
      { name: "TestNG", icon: TestTube },
      { name: "Rest-Assured", icon: Cpu },
      { name: "Maven", icon: Server },
      { name: "Jenkins", icon: Server },
      { name: "PostgreSQL", icon: Database },
      { name: "Git", icon: GitBranch },
    ],
    challenges: "One of the main challenges was handling dynamic web elements and ensuring tests were stable across different environments (staging, production). Another was integrating API and UI tests into a single, cohesive report.",
    learnings: "This project deepened my understanding of building scalable automation frameworks and the importance of a solid CI/CD pipeline. I also gained valuable experience in performance tuning of test scripts.",
    outcome: "The framework reduced manual regression testing effort by over 70%, decreased bug leakage to production by 40%, and provided rapid feedback to developers through automated nightly builds."
  },
  {
    slug: "cypress-saas-dashboard",
    title: "Cypress Dashboard for a SaaS App",
    description: "Developed an end-to-end testing suite using Cypress for a complex SaaS application. Integrated with Cypress Dashboard for test analytics and reporting.",
    image: "https://placehold.co/800x600.png",
    aiHint: "dashboard analytics",
    tags: ["Cypress", "TypeScript", "Mocha", "CI/CD", "JavaScript"],
    github: "#",
    live: "#",
    overview: "This project focused on building a modern, fast, and reliable end-to-end testing solution for a SaaS platform using Cypress and TypeScript. The goal was to ensure high-quality releases and get detailed insights into test runs.",
    keyFeatures: [
      { title: "Cypress real-time reloads and interactive test runner for faster development.", icon: Code },
      { title: "Custom Cypress commands to handle complex application-specific logic.", icon: Code },
      { title: "Integration with Cypress Dashboard for video recordings, screenshots, and analytics.", icon: TestTube },
      { title: "Automated visual regression testing to catch UI bugs.", icon: TestTube },
    ],
    techStack: [
      { name: "Cypress", icon: Cog },
      { name: "TypeScript", icon: Code },
      { name: "Mocha", icon: TestTube },
      { name: "GitHub Actions", icon: GitBranch },
      { name: "Docker", icon: Cloud },
    ],
    challenges: "A key challenge was managing test data effectively to ensure tests were independent and repeatable. Setting up a stable CI/CD pipeline with GitHub Actions that runs the Cypress suite on every pull request was also a complex task.",
    learnings: "Gained expertise in modern frontend testing with Cypress and TypeScript. Learned best practices for structuring a large Cypress project and leveraging the Cypress Dashboard for effective test management and reporting.",
    outcome: "Achieved 95% test coverage for critical user flows. Reduced the time to run the entire E2E suite by 50% compared to the previous Selenium-based solution. Enabled developers to catch bugs earlier in the development cycle."
  },
];

// Helper to get an icon for a tag
import { Cog } from 'lucide-react';

export const getTechIcon = (techName: string) => {
  const mapping: { [key: string]: React.ElementType } = {
    'java': Code,
    'python': Code,
    'javascript / typescript': Code,
    'sql': Database,
    'selenium webdriver': Cog,
    'cypress': Cog,
    'playwright': Cog,
    'rest-assured': Cpu,
    'testng': TestTube,
    'junit': TestTube,
    'pytest': TestTube,
    'mocha & chai': TestTube,
    'jenkins': Server,
    'git & github actions': GitBranch,
    'docker': Cloud,
    'appium': Cog,
    'jmeter': Cpu,
    'maven': Server,
    'next.js': Code,
    'react': Code,
    'typescript': Code,
    'tailwindcss': Code,
    'sanity cms': Database,
    'auth.js': Server,
  };
  const icon = mapping[techName.toLowerCase()];
  return icon ? icon : Code;
};
