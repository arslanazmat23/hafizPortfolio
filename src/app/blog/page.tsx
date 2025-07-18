
'use client';
import Image from 'next/image';
import Link from 'next/link';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Kbd } from '@/components/ui/kbd';
import { Calendar, Clock, Search, Hash } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

import { blogPosts, topics } from '@/lib/blog-data';
import Footer from '@/components/footer';
import Header from '@/components/header';

export default function BlogPage() {
  const getFormattedDistance = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return formatDistanceToNow(date, { addSuffix: true });
    } catch (error) {
      return 'invalid date';
    }
  };

  return (
    <div className="bg-black text-neutral-300 min-h-screen font-body">
      <Header />
      <main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <header className="text-center mb-16">
          <h1 className="font-headline text-4xl sm:text-5xl font-bold text-white">
            Handpicked insights <span className="text-neutral-500">from the</span>{' '}
            <span className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
              pensieve
            </span>
          </h1>
        </header>

        <div className="flex justify-center mb-12">
          <div className="relative w-full max-w-lg">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-500" />
            <Input
              placeholder="Search..."
              className="pl-10 pr-20 bg-neutral-900 border-neutral-800 focus:border-primary/50"
            />
            <Kbd className="absolute right-3 top-1/2 -translate-y-1/2">
              Ctrl K
            </Kbd>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <div className="space-y-8">
              {blogPosts.map((post) => (
                <Link
                  href={`/blog/${post.slug}`}
                  key={post.slug}
                  passHref
                  className="block"
                  aria-label={`Read ${post.title}`}
                >
                  <article className="group cursor-pointer">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start p-6 bg-neutral-900/50 border border-neutral-800 rounded-xl hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
                      <div className="md:col-span-2">
                        <div className="flex items-center gap-4 mb-3 text-sm text-neutral-400">
                          <span className="font-semibold text-sm">
                            {post.date}{' '}
                            <span className="text-neutral-500">
                              ({getFormattedDistance(post.date)})
                            </span>
                          </span>
                          <Badge
                            variant="secondary"
                            className="bg-green-900/50 text-green-300 border-green-500/30"
                          >
                            {post.status}
                          </Badge>
                        </div>
                        <h2 className="font-headline text-2xl font-bold text-white group-hover:text-primary transition-colors leading-tight">
                          {post.title}
                        </h2>
                        <p className="text-neutral-400 mt-2 line-clamp-2 text-base leading-relaxed">
                          {post.excerpt}
                        </p>
                        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-4 text-sm text-neutral-400">
                          <div className="flex items-center gap-2 text-green-400">
                            <Clock className="w-4 h-4" />
                            <span>{post.readTime}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Avatar className="w-8 h-8">
                              <AvatarImage
                                src={post.authorImage}
                                alt={post.authorName}
                              />
                              <AvatarFallback>
                                {post.authorName.charAt(0)}
                              </AvatarFallback>
                            </Avatar>
                            <span>{post.authorName}</span>
                          </div>
                          <div className="flex flex-wrap gap-2 items-center">
                            {post.tags.map((tag) => (
                              <Badge
                                key={tag}
                                variant="outline"
                                className="border-neutral-700 text-neutral-400 lowercase"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="relative w-full h-40 md:h-full rounded-lg overflow-hidden md:col-span-1 order-first md:order-last">
                        <Image
                          src={post.thumbnail}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          data-ai-hint={post.aiHint}
                        />
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
          <aside className="lg:col-span-4 space-y-8 sticky top-24 self-start">
            <Card className="bg-neutral-900/50 border-neutral-800">
              <CardContent className="p-6">
                <h3 className="font-headline text-lg text-white mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Sort by
                </h3>
                <Select defaultValue="newest">
                  <SelectTrigger className="w-full bg-neutral-900 border-neutral-800">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="oldest">Oldest First</SelectItem>
                    <SelectItem value="popular">Most Popular</SelectItem>
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>

            <Card className="bg-neutral-900/50 border-neutral-800">
              <CardContent className="p-6">
                <h3 className="font-headline text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <Hash className="w-5 h-5" /> Topics
                </h3>
                <div className="flex flex-wrap gap-2">
                  {topics.map((topic) => (
                    <Button
                      key={topic}
                      variant="outline"
                      size="sm"
                      className="bg-neutral-800 border-neutral-700 hover:bg-neutral-700 text-neutral-300"
                    >
                      {topic}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
}
