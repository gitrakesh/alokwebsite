export interface PricingTier {
  id: string;
  name: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

export interface PricingPackage {
  id: string;
  serviceId: string;
  name: string;
  description: string;
  startingPrice: string;
  includes: string[];
  turnaround: string;
  revisions: number;
}

export const pricingPackages: PricingPackage[] = [
  {
    id: "music-starter",
    serviceId: "music-production",
    name: "Music Starter Package",
    description: "Perfect for debut artists and independent releases.",
    startingPrice: "$1,500",
    includes: [
      "Single composition & arrangement",
      "Up to 4 revision rounds",
      "Master file in standard format",
      "Streaming-ready delivery",
      "Editorial notes & documentation"
    ],
    turnaround: "2-3 weeks",
    revisions: 4
  },
  {
    id: "music-pro",
    serviceId: "music-production",
    name: "Music Pro Package",
    description: "For established artists and brand campaigns.",
    startingPrice: "$3,500",
    includes: [
      "Original composition with composer feedback",
      "Full instrumental arrangement",
      "Up to 6 revision rounds",
      "Master + instrumental versions",
      "Stem export for remixes",
      "Branded delivery package"
    ],
    turnaround: "3-4 weeks",
    revisions: 6
  },
  {
    id: "music-premium",
    serviceId: "music-production",
    name: "Music Premium Package",
    description: "Complete audio-visual identity with orchestration.",
    startingPrice: "$7,500",
    includes: [
      "Custom orchestration if needed",
      "Original composition with live recording",
      "Unlimited revisions during production",
      "Master + stems + instrumental + acapella",
      "Mastering for multiple formats",
      "Placements & licensing consultation"
    ],
    turnaround: "5-6 weeks",
    revisions: 999
  },
  {
    id: "video-starter",
    serviceId: "video-production",
    name: "Video Starter Package",
    description: "Single-location shoot with professional editing.",
    startingPrice: "$2,500",
    includes: [
      "1-day location shoot with 3-person crew",
      "Up to 4 minutes final video",
      "Professional color grading",
      "Audio sync and mixing",
      "Up to 3 revision rounds",
      "Master + social cuts"
    ],
    turnaround: "2-3 weeks",
    revisions: 3
  },
  {
    id: "video-pro",
    serviceId: "video-production",
    name: "Video Pro Package",
    description: "Multi-location cinematic production.",
    startingPrice: "$6,000",
    includes: [
      "2-day location shoot with full crew",
      "Multiple locations or studio time",
      "Up to 5 minutes final video",
      "Advanced color grading & VFX",
      "Licensed music integration",
      "Up to 5 revision rounds",
      "Multiple format delivery"
    ],
    turnaround: "4-5 weeks",
    revisions: 5
  },
  {
    id: "video-premium",
    serviceId: "video-production",
    name: "Video Premium Package",
    description: "Full campaign with multiple assets.",
    startingPrice: "$12,000",
    includes: [
      "3+ days location shooting",
      "Squad: Director, DP, Producer, Gaffer",
      "Up to 8 minutes master cut",
      "Full VFX suite available",
      "Behind-the-scenes content",
      "Unlimited revisions",
      "Multiple platform-specific cuts"
    ],
    turnaround: "6-8 weeks",
    revisions: 999
  },
  {
    id: "mix-master-single",
    serviceId: "mix-master",
    name: "Single Mix & Master",
    description: "Professional finishing for one track.",
    startingPrice: "$500",
    includes: [
      "Professional mixing",
      "Streaming-ready mastering",
      "LUFS compliance verification",
      "Reference comparisons",
      "Master file + streaming formats",
      "Up to 2 revision rounds"
    ],
    turnaround: "3-5 days",
    revisions: 2
  },
  {
    id: "mix-master-ep",
    serviceId: "mix-master",
    name: "EP Mix & Master",
    description: "Cohesive finishing for 4-6 tracks.",
    startingPrice: "$2,000",
    includes: [
      "Consistent mixing across tracks",
      "Professional mastering suite",
      "Format optimization for all platforms",
      "Stems export included",
      "Full EP delivery package",
      "Up to 3 revisions per track"
    ],
    turnaround: "1-2 weeks",
    revisions: 3
  }
];
