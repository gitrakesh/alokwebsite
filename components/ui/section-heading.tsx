import { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: ReactNode;
};

export const SectionHeading = ({ eyebrow, title, description, action }: Props) => (
  <div className="mb-8 flex flex-col gap-3 md:mb-10 md:flex-row md:items-end md:justify-between">
    <div className="max-w-2xl space-y-2">
      {eyebrow ? <p className="text-xs uppercase tracking-[0.2em] text-cyan">{eyebrow}</p> : null}
      <h2 className="text-3xl font-bold text-white md:text-4xl">{title}</h2>
      {description ? <p className="text-sm text-white/70 md:text-base">{description}</p> : null}
    </div>
    {action}
  </div>
);
