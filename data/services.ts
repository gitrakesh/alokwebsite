import { Service } from "@/lib/types";

export const services: Service[] = [
  {
    id: "music-production",
    title: "Music Production",
    short: "Original composition and full-track production for artists and brands.",
    description: "From melodic ideation to final arrangement, we build songs that carry emotion, identity, and streaming-ready polish.",
    features: ["Songwriting collaboration", "Arrangement and instrumentation", "Genre-specific production"],
    useCases: ["Artist singles", "Album projects", "Brand campaign tracks"],
    deliverables: ["Final WAV/MP3", "Instrumental version", "Stem exports"]
  },
  {
    id: "recording",
    title: "Audio Recording",
    short: "Professional vocal and instrument recording in an acoustically tuned studio.",
    description: "Capture clean, expressive recordings with guidance from engineers who understand performance and artist comfort.",
    features: ["Vocal booth recording", "Instrument capture", "Remote direction support"],
    useCases: ["Singers and bands", "Voice-over and podcast", "Film ADR"],
    deliverables: ["Raw takes", "Comped takes", "Session notes"]
  },
  {
    id: "mix-master",
    title: "Mixing & Mastering",
    short: "Balanced, competitive, and platform-ready audio finishing.",
    description: "Our engineering chain ensures your track sounds cinematic on headphones and impactful on large systems.",
    features: ["Stereo and stem mixing", "Mastering for streaming", "Revision rounds"],
    useCases: ["Singles and EPs", "Film music", "Commercial audio"],
    deliverables: ["Master file", "Streaming formats", "Instrumental/acapella"]
  },
  {
    id: "video-production",
    title: "Video Production",
    short: "Creative direction, shoot planning, and cinematic execution.",
    description: "We plan, shoot, and direct visuals that translate your sonic identity into striking motion.",
    features: ["Pre-production planning", "On-location shoots", "Director + crew support"],
    useCases: ["Music videos", "Brand films", "Launch campaigns"],
    deliverables: ["Production plan", "Raw footage", "Final edit"]
  },
  {
    id: "post-production",
    title: "Post-Production",
    short: "Editing, color, VFX touches, and audio sync for final delivery.",
    description: "Every frame is refined for storytelling, pacing, and premium output quality across channels.",
    features: ["Narrative and pace editing", "Color grading", "Sound-to-picture integration"],
    useCases: ["Commercial edits", "Corporate AV", "Reels and shorts"],
    deliverables: ["Master video", "Social cuts", "Delivery package"]
  },
  {
    id: "artist-development",
    title: "Artist Development",
    short: "Launch strategy, creative positioning, and release support.",
    description: "For emerging talent, we combine sound, visuals, and distribution planning into one growth path.",
    features: ["Brand identity guidance", "Release roll-out", "Label distribution support"],
    useCases: ["Debut artists", "Rebranding artists", "EP launch"],
    deliverables: ["Launch roadmap", "Promo content", "Distribution checklist"]
  }
];
