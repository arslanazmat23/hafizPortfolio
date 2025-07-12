import Link from 'next/link';
import { Button } from './ui/button';
import { MoveRight } from 'lucide-react';
import ContactModal from './contact-modal';

const RotatingBadge = () => (
  <div
    className="relative w-24 h-24 sm:w-28 sm:h-28 group/badge"
    role="img"
    aria-label="Open to work badge animation"
  >
    <div className="absolute inset-[-10px] bg-sky-400/30 rounded-full blur-xl animate-pulse-slow -z-10"></div>
    <svg
      className="absolute inset-0 w-full h-full text-blue-400 animate-spin"
      style={{ animationDuration: '20s' }}
      viewBox="0 0 100 100"
    >
      <path
        id="circlePath"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        d="M 10, 50 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
      />
      <text>
        <textPath
          href="#circlePath"
          startOffset="50%"
          textAnchor="middle"
          fill="white"
          style={{
            fontSize: '10px',
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
          }}
        >
          • Open to work • Open to work
        </textPath>
      </text>
    </svg>
    <div className="absolute inset-0 flex items-center justify-center">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="animate-spin"
        style={{ animationDuration: '3s' }}
      >
        <path
          d="M12 2L14.1213 4.12132L16.2426 2L18.364 4.12132L20.4853 2L22.6066 4.12132L20.4853 6.24264L22.6066 8.36396L20.4853 10.4853L22.6066 12.6066L20.4853 14.7279L22.6066 16.8492L20.4853 18.9705L18.364 16.8492L16.2426 18.9705L14.1213 16.8492L12 18.9705L9.87868 16.8492L7.75736 18.9705L5.63604 16.8492L3.51472 18.9705L1.3934 16.8492L3.51472 14.7279L1.3934 12.6066L3.51472 10.4853L1.3934 8.36396L3.51472 6.24264L1.3934 4.12132L3.51472 2L5.63604 4.12132L7.75736 2L9.87868 4.12132L12 2Z"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  </div>
);

export default function Footer() {
  return (
    <footer id="contact" className="bg-black text-neutral-200">
      <div className="relative py-24 sm:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://placehold.co/1920x1080/000000/000000.png?text=+')",
          }}
          data-ai-hint="abstract fluid black"
        ></div>
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">

            <div className="w-1/2 mx-auto my-8 h-px relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,hsl(var(--primary)),transparent)] animate-divider-wipe"></div>
            </div>

            <div className="flex flex-col items-center sm:flex-row gap-8">
              <h2 className="font-headline text-4xl sm:text-5xl font-bold leading-tight uppercase tracking-tight text-white [text-shadow:0_2px_4px_rgba(0,0,0,0.6)]">
                From concept to{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                  creation
                </span>
                <br />
                Let's make it <span className="underline decoration-wavy decoration-indigo-500">happen!</span>
              </h2>
              <div className="hidden md:block">
                <RotatingBadge />
              </div>
            </div>

            <div className="mt-10">
              <ContactModal>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-52 h-14 rounded-full bg-white/10 border-white text-white transition-all duration-300 group hover:bg-gradient-to-r hover:from-purple-500 hover:to-teal-500 hover:border-transparent hover:text-white hover:scale-105"
                >
                  Get in Touch{' '}
                  <MoveRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </ContactModal>
            </div>

            <div className="mt-8 text-center max-w-xl mx-auto">
                <p className="text-xl font-semibold text-white">
                I'm available for full-time roles & freelance projects.
                </p>
                <p className="mt-2 text-base text-neutral-400 opacity-90">
                I thrive on crafting dynamic web applications, and delivering
                seamless user experiences.
                </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black py-8 border-t border-neutral-800/50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-neutral-500 text-sm">
            &copy; {new Date().getFullYear()} Aayush Bharti. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/about" className="text-sm text-neutral-400 hover:text-white">
              About
            </Link>
            <Link href="/#projects" className="text-sm text-neutral-400 hover:text-white">
              Work
            </Link>
            <Link href="/blog" className="text-sm text-neutral-400 hover:text-white">
              Blog
            </Link>
            <Link href="/uses" className="text-sm text-neutral-400 hover:text-white">
              Uses
            </Link>
            <Link href="/links" className="text-sm text-neutral-400 hover:text-white">
              Links
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
