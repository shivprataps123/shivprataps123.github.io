"use client";

import { useState } from "react";
import Container from "./components/Container";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Capabilities from "./components/Capabilities";
import AIInPractice from "./components/AIInPractice";
let pdf = "https://drive.google.com/uc?export=download&id=1FDi6FTc3jF13LVBwpJlRNpdCgthyZ53k"

export default function HomePage() {
  const [view, setView] = useState<"product" | "technical">("product");

  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-14">
        {/* Hero */}
        <section className="border-b border-neutral-200 dark:border-neutral-800 pt-20 pb-24">
          <Container>
            <p className="mb-4 text-sm text-neutral-600 dark:text-neutral-400">
              Shiv Yadav · Frontend Product Engineer
            </p>

            <h1 className="max-w-4xl text-4xl font-semibold leading-[1.1] tracking-tight md:text-5xl">
              Frontend Product Engineer building scalable React, Vue, and React Native applications.

            </h1>

            <p className="mt-6 max-w-2xl text-lg text-neutral-400">
              I specialize in performance optimization, clean architecture, and integrating AI-powered capabilities into production-ready products for global teams.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap gap-4">
              {/* Primary CTA */}
              <a
                href="#projects"
                className="
      inline-flex items-center justify-center
      rounded-md px-6 py-3
      text-sm font-medium
      transition
      bg-neutral-900 text-white
      hover:bg-neutral-800
      dark:bg-white dark:text-neutral-900
      dark:hover:bg-neutral-200
    "
              >
                View Case Studies
              </a>

              {/* Secondary CTA */}
              <a
                href={pdf}
                target="_blank"
                rel="noreferrer"
                download
                className="
      inline-flex items-center justify-center
      rounded-md px-6 py-3
      text-sm font-medium
      transition
      border border-neutral-300 text-neutral-700
      hover:border-neutral-400 hover:text-neutral-900
      dark:border-neutral-700 dark:text-neutral-300
      dark:hover:border-neutral-500 dark:hover:text-white
    "
              >
                Download Resume
              </a>
            </div>


            {/* View Toggle */}
            <div className="
  mt-10 inline-flex items-center gap-2
  rounded-lg
  border border-neutral-300 dark:border-neutral-800
  bg-neutral-100 dark:bg-neutral-900/60
  px-3 py-2
  text-sm text-neutral-600 dark:text-neutral-400
">
              <span className="mr-1">View:</span>

              <button
                onClick={() => setView("product")}
                className={`
      rounded-md px-3 py-1 transition
      ${view === "product"
                    ? "bg-white text-neutral-900 shadow-sm dark:bg-neutral-800 dark:text-white"
                    : "hover:bg-neutral-200 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-white"
                  }
    `}
              >
                Product
              </button>

              <button
                onClick={() => setView("technical")}
                className={`
      rounded-md px-3 py-1 transition
      ${view === "technical"
                    ? "bg-white text-neutral-900 shadow-sm dark:bg-neutral-800 dark:text-white"
                    : "hover:bg-neutral-200 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-white"
                  }
    `}
              >
                Technical
              </button>
            </div>

          </Container>
        </section>

        {/* Projects */}
        <Projects view={view} />
        <AIInPractice />
        <Capabilities />

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}
