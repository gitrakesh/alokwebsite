import { openings, team } from "@/data/site";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";

export default function CareersPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-16 px-4 py-12 md:px-8">
      <SectionHeading 
        eyebrow="Join Us"
        title="Careers & Collaborations"
        description="We're always looking for talented producers, engineers, editors, and creative visionaries to join our team."
      />

      <section>
        <h2 className="mb-6 text-3xl font-bold">Why EchoFrame?</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="font-semibold text-cyan">Creative Freedom</h3>
            <p className="mt-2 text-sm text-white/75">
              Work on diverse projects—music, commercial, corporate—without creative constraints. We trust our team.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="font-semibold text-cyan">Growth Opportunities</h3>
            <p className="mt-2 text-sm text-white/75">
              Mentorship from industry veterans, learning opportunities, and clear paths to leadership roles.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="font-semibold text-cyan">Collaborative Culture</h3>
            <p className="mt-2 text-sm text-white/75">
              We believe the best work happens when talents combine. Cross-mentoring and skill-sharing are standards.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-3xl font-bold">Open Positions</h2>
        <div className="space-y-4">
          {openings.map((opening) => (
            <article 
              key={opening.role} 
              className="rounded-xl border border-white/10 bg-white/5 p-5 transition hover:border-cyan hover:bg-white/8"
            >
              <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
                <div>
                  <h3 className="text-lg font-semibold">{opening.role}</h3>
                  <p className="mt-1 text-sm text-white/70">
                    {opening.type} · {opening.location}
                  </p>
                </div>
                <Button href="/contact">Apply Now</Button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-3xl font-bold">Leadership Team</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {team.map((member) => (
            <div key={member.name} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="h-32 w-32 rounded-full bg-gradient-to-br from-cyan/20 to-transparent"></div>
              <h3 className="mt-4 font-semibold">{member.name}</h3>
              <p className="text-sm text-cyan">{member.title}</p>
              <p className="mt-2 text-sm text-white/70">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-3xl font-bold">Freelance & Collaboration</h2>
        <div className="rounded-2xl border border-white/10 bg-midnight p-8">
          <p className="text-white/75">
            We regularly collaborate with freelance engineers, color graders, VFX artists, and specialists on a project basis. 
            If you're an independent creative interested in working with us on specific projects, let's talk.
          </p>
          <Button href="/contact" className="mt-5">Get in Touch</Button>
        </div>
      </section>
    </div>
  );
}
