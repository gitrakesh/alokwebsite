import { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "aurora-debut-single",
    name: "Aurora Debut Single",
    category: "Music",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80",
    summary: "Full composition, production, and mastering for an indie pop debut release.",
    client: "Aurora Lane",
    deliverables: ["Single master", "Streaming assets", "30-sec promo cut"]
  },
  {
    slug: "fractal-motion-video",
    name: "Fractal Motion Music Video",
    category: "Videos",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1400&q=80",
    summary: "Concept-to-screen music video with night-shot cinematic treatment.",
    client: "Fractal Motion",
    deliverables: ["4K master", "Vertical teaser", "Color-graded timeline"]
  },
  {
    slug: "nova-brand-jingle",
    name: "Nova Beverage Brand Jingle",
    category: "Commercials",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1400&q=80",
    summary: "High-recall mnemonic jingle and ad-music package for digital campaigns.",
    client: "Nova Beverages",
    deliverables: ["Jingle versions", "Cutdown edits", "Broadcast-ready masters"]
  },
  {
    slug: "corporate-launch-film",
    name: "Corporate Launch Promo",
    category: "Corporate",
    image: "https://images.unsplash.com/photo-1559223607-a43c990c692c?auto=format&fit=crop&w=1400&q=80",
    summary: "Launch event AV film combining interviews, product visuals, and score.",
    client: "Axion Systems",
    deliverables: ["Main launch video", "Social snippets", "Event playback package"]
  },
  {
    slug: "pulse-reel-pack",
    name: "Pulse Social Reel Package",
    category: "Social Media Content",
    image: "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=1400&q=80",
    summary: "Monthly social media reels with trend-aware edits and sonic branding.",
    client: "Pulse Activewear",
    deliverables: ["12 reels", "Audio templates", "Publishing calendar"]
  },
  {
    slug: "acoustic-live-session",
    name: "Acoustic Live Session",
    category: "Live Sessions",
    image: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?auto=format&fit=crop&w=1400&q=80",
    summary: "Multi-camera live session capture with immersive room audio mix.",
    client: "Nayan & The Drift",
    deliverables: ["Live mix", "Session film", "Behind-the-scenes cut"]
  }
];

export const projectCategories = ["All", "Music", "Videos", "Commercials", "Live Sessions", "Corporate", "Social Media Content"] as const;
