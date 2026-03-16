import { ContactForm } from "@/components/forms/contact-form";
import { company } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/section-heading";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-16 px-4 py-12 md:px-8">
      <SectionHeading 
        eyebrow="Get in Touch"
        title="Let's Start a Conversation"
        description="Whether you're ready to book a project or just exploring possibilities, we're here to listen and help bring your vision to life."
      />

      <div className="grid gap-8 md:grid-cols-2">
      <div>
        <div className="grid gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-start gap-4">
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="mt-1 font-mono text-sm text-cyan">{company.email}</p>
                <p className="mt-1 text-xs text-white/70">For detailed inquiries and proposals</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-start gap-4">
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="mt-1 font-mono text-sm text-cyan">{company.phone}</p>
                <p className="mt-1 text-xs text-white/70">Quick questions and scheduling</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-start gap-4">
              <div>
                <h3 className="font-semibold">Address</h3>
                <p className="mt-1 font-mono text-sm text-cyan">{company.address}</p>
                <p className="mt-1 text-xs text-white/70">Our studio is open by appointment</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 rounded-2xl border border-white/10 bg-midnight p-6">
          <h3 className="font-semibold">Response Times</h3>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li>• General inquiries: 24-48 hours</li>
            <li>• Booking requests: Priority within 12 hours</li>
            <li>• WhatsApp: Direct messages answered same day</li>
          </ul>
        </div>
      </div>
      <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
        <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
        <ContactForm />
      </div>
    </div>

      <section className="rounded-2xl border border-white/10 bg-midnight p-8">
        <h3 className="text-2xl font-bold">Quick Tips for Your Inquiry</h3>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div>
            <p className="font-semibold text-cyan">Be Specific</p>
            <p className="mt-2 text-sm text-white/75">
              Tell us about the project scope, timeline, and any reference materials or inspiration.
            </p>
          </div>
          <div>
            <p className="font-semibold text-cyan">Share Examples</p>
            <p className="mt-2 text-sm text-white/75">
              Include links to music, videos, or artists you admire - it helps us understand your vision.
            </p>
          </div>
          <div>
            <p className="font-semibold text-cyan">Set Expectations</p>
            <p className="mt-2 text-sm text-white/75">
              Mention your budget range and timeline so we can provide accurate quotes and availability.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
