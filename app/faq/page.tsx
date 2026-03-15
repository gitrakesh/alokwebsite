import { faqs } from "@/data/site";

export default function FAQPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 md:px-8">
      <h1 className="text-4xl font-bold">Frequently Asked Questions</h1>
      <div className="mt-8 space-y-4">
        {faqs.map((faq) => (
          <details key={faq.question} className="rounded-xl border border-white/10 bg-white/5 p-4">
            <summary className="cursor-pointer font-semibold">{faq.question}</summary>
            <p className="mt-2 text-sm text-white/75">{faq.answer}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
