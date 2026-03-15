import { ContactForm } from "@/components/forms/contact-form";
import { company } from "@/lib/utils";

export default function ContactPage() {
  return (
    <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-2 md:px-8">
      <div>
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="mt-3 text-white/75">Let’s discuss your music, video, or full campaign requirement.</p>
        <ul className="mt-5 space-y-2 text-sm text-white/75">
          <li>Email: {company.email}</li>
          <li>Phone: {company.phone}</li>
          <li>WhatsApp: {company.whatsapp}</li>
          <li>Address: {company.address}</li>
        </ul>
        <div className="mt-5 rounded-xl border border-dashed border-white/20 p-4 text-sm text-white/60">Google Maps embed placeholder</div>
      </div>
      <ContactForm />
    </div>
  );
}
