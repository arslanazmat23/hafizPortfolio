'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, TestTube2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#certifications', label: 'Certifications' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#hero');
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      const sections = navLinks.map(link => document.querySelector(link.href));
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach(section => {
        if (section && section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
          setActiveLink(`#${section.id}`);
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Set active link on initial load
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setActiveLink(href);
    setOpen(false);
  };

  const renderNavLinks = (isMobile: boolean) =>
    navLinks.map(({ href, label }) => (
      <Link
        key={href}
        href={href}
        onClick={() => handleLinkClick(href)}
        className={cn(
          'text-sm font-medium transition-colors hover:text-primary',
          isMobile ? 'block p-4 text-lg' : 'px-4 py-2 rounded-full',
          activeLink === href && !isMobile ? 'bg-secondary text-primary' : 'text-muted-foreground'
        )}
      >
        {label}
      </Link>
    ));

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all',
        isScrolled ? 'border-b border-border bg-background/80 backdrop-blur-sm' : 'border-transparent'
      )}
    >
      <div className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <TestTube2 className="h-6 w-6 text-primary" />
          <span className="font-headline text-xl font-bold">AutoProfolio</span>
        </Link>
        <div className="hidden md:flex items-center justify-center">
            <nav className="flex items-center gap-2 bg-card/50 p-2 rounded-full border">
                {renderNavLinks(false)}
                <Button asChild size="sm" className='rounded-full'>
                    <Link href="#contact">Contact Me</Link>
                </Button>
            </nav>
        </div>
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="mt-8 flex flex-col items-center gap-4">
                {renderNavLinks(true)}
                 <Button asChild size="lg" className='rounded-full'>
                    <Link href="#contact" onClick={() => handleLinkClick('#contact')}>Contact Me</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}