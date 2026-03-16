import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { pricingPackages } from "@/data/pricing";
import { services } from "@/data/services";
import { Check } from "lucide-react";

export default function PricingPage() {
  // Group packages by service
  const groupedPackages = services.map(service => ({
    ...service,
    packages: pricingPackages.filter(pkg => pkg.serviceId === service.id)
  })).filter(s => s.packages.length > 0);

  return (
    <div className="mx-auto max-w-7xl space-y-16 px-4 py-12 md:px-8">
      <SectionHeading 
        eyebrow="Transparent Pricing"
        title="Service Packages & Investment"
        description="Whether you're an emerging artist or an established brand, we have flexible packages designed for different budgets and scopes."
      />

      {groupedPackages.map((service) => (
        <section key={service.id}>
          <div className="mb-8">
            <h2 className="text-3xl font-bold">{service.title}</h2>
            <p className="mt-2 text-white/70">{service.description}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {service.packages.map((pkg) => (
              <div
                key={pkg.id}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan hover:bg-white/8"
              >
                <h3 className="text-xl font-semibold">{pkg.name}</h3>
                <p className="mt-2 text-sm text-white/70">{pkg.description}</p>
                
                <div className="mt-4 space-y-1">
                  <p className="text-3xl font-bold text-cyan">{pkg.startingPrice}</p>
                  <p className="text-sm text-white/60">Turnaround: {pkg.turnaround}</p>
                </div>

                <ul className="mt-5 space-y-3">
                  {pkg.includes.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button href="/book" className="mt-6 w-full">
                  Start Project
                </Button>
              </div>
            ))}
          </div>
        </section>
      ))}

      <section className="rounded-2xl border border-white/10 bg-gradient-to-br from-cyan/10 to-transparent p-8">
        <h3 className="text-2xl font-bold">Custom Packages Available</h3>
        <p className="mt-2 text-white/75">
          Need something specific? We create custom packages for multi-project retainers, long-term artist development, 
          and enterprise content production. Let's discuss your vision and create a package that works for you.
        </p>
        <Button href="/contact" className="mt-5">
          Get a Custom Quote
        </Button>
      </section>

      <section className="rounded-2xl border border-white/10 bg-midnight p-8">
        <h3 className="text-2xl font-bold">Frequently Asked Questions</h3>
        <div className="mt-6 space-y-4">
          <details className="group cursor-pointer">
            <summary className="flex items-center justify-between rounded-lg bg-white/5 px-4 py-3 font-semibold">
              Can I customize a package?
              <span className="transition group-open:rotate-180">▼</span>
            </summary>
            <p className="mt-2 bg-white/5 px-4 py-3 text-sm text-white/75">
              Absolutely. Every project is unique. Contact us to discuss your specific needs and we'll create a tailored package.
            </p>
          </details>
          <details className="group cursor-pointer">
            <summary className="flex items-center justify-between rounded-lg bg-white/5 px-4 py-3 font-semibold">
              What about revision rounds?
              <span className="transition group-open:rotate-180">▼</span>
            </summary>
            <p className="mt-2 bg-white/5 px-4 py-3 text-sm text-white/75">
              Each package includes defined revision rounds based on tier. Additional revisions are billed at agreed rates.
            </p>
          </details>
          <details className="group cursor-pointer">
            <summary className="flex items-center justify-between rounded-lg bg-white/5 px-4 py-3 font-semibold">
              Do you offer discounts for multiple services?
              <span className="transition group-open:rotate-180">▼</span>
            </summary>
            <p className="mt-2 bg-white/5 px-4 py-3 text-sm text-white/75">
              Yes! When bundling music production with video, mixing, or other services, we provide integrated discounts. Ask our team.
            </p>
          </details>
        </div>
      </section>
    </div>
  );
}
