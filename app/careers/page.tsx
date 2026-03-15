import { openings } from "@/data/site";
import { Button } from "@/components/ui/button";

export default function CareersPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-8 px-4 py-12 md:px-8">
      <h1 className="text-4xl font-bold">Careers & Collaborations</h1>
      <p className="text-white/75">Join our team of producers, storytellers, and creators shaping premium audio-visual experiences.</p>
      <div className="space-y-4">
        {openings.map((opening) => (
          <article key={opening.role} className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
            <div>
              <h2 className="font-semibold">{opening.role}</h2>
              <p className="text-sm text-white/70">{opening.type} · {opening.location}</p>
            </div>
            <Button href="/contact">Apply Now</Button>
          </article>
        ))}
      </div>
    </div>
  );
}
