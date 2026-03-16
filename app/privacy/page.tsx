import { SectionHeading } from "@/components/ui/section-heading";

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-8 px-4 py-12 md:px-8">
      <SectionHeading 
        eyebrow="Legal"
        title="Privacy Policy"
        description="How we collect, use, and protect your information."
      />

      <div className="prose prose-invert max-w-none space-y-6">
        <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-xl font-semibold">Introduction</h3>
          <p className="mt-3 text-white/75">
            EchoFrame Studios ("we," "us," "our," or "Company") respects the privacy of our users, clients, and website visitors. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information.
          </p>
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-xl font-semibold">Information We Collect</h3>
          <p className="mt-3 text-white/75">
            <strong>Contact Information:</strong> Name, email address, phone number, and company details when you fill out contact forms 
            or book consultations.
          </p>
          <p className="mt-2 text-white/75">
            <strong>Project Details:</strong> Information about your project scope, timeline, and creative vision shared during 
            consultations or inquiry forms.
          </p>
          <p className="mt-2 text-white/75">
            <strong>Website Usage:</strong> We may collect basic usage data through analytics tools to understand how visitors 
            interact with our site.
          </p>
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-xl font-semibold">How We Use Your Information</h3>
          <p className="mt-3 text-white/75">We use the information we collect to:</p>
          <ul className="mt-2 space-y-2 text-white/75 list-inside list-disc">
            <li>Respond to your inquiries and provide quotes</li>
            <li>Schedule consultations and project kickoffs</li>
            <li>Send project updates and keep you informed</li>
            <li>Process payments and manage client relationships</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-xl font-semibold">Data Security</h3>
          <p className="mt-3 text-white/75">
            We implement industry-standard security measures to protect your personal information from unauthorized access, 
            alteration, and destruction. However, no method of transmission over the internet is 100% secure. While we strive to 
            protect your data, we cannot guarantee absolute security.
          </p>
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-xl font-semibold">Third-Party Sharing</h3>
          <p className="mt-3 text-white/75">
            We do not sell, trade, or rent your personal information to third parties. We may share information with service 
            providers (payment processors, email platforms) only as necessary to fulfill our services.
          </p>
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-xl font-semibold">Your Rights</h3>
          <p className="mt-3 text-white/75">
            You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us at:
          </p>
          <p className="mt-3 text-white/75">
            <strong>Email:</strong> privacy@echoframe.studio
          </p>
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-xl font-semibold">Policy Updates</h3>
          <p className="mt-3 text-white/75">
            We may update this Privacy Policy from time to time. Material changes will be communicated via email or prominent 
            notice on our website.
          </p>
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-xl font-semibold">Contact Us</h3>
          <p className="mt-3 text-white/75">
            If you have questions about this Privacy Policy, please contact us at:<br />
            <strong>Email:</strong> hello@echoframe.studio<br />
            <strong>Address:</strong> 205 Motion District, Los Angeles, CA 90028
          </p>
        </section>

        <p className="text-sm text-white/60">Last updated: March 2024</p>
      </div>
    </div>
  );
}
