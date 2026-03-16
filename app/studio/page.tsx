import Image from "next/image";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

export default function StudioPage() {
  const facilities = [
    {
      name: "Recording Suite A",
      description: "Acoustically treated live room with iso-booth. Perfect for vocal, instrument, and live session capture.",
      specs: ["Neve 8088 Console", "Neumann U87 Mics", "Vintage Outboard Chain", "Multi-channel I/O"]
    },
    {
      name: "Recording Suite B",
      description: "Intimate vocal booth and podcast space with pro-grade acoustics and remote-friendly streaming setup.",
      specs: ["Neumann TLM Mics", "RME Dante I/O", "Behringer Mixer", "Streaming-Ready Monitoring"]
    },
    {
      name: "Production & Edit Bay 1",
      description: "High-performance workstations for composition, arrangement, and music production with extensive plugin ecosystem.",
      specs: ["Custom-Built DAW Workstation", "Logic Pro & Ableton Setup", "Reference Monitors", "MIDI Controllers"]
    },
    {
      name: "Color Grading & Post Suite",
      description: "Color-calibrated Davinci suite with full VFX capabilities for cinematic grading and visual effects composition.",
      specs: ["DaVinci Resolve Studio", "14-Bit Color Grading", "4K Timeline", "Real-time VFX Rendering"]
    },
    {
      name: "Online Edit Suite",
      description: "Fast-turn editorial station for short-form content, reels, and quick turnaround social media cuts.",
      specs: ["Premiere Pro Setup", "5K Workflow Support", "Stock Library Integration", "Speed Optimization"]
    },
    {
      name: "Foley & Sound Design",
      description: "Dedicated space for immersive sound design, foley recording, and spatial audio mixing.",
      specs: ["Foley Pit Setup", "Field Recording Tools", "Surround Sound Monitoring", "SFX Library (1TB+)"]
    }
  ];

  const equipment = [
    { category: "Cameras", items: ["RED Komodo 6K", "ARRI Alexa LF", "DJI Ronin 4D", "Drones & Gimbal Rigs"] },
    { category: "Audio Gear", items: ["SSL Stratus Console", "Neve 1073 Preamps", "Thermal Audio Preamplifiers", "Studer Reels"] },
    { category: "Monitoring", items: ["Bryston Amplifiers", "Adam Pro Speakers", "Sennheiser Headphones", "Calibrated 5.1 Setup"] },
    { category: "Remote Capabilities", items: ["Dante Networking", "Zoom Room Integration", "Cloud Collaboration Tools", "Real-time Session Streaming"] }
  ];

  return (
    <div className="mx-auto max-w-7xl space-y-16 px-4 py-12 md:px-8">
      <SectionHeading 
        eyebrow="Our Facilities"
        title="A Cutting-Edge Production Compound" 
        description="Designed and equipped for premium audio and visual content creation, our facility blends proven acoustics with state-of-the-art technology."
      />

      <section>
        <h2 className="mb-8 text-3xl font-bold">Recording & Production Spaces</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {facilities.map((facility) => (
            <div key={facility.name} className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan hover:bg-white/8">
              <h3 className="text-lg font-semibold text-cyan">{facility.name}</h3>
              <p className="mt-3 text-sm text-white/75">{facility.description}</p>
              <ul className="mt-4 space-y-2">
                {facility.specs.map((spec) => (
                  <li key={spec} className="text-sm text-white/70">• {spec}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-8 text-3xl font-bold">Equipment & Technology</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {equipment.map((group) => (
            <div key={group.category} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-semibold text-cyan">{group.category}</h3>
              <ul className="mt-4 space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-sm text-white/75">✓ {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-white/10 bg-gradient-to-br from-cyan/10 to-transparent p-8">
        <h2 className="text-2xl font-bold">Session Details & Booking</h2>
        <p className="mt-3 text-white/75">
          We accommodate everything from full-day album sessions to quick 2-hour overdub days, artist showcases, 
          and immersive multi-day productions. Available for hourly, daily, and project-based bookings with flexible 
          engineering support.
        </p>
        <p className="mt-4 text-white/75">
          <strong>Studio Rates:</strong> Starting at $100/hour for engineering included. Off-peak discounts and 
          package rates available for extended projects.
        </p>
        <Button href="/book" className="mt-5">Book Studio Time</Button>
      </section>

      <section className="rounded-2xl border border-white/10 bg-midnight p-8">
        <h2 className="text-2xl font-bold">Remote & Hybrid Workflows</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="font-semibold text-cyan">Cloud Collaboration</h3>
            <p className="mt-2 text-sm text-white/75">
              Work remotely with our team. Share stems, get real-time feedback, and iterate on projects without being in the studio.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-cyan">Streaming Sessions</h3>
            <p className="mt-2 text-sm text-white/75">
              Director, producers, and clients can observe and guide sessions in real-time through our integrated streaming setup.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
