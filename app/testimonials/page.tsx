import Image from "next/image";
import { testimonials } from "@/data/site";
import { SectionHeading } from "@/components/ui/section-heading";
import { Star } from "lucide-react";

export default function TestimonialsPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-12 px-4 py-12 md:px-8">
      <SectionHeading 
        eyebrow="Recognition"
        title="Trusted by Creative Leaders"
        description="Artists, brands, and creators share their experiences working with EchoFrame Studios."
      />

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((item) => (
          <article 
            key={item.name} 
            className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan hover:bg-white/8"
          >
            <div className="flex gap-1">
              {Array.from({ length: item.rating }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-cyan text-cyan" />
              ))}
            </div>
            <p className="mt-4 text-white/80 leading-relaxed">
              "{item.quote}"
            </p>
            <div className="mt-5 border-t border-white/10 pt-4">
              <p className="font-semibold text-white">{item.name}</p>
              <p className="text-sm text-cyan">{item.role}</p>
            </div>
          </article>
        ))}
      </div>

      <section className="rounded-2xl border border-white/10 bg-gradient-to-br from-cyan/10 to-transparent p-8 text-center">
        <h3 className="text-2xl font-bold">Ready to create something amazing?</h3>
        <p className="mt-3 text-white/75">
          Let's discuss your vision and bring it to life with the same 
          dedication and excellence our clients experience.
        </p>
      </section>
    </div>
  );
}
