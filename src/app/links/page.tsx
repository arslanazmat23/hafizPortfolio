import Header from '@/components/header';
import Footer from '@/components/footer';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Linkedin, Mail, SendHorizonal, MessageSquareText, Twitter } from 'lucide-react';
import Link from 'next/link';

const socialLinks = [
    { name: 'LinkedIn', href: '#', icon: <Linkedin className="w-5 h-5" /> },
    { name: 'Telegram', href: '#', icon: <SendHorizonal className="w-5 h-5" /> },
    { name: 'GitHub', href: '#', icon: <Github className="w-5 h-5" /> },
    { name: 'Guestbook', href: '#', icon: <MessageSquareText className="w-5 h-5" /> },
    { name: 'X (Twitter)', href: '#', icon: <Twitter className="w-5 h-5" /> },
    { 
      name: 'BlueSky', 
      href: '#', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 12c-3.333 0-6.667 2.667-10 8c0-5.333 2.667-10.667 8-16c5.333 5.333 8 10.667 8 16c-3.333-5.333-6.667-8-10-8Z"/>
        </svg>
      ) 
    },
]

export default function LinksPage() {
    return (
        <div className="bg-black text-neutral-300 min-h-screen font-body flex flex-col">
            <Header />
            <main className="flex-grow container mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-12 sm:py-20 flex flex-col items-center">
                <div className="flex flex-col items-center text-center">
                    <Avatar className="w-24 h-24 mb-4 border-2 border-primary/50">
                        <AvatarImage src="https://placehold.co/100x100.png" alt="Aayush Bharti" data-ai-hint="professional portrait" />
                        <AvatarFallback>AB</AvatarFallback>
                    </Avatar>
                    <h1 className="font-headline text-2xl font-bold text-white">Aayush Bharti</h1>
                    <div className="flex flex-wrap justify-center gap-2 mt-3">
                        <Badge variant="secondary" className="bg-blue-900/50 text-blue-300 border-blue-500/30">Developer</Badge>
                        <Badge variant="secondary" className="bg-green-900/50 text-green-300 border-green-500/30">Freelancer</Badge>
                        <Badge variant="secondary" className="bg-purple-900/50 text-purple-300 border-purple-500/30">Problem Solver</Badge>
                    </div>
                    <div className="flex flex-wrap justify-center gap-3 mt-6">
                        <Button asChild variant="outline" className="bg-neutral-900 border-neutral-800 hover:bg-neutral-800 hover:text-white">
                           <Link href="/">
                             Website <ExternalLink className="ml-2 h-4 w-4" />
                           </Link>
                        </Button>
                        <Button asChild variant="outline" className="bg-neutral-900 border-neutral-800 hover:bg-neutral-800 hover:text-white">
                            <Link href="mailto:hello@aayushbharti.in">
                               hello@aayushbharti.in <Mail className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </div>

                <div className="w-full max-w-md mt-12 space-y-4">
                    {socialLinks.map((link) => (
                        <Link href={link.href} key={link.name}>
                            <div className="w-full bg-neutral-900/80 border border-neutral-800 rounded-lg p-4 flex items-center justify-between hover:border-primary/50 hover:bg-neutral-800/80 transition-all duration-300">
                                <div className="flex items-center gap-4">
                                    <div className="text-neutral-400 group-hover:text-white">
                                        {link.icon}
                                    </div>
                                    <span className="font-medium text-white">{link.name}</span>
                                </div>
                                <ExternalLink className="w-4 h-4 text-neutral-500" />
                            </div>
                        </Link>
                    ))}
                </div>

            </main>
            <Footer />
        </div>
    );
}
