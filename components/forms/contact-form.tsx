"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  message: z.string().min(10)
});

type Values = z.infer<typeof schema>;

export const ContactForm = () => {
  const [status, setStatus] = useState<string>("");
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<Values>({ resolver: zodResolver(schema) });

  const onSubmit = async (values: Values) => {
    const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(values) });
    setStatus(res.ok ? "Thanks! We will contact you within 24 hours." : "Submission failed. Please try again.");
    if (res.ok) reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6">
      <input aria-label="Name" {...register("name")} placeholder="Your name" className="w-full rounded-lg border border-white/10 bg-ink px-4 py-3" />
      {errors.name ? <p className="text-xs text-rose">Please enter a valid name.</p> : null}
      <input aria-label="Email" {...register("email")} placeholder="Email" className="w-full rounded-lg border border-white/10 bg-ink px-4 py-3" />
      <input aria-label="Phone" {...register("phone")} placeholder="Phone" className="w-full rounded-lg border border-white/10 bg-ink px-4 py-3" />
      <textarea aria-label="Message" {...register("message")} placeholder="Tell us about your project" rows={4} className="w-full rounded-lg border border-white/10 bg-ink px-4 py-3" />
      <button disabled={isSubmitting} className="rounded-full bg-neon px-5 py-2.5 text-sm font-semibold text-white">{isSubmitting ? "Sending..." : "Send Inquiry"}</button>
      {status ? <p className="text-sm text-cyan">{status}</p> : null}
    </form>
  );
};
