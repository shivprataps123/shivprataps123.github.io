type CaseStudyProps = {
  title: string;
  role: string;
  context: string;
  problem: string[];
  solution: string[];
  impact: string[];
  aiIntegration?: string[]; // 👈 NEW (optional)
};

export default function CaseStudy({
  title,
  role,
  context,
  problem,
  solution,
  impact,
  aiIntegration,
}: CaseStudyProps) {
  return (
    <article className="grid gap-12 md:grid-cols-3">
      {/* Left: Narrative */}
      <div className="md:col-span-2 max-w-3xl space-y-12">
        {/* Header */}
        <header>
          <h3 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 md:text-3xl">
            {title}
          </h3>

          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
            {role}
          </p>

          <p className="mt-6 leading-relaxed text-neutral-700 dark:text-neutral-300">
            {context}
          </p>
        </header>

        {/* Problem */}
        <section>
          <h4 className="text-sm font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
            Problem
          </h4>

          <ul className="mt-4 space-y-2 leading-relaxed text-neutral-700 dark:text-neutral-300">
            {problem.map((item, index) => (
              <li key={index} className="flex gap-2">
                <span className="text-neutral-400 dark:text-neutral-500">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Solution */}
        <section>
          <h4 className="text-sm font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
            What I Did
          </h4>

          <ul className="mt-4 space-y-2 leading-relaxed text-neutral-700 dark:text-neutral-300">
            {solution.map((item, index) => (
              <li key={index} className="flex gap-2">
                <span className="text-neutral-400 dark:text-neutral-500">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* AI Integration (optional, subtle) */}
        {aiIntegration && aiIntegration.length > 0 && (
          <section>
            <h4 className="text-sm font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
              AI Integration
            </h4>

            <ul className="mt-4 space-y-2 leading-relaxed text-neutral-700 dark:text-neutral-300">
              {aiIntegration.map((item, index) => (
                <li key={index} className="flex gap-2">
                  <span className="text-indigo-500">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>

      {/* Right: Impact */}
      <aside className="border-l border-neutral-200 pl-8 dark:border-neutral-800">
        <h4 className="text-sm font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
          Impact
        </h4>

        <ul className="mt-6 space-y-3 text-sm text-neutral-900 dark:text-neutral-100">
          {impact.map((item, index) => (
            <li key={index} className="flex gap-2">
              <span className="text-green-600 dark:text-green-500">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </aside>
    </article>
  );
}
