
'use client';

import Header from '@/components/header';
import Footer from '@/components/footer';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Linkedin, Mail, SendHorizonal, MessageSquareText, Twitter, Copy } from 'lucide-react';
import Link from 'next/link';
import { useToast } from "@/hooks/use-toast";

const BlueSkyIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 12c-3.333 0-6.667 2.667-10 8c0-5.333 2.667-10.667 8-16c5.333 5.333 8 10.667 8 16c-3.333-5.333-6.667-8-10-8Z"/>
    </svg>
);

const professionalLinks = [
    { name: 'LinkedIn', href: '#', icon: <Linkedin className="w-6 h-6" /> },
    { name: 'GitHub', href: '#', icon: <Github className="w-6 h-6" /> },
];

const socialLinks = [
    { name: 'Telegram', href: '#', icon: <SendHorizonal className="w-6 h-6" /> },
    { name: 'Guestbook', href: '#', icon: <MessageSquareText className="w-6 h-6" /> },
    { name: 'X (Twitter)', href: '#', icon: <Twitter className="w-6 h-6" /> },
    { name: 'BlueSky', href: '#', icon: <BlueSkyIcon /> },
];

export default function LinksPage() {
    const { toast } = useToast();

    const copyEmail = () => {
        navigator.clipboard.writeText('hello@aayushbharti.in');
        toast({
            title: 'Copied to clipboard!',
            description: 'hello@aayushbharti.in',
        });
    };

    return (
        <div className="bg-black text-neutral-300 min-h-screen font-body flex flex-col">
            <Header />
            <main className="flex-grow container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 sm:py-20 flex flex-col items-center">
                
                <header className="text-center mb-12">
                    <h1 className="font-headline text-4xl sm:text-5xl font-bold text-white">
                        Connect With Me
                    </h1>
                    <p className="mt-4 text-lg text-neutral-400 max-w-2xl mx-auto">
                        I’m active on these platforms—drop a hello!
                    </p>
                </header>

                <div className="flex flex-col items-center text-center mb-12">
                    <Avatar className="w-24 h-24 mb-4 border-2 border-primary/50">
                        <AvatarImage src="https://placehold.co/100x100.png" alt="Aayush Bharti" data-ai-hint="professional portrait" />
                        <AvatarFallback>AB</AvatarFallback>
                    </Avatar>
                    <h2 className="font-headline text-2xl font-bold text-white">Aayush Bharti</h2>
                    <div className="flex flex-wrap justify-center gap-2 mt-3">
                        <Badge variant="secondary" className="bg-blue-900/50 text-blue-300 border-blue-500/30">Developer</Badge>
                        <Badge variant="secondary" className="bg-green-900/50 text-green-300 border-green-500/30">Freelancer</Badge>
                        <Badge variant="secondary" className="bg-purple-900/50 text-purple-300 border-purple-500/30">Problem Solver</Badge>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 mt-6">
                        <Button asChild size="lg" variant="outline" className="bg-neutral-900 border-neutral-800 hover:bg-neutral-800 hover:text-white">
                           <Link href="/">
                             Website <ExternalLink className="ml-2 h-4 w-4" />
                           </Link>
                        </Button>
                        <Button size="lg" variant="outline" className="bg-neutral-900 border-neutral-800 hover:bg-neutral-800 hover:text-white" onClick={copyEmail}>
                           Copy Email <Copy className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </div>

                <div className="w-full">
                    <Section title="Professional">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {professionalLinks.map((link) => (
                                <LinkCard key={link.name} {...link} />
                            ))}
                        </div>
                    </Section>
                    
                    <Section title="Community & Social">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                            {socialLinks.map((link) => (
                                <LinkCard key={link.name} {...link} />
                            ))}
                        </div>
                    </Section>
                </div>
                 <div className="text-center mt-16">
                    <p className="text-neutral-400">
                        Prefer real-time chat? Let’s hop on{' '}
                        <Link href="#" className="font-semibold text-primary hover:underline">
                            Telegram!
                        </Link>
                    </p>
                </div>

            </main>
            <Footer />
        </div>
    );
}

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <section className="mb-12">
        <h3 className="font-headline text-xl text-neutral-400 mb-4">{title}</h3>
        {children}
    </section>
);

const LinkCard = ({ name, href, icon }: { name: string, href: string, icon: React.ReactNode }) => (
    <Link href={href} target="_blank" rel="noopener noreferrer" className="group">
        <div className="w-full bg-neutral-900/80 border border-neutral-800 rounded-lg p-4 flex items-center justify-between transition-all duration-300 group-hover:border-primary/50 group-hover:bg-neutral-800/80 group-hover:-translate-y-1 group-hover:shadow-lg group-hover:shadow-primary/20">
            <div className="flex items-center gap-4">
                <div className="text-neutral-400 group-hover:text-primary transition-colors">
                    {icon}
                </div>
                <span className="font-bold text-white text-lg">{name}</span>
            </div>
            <ExternalLink className="w-5 h-5 text-neutral-500 group-hover:text-white transition-colors" />
        </div>
    </Link>
);

    