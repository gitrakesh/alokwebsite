import { SectionHeading } from "@/components/ui/section-heading";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const artists = [
  {
    name: "Aurora Lane",
    bio: "Indie pop artist with atmospheric sound design",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=600&q=80",
    role: "Independent Artist",
    support: "Full production + release strategy"
  },
  {
    name: "Fractal Motion",
    bio: "Emerging electronic and cinematic producer",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=600&q=80",
    role: "Producer",
    support: "Music production + video direction"
  },
  {
    name: "Nayan & The Drift",
    bio: "Live band with collaborative songwriting approach",
    image: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?auto=format&fit=crop&w=600&q=80",
    role: "Band",
    support: "Recording + live session documentation"
  }
];

export default function ArtistsPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-16 px-4 py-12 md:px-8">
      <SectionHeading 
        eyebrow="Artists"
        title="Artists & Collaborations"
        description="Spotlighting artists developed through our label and production partnerships."
      />

      <section>
        <h2 className="mb-8 text-3xl font-bold">Featured Artists</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {artists.map((artist) => (
            <div key={artist.name} className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:border-cyan hover:bg-white/8">
              <Image 
                src={artist.image} 
                alt={artist.name} 
                width={600} 
                height={600} 
                className="h-64 w-full object-cover"
              />
              <div className="space-y-4 p-6">
                <div>
                  <h3 className="text-xl font-semibold">{artist.name}</h3>
                  <p className="text-sm text-cyan">{artist.role}</p>
                </div>
                <p className="text-sm text-white/75">{artist.bio}</p>
                <div className="rounded-lg bg-white/5 px-3 py-2 text-xs text-white/70">
                  <p className="font-semibold text-white">Our Support</p>
                  <p className="mt-1">{artist.support}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-white/10 bg-white/5 p-8">
        <h2 className="text-2xl font-bold">Artist Development Program</h2>
        <p className="mt-4 text-white/75">
          We believe in investing in emerging talent. Our artist development program combines production, 
          release strategy, and distribution guidance to help new artists find their voice and build sustainable careers.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div>
            <p className="font-semibold text-cyan">Sound Development</p>
            <p className="mt-2 text-sm text-white/70">
              Work with producers to define your sonic identity and craft signature songs.
            </p>
          </div>
          <div>
            <p className="font-semibold text-cyan">Visual Identity</p>
            <p className="mt-2 text-sm text-white/70">
              Music videos and cover art that reflect your artistic brand.
            </p>
          </div>
          <div>
            <p className="font-semibold text-cyan">Release Planning</p>
            <p className="mt-2 text-sm text-white/70">
              Strategic release calendars with playlist pitching and promotion support.
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-white/10 bg-midnight p-8">
        <h2 className="text-2xl font-bold">Are You an Emerging Artist?</h2>
        <p className="mt-3 text-white/75">
          If you're a new artist looking for production support, release guidance, and creative partnership, 
          we'd love to hear from you. Apply to our artist development program.
        </p>
        <Button href="/contact" className="mt-5">Apply Now</Button>
      </section>
    </div>
  );
}
