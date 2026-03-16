import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

const pressItems = [
  {
    publication: "Music Industry Weekly",
    title: "Rising Studios Transform Artist Launch Strategy",
    date: "March 2024",
    description: "Feature on how integrated studios are changing artist development and release strategies.",
    link: "#"
  },
  {
    publication: "Filmmaker Magazine",
    title: "The Future of Sonic Branding in Advertising",
    date: "February 2024",
    description: "Interview with our head of production on creating audio identities for brands.",
    link: "#"
  },
  {
    publication: "Production Insider",
    title: "Studio Profile: EchoFrame's Integrated Approach",
    date: "January 2024",
    description: "Deep dive into how we combine music, video, and strategy under one roof.",
    link: "#"
  },
  {
    publication: "IndieArtist Podcast",
    title: "Production Tips for Emerging Musicians",
    date: "December 2023",
    description: "Podcast appearance discussing how independent artists can approach professional production.",
    link: "#"
  }
];

export default function PressPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-16 px-4 py-12 md:px-8">
      <SectionHeading 
        eyebrow="Press"
        title="Press & Media Mentions"
        description="Coverage, interviews, and recognition from music and creative industry platforms."
      />

      <section>
        <h2 className="mb-8 text-3xl font-bold">In the News</h2>
        <div className="space-y-5">
          {pressItems.map((item) => (
            <article key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan hover:bg-white/8">
              <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
                <div className="flex-1">
                  <p className="text-sm text-cyan font-semibold">{item.publication}</p>
                  <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-white/70">{item.description}</p>
                  <p className="mt-3 text-xs text-white/60">{item.date}</p>
                </div>
                <Button href={item.link} className="whitespace-nowrap">Read More</Button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-white/10 bg-midnight p-8">
        <h3 className="text-2xl font-bold">For Press Inquiries</h3>
        <p className="mt-3 text-white/75">
          For media requests, interviews, or feature opportunities, please reach out to our team.
        </p>
        <p className="mt-4 text-white/75">
          <strong>Email:</strong> press@echoframe.studio<br />
          <strong>Contact:</strong> hello@echoframe.studio
        </p>
      </section>
    </div>
  );
}
