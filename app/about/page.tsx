import { SectionHeading } from "@/components/ui/section-heading";
import { team } from "@/data/site";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Zap, Users } from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: CheckCircle2,
      title: "Creative Excellence",
      description: "We obsess over the smallest details. Every mix, grade, and edit reflects our commitment to premium output."
    },
    {
      icon: Users,
      title: "Collaborative Spirit",
      description: "The best work happens when creative minds combine. We partner with clients as co-creators, not vendors."
    },
    {
      icon: Zap,
      title: "Strategic Thinking",
      description: "We don't just create—we strategize. Every project serves a larger vision for your brand or career."
    }
  ];

  const milestones = [
    { year: "2015", milestone: "Founded as a 2-person operation, first studio setup" },
    { year: "2017", milestone: "Expanded to full team, moved to dedicated studio space" },
    { year: "2019", milestone: "Launched artist development division, 100+ projects delivered" },
    { year: "2021", milestone: "Renovated facility with 4K production capabilities" },
    { year: "2023", milestone: "Reached 420+ projects, expanded to remote collaboration model" },
    { year: "2024", milestone: "Established as go-to studio for emerging & established artists" }
  ];

  return (
    <div className="mx-auto max-w-7xl space-y-16 px-4 py-12 md:px-8">
      <SectionHeading 
        eyebrow="About Us" 
        title="A studio built at the intersection of music, film, and brand storytelling." 
        description="EchoFrame Studios was founded to help creators translate emotion into sound and visuals with world-class craft." 
      />

      <section className="grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
          <h3 className="text-2xl font-semibold">Our Mission</h3>
          <p className="mt-4 leading-relaxed text-white/75">
            To provide premium, collaborative production that enables artists and businesses to stand out through 
            unforgettable sonic and cinematic experiences. We believe that great creative work emerges when technical 
            mastery meets artistic vision and strategic thinking.
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
          <h3 className="text-2xl font-semibold">Our Culture</h3>
          <p className="mt-4 leading-relaxed text-white/75">
            We blend artistic experimentation with production discipline. Our studio is a space where creative risk-taking 
            is encouraged, where diverse talents collaborate, and where every project—regardless of budget—receives our 
            full creative energy.
          </p>
        </div>
      </section>

      <section>
        <h2 className="mb-8 text-3xl font-bold">Our Values</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <div key={value.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan hover:bg-white/8">
                <Icon className="h-8 w-8 text-cyan" />
                <h3 className="mt-4 font-semibold">{value.title}</h3>
                <p className="mt-2 text-sm text-white/70">{value.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section>
        <h2 className="mb-8 text-3xl font-bold">Our Story</h2>
        <div className="rounded-2xl border border-white/10 bg-midnight p-8">
          <p className="mb-4 text-white/75">
            EchoFrame Studios began as a passion project by three creatives frustrated with the fragmentation in production services. 
            Rather than outsource mixing to one place, mastering to another, and video to a third—often with disconnected creative 
            vision—we imagined a studio where every discipline collaborated on a single cohesive vision.
          </p>
          <p className="text-white/75">
            Starting in a converted garage, we perfected our craft on passionate independent artists. Today, having worked with 
            emerging talents, established brands, and multi-platinum artists, our approach remains the same: obsess over craft, 
            collaborate authentically, and deliver work that makes an impact.
          </p>
        </div>
      </section>

      <section>
        <h2 className="mb-8 text-3xl font-bold">Milestones</h2>
        <div className="space-y-4">
          {milestones.map((item, idx) => (
            <div key={item.year} className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="h-4 w-4 rounded-full bg-cyan"></div>
                {idx < milestones.length - 1 && <div className="h-12 w-0.5 bg-white/10"></div>}
              </div>
              <div className="pb-4">
                <p className="font-semibold text-cyan">{item.year}</p>
                <p className="mt-1 text-white/75">{item.milestone}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-8 text-3xl font-bold">Leadership Team</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {team.map((member) => (
            <div key={member.name} className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan hover:bg-white/8">
              <div className="h-40 w-40 rounded-full bg-gradient-to-br from-cyan/20 to-transparent"></div>
              <h3 className="mt-4 font-semibold text-lg">{member.name}</h3>
              <p className="text-sm text-cyan">{member.title}</p>
              <p className="mt-3 text-sm text-white/70">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-white/10 bg-gradient-to-br from-cyan/10 to-transparent p-8 text-center">
        <h3 className="text-2xl font-bold">Ready to Create Together?</h3>
        <p className="mt-3 text-white/75">
          Whether you're an emerging artist or an established brand, let's discuss how we can help 
          bring your vision to life with creative excellence and strategic thinking.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button href="/contact">Get in Touch</Button>
          <Button href="/services">Explore Services</Button>
        </div>
      </section>
    </div>
  );
}
