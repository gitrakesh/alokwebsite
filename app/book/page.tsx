import { ConsultationForm } from "@/components/forms/consultation-form";

export default function BookPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-6 px-4 py-12 md:px-8">
      <h1 className="text-4xl font-bold">Book a Consultation</h1>
      <p className="text-white/75">Share project goals, budget, and timeline. We’ll propose the right creative-production blueprint.</p>
      <ConsultationForm />
    </div>
  );
}
