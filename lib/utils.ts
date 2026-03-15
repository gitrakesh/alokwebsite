import clsx, { type ClassValue } from "clsx";

export const cn = (...classes: ClassValue[]) => clsx(classes);

export const company = {
  name: "EchoFrame Studios",
  tagline: "Where Sound Meets Story",
  email: "hello@echoframe.studio",
  phone: "+1 (555) 781-2204",
  whatsapp: "+15557812204",
  address: "205 Motion District, Los Angeles, CA 90028"
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/studio", label: "Studio" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/faq", label: "FAQ" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
  { href: "/book", label: "Book" }
];
