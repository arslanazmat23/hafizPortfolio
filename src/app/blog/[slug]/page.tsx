
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  ArrowLeft,
  Clock,
  MessageCircle,
  Twitter,
  Linkedin,
} from 'lucide-react';

import { blogPosts } from '@/lib/blog-data';
import Footer from '@/components/footer';
import Header from '@/components/header';

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

const PostContent = () => (
    <div className="prose prose-invert prose-lg max-w-none text-neutral-300 prose-headings:text-white prose-a:text-primary hover:prose-a:text-primary/80 prose-strong:text-white prose-blockquote:border-primary">
        <p>As a Frontend Developer in 2025, I've fine-tuned my development environment with a set of powerful tools that enhance productivity, efficiency, and customization. Let me walk you through my stack and how these tools help me build better, faster, and more maintainable projects!</p>
        
        <h2 id="my-stack">My Stack</h2>
        <p>Here's a quick rundown of my primary tools:</p>
        <ul>
            <li><strong>Editor:</strong> VS Code</li>
            <li><strong>Framework:</strong> Next.js</li>
            <li><strong>Styling:</strong> Tailwind CSS</li>
            <li><strong>Language:</strong> TypeScript</li>
        </ul>

        <h2 id="utilities">Utilities</h2>
        <blockquote>
            These are the tools that I use on a daily basis to make my life easier. They are not essential, but they are nice to have.
        </blockquote>
        <p>Some of the utilities that I use include:</p>
        <ul>
            <li><strong>Prettier:</strong> For code formatting</li>
            <li><strong>ESLint:</strong> For linting</li>
        </ul>

        <pre><code className="language-javascript">{`
function greet() {
    console.log("Hello, World!");
}
        `}</code></pre>

        <h2 id="api-tools">API Tools</h2>
        <p>For API testing and development, I rely on Postman. It's an essential part of my workflow for building and testing APIs.</p>

        <h2 id="final-thoughts">Final Thoughts</h2>
        <p>This stack is constantly evolving, but it's what works for me right now. I'm always on the lookout for new tools and technologies that can help me build better products. What does your stack look like? Let me know!</p>
    </div>
)


export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const headings = [
      { id: "my-stack", title: "My Stack"},
      { id: "utilities", title: "Utilities"},
      { id: "api-tools", title: "API Tools"},
      { id: "final-thoughts", title: "Final Thoughts"},
  ]

  return (
    <div className="bg-black text-neutral-300 min-h-screen font-body">
      <Header />
      <main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="mb-12">
          <Button asChild variant="ghost" className="text-neutral-400 hover:text-white">
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <article className="lg:col-span-3">
            <header className="mb-12">
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="border-neutral-700 text-neutral-400"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              <h1 className="font-headline text-4xl sm:text-5xl font-bold text-white">
                {post.title}
              </h1>
              <div className="flex items-center gap-6 mt-6 text-neutral-400">
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
                <Separator orientation="vertical" className="h-6 bg-neutral-700" />
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </header>

            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden mb-12">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover"
                data-ai-hint={post.aiHint}
              />
            </div>
            
            <PostContent />

            <Separator className="my-12 bg-neutral-800" />

            <footer className="flex flex-col sm:flex-row justify-between items-center gap-6">
                <p className="font-semibold text-white">Share this post</p>
                <div className="flex gap-4">
                    <Button variant="outline" size="icon" className="bg-neutral-800 border-neutral-700 hover:bg-neutral-700">
                        <Twitter className="h-5 w-5" />
                    </Button>
                    <Button variant="outline" size="icon" className="bg-neutral-800 border-neutral-700 hover:bg-neutral-700">
                        <Linkedin className="h-5 w-5" />
                    </Button>
                </div>
            </footer>
          </article>
          <aside className="lg:col-span-1 space-y-8 sticky top-24 self-start">
            <Card className="bg-neutral-900/50 border-neutral-800">
              <CardHeader>
                <CardTitle className="font-headline text-lg text-white">
                  Table of Contents
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {headings.map((heading) => (
                    <li key={heading.id}>
                      <Link
                        href={`#${heading.id}`}
                        className="text-neutral-400 hover:text-white transition-colors"
                      >
                        {heading.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-fuchsia-500/20 to-cyan-500/20 border-primary/20">
              <CardContent className="p-6 text-center">
                 <MessageCircle className="mx-auto h-8 w-8 text-white mb-4" />
                 <h3 className="font-headline text-xl font-bold text-white mb-2">Have thoughts?</h3>
                 <p className="text-neutral-400 mb-4">I'd love to hear what you think. Drop a comment below!</p>
                 <Button>Comment</Button>
              </CardContent>
            </Card>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
}
