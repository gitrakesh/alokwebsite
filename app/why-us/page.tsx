const points = [
  "Creative excellence across audio and visual craft",
  "Experienced multidisciplinary team",
  "End-to-end production under one roof",
  "Fast and transparent turnaround",
  "Professional-grade equipment and calibrated spaces",
  "Customized client engagement and strategy"
];

export default function WhyUsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 md:px-8">
      <h1 className="text-4xl font-bold">Why Choose EchoFrame</h1>
      <p className="mt-3 text-white/75">We operate as your creative production partner, not just a vendor.</p>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {points.map((item) => (
          <div key={item} className="rounded-xl border border-white/10 bg-white/5 p-4 text-white/80">{item}</div>
        ))}
      </div>
    </div>
  );
}
