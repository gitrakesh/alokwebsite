import { faqs } from "@/data/site";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function FAQPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-12 px-4 py-12 md:px-8">
      <SectionHeading 
        eyebrow="Support"
        title="Frequently Asked Questions"
        description="Everything you need to know about our services, process, and collaboration."
      />

      <div className="space-y-3">
        {faqs.map((faq, idx) => (
          <details 
            key={faq.question} 
            className="group rounded-xl border border-white/10 bg-white/5 px-5 py-4 transition hover:bg-white/8"
          >
            <summary className="flex cursor-pointer items-center justify-between font-semibold text-white">
              {faq.question}
              <ChevronDown className="h-5 w-5 transition group-open:rotate-180" />
            </summary>
            <p className="mt-4 text-sm text-white/75">{faq.answer}</p>
          </details>
        ))}
      </div>

      <section className="rounded-2xl border border-white/10 bg-midnight p-8 text-center">
        <h3 className="text-2xl font-bold">Still have questions?</h3>
        <p className="mt-3 text-white/75">Our team is ready to discuss your project and answer any specific concerns.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button href="/contact">Contact Us</Button>
          <Button href="/book">Schedule Consultation</Button>
        </div>
      </section>
    </div>
  );
}
