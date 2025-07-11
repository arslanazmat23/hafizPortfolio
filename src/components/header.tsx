'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, TestTube2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/#projects', label: 'Work' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setOpen(false);
  };

  const renderNavLinks = (isMobile: boolean) =>
    navLinks.map(({ href, label }) => (
      <Link
        key={href}
        href={href}
        onClick={handleLinkClick}
        className={cn(
          'text-sm font-medium transition-all hover:text-white',
          isMobile ? 'block p-4 text-lg' : 'px-4 py-2 rounded-full',
          (pathname === href || (href === '/#projects' && pathname.startsWith('/projects')))
            ? 'bg-neutral-800 text-white shadow-inner' 
            : 'text-neutral-400'
        )}
      >
        {label}
      </Link>
    ));

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all',
        isScrolled ? 'border-b border-neutral-800/50 bg-black/80 backdrop-blur-sm' : 'border-transparent'
      )}
    >
      <div className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-bold text-lg text-white">AB</span>
        </Link>
        <div className="hidden md:flex items-center justify-center">
            <nav className="flex items-center gap-2 bg-neutral-900/50 p-2 rounded-full border border-neutral-800/50">
                {renderNavLinks(false)}
            </nav>
        </div>
        <div className='hidden md:flex justify-end min-w-[90px]'>
            <Button asChild size="sm" className='rounded-full'>
                <Link href="#contact">Contact</Link>
            </Button>
        </div>
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-neutral-900 border-l-neutral-800">
              <nav className="mt-8 flex flex-col items-center gap-4">
                {renderNavLinks(true)}
                 <Button asChild size="lg" className='rounded-full'>
                    <Link href="#contact" onClick={() => handleLinkClick()}>Contact</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
