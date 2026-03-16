import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Zap, Users, Layers, TrendingUp, Award, Headphones } from "lucide-react";

const points = [
  {
    icon: Zap,
    title: "Creative Excellence",
    description: "We obsess over craft. Every detail—from a single reverb reflection to color grading—is intentional and premium."
  },
  {
    icon: Users,
    title: "Experienced Team",
    description: "15+ years of combined experience in production. Our team has worked with emerging talents and established brands alike."
  },
  {
    icon: Layers,
    title: "End-to-End Production",
    description: "Music production, video direction, post-production, mixing, mastering—all under one roof with unified creative vision."
  },
  {
    icon: TrendingUp,
    title: "Transparent Process",
    description: "No surprises. Clear communication, defined milestones, revision rounds, and regular check-ins throughout production."
  },
  {
    icon: Award,
    title: "Professional Standards",
    description: "Broadcast and streaming-ready quality. Professional-grade equipment, acoustically calibrated spaces, meticulous documentation."
  },
  {
    icon: Headphones,
    title: "Strategic Partnership",
    description: "We don't just execute your brief—we challenge, suggest, and collaborate to elevate the final result."
  }
];

const comparisons = [
  {
    aspect: "Service Range",
    us: "Full end-to-end: music, video, mixing, mastering, artist development",
    others: "Often specialized (video OR music), fragmented across vendors"
  },
  {
    aspect: "Creative Alignment",
    us: "Unified vision across all disciplines. Colors match the sound. Cuts hit the beat.",
    others: "Each vendor operates independently—potential creative disconnect"
  },
  {
    aspect: "Communication",
    us: "Direct access to creatives. Weekly check-ins, fast feedback loops.",
    others: "Often goes through project managers. Slower iteration cycles."
  },
  {
    aspect: "Turnaround",
    us: "Fast without sacrificing quality. Optimized workflows and flexible scheduling.",
    others: "Long wait times or compromised quality to meet deadlines"
  },
  {
    aspect: "Cost Efficiency",
    us: "Bundle services and save. No middleman markup. Integrated discounts.",
    others: "Multiple vendors = higher total cost and coordination headaches"
  }
];

export default function WhyUsPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-16 px-4 py-12 md:px-8">
      <SectionHeading
        eyebrow="Why EchoFrame"
        title="We Operate as Your Creative Partner, Not Just a Vendor"
        description="When you work with us, you get an experienced, multidisciplinary team committed to elevating your vision."
      />

      <section>
        <h2 className="mb-8 text-3xl font-bold">What We Bring to the Table</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {points.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan hover:bg-white/8"
              >
                <Icon className="h-8 w-8 text-cyan" />
                <h3 className="mt-4 font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-white/70">{item.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section>
        <h2 className="mb-8 text-3xl font-bold">How We Compare</h2>
        <div className="space-y-4">
          {comparisons.map((comp) => (
            <div key={comp.aspect} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-semibold text-cyan">{comp.aspect}</h3>
              <div className="mt-4 grid gap-6 md:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold uppercase text-white">EchoFrame</p>
                  <p className="mt-2 text-sm text-white/75">{comp.us}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase text-white/60">Typical Studios</p>
                  <p className="mt-2 text-sm text-white/60">{comp.others}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-white/10 bg-midnight p-8">
        <h2 className="text-2xl font-bold">Our Commitment</h2>
        <div className="mt-6 space-y-4">
          <p className="text-white/75">
            <strong>Quality First:</strong> We never compromise on output. If something isn't meeting our standards, we iterate until it does.
          </p>
          <p className="text-white/75">
            <strong>Your Success is Our Success:</strong> We win when your music charts, your video goes viral, or your brand impression lifts. That alignment matters.
          </p>
          <p className="text-white/75">
            <strong>Transparent Collaboration:</strong> You'll know exactly what to expect—timelines, revisions, deliverables. No hidden fees, no surprises.
          </p>
          <p className="text-white/75">
            <strong>Continuous Learning:</strong> We invest in gear, training, and staying ahead of production trends so your work always sounds and looks current.
          </p>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-bold">Ready to Work With Us?</h2>
        <p className="mt-3 text-white/75">
          Let's chat about your project and see if we're the right fit.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button href="/book">Book a Consultation</Button>
          <Button href="/contact">Contact Us</Button>
        </div>
      </section>
    </div>
  );
}
