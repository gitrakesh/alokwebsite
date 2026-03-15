import { projects } from "@/data/projects";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((entry) => entry.slug === slug);
  if (!project) return notFound();

  return (
    <div className="mx-auto max-w-4xl space-y-6 px-4 py-12 md:px-8">
      <Image src={project.image} alt={project.name} width={1400} height={900} className="h-96 w-full rounded-2xl object-cover" />
      <p className="text-xs uppercase tracking-[0.2em] text-cyan">{project.category}</p>
      <h1 className="text-4xl font-bold">{project.name}</h1>
      <p className="text-white/75">{project.summary}</p>
      <p className="text-sm text-white/60">Client: {project.client}</p>
      <ul className="list-inside list-disc text-sm text-white/70">{project.deliverables.map((item) => <li key={item}>{item}</li>)}</ul>
    </div>
  );
}
