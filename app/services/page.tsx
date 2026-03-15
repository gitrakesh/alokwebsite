import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
      <SectionHeading eyebrow="Our Services" title="Audio-visual capabilities built for serious creative outcomes." />
      <div className="space-y-6">
        {services.map((service) => (
          <article key={service.id} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-2xl font-semibold">{service.title}</h3>
            <p className="mt-2 text-white/75">{service.description}</p>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              <div><p className="text-cyan">Features</p><ul className="list-inside list-disc text-sm text-white/70">{service.features.map((i)=><li key={i}>{i}</li>)}</ul></div>
              <div><p className="text-cyan">Ideal Use Cases</p><ul className="list-inside list-disc text-sm text-white/70">{service.useCases.map((i)=><li key={i}>{i}</li>)}</ul></div>
              <div><p className="text-cyan">Deliverables</p><ul className="list-inside list-disc text-sm text-white/70">{service.deliverables.map((i)=><li key={i}>{i}</li>)}</ul></div>
            </div>
            <Button href="/book" className="mt-5">Start This Service</Button>
          </article>
        ))}
      </div>
    </div>
  );
}
