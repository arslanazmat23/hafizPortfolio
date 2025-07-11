
'use client';

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
  MessageSquare,
  Send,
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import Link from 'next/link';

export default function ContactModal({ children }: { children: React.ReactNode }) {
  const { toast } = useToast();

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Here you would typically handle form submission, e.g., send an email
    toast({
      title: 'Message Sent!',
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    // You might want to close the dialog here
  };
  
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-3xl bg-neutral-900 border-neutral-800 p-0">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-8 bg-neutral-800/50 rounded-l-lg">
            <DialogHeader>
              <DialogTitle className="font-headline text-3xl text-white">
                Get in Touch
              </DialogTitle>
              <DialogDescription className="text-neutral-400">
                Let's build something great together.
              </DialogDescription>
            </DialogHeader>
            <div className="mt-8 space-y-4">
              <Card className="bg-neutral-900/80 border-neutral-700/50">
                <CardContent className="p-4 flex items-center gap-4">
                  <Mail className="w-6 h-6 text-primary" />
                  <div>
                    <p className="font-semibold text-white">Email</p>
                    <a
                      href="mailto:hello@yourdomain.com"
                      className="text-sm text-neutral-400 hover:text-white"
                    >
                      hello@yourdomain.com
                    </a>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-neutral-900/80 border-neutral-700/50">
                <CardContent className="p-4 flex items-center gap-4">
                  <Calendar className="w-6 h-6 text-primary" />
                  <div>
                    <p className="font-semibold text-white">Book a Call</p>
                    <a href="#" className="text-sm text-neutral-400 hover:text-white">
                      Schedule a meeting
                    </a>
                  </div>
                </CardContent>
              </Card>
              <div className="pt-4 border-t border-neutral-800">
                 <p className="text-white mb-2">Find me on:</p>
                 <div className="flex gap-4">
                    <Link href="#" className="text-neutral-400 hover:text-white"><Linkedin/></Link>
                    <Link href="#" className="text-neutral-400 hover:text-white"><Github/></Link>
                 </div>
              </div>
            </div>
          </div>

          <div className="p-8">
            <Tabs defaultValue="form" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-neutral-800">
                <TabsTrigger value="connect">Quick Connect</TabsTrigger>
                <TabsTrigger value="form">Fill a Form</TabsTrigger>
              </TabsList>
              <TabsContent value="connect" className="mt-6">
                <p className="text-neutral-300 mb-4">
                  The quickest way to get a response. Feel free to reach out directly via email or schedule a call.
                </p>
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <p className="text-sm text-green-400">Currently available for new opportunities.</p>
                </div>
              </TabsContent>
              <TabsContent value="form" className="mt-6">
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium text-neutral-400">Name</label>
                    <Input id="name" type="text" placeholder="Your Name" className="mt-1 bg-neutral-800 border-neutral-700 text-white" required />
                  </div>
                  <div>
                     <label htmlFor="email" className="text-sm font-medium text-neutral-400">Email</label>
                    <Input id="email" type="email" placeholder="Your Email" className="mt-1 bg-neutral-800 border-neutral-700 text-white" required />
                  </div>
                  <div>
                    <label htmlFor="message" className="text-sm font-medium text-neutral-400">Message</label>
                    <Textarea id="message" placeholder="Your message..." className="mt-1 bg-neutral-800 border-neutral-700 text-white" rows={4} maxLength={500} required />
                    <p className="text-xs text-neutral-500 mt-1 text-right">Max 500 characters</p>
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message <Send className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
