export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: number;
  image: string;
  category: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "mastering-for-streaming",
    title: "Mastering for Streaming Platforms: The Complete Guide",
    excerpt: "Discover the technical specifications and creative practices needed to master your music for optimal performance across Spotify, Apple Music, and YouTube.",
    content: "The landscape of music consumption has shifted dramatically. Your perfectly mixed track needs to translate across earbuds, headphones, car stereos, and large venue systems. Our mastering approach balances loudness standards, dynamic range, and spectral balance. We reference mix-bus settings against commercial tracks in your genre and deliver stems that give platforms competitive playback metrics. Learn the LUFS targets, metering techniques, and delivery formats that ensure your release sounds premium wherever it's heard.",
    author: "Selina Grant",
    date: "Mar 10, 2025",
    readTime: 8,
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=800&q=80",
    category: "Production",
    tags: ["Mixing", "Mastering", "Streaming", "Technical"]
  },
  {
    id: "2",
    slug: "music-video-production-budget",
    title: "Planning Your Music Video: Budget to Creative Direction",
    excerpt: "A breakdown of realistic video production timelines, cost structures, and creative decision-making from concept to final delivery.",
    content: "Music videos remain one of the most impactful promotional tools for artists. Whether you're shooting on a tight indie budget or planning a cinematic production, understanding the variables—crew size, location scoping, post-production rounds—ensures your vision materializes on screen and schedule. We walk through location scouting, shot lists, lighting rigs, color grading, VFX integration, and social-media-ready cutdowns. Real-world examples show how specific creative choices cascade into production complexity and timeline impact.",
    author: "Nikhil D'Souza",
    date: "Mar 5, 2025",
    readTime: 11,
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80",
    category: "Filmmaking",
    tags: ["Video Production", "Budget", "Workflow", "Planning"]
  },
  {
    id: "3",
    slug: "songwriting-collaboration-tips",
    title: "The Art of Remote Songwriting Collaboration",
    excerpt: "Best practices for co-writing, version control, and maintaining creative momentum when working with collaborators across time zones.",
    content: "Songwriting partnerships have evolved. With collaborators often spread across continents, the logistics of sharing ideas, iterating arrangements, and capturing recordings require intentional workflows. We share our collaboration stack—file naming conventions, session architecture, reference sharing, and feedback loops—that have helped us co-write with artists worldwide. Topics include loop libraries, MIDI trading, vocal submission protocols, and how to maintain the spontaneity and creative magic of songwriting through digital channels.",
    author: "Aarav Kapoor",
    date: "Feb 28, 2025",
    readTime: 9,
    image: "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?auto=format&fit=crop&w=800&q=80",
    category: "Music Production",
    tags: ["Songwriting", "Collaboration", "Remote Work", "Workflow"]
  },
  {
    id: "4",
    slug: "sonic-branding-strategy",
    title: "Sonic Branding: Creating an Audio Identity for Your Brand",
    excerpt: "How to build a consistent sonic experience across ads, social content, and customer touchpoints that makes your brand instantly recognizable.",
    content: "While visual design is table-stakes, sonic design often separates premium brands from the rest. A distinctive jingle, a consistent audio logo, and intelligently composed background music create emotional resonance and brand recall. We outline the process: identifying your brand personality, composing signature elements, building variation templates for different media lengths, and integrating audio production across campaigns. Case studies show how consistent sonic branding lifted recall rates and deepened customer connection.",
    author: "Selina Grant",
    date: "Feb 20, 2025",
    readTime: 7,
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80",
    category: "Strategy",
    tags: ["Branding", "Audio Design", "Marketing", "Strategy"]
  },
  {
    id: "5",
    slug: "artist-development-roadmap",
    title: "Building a 12-Month Artist Development Roadmap",
    excerpt: "A framework for emerging artists to plan releases, grow fan base, and establish sustainable career momentum.",
    content: "Artist development isn't just music—it's strategy. We guide emerging talents through a 12-month roadmap covering singles sequencing, visual content production, playlist pitching, fan-building mechanics, and release timing. Whether aiming for major-label attention, independent growth, or brand partnership, structure matters. Learn how to pace releases for maximum impact, coordinate video, audio, and promotion timelines, and track metrics that signal genuine progress.",
    author: "Aarav Kapoor",
    date: "Feb 15, 2025",
    readTime: 10,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80",
    category: "Career",
    tags: ["Artist Development", "Career", "Strategy", "Planning"]
  },
  {
    id: "6",
    slug: "short-form-video-trends",
    title: "Short-Form Video Trends & Technical Best Practices 2025",
    excerpt: "TikTok, Reels, and YouTube Shorts demand specific frame rates, aspect ratios, and audio strategies. Here's what's working now.",
    content: "Short-form content dominates discovery. Platforms reward snappy pacing, trend-aware audio, and vertical optimization. We dissect the technical specs (frame rates, bit rates, aspect ratios) and creative strategies (hook timing, music selection, editing pace) that maximize watch time and algorithmic push. Real analytics from our recent campaigns show which audio treatments drive highest engagement and which editing patterns yield best retention.",
    author: "Nikhil D'Souza",
    date: "Feb 8, 2025",
    readTime: 6,
    image: "https://images.unsplash.com/photo-1611532736579-6b16e2b50449?auto=format&fit=crop&w=800&q=80",
    category: "Digital Content",
    tags: ["Social Media", "Video", "Trends", "Technical"]
  }
];

export const blogCategories = ["All", "Production", "Filmmaking", "Music Production", "Strategy", "Career", "Digital Content"] as const;
