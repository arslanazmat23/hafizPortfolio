import Link from "next/link";
import { Button } from "./ui/button";
import { Github, Linkedin, Twitter } from "lucide-react";
import ContactModal from "./contact-modal";

export default function Footer() {
  return (
    <footer id="contact" className='bg-black text-neutral-300 border-t border-neutral-800/50 pt-20 pb-10'>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
            <h2 className='font-headline text-4xl sm:text-5xl font-bold text-white'>
                FROM CONCEPT TO CREATION
                <br/>
                <span className='relative'>
                    LET'S MAKE IT HAPPEN!
                    <div className="absolute -right-20 -top-5 hidden sm:block">
                      <div className="relative w-24 h-24">
                        <div className="absolute inset-0 bg-primary/20 rounded-full animate-pulse-slow blur-md"></div>
                        <svg className="absolute inset-0 w-24 h-24 text-primary" viewBox="0 0 100 100" style={{ animation: 'rotate 20s linear infinite'}}>
                            <path id="circlePath" fill="none" stroke="none" d="M 10, 50 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" />
                            <text>
                                <textPath href="#circlePath" startOffset="50%" textAnchor="middle" fill="currentColor" style={{fontSize: '12px', letterSpacing: '2px'}}>
                                    • OPEN TO WORK • OPEN TO WORK
                                </textPath>
                            </text>
                        </svg>
                      </div>
                    </div>
                </span>
            </h2>

            <div className='mt-8'>
                <ContactModal>
                    <Button size="lg" className="rounded-full">
                        Get in Touch
                    </Button>
                </ContactModal>
            </div>
            
            <p className='mt-8 text-neutral-400'>I'm available for full-time roles & freelance projects.</p>
            <p className="mt-2 text-neutral-500 text-sm max-w-xl mx-auto">I thrive on crafting dynamic web applications, and delivering seamless user experiences.</p>

        </div>
        
        <div className="mt-20 pt-10 border-t border-neutral-800/50 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-4">
                <div className='w-10 h-10 bg-neutral-800 border border-neutral-700 rounded-full flex items-center justify-center'>
                    <span className="font-bold text-lg text-white">AB</span>
                </div>
                <div>
                    <p className="text-white font-semibold">Aayush Bharti</p>
                    <p className="text-neutral-500 text-sm">Full-stack developer & problem solver</p>
                </div>
            </div>
            <div className="text-neutral-500 text-sm order-3 md:order-2">
                <p>&copy; {new Date().getFullYear()} Aayush Bharti. All rights reserved.</p>
            </div>
             <div className="flex justify-center space-x-6 order-2 md:order-3">
              <Link href="#" className="text-neutral-500 hover:text-white transition-colors"><Linkedin /></Link>
              <Link href="#" className="text-neutral-500 hover:text-white transition-colors"><Github /></Link>
              <Link href="#" className="text-neutral-500 hover:text-white transition-colors"><Twitter /></Link>
            </div>
        </div>
      </div>
    </footer>
  );
}
