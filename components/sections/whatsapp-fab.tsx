import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { company } from "@/lib/utils";

export const WhatsAppFab = () => (
  <Link href={`https://wa.me/${company.whatsapp}`} className="fixed bottom-5 right-5 z-50 rounded-full bg-green-500 p-3 text-white shadow-soft" aria-label="Chat on WhatsApp">
    <MessageCircle />
  </Link>
);
