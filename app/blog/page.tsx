import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/data/blog";
import { SectionHeading } from "@/components/ui/section-heading";

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-12 px-4 py-12 md:px-8">
      <SectionHeading 
        eyebrow="insights"
        title="Production Playbooks and Creative Strategy" 
        description="Learn from our latest projects, industry trends, and behind-the-scenes production breakdowns."
      />

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <article className="group h-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:border-cyan hover:bg-white/8">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={1200}
                  height={800}
                  className="h-full w-full object-cover transition group-hover:scale-105"
                />
                <span className="absolute right-3 top-3 inline-block rounded-full bg-cyan/20 px-3 py-1 text-xs font-semibold text-cyan">
                  {post.category}
                </span>
              </div>
              <div className="space-y-3 p-5">
                <h3 className="line-clamp-2 text-lg font-semibold leading-tight text-white group-hover:text-cyan transition">
                  {post.title}
                </h3>
                <p className="line-clamp-2 text-sm text-white/70">{post.excerpt}</p>
                <div className="flex items-center justify-between pt-3 text-xs text-white/60">
                  <span>{post.author}</span>
                  <span>{post.readTime} min read</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="inline-block rounded-full bg-white/10 px-2 py-1 text-xs text-white/70">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>

      <section className="rounded-2xl border border-white/10 bg-midnight p-8 text-center">
        <h3 className="text-2xl font-bold">Subscribe to Our Insights</h3>
        <p className="mt-2 text-white/70">Get production tips, industry trends, and case studies delivered to your inbox.</p>
        <div className="mt-5 flex gap-3 sm:justify-center">
          <input 
            type="email" 
            placeholder="your@email.com" 
            className="flex-1 rounded-full bg-white/10 px-4 py-2.5 text-sm placeholder-white/50 outline-none transition hover:bg-white/15 focus:bg-white/15 focus:ring-2 focus:ring-cyan sm:max-w-xs"
          />
          <button className="rounded-full bg-neon px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-cyan hover:text-ink">
            Subscribe
          </button>
        </div>
      </section>
    </div>
  );
}
