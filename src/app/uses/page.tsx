import Header from '@/components/header';
import Footer from '@/components/footer';
import { Card } from '@/components/ui/card';
import { Code2, PenTool, Wind, Monitor, Terminal, Bot, Search } from 'lucide-react';

const VercelIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 19.7778H22L12 2Z" fill="white"/>
    </svg>
);

const tools = [
  {
    category: "Development",
    items: [
      { name: "VS Code", description: "My primary code editor.", icon: <Code2 /> },
      { name: "iTerm2", description: "The best terminal for macOS.", icon: <Terminal /> },
      { name: "Vercel", description: "For hosting my projects.", icon: <VercelIcon /> },
      { name: "GitHub", description: "For version control.", icon: <Bot /> },
    ]
  },
  {
    category: "Design",
    items: [
      { name: "Figma", description: "For all my design needs.", icon: <PenTool /> },
    ]
  },
  {
    category: "Productivity",
    items: [
      { name: "Raycast", description: "A brilliant launcher.", icon: <Wind /> },
      { name: "Arc", description: "My favorite browser.", icon: <Search /> },
    ]
  }
];

export default function UsesPage() {
  return (
    <div className="bg-black text-neutral-300 min-h-screen font-body">
      <Header />
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <header className="text-center mb-16">
          <p className="font-headline text-sm font-semibold uppercase text-primary tracking-wider mb-2">
            My Toolbox
          </p>
          <h1 className="font-headline text-4xl sm:text-5xl font-bold text-white">
            Tools I Use Daily
          </h1>
          <p className="mt-4 text-lg text-neutral-400 max-w-2xl mx-auto">
            A curated list of the software, hardware, and tools I use to get things done.
          </p>
        </header>

        <div className="space-y-16">
          {tools.map(group => (
            <section key={group.category}>
              <h2 className="font-headline text-2xl sm:text-3xl font-bold text-white mb-8">{group.category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {group.items.map(tool => (
                  <Card key={tool.name} className="bg-neutral-900 border border-neutral-800 p-6 flex items-start gap-6 hover:border-primary/50 transition-colors">
                    <div className="w-12 h-12 rounded-lg bg-neutral-800 flex items-center justify-center flex-shrink-0 text-primary">
                       {tool.icon}
                    </div>
                    <div>
                       <h3 className="font-bold text-white text-lg">{tool.name}</h3>
                       <p className="text-neutral-400 mt-1">{tool.description}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}