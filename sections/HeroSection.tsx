"use client";

import Image from "next/image";
import Link from "next/link";

import { ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto flex min-h-screen max-w-7xl items-center px-6 py-20">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* LEFT - PROFILE IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            {/* IMAGE CONTAINER */}
            <div className="relative overflow-hidden px-3 rounded-4xl bg-black/5 dark:bg-white/5">
              <Image
                src="/images/3.png"
                alt="Mateus"
                width={800}
                height={950}
                priority
                className="w-full max-w-180 object-cover"
              />
            </div>
          </motion.div>

          {/* RIGHT - CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* BADGE */}
            <div className="mb-6 inline-flex items-center rounded-full border border-black/10 bg-black/3 px-4 py-2 text-sm text-zinc-700 backdrop-blur dark:border-white/10 dark:bg-white/3 dark:text-zinc-300">
              Frontend Developer • Indonesia
            </div>

            {/* TITLE */}
            <h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight md:text-7xl">
              Hi, I&apos;m Mateus Argastra.
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              Frontend Developer with professional experience building responsive and userfriendly web interfaces.
              Skilled in translating UI/UX designs into clean, maintainable code and integrating frontend components with backend services.
              Experienced in collaborating within cross-functional teams to deliver reliable and scalable web applications.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl bg-black px-6 py-3 font-medium text-white transition hover:scale-[1.02] dark:bg-emerald-600 dark:text-black"
              >
                View Projects
                <ArrowRight size={18} />
              </Link>

              <Link
                target="_blank"
                href="/cv/cv-mateusarga-frontend.pdf"
                className="inline-flex items-center gap-2 rounded-xl border border-black/10 bg-black/3 px-6 py-3 font-medium backdrop-blur transition hover:bg-black/6 dark:border-white/10 dark:bg-white/3 dark:hover:bg-white/6"
              >
                Download CV
                <Download size={18} />
              </Link>
            </div>

            {/* STACK */}
            <div className="mt-12 flex flex-wrap items-center gap-3 text-sm text-zinc-500">
              <span>React</span>
              <span>•</span>
              <span>Next.js</span>
              <span>•</span>
              <span>TypeScript</span>
              <span>•</span>
              <span>Tailwind CSS</span>
              <span>•</span>
              <span>Vue</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}