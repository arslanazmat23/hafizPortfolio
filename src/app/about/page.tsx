import { ArrowRight, Briefcase, Code, Cpu, ExternalLink, Figma, GitBranch, Github, Linkedin, MessageSquare, Music, Tv, Twitter, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Header from '@/components/header';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const experienceData = [
  {
    role: "Frontend Engineer",
    company: "Robotic Studio",
    location: "REMOTE",
    duration: "Jan 2022 - Present",
    description: [
        "As the lead and founding engineer, I architected a web app with Next.js, handling everything from UI design to deployment.",
        "Built a serverless backend with Node.js and Firebase, and integrated Stripe for secure payments. Delivered a 40% faster time-to-market.",
        "Used Partial Prerendering and After for faster loading, and implemented a simplified idea submission system for a seamless UX.",
        "Enhanced browsing with seamless performance optimization and automated testing for reliability."
    ],
    skills: ["React", "Next.js", "Firebase", "Node.js", "Stripe", "CI/CD"],
  },
  {
    role: "Open Source Contributor",
    company: "GitHub",
    location: "REMOTE",
    duration: "Jan 2021 - Present",
    description: [
        "Contributed to open-source projects, improving documentation, fixing bugs, and adding new features.",
        "Collaborated with developers worldwide to create high-quality software and drive community engagement.",
    ],
    skills: ["React", "TypeScript", "Next.js", "Vercel/Next"],
  },
];

const githubStats = [
    { label: "Repositories", value: 191, icon: <Github className="w-5 h-5" /> },
    { label: "Commits", value: 384, icon: <GitBranch className="w-5 h-5" /> },
    { label: "Pull Requests", value: 51, icon: <ExternalLink className="w-5 h-5" /> },
    { label: "Projects", value: 38, icon: <Briefcase className="w-5 h-5" /> },
]

const exploreItems = [
    { 
        title: "My favorite tools and spots",
        description: "Check out my favorite tools and spots around the web.",
        icon: <Figma className="w-6 h-6 text-pink-500" />,
        image: "https://placehold.co/300x200.png",
        aiHint: "design tools abstract"
    },
    { 
        title: "What am I listening to?",
        description: "Recent Favorite: The Dark Side of The Moon by Pink Floyd",
        icon: <Music className="w-6 h-6 text-green-500" />,
        image: "https://placehold.co/300x200.png",
        aiHint: "music abstract"
    },
]

export default function AboutPage() {
  return (
    <div className="bg-black text-neutral-300 min-h-screen font-body">
      <Header />
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        
        <section id="intro" className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start mb-32">
            <div className='lg:col-span-2'>
                <p className="font-headline text-sm font-semibold uppercase text-primary tracking-wider mb-2">
                    About me
                </p>
                <h1 className="font-headline text-4xl sm:text-5xl font-bold text-white">
                    I'm Aayush, a <br /> creative <span className="bg-gradient-to-r from-fuchsia-500 to-purple-500 bg-clip-text text-transparent">engineer</span>
                </h1>
                <div className="mt-6 text-lg text-neutral-400 space-y-4 max-w-2xl">
                    <p>
                        I'm a passionate and goal-driven engineer with a creative flair. I love to design and build amazing products from the ground up, tackling complex problems with elegant solutions. From backend development to UI/UX, I immerse myself in every stage of the process.
                    </p>
                    <p>
                        Since I've continued my work as a freelance engineer, I've had the pleasure of working on some incredible projects. It's been a journey of growth, creativity, and turning ideas into reality.
                    </p>
                </div>
                 <div className="mt-8 flex items-center gap-4">
                    <Link href="#" className="text-neutral-400 hover:text-white"><Linkedin className="h-6 w-6" /></Link>
                    <Link href="#" className="text-neutral-400 hover:text-white"><Github className="h-6 w-6" /></Link>
                    <Link href="#" className="text-neutral-400 hover:text-white"><Twitter className="h-6 w-6" /></Link>
                </div>
            </div>
            <div className="relative w-full max-w-sm mx-auto">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-fuchsia-500/20">
                    <Image src="https://placehold.co/400x500.png" alt="Aayush Bharti" width={400} height={500} className="object-cover" data-ai-hint="professional portrait" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                        <p className="font-bold">Aayush Bharti</p>
                        <p className="text-sm text-neutral-300">I Code</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="experience" className="mb-32">
          <p className="font-headline text-sm font-semibold uppercase text-primary tracking-wider mb-2 text-center">
            Experience
          </p>
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-center mb-16 text-white">
            Experience That<br />Brings <span className='bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent'>Ideas to Life</span>
          </h2>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-4 top-0 h-full w-0.5 bg-neutral-800"></div>
            {experienceData.map((item, index) => (
              <div key={index} className="relative pl-12 mb-16">
                <div className="absolute left-0 top-0">
                    <div className="w-8 h-8 rounded-full bg-neutral-900 border-2 border-neutral-700 flex items-center justify-center">
                        <div className="w-4 h-4 rounded-full bg-gradient-to-br from-fuchsia-500 to-purple-500 shadow-[0_0_10px_2px] shadow-fuchsia-500/50"></div>
                    </div>
                </div>
                <div className="flex justify-between items-start flex-col sm:flex-row">
                    <div>
                      <p className='text-sm text-neutral-500'>{item.company} • {item.location}</p>
                      <h3 className="text-xl font-bold text-white mt-1">{item.role}</h3>
                    </div>
                    <p className='text-sm text-neutral-500 mt-2 sm:mt-0'>{item.duration}</p>
                </div>
                <div className="mt-4 text-neutral-400 space-y-3">
                  {item.description.map((desc, i) => <p key={i}>{desc}</p>)}
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {item.skills.map(skill => <Badge key={skill} variant="secondary" className="bg-neutral-800 text-neutral-300 border border-neutral-700 hover:bg-neutral-700">{skill}</Badge>)}
                </div>
              </div>
            ))}
          </div>
        </section>
        
        <section id="github-activity" className="mb-32">
            <p className="font-headline text-sm font-semibold uppercase text-primary tracking-wider mb-2 text-center">
                Stats
            </p>
            <h2 className="font-headline text-3xl sm:text-4xl font-bold text-center mb-16 text-white">
                GitHub <span className='bg-gradient-to-r from-fuchsia-500 to-purple-500 bg-clip-text text-transparent'>Activity</span>
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {githubStats.map(stat => (
                    <Card key={stat.label} className="bg-neutral-900 border border-neutral-800 p-6 text-center">
                        <div className="w-12 h-12 rounded-lg bg-neutral-800 flex items-center justify-center mx-auto mb-4 text-primary">
                           {stat.icon}
                        </div>
                        <p className="text-3xl font-bold text-white">{stat.value}</p>
                        <p className="text-neutral-400">{stat.label}</p>
                    </Card>
                ))}
            </div>
            <div className='max-w-4xl mx-auto mt-8'>
                <Image src="https://placehold.co/1000x200.png" width={1000} height={200} alt="GitHub contribution graph" className='w-full' data-ai-hint="github contributions graph" />
            </div>
        </section>

        <section id="explore" className="mb-32">
             <p className="font-headline text-sm font-semibold uppercase text-primary tracking-wider mb-2 text-center">
                Hobbies
            </p>
            <h2 className="font-headline text-3xl sm:text-4xl font-bold text-center mb-16 text-white">
                Explore, experiment<br/>&& <span className='bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent'>say bello</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {exploreItems.map(item => (
                    <Card key={item.title} className="bg-neutral-900 border border-neutral-800 p-6 flex items-start gap-6">
                        <div className="w-12 h-12 rounded-lg bg-neutral-800 flex items-center justify-center flex-shrink-0">
                           {item.icon}
                        </div>
                        <div>
                           <h3 className="font-bold text-white">{item.title}</h3>
                           <p className="text-neutral-400 mt-1">{item.description}</p>
                        </div>
                    </Card>
                ))}
            </div>
        </section>

        <footer className='text-center pt-20 border-t border-neutral-800/50'>
            <div className="inline-block relative mb-8">
                <div className='w-12 h-12 bg-neutral-800 border border-neutral-700 rounded-full flex items-center justify-center'>
                    <span className="font-bold text-lg text-white">AB</span>
                </div>
            </div>
            <h2 className='font-headline text-4xl sm:text-5xl font-bold text-white'>
                FROM CONCEPT TO CREATION
                <br/>
                <span className='relative'>
                    LET'S MAKE IT HAPPEN!
                    <span className="view-details-spin absolute -right-12 -top-2 w-10 h-10 border-2 border-dashed border-primary rounded-full"></span>
                </span>
            </h2>

            <div className='mt-8'>
                <Button size="lg" className="rounded-full">
                    <Link href="#contact">Get in Touch</Link>
                </Button>
            </div>
            
            <p className='mt-8 text-neutral-500'>I'm available for full-time roles & freelance projects.</p>

            <div className="mt-12 flex justify-center space-x-6">
              <Link href="#" className="text-neutral-500 hover:text-white transition-colors"><Linkedin /></Link>
              <Link href="#" className="text-neutral-500 hover:text-white transition-colors"><Github /></Link>
              <Link href="#" className="text-neutral-500 hover:text-white transition-colors"><Twitter /></Link>
            </div>

            <div className='mt-16 text-neutral-600 text-sm'>
                <p>&copy; {new Date().getFullYear()} Aayush Bharti. All rights reserved.</p>
            </div>
        </footer>

      </div>
    </div>
  );
}
