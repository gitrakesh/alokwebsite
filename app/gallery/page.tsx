import { SectionHeading } from "@/components/ui/section-heading";
import Image from "next/image";

const galleryVideos = [
  {
    title: "Aurora Debut - Music Video",
    thumbnail: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=80",
    duration: "4:32",
    category: "Music Video"
  },
  {
    title: "Fractal Motion Cinematic",
    thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=800&q=80",
    duration: "5:45",
    category: "Music Video"
  },
  {
    title: "Nova Brand Spot",
    thumbnail: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80",
    duration: "0:30",
    category: "Commercial"
  },
  {
    title: "Corporate Launch Film",
    thumbnail: "https://images.unsplash.com/photo-1559223607-a43c990c692c?auto=format&fit=crop&w=800&q=80",
    duration: "8:20",
    category: "Corporate"
  },
  {
    title: "Pulse Social Reels",
    thumbnail: "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=800&q=80",
    duration: "0:15",
    category: "Social Content"
  },
  {
    title: "Live Session Capture",
    thumbnail: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?auto=format&fit=crop&w=800&q=80",
    duration: "12:00",
    category: "Live Session"
  }
];

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-12 px-4 py-12 md:px-8">
      <SectionHeading 
        eyebrow="Video Gallery"
        title="Visual Work Across Music, Commercials & More"
        description="Curated visual work from music videos, commercial spots, corporate films, and social campaigns."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {galleryVideos.map((video) => (
          <div key={video.title} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <div className="relative">
              <Image 
                src={video.thumbnail} 
                alt={video.title} 
                width={800} 
                height={600} 
                className="h-56 w-full object-cover transition group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition group-hover:opacity-100">
                <button className="h-16 w-16 rounded-full bg-cyan text-ink flex items-center justify-center text-2xl font-bold">
                  ▶
                </button>
              </div>
              <span className="absolute right-3 bottom-3 rounded-lg bg-black/60 px-2 py-1 text-xs font-semibold text-white">
                {video.duration}
              </span>
            </div>
            <div className="p-5">
              <p className="text-xs text-cyan font-semibold uppercase">{video.category}</p>
              <h3 className="mt-2 font-semibold">{video.title}</h3>
            </div>
          </div>
        ))}
      </div>

      <section className="rounded-2xl border border-white/10 bg-midnight p-8 text-center">
        <h3 className="text-2xl font-bold">Get Your Video Made</h3>
        <p className="mt-3 text-white/75">
          From concept to final color grade, we produce videos that tell your story with impact.
        </p>
      </section>
    </div>
  );
}
