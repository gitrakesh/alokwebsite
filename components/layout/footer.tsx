import Link from "next/link";
import { company } from "@/lib/utils";

export const Footer = () => (
  <footer className="border-t border-white/10 bg-midnight">
    <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-4 md:px-8">
      <div>
        <h3 className="text-lg font-bold text-white">{company.name}</h3>
        <p className="mt-3 text-sm text-white/70">{company.tagline}</p>
      </div>
      <div>
        <h4 className="font-semibold text-white">Quick Links</h4>
        <ul className="mt-3 space-y-2 text-sm text-white/70">
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/portfolio">Portfolio</Link></li>
          <li><Link href="/book">Book Consultation</Link></li>
          <li><Link href="/careers">Careers</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold text-white">Contact</h4>
        <ul className="mt-3 space-y-2 text-sm text-white/70">
          <li>{company.email}</li>
          <li>{company.phone}</li>
          <li>{company.address}</li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold text-white">Legal</h4>
        <ul className="mt-3 space-y-2 text-sm text-white/70">
          <li><Link href="/privacy">Privacy Policy</Link></li>
          <li><Link href="/terms">Terms of Service</Link></li>
          <li><Link href="/press">Press</Link></li>
        </ul>
      </div>
    </div>
  </footer>
);
