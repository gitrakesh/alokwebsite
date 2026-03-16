import { SectionHeading } from "@/components/ui/section-heading";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

const releases = [
  {
    title: "Aurora Lane - Midnight Drive",
    artist: "Aurora Lane",
    date: "March 2024",
    platforms: "Spotify • Apple Music • YouTube",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=600&q=80",
    description: "debut single with production and music video"
  },
  {
    title: "Fractal Motion - Digital Echoes (EP)",
    artist: "Fractal Motion",
    date: "February 2024",
    platforms: "All Platforms",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=600&q=80",
    description: "3-track EP with cinematic score elements"
  },
  {
    title: "Nayan & The Drift - Live Sessions",
    artist: "Nayan & The Drift",
    date: "January 2024",
    platforms: "YouTube • Spotify",
    image: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?auto=format&fit=crop&w=600&q=80",
    description: "recorded and mixed live session video"
  },
  {
    title: "Indie Collective - Vol. 2 Compilation",
    artist: "Various Artists",
    date: "December 2023",
    platforms: "All Platforms",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    description: "compilation featuring artists we've worked with"
  }
];

export default function ReleasesPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-12 px-4 py-12 md:px-8">
      <SectionHeading 
        eyebrow="Music Releases"
        title="Albums & EPs We've Produced"
        description="Latest singles, EP launches, and score projects distributed with EchoFrame support."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {releases.map((release) => (
          <article key={release.title} className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:border-cyan hover:bg-white/8">
            <Image 
              src={release.image} 
              alt={release.title} 
              width={600} 
              height={600} 
              className="h-48 w-full object-cover"
            />
            <div className="space-y-3 p-5">
              <p className="text-xs text-cyan font-semibold uppercase">{release.artist}</p>
              <h3 className="text-lg font-semibold">{release.title}</h3>
              <p className="text-sm text-white/70">{release.description}</p>
              <div className="pt-2 border-t border-white/10">
                <p className="text-xs text-white/60">{release.date}</p>
                <p className="text-xs text-white/60 mt-1">{release.platforms}</p>
              </div>
              <button className="w-full rounded-lg bg-white/5 px-3 py-2 text-sm text-cyan transition hover:bg-white/10 flex items-center justify-center gap-2">
                Listen Now <ExternalLink className="h-4 w-4" />
              </button>
            </div>
          </article>
        ))}
      </div>

      <section className="rounded-2xl border border-white/10 bg-midnight p-8 text-center">
        <h3 className="text-2xl font-bold">Want Your Release Produced?</h3>
        <p className="mt-3 text-white/75">
          Let's discuss your music and create something great together. From production to distribution support, we're here to help.
        </p>
      </section>
    </div>
  );
}
