type ProjectCardProps = {
  title: string;
  description: string;
  role: string;
  impact: string[];
};

export default function ProjectCard({
  title,
  description,
  role,
  impact,
}: ProjectCardProps) {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      {/* Left: Project info */}
      <div className="md:col-span-2">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-neutral-400">{role}</p>

        <p className="mt-6 max-w-2xl text-neutral-300">
          {description}
        </p>
      </div>

      {/* Right: Impact */}
      <div>
        <h4 className="text-sm font-medium uppercase tracking-wide text-neutral-400">
          Impact
        </h4>
        <ul className="mt-4 space-y-2">
          {impact.map((item, index) => (
            <li key={index} className="text-neutral-200">
              • {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
