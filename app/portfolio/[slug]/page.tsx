import { projects } from "@/data/projects";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((entry) => entry.slug === slug);
  if (!project) return notFound();

  // Find related projects
  const relatedProjects = projects.filter(p => p.category === project.category && p.slug !== project.slug).slice(0, 3);

  return (
    <div className="mx-auto max-w-5xl space-y-12 px-4 py-12 md:px-8">
      <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-cyan">
        <ArrowLeft className="h-4 w-4" />
        Back to Portfolio
      </Link>

      <div className="space-y-6">
        <Image 
          src={project.image} 
          alt={project.name} 
          width={1400} 
          height={900} 
          className="h-96 w-full rounded-2xl object-cover"
        />

        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.2em] text-cyan">{project.category}</p>
          <h1 className="text-4xl font-bold">{project.name}</h1>
          <p className="text-lg text-white/75">{project.summary}</p>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="font-semibold text-cyan">Client</h3>
          <p className="mt-2">{project.client}</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="font-semibold text-cyan">Category</h3>
          <p className="mt-2">{project.category}</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="font-semibold text-cyan">Scope</h3>
          <p className="mt-2">Full Production</p>
        </div>
      </div>

      <section className="rounded-2xl border border-white/10 bg-white/5 p-8">
        <h2 className="text-2xl font-bold">Project Overview</h2>
        <p className="mt-4 leading-relaxed text-white/75">
          {project.summary} This project showcased our commitment to creative excellence across 
          multiple disciplines. We coordinated seamlessly between production schedules, creative vision, 
          and technical requirements to deliver a final product that exceeded expectations.
        </p>
      </section>

      <section className="rounded-2xl border border-white/10 bg-white/5 p-8">
        <h2 className="text-2xl font-bold mb-6">Deliverables</h2>
        <ul className="grid gap-3 md:grid-cols-2">
          {project.deliverables.map((item) => (
            <li key={item} className="flex items-start gap-3 text-white/75">
              <span className="mt-1 h-2 w-2 rounded-full bg-cyan flex-shrink-0"></span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-2xl border border-white/10 bg-midnight p-8">
        <h2 className="text-2xl font-bold mb-4">Key Highlights</h2>
        <ul className="space-y-3 text-white/75">
          <li>✓ Collaborative approach with client feedback integrated throughout production</li>
          <li>✓ Delivered on schedule while maintaining premium quality standards</li>
          <li>✓ Seamless integration of audio, visual, and strategic elements</li>
          <li>✓ Final deliverables exceeded platform and broadcast requirements</li>
        </ul>
      </section>

      {relatedProjects.length > 0 && (
        <section>
          <h2 className="mb-8 text-2xl font-bold">Related Projects</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {relatedProjects.map((relProject) => (
              <Link key={relProject.slug} href={`/portfolio/${relProject.slug}`}>
                <article className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:border-cyan">
                  <Image 
                    src={relProject.image} 
                    alt={relProject.name} 
                    width={600} 
                    height={400} 
                    className="h-40 w-full object-cover"
                  />
                  <div className="p-4">
                    <p className="text-xs text-cyan uppercase">{relProject.category}</p>
                    <h3 className="mt-2 font-semibold">{relProject.name}</h3>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="rounded-2xl border border-white/10 bg-gradient-to-br from-cyan/10 to-transparent p-8 text-center">
        <h2 className="text-2xl font-bold">Ready to Start Your Project?</h2>
        <p className="mt-3 text-white/75">
          Let's discuss how we can bring your creative vision to life with the same dedication and excellence.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button href="/book">Book a Consultation</Button>
          <Button href="/portfolio">View More Work</Button>
        </div>
      </section>
    </div>
  );
}
