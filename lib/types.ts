export type Service = {
  id: string;
  title: string;
  short: string;
  description: string;
  features: string[];
  useCases: string[];
  deliverables: string[];
};

export type Project = {
  slug: string;
  name: string;
  category: "Music" | "Videos" | "Commercials" | "Live Sessions" | "Corporate" | "Social Media Content";
  image: string;
  summary: string;
  client: string;
  deliverables: string[];
  embedUrl?: string;
};

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  rating: number;
};

export type FAQ = {
  question: string;
  answer: string;
};

export type TeamMember = {
  name: string;
  title: string;
  bio: string;
};

export type Opening = {
  role: string;
  type: string;
  location: string;
};
