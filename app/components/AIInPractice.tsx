import Container from "./Container";

export default function AIInPractice() {
  return (
    <section className="border-b border-neutral-200 dark:border-neutral-900 pt-20 pb-20">
      <Container>
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 md:text-4xl">
            AI in Practice
          </h2>
          <p className="mt-4 leading-relaxed text-neutral-700 dark:text-neutral-400">
            How I use AI to improve product experiences, decision-making,
            and developer productivity in real-world applications.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid gap-12 md:grid-cols-3">
          {/* AI for User Experience */}
          <div>
            <h3 className="text-lg font-medium text-neutral-900 dark:text-neutral-100">
              AI for User Experience
            </h3>
            <ul className="mt-4 space-y-2 leading-relaxed text-neutral-700 dark:text-neutral-300">
              <li>• AI-assisted search and recommendation flows</li>
              <li>• Intelligent data presentation in real-time applications</li>
              <li>• UX improvements driven by AI-powered insights</li>
            </ul>
          </div>

          {/* AI for Product & Performance */}
          <div>
            <h3 className="text-lg font-medium text-neutral-900 dark:text-neutral-100">
              AI for Product & Performance
            </h3>
            <ul className="mt-4 space-y-2 leading-relaxed text-neutral-700 dark:text-neutral-300">
              <li>• Using AI insights to guide feature prioritization</li>
              <li>• AI-assisted analysis of user behavior and system metrics</li>
              <li>• Experimentation with AI-powered automation in workflows</li>
            </ul>
          </div>

          {/* AI for Developer Productivity */}
          <div>
            <h3 className="text-lg font-medium text-neutral-900 dark:text-neutral-100">
              AI for Developer Productivity
            </h3>
            <ul className="mt-4 space-y-2 leading-relaxed text-neutral-700 dark:text-neutral-300">
              <li>• AI-assisted coding, refactoring, and debugging</li>
              <li>• Faster prototyping and iteration using AI tooling</li>
              <li>• Improving delivery speed without sacrificing quality</li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
