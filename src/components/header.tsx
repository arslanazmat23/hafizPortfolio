
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, TestTube2, ChevronsRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import ContactModal from './contact-modal';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/#projects', label: 'Work' },
  { href: '/blog', label: 'Blog' },
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

  const isLinkActive = (href: string) => {
    if (href === '/') return pathname === href;
    if (href === '/#projects') return pathname.startsWith('/projects');
    return pathname.startsWith(href);
  };

  const renderNavLinks = (isMobile: boolean) => (
    <>
      {navLinks.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          onClick={handleLinkClick}
          className={cn(
            'text-sm font-medium transition-all hover:text-white',
            isMobile ? 'block p-4 text-lg' : 'px-4 py-2 rounded-full',
            isLinkActive(href)
              ? 'bg-neutral-800 text-white shadow-inner' 
              : 'text-neutral-400'
          )}
        >
          {label}
        </Link>
      ))}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className={cn(
            'text-sm font-medium transition-all hover:text-white',
            isMobile ? 'block p-4 text-lg' : 'px-4 py-2 rounded-full',
            'text-neutral-400'
          )}>More</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-neutral-900 border-neutral-800 text-neutral-300">
          <DropdownMenuItem asChild>
             <Link href="/links" className="w-full">Links</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/uses" className="w-full">Uses</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );

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
        <div className='hidden md:flex justify-end items-center gap-2 min-w-[90px]'>
            <ContactModal>
              <Button size="sm" variant="ghost" className="text-neutral-400 hover:text-white">Book a Call</Button>
            </ContactModal>
            <Button size="sm" className='rounded-full'>
              Get In Touch <ChevronsRight className='ml-1 h-4 w-4' />
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
                 <ContactModal>
                    <Button size="lg" className='rounded-full' onClick={() => handleLinkClick()}>Book a Call</Button>
                 </ContactModal>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
