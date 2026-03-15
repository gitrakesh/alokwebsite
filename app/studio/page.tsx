export default function StudioPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-6 px-4 py-12 md:px-8">
      <h1 className="text-4xl font-bold">Studio & Production Capability</h1>
      <p className="text-white/75">Our facility combines acoustically treated recording suites, high-performance edit bays, color-calibrated grading stations, and agile production sets.</p>
      <div className="grid gap-4 md:grid-cols-2">
        {[
          "Analog + digital hybrid audio chain",
          "4K cinema camera packages",
          "Color grading and online edit suite",
          "Foley and sound design corner",
          "Live session multi-cam setup",
          "Remote review and feedback workflow"
        ].map((item) => <div key={item} className="rounded-xl border border-white/10 bg-white/5 p-4">{item}</div>)}
      </div>
    </div>
  );
}
