"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  company: z.string().min(2),
  projectType: z.string().min(2),
  budget: z.string().min(2),
  timeline: z.string().min(2),
  services: z.string().min(2),
  description: z.string().min(10),
  preferredContact: z.string().min(2)
});

type Values = z.infer<typeof schema>;

export const ConsultationForm = () => {
  const [status, setStatus] = useState("");
  const { register, handleSubmit, formState: { isSubmitting } } = useForm<Values>({ resolver: zodResolver(schema) });

  const onSubmit = async (values: Values) => {
    const res = await fetch("/api/consultation", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(values) });
    setStatus(res.ok ? "Consultation request submitted." : "Unable to submit right now.");
  };

  const fields: Array<{ key: keyof Values; placeholder: string }> = [
    { key: "name", placeholder: "Full name" },
    { key: "email", placeholder: "Email" },
    { key: "phone", placeholder: "Phone" },
    { key: "company", placeholder: "Company/Artist" },
    { key: "projectType", placeholder: "Type of project" },
    { key: "budget", placeholder: "Budget range" },
    { key: "timeline", placeholder: "Timeline" },
    { key: "services", placeholder: "Services interested in" },
    { key: "preferredContact", placeholder: "Preferred contact method" }
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="grid gap-4 md:grid-cols-2">
        {fields.map((field) => (
          <input key={field.key} {...register(field.key)} placeholder={field.placeholder} className="rounded-lg border border-white/10 bg-ink px-4 py-3" />
        ))}
      </div>
      <textarea {...register("description")} rows={5} placeholder="Project description" className="w-full rounded-lg border border-white/10 bg-ink px-4 py-3" />
      <button disabled={isSubmitting} className="rounded-full bg-neon px-5 py-2.5 text-sm font-semibold">{isSubmitting ? "Submitting..." : "Book Consultation"}</button>
      {status ? <p className="text-sm text-cyan">{status}</p> : null}
    </form>
  );
};
