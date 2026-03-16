import { SectionHeading } from "@/components/ui/section-heading";

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-8 px-4 py-12 md:px-8">
      <SectionHeading 
        eyebrow="Legal"
        title="Terms of Service"
        description="Our terms and conditions for working together."
      />

      <div className="prose prose-invert max-w-none space-y-6">
        <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-xl font-semibold">1. Agreement</h3>
          <p className="mt-3 text-white/75">
            By engaging EchoFrame Studios for production services, you agree to these Terms of Service. 
            A signed project agreement will formalize specific terms, scope, timeline, and deliverables.
          </p>
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-xl font-semibold">2. Scope & Deliverables</h3>
          <p className="mt-3 text-white/75">
            The scope of work, deliverables, and timeline are defined in the project agreement. Any work 
            outside the defined scope is considered additional work and may incur additional fees.
          </p>
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-xl font-semibold">3. Payment Terms</h3>
          <p className="mt-3 text-white/75">
            <strong>Deposit:</strong> A 50% deposit is required to reserve project dates and begin work.
          </p>
          <p className="mt-2 text-white/75">
            <strong>Balance:</strong> The remaining 50% is due upon project completion, before final delivery.
          </p>
          <p className="mt-2 text-white/75">
            <strong>Late Payments:</strong> Invoices are due within 30 days. Late payments may incur a 1.5% monthly interest charge.
          </p>
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-xl font-semibold">4. Revision Rounds</h3>
          <p className="mt-3 text-white/75">
            Each package includes defined revision rounds. Additional revisions beyond the package limit are charged at our standard hourly rate.
          </p>
          <p className="mt-2 text-white/75">
            Revision requests must be submitted in writing with clear, specific feedback.
          </p>
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-xl font-semibold">5. Intellectual Property Rights</h3>
          <p className="mt-3 text-white/75">
            <strong>Upon Full Payment:</strong> You own all deliverables and can use them as agreed.
          </p>
          <p className="mt-2 text-white/75">
            <strong>Portfolio Use:</strong> We retain the right to display completed work in our portfolio and case studies 
            (with or without client name).
          </p>
          <p className="mt-2 text-white/75">
            <strong>Pre-produced Elements:</strong> Licensed music, stock footage, fonts, and plugins remain subject to their original licenses.
          </p>
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-xl font-semibold">6. Turnaround Times</h3>
          <p className="mt-3 text-white/75">
            Estimated turnaround times are provided in the project agreement. We work diligently to meet deadlines, 
            but cannot guarantee delivery on exact dates. Expedited turnarounds may incur rush fees.
          </p>
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-xl font-semibold">7. Client Responsibilities</h3>
          <p className="mt-3 text-white/75">
            Clients agree to provide necessary materials, feedback, approvals, and clearances on schedule. 
            Delays in client response may extend project timelines.
          </p>
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-xl font-semibold">8. Cancellation & Refunds</h3>
          <p className="mt-3 text-white/75">
            <strong>Prior to Project Start:</strong> Deposit is fully refundable.
          </p>
          <p className="mt-2 text-white/75">
            <strong>During Production:</strong> Deposits are non-refundable. Payments may be credited toward future projects.
          </p>
          <p className="mt-2 text-white/75">
            <strong>After Delivery:</strong> No refunds on delivered work, unless due to our breach of agreement.
          </p>
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-xl font-semibold">9. Limitation of Liability</h3>
          <p className="mt-3 text-white/75">
            EchoFrame Studios is not liable for indirect, incidental, or consequential damages. 
            Our total liability is limited to the amount paid for services.
          </p>
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-xl font-semibold">10. Dispute Resolution</h3>
          <p className="mt-3 text-white/75">
            Disputes arising from this agreement will first be addressed through good-faith negotiation. 
            If unresolved, disputes may be escalated to mediation or arbitration.
          </p>
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-xl font-semibold">11. Confidentiality</h3>
          <p className="mt-3 text-white/75">
            Both parties agree to maintain confidentiality regarding unreleased projects, business practices, 
            and proprietary information discussed during engagement.
          </p>
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-xl font-semibold">12. Changes to Terms</h3>
          <p className="mt-3 text-white/75">
            We reserve the right to update these terms. Clients will be notified of material changes prior to engagement.
          </p>
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-xl font-semibold">Contact & Questions</h3>
          <p className="mt-3 text-white/75">
            For questions about these terms, please contact us at:<br />
            <strong>Email:</strong> hello@echoframe.studio<br />
            <strong>Phone:</strong> +1 (555) 781-2204
          </p>
        </section>

        <p className="text-sm text-white/60">Last updated: March 2024</p>
      </div>
    </div>
  );
}
