import Container from "./Container";
import CaseStudy from "./CaseStudy";
import MotionSection from "./MotionSection";
import { motion, AnimatePresence } from "framer-motion";

type ProjectsProps = {
  view: "product" | "technical";
};

export default function Projects({ view }: ProjectsProps) {
  const isTechnical = view === "technical";

  return (
    <section
      id="projects"
      className="border-b border-neutral-200 dark:border-neutral-800 pt-20 pb-20"
    >
      <Container>
        {/* Section Header */}
        <div className="mb-16 max-w-xl">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Selected Case Studies
          </h2>
          <p className="mt-4 text-neutral-400 leading-relaxed">
            A closer look at how I approach real-world frontend problems
            in production environments.
          </p>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={view}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="space-y-28"
          >
            {/* Joyride */}
            <MotionSection>
              <CaseStudy
                title="Joyride — Urban Mobility Platform (Canada)"
                role="Frontend Tech Lead"
                context="Joyride is a large-scale urban mobility platform serving users across multiple Canadian cities, with real-time tracking and high concurrency requirements."
                problem={[
                  "Legacy frontend causing slow initial load times",
                  "Poor scalability during peak usage",
                  "Inconsistent UI patterns across features",
                ]}
                solution={
                  isTechnical
                    ? [
                      "Modularized frontend architecture using feature-based folders",
                      "Implemented code-splitting and lazy loading at route level",
                      "Used memoization and selective re-renders to optimize performance",
                      "Established shared component contracts to reduce UI drift",
                    ]
                    : [
                      "Led migration from legacy stack to React",
                      "Designed a reusable component architecture",
                      "Optimized Core Web Vitals through code-splitting and caching",
                      "Improved accessibility to meet WCAG standards",
                    ]
                }
                aiIntegration={[
                  "Integrated AI-assisted logic to improve route recommendations and ETA accuracy",
                  "Used AI-powered insights to analyze user behavior and optimize key UX flows",
                  "Leveraged AI tooling to speed up performance analysis and feature iteration",
                ]}
                impact={[
                  "40% faster initial load time",
                  "95+ Lighthouse performance score",
                  "5,000+ concurrent users handled reliably",
                ]}
              />
            </MotionSection>

            {/* Divider */}
            <div className="border-t border-neutral-800" />

            {/* EatClub */}
            <MotionSection>
              <CaseStudy
                title="EatClub — Workplace Food Ordering Platform"
                role="React Native Engineer"
                context="EatClub is a high-traffic food ordering platform used by corporate employees for daily and scheduled meal ordering."
                problem={[
                  "Complex ordering flows with high failure sensitivity",
                  "Need for real-time order status updates",
                  "Performance issues affecting Time to Interactive",
                ]}
                solution={
                  isTechnical
                    ? [
                      "Designed scalable state management for order workflows",
                      "Reduced unnecessary re-renders using React.memo and useMemo",
                      "Optimized navigation stack for faster screen transitions",
                      "Handled real-time updates efficiently via WebSocket subscriptions",
                    ]
                    : [
                      "Built React Native application with optimized navigation flows",
                      "Implemented real-time order tracking using WebSockets",
                      "Reduced unnecessary re-renders using memoization techniques",
                      "Designed scalable state management for order workflows",
                    ]
                }
                aiIntegration={[
                  "Implemented AI-assisted menu search and recommendation experiences",
                  "Used AI-driven insights to analyze ordering patterns and improve UX flows",
                  "Leveraged AI tools to accelerate debugging and reduce iteration time",
                ]}
                impact={[
                  "50,000+ application downloads",
                  "4.7-star average rating",
                  "50% reduction in Time to Interactive",
                ]}
              />
            </MotionSection>
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
}
