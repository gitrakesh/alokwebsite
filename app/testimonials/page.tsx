import { testimonials } from "@/data/site";

export default function TestimonialsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-8">
      <h1 className="text-4xl font-bold">Client Testimonials</h1>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {testimonials.map((item) => (
          <article key={item.name} className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-cyan">{"★".repeat(item.rating)}</p>
            <p className="mt-3 text-white/80">“{item.quote}”</p>
            <p className="mt-4 font-semibold">{item.name}</p>
            <p className="text-xs text-white/60">{item.role}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
