import { FAQ, Opening, TeamMember, Testimonial } from "@/lib/types";

export const testimonials: Testimonial[] = [
  {
    name: "Mila Fernandes",
    role: "Independent Artist",
    quote: "EchoFrame didn’t just produce my single—they crafted my sonic identity and launch visuals as one cohesive story.",
    rating: 5
  },
  {
    name: "Rahul Sethi",
    role: "Brand Manager, Nova",
    quote: "Fast turnaround, premium output, and a team that understands both marketing and music culture.",
    rating: 5
  },
  {
    name: "Luca Mason",
    role: "YouTube Creator",
    quote: "Their edit rhythm and audio finishing transformed our channel intros and boosted retention significantly.",
    rating: 5
  }
];

export const faqs: FAQ[] = [
  { question: "How long does a typical project take?", answer: "Music singles often take 1-3 weeks; videos range from 2-6 weeks depending on complexity and shoot days." },
  { question: "Do you provide revision rounds?", answer: "Yes. Every package includes defined revision rounds to ensure your creative intent is fully realized." },
  { question: "What about ownership and rights?", answer: "Rights and licensing are clearly defined in contracts. We offer flexible models for artists, brands, and agencies." },
  { question: "Can I book only mixing/mastering?", answer: "Absolutely. We support standalone finishing services as well as complete end-to-end production." },
  { question: "Do you handle corporate and ad films too?", answer: "Yes, from concept and scripting to shoot, post-production, and platform-ready cutdowns." }
];

export const team: TeamMember[] = [
  { name: "Aarav Kapoor", title: "Founder & Executive Producer", bio: "15+ years building cross-medium audio-visual stories for artists and brands." },
  { name: "Selina Grant", title: "Head of Music Production", bio: "Composer and arranger specializing in contemporary pop, cinematic scores, and ad music." },
  { name: "Nikhil D'Souza", title: "Lead Video Director", bio: "Visual storyteller focused on high-energy music videos and modern branded narratives." }
];

export const openings: Opening[] = [
  { role: "Assistant Audio Engineer", type: "Full-time", location: "Los Angeles" },
  { role: "Video Editor (Reels/Shorts)", type: "Freelance", location: "Remote" },
  { role: "Studio Intern - Production", type: "Internship", location: "On-site" }
];

export const stats = [
  { label: "Projects Delivered", value: "420+" },
  { label: "Artists & Brands Served", value: "180+" },
  { label: "Years of Craft", value: "12" },
  { label: "Average Client Rating", value: "4.9/5" }
];
