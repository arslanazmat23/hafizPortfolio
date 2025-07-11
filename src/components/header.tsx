'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, TestTube2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
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
          'text-sm font-medium transition-colors hover:text-primary',
          isMobile ? 'block p-4 text-lg' : 'px-4'
        )}
      >
        {label}
      </Link>
    ));

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full border-b transition-all',
        isScrolled ? 'border-border bg-background/80 backdrop-blur-sm' : 'border-transparent'
      )}
    >
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <TestTube2 className="h-6 w-6 text-primary" />
          <span className="font-headline text-xl font-bold">AutoProfolio</span>
        </Link>
        <nav className="hidden md:flex items-center">{renderNavLinks(false)}</nav>
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="mt-8 flex flex-col items-center gap-4">{renderNavLinks(true)}</nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
