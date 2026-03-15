import { SectionHeading } from "@/components/ui/section-heading";
import { team } from "@/data/site";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-12 px-4 py-12 md:px-8">
      <SectionHeading eyebrow="About Us" title="A studio built at the intersection of music, film, and brand storytelling." description="EchoFrame Studios was founded to help creators translate emotion into sound and visuals with world-class craft." />
      <section className="grid gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 md:grid-cols-2">
        <div>
          <h3 className="text-xl font-semibold">Mission & Vision</h3>
          <p className="mt-3 text-white/75">Our mission is to provide premium, collaborative production that enables artists and businesses to stand out through unforgettable sonic and cinematic experiences.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Studio Culture</h3>
          <p className="mt-3 text-white/75">We blend artistic experimentation with production discipline, ensuring each project is imaginative, strategic, and delivery-focused.</p>
        </div>
      </section>
      <section>
        <h3 className="mb-4 text-2xl font-semibold">Team</h3>
        <div className="grid gap-5 md:grid-cols-3">
          {team.map((member) => (
            <article key={member.name} className="rounded-2xl border border-white/10 bg-midnight p-5">
              <h4 className="font-semibold">{member.name}</h4>
              <p className="text-sm text-cyan">{member.title}</p>
              <p className="mt-2 text-sm text-white/70">{member.bio}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
