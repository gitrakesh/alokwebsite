import Image from "next/image";
import { Button, GhostButton } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { testimonials, stats } from "@/data/site";
import { NewsletterForm } from "@/components/forms/newsletter-form";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-7xl space-y-20 px-4 py-10 md:px-8 md:py-14">
      <section className="relative overflow-hidden rounded-3xl border border-white/10">
        <Image src="https://images.unsplash.com/photo-1461784121038-f088ca1e7714?auto=format&fit=crop&w=2000&q=80" alt="Studio hero" width={2000} height={1100} className="h-[520px] w-full object-cover opacity-45" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
          <p className="text-sm uppercase tracking-[0.25em] text-cyan">EchoFrame Studios</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight text-white md:text-6xl">Crafting Sound. Capturing Vision.</h1>
          <p className="mt-4 max-w-2xl text-white/80">A premium music label and video production house helping artists, brands, and creators transform ideas into unforgettable audio-visual experiences.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button href="/portfolio">View Our Work</Button>
            <GhostButton href="/book">Book a Project</GhostButton>
            <GhostButton href="/contact">Contact Us</GhostButton>
          </div>
        </div>
      </section>

      <section>
        <SectionHeading eyebrow="Featured Services" title="End-to-End Creative Production" description="From composing your sonic identity to producing cinematic campaigns, our integrated team delivers premium outputs with precision." />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((service) => (
            <article key={service.id} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-2 text-sm text-white/70">{service.short}</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <SectionHeading eyebrow="Portfolio Highlights" title="Selected Work Across Music, Film & Brand Content" action={<GhostButton href="/portfolio">Explore Full Portfolio</GhostButton>} />
        <div className="grid gap-5 md:grid-cols-3">
          {projects.slice(0, 3).map((project) => (
            <article key={project.slug} className="overflow-hidden rounded-2xl border border-white/10">
              <Image src={project.image} alt={project.name} width={1200} height={800} className="h-52 w-full object-cover" />
              <div className="space-y-2 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-cyan">{project.category}</p>
                <h3 className="text-lg font-semibold">{project.name}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">
            <p className="text-3xl font-bold text-cyan">{stat.value}</p>
            <p className="mt-1 text-sm text-white/70">{stat.label}</p>
          </div>
        ))}
      </section>

      <section>
        <SectionHeading eyebrow="Testimonials" title="Trusted by Artists, Brands, and Visionaries" />
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm text-white/80">“{testimonial.quote}”</p>
              <p className="mt-4 text-sm font-semibold text-cyan">{testimonial.name}</p>
              <p className="text-xs text-white/60">{testimonial.role}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-white/10 bg-midnight p-8">
        <SectionHeading eyebrow="Stay in Sync" title="Get studio insights, release ideas, and production tips." />
        <NewsletterForm />
      </section>
    </div>
  );
}
