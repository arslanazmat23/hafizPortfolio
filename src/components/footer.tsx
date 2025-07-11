import Link from "next/link";
import { Button } from "./ui/button";
import { Github, Linkedin, Twitter } from "lucide-react";
import ContactModal from "./contact-modal";

const footerLinks = {
  general: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/#projects", label: "Projects" },
    { href: "#", label: "Blog" },
  ],
  specifics: [
    { href: "#", label: "Guest Book" },
    { href: "#", label: "Bucket List" },
    { href: "/uses", label: "Uses" },
    { href: "#", label: "Attribution" },
  ],
  more: [
    { href: "#contact", label: "Contact" },
    { href: "/links", label: "Links" },
    { href: "#", label: "RSS" },
  ],
};

export default function Footer() {
  return (
    <footer id="contact" className='bg-black text-neutral-300 border-t border-neutral-800/50'>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-20">
          <h2 className='font-headline text-4xl sm:text-5xl font-bold text-white'>
            FROM CONCEPT TO CREATION
            <br />
            <span className='relative'>
              LET'S MAKE IT HAPPEN!
              <div className="absolute -right-4 -top-5 sm:-right-8 sm:-top-5">
                <div className="relative w-24 h-24 sm:w-28 sm:h-28">
                  <div className="absolute inset-0 bg-primary/10 rounded-full animate-pulse-slow blur-xl"></div>
                  <svg className="absolute inset-0 w-full h-full text-primary" viewBox="0 0 100 100" style={{ animation: 'rotate 20s linear infinite'}}>
                      <path id="circlePath" fill="none" stroke="none" d="M 10, 50 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" />
                      <text>
                          <textPath href="#circlePath" startOffset="50%" textAnchor="middle" fill="currentColor" style={{fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase'}}>
                              • Open to work • Open to work
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
        
        <div className="pt-10 border-t border-neutral-800/50 flex flex-col sm:flex-row justify-between items-start gap-10">
          <div className="max-w-xs">
            <Link href="/" className="flex items-center gap-2 mb-4">
                <div className='w-8 h-8 bg-neutral-800 border border-neutral-700 rounded-full flex items-center justify-center'>
                    <span className="font-bold text-lg text-white">AB</span>
                </div>
                <span className="font-bold text-lg text-white">Aayush Bharti</span>
            </Link>
            <p className="text-neutral-400 text-sm">
              I'm Aayush - a full-stack developer, freelancer & problem solver. Thanks for checking out my site!
            </p>
            <p className="text-neutral-500 text-sm mt-8">&copy; {new Date().getFullYear()} Aayush Bharti. All rights reserved.</p>
          </div>
          
          <div className="flex-grow grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-white mb-4">General</h3>
              <ul className="space-y-3">
                {footerLinks.general.map(link => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-neutral-400 hover:text-white text-sm transition-colors">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Specifics</h3>
              <ul className="space-y-3">
                {footerLinks.specifics.map(link => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-neutral-400 hover:text-white text-sm transition-colors">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">More</h3>
              <ul className="space-y-3">
                {footerLinks.more.map(link => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-neutral-400 hover:text-white text-sm transition-colors">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex justify-center space-x-6">
            <Link href="#" className="text-neutral-500 hover:text-white transition-colors"><Linkedin /></Link>
            <Link href="#" className="text-neutral-500 hover:text-white transition-colors"><Github /></Link>
            <Link href="#" className="text-neutral-500 hover:text-white transition-colors"><Twitter /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
