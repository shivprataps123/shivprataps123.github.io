import Container from "./Container";

export default function Capabilities() {
  return (
    <section className="border-b border-neutral-200 dark:border-neutral-800 pt-20 pb-20">
      <Container>
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 md:text-4xl">
            Capabilities
          </h2>
          <p className="mt-4 leading-relaxed text-neutral-700 dark:text-neutral-400">
            Technologies and practices I use to build reliable,
            production-ready applications.
          </p>
        </div>

        {/* Capability Grid */}
        <div className="grid gap-12 md:grid-cols-2">
          {/* Frontend */}
          <div>
            <h3 className="text-lg font-medium text-neutral-900 dark:text-neutral-100">
              Frontend Engineering
            </h3>
            <ul className="mt-4 space-y-2 leading-relaxed text-neutral-700 dark:text-neutral-300">
              <li>• React, Next.js, React Native</li>
              <li>• Component-driven architecture</li>
              <li>• Performance optimization & Core Web Vitals</li>
            </ul>
          </div>

          {/* State & Data */}
          <div>
            <h3 className="text-lg font-medium text-neutral-900 dark:text-neutral-100">
              State & Data
            </h3>
            <ul className="mt-4 space-y-2 leading-relaxed text-neutral-700 dark:text-neutral-300">
              <li>• Redux, Context API, async workflows</li>
              <li>• API integration & intelligent caching</li>
              <li>• Real-time data handling (WebSockets)</li>
            </ul>
          </div>

          {/* Quality */}
          <div>
            <h3 className="text-lg font-medium text-neutral-900 dark:text-neutral-100">
              Quality & Delivery
            </h3>
            <ul className="mt-4 space-y-2 leading-relaxed text-neutral-700 dark:text-neutral-300">
              <li>• Unit & integration testing (Jest, RTL)</li>
              <li>• CI/CD pipelines & release automation</li>
              <li>• Code reviews & team standards</li>
            </ul>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-lg font-medium text-neutral-900 dark:text-neutral-100">
              Platform & UX
            </h3>
            <ul className="mt-4 space-y-2 leading-relaxed text-neutral-700 dark:text-neutral-300">
              <li>• Web & mobile application development</li>
              <li>• Accessibility (WCAG-aligned)</li>
              <li>• Responsive & internationalized interfaces</li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
