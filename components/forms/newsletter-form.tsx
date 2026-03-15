"use client";

import { useState } from "react";

export const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const res = await fetch("/api/newsletter", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email }) });
    setStatus(res.ok ? "Subscribed!" : "Failed to subscribe.");
    if (res.ok) setEmail("");
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3 sm:flex-row">
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email for studio updates" className="w-full rounded-full border border-white/10 bg-ink px-4 py-2.5" />
      <button className="rounded-full bg-cyan px-5 py-2.5 text-sm font-semibold text-ink">Subscribe</button>
      {status ? <p className="text-xs text-cyan">{status}</p> : null}
    </form>
  );
};
