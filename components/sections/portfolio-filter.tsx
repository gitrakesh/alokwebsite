"use client";

import { projectCategories, projects } from "@/data/projects";
import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export const PortfolioFilter = () => {
  const [active, setActive] = useState<(typeof projectCategories)[number]>("All");
  const filtered = useMemo(() => projects.filter((p) => active === "All" || p.category === active), [active]);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-2">
        {projectCategories.map((category) => (
          <button key={category} onClick={() => setActive(category)} className={`rounded-full px-4 py-2 text-sm ${active === category ? "bg-cyan text-ink" : "border border-white/20 text-white/70"}`}>
            {category}
          </button>
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <motion.div key={project.slug} layout className="overflow-hidden rounded-2xl border border-white/10 bg-midnight" whileHover={{ y: -6 }}>
            <Image src={project.image} alt={project.name} width={1200} height={800} className="h-52 w-full object-cover" />
            <div className="space-y-2 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-cyan">{project.category}</p>
              <h3 className="text-lg font-semibold text-white">{project.name}</h3>
              <p className="text-sm text-white/70">{project.summary}</p>
              <Link href={`/portfolio/${project.slug}`} className="text-sm text-cyan">View Project</Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
