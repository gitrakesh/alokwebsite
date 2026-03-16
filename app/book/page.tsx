import { ConsultationForm } from "@/components/forms/consultation-form";
import { SectionHeading } from "@/components/ui/section-heading";
import { CheckCircle2 } from "lucide-react";

export default function BookPage() {
  const processSteps = [
    {
      number: "01",
      title: "Discovery Call",
      description: "We discuss your creative goals, project scope, timeline, and budget. No pressure, just exploration."
    },
    {
      number: "02",
      title: "Creative Brief",
      description: "You share references, inspiration, and specific technical requirements. We create a strategic proposal."
    },
    {
      number: "03",
      title: "Package Selection",
      description: "Choose a service package that fits your needs, or we create a custom quote tailored to your vision."
    },
    {
      number: "04",
      title: "Production Begins",
      description: "Once booked, we schedule sessions, coordinate timelines, and begin the creative journey."
    }
  ];

  const reasons = [
    "Expert team with 15+ years in music and video production",
    "Integrated approach—audio and visual from one creative source",
    "Flexible packages and custom solutions for any budget",
    "Fast turnarounds without compromising quality",
    "Transparent communication and revision rounds",
    "Remote collaboration capabilities for global teams"
  ];

  return (
    <div className="mx-auto max-w-7xl space-y-16 px-4 py-12 md:px-8">
      <SectionHeading 
        eyebrow="Let's Create"
        title="Book a Consultation"
        description="Share your vision, goals, and constraints. We'll work together to craft the perfect creative blueprint for your project."
      />

      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <h2 className="mb-8 text-3xl font-bold">The Process</h2>
          <div className="space-y-6">
            {processSteps.map((step, idx) => (
              <div key={step.number} className="relative">
                <div className="flex gap-4">
                  <div className="relative">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-cyan to-cyan/60 flex items-center justify-center font-bold">
                      {step.number}
                    </div>
                    {idx < processSteps.length - 1 && (
                      <div className="absolute left-6 top-12 h-12 w-0.5 bg-white/10"></div>
                    )}
                  </div>
                  <div className="pt-2">
                    <h3 className="font-semibold">{step.title}</h3>
                    <p className="mt-2 text-sm text-white/70">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 text-3xl font-bold">Start Your Project</h2>
          <ConsultationForm />
        </div>
      </div>

      <section>
        <h2 className="mb-8 text-3xl font-bold">Why Book With Us?</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {reasons.map((reason) => (
            <div key={reason} className="flex gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
              <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-cyan" />
              <p className="text-white/75">{reason}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-white/10 bg-midnight p-8">
        <h3 className="text-2xl font-bold">Questions Before Booking?</h3>
        <p className="mt-3 text-white/75">
          We get it—choosing the right studio is an important decision. Our team is happy to answer any questions 
          about our process, pricing, or capabilities before you commit.
        </p>
        <p className="mt-4 text-white/75">
          <strong>Email:</strong> hello@echoframe.studio<br />
          <strong>Phone:</strong> +1 (555) 781-2204<br />
          <strong>WhatsApp:</strong> +15557812204
        </p>
      </section>

      <section className="rounded-2xl border border-white/10 bg-gradient-to-br from-cyan/10 to-transparent p-8 text-center">
        <h3 className="text-2xl font-bold">Ready to Start?</h3>
        <p className="mt-3 text-white/75">
          Fill out the form above and we'll reach out within 12 hours to discuss your project in detail.
        </p>
      </section>
    </div>
  );
}
