
'use client';

import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Mail,
  Calendar,
  Linkedin,
  Github,
  Copy,
  Send,
  Loader2,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function ContactModal({ children }: { children: React.ReactNode }) {
  const { toast } = useToast();
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [messageLength, setMessageLength] = useState(0);

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormState('submitting');
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Simulate success/error
    if (Math.random() > 0.1) { // 90% success rate
        setFormState('success');
    } else {
        setFormState('error');
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('hello@yourdomain.com');
    toast({
      title: 'Copied to clipboard!',
      description: 'hello@yourdomain.com',
    });
  };

  const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessageLength(event.target.value.length);
  }

  const renderFormContent = () => {
    switch (formState) {
        case 'success':
            return (
                <div className="text-center py-10">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white">Message Sent!</h3>
                    <p className="text-neutral-400 mt-2">Thanks for reaching out. I'll get back to you soon.</p>
                </div>
            );
        case 'error':
             return (
                <div className="text-center py-10">
                    <AlertCircle className="w-16 h-16 text-destructive mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white">Oops!</h3>
                    <p className="text-neutral-400 mt-2">Something went wrong. Please try again later or contact me via email.</p>
                     <Button onClick={() => setFormState('idle')} className="mt-4">Try Again</Button>
                </div>
            );
        default:
            return (
                 <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium text-neutral-400">Name</label>
                    <Input id="name" type="text" placeholder="Your Name" className="mt-1 bg-neutral-800 border-neutral-700 text-white" required autoFocus />
                  </div>
                  <div>
                     <label htmlFor="email" className="text-sm font-medium text-neutral-400">Email</label>
                    <Input id="email" type="email" placeholder="Your Email" className="mt-1 bg-neutral-800 border-neutral-700 text-white" required />
                  </div>
                  <div>
                    <label htmlFor="message" className="text-sm font-medium text-neutral-400">Message</label>
                    <Textarea id="message" placeholder="Your message..." className="mt-1 bg-neutral-800 border-neutral-700 text-white" rows={4} maxLength={500} required onChange={handleTextareaChange} />
                    <p className="text-xs text-neutral-500 mt-1 text-right">{messageLength} / 500</p>
                  </div>
                  <Button type="submit" className="w-full" disabled={formState === 'submitting'}>
                    {formState === 'submitting' ? (
                        <>
                            <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                            Sending...
                        </>
                    ) : (
                        <>
                           Send Message <Send className="ml-2 w-4 h-4" />
                        </>
                    )}
                  </Button>
                </form>
            )
    }
  }

  return (
    <Dialog onOpenChange={(open) => !open && setFormState('idle')}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-3xl bg-neutral-900 border-neutral-800 p-0">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-8 bg-neutral-800/50 rounded-l-lg flex flex-col">
            <DialogHeader>
              <DialogTitle className="font-headline text-3xl text-white">
                Get in Touch
              </DialogTitle>
              <DialogDescription className="text-neutral-400">
                Let's build something great together.
              </DialogDescription>
            </DialogHeader>
            <div className="mt-8 space-y-4 flex-grow">
              <button onClick={copyEmail} className="w-full text-left group">
                <Card className="bg-neutral-900/80 border-neutral-700/50 group-hover:bg-neutral-800 transition-colors group-hover:scale-[1.02] group-hover:shadow-lg group-hover:shadow-primary/20">
                  <CardContent className="p-4 flex items-center gap-4">
                    <Mail className="w-6 h-6 text-primary" />
                    <div>
                      <p className="font-semibold text-white">Email</p>
                      <p className="text-sm text-neutral-400">hello@yourdomain.com</p>
                    </div>
                    <Copy className="w-5 h-5 text-neutral-500 ml-auto group-hover:text-white transition-colors" />
                  </CardContent>
                </Card>
              </button>
              <Link href="#" className="w-full group block">
                <Card className="bg-neutral-900/80 border-neutral-700/50 group-hover:bg-neutral-800 transition-colors group-hover:scale-[1.02] group-hover:shadow-lg group-hover:shadow-primary/20">
                    <CardContent className="p-4 flex items-center gap-4">
                    <Calendar className="w-6 h-6 text-primary" />
                    <div>
                        <p className="font-semibold text-white">Book a Call</p>
                        <p className="text-sm text-neutral-400">Schedule a meeting</p>
                    </div>
                    </CardContent>
                </Card>
              </Link>
            </div>
             <div className="pt-4 mt-4 border-t border-neutral-800">
                 <p className="text-white mb-2">Find me on:</p>
                 <div className="flex gap-4">
                    <Link href="#" className="text-neutral-400 hover:text-white"><Linkedin/></Link>
                    <Link href="#" className="text-neutral-400 hover:text-white"><Github/></Link>
                 </div>
              </div>
          </div>

          <div className="p-8">
            <Tabs defaultValue="form" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-neutral-800 p-1 h-auto rounded-full">
                <TabsTrigger value="connect" className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Quick Connect</TabsTrigger>
                <TabsTrigger value="form" className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Fill a Form</TabsTrigger>
              </TabsList>
              <TabsContent value="connect" className="mt-6">
                 <p className="text-sm text-neutral-400 mb-4 text-center">
                  Choose one of the options on the left.
                </p>
                <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <p className="text-sm text-green-400">Currently available for new opportunities.</p>
                </div>
              </TabsContent>
              <TabsContent value="form" className="mt-6">
                 <p className="text-sm text-neutral-400 mb-4 text-center">
                    Send me a detailed message.
                </p>
                {renderFormContent()}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
