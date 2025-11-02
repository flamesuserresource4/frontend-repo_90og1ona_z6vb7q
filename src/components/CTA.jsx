import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-gray-900 py-20">
      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-red-500/20 blur-3xl" />
      <div className="absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-red-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to elevate your experience?</h2>
          <p className="mt-4 text-gray-300">
            Let’s design something modern, accessible, and unmistakably yours.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-gray-900 shadow-sm transition hover:shadow-lg"
            >
              Start a project
              <ArrowRight size={18} className="transition group-hover:translate-x-0.5" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-medium text-white/90 transition hover:bg-white/10"
            >
              Learn more
            </a>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-6 text-left text-sm text-gray-300 sm:grid-cols-4">
          <div>
            <p className="font-medium text-white">Approach</p>
            <ul className="mt-3 space-y-2">
              <li>Discovery</li>
              <li>UX & Motion</li>
              <li>Build & QA</li>
            </ul>
          </div>
          <div>
            <p className="font-medium text-white">Solutions</p>
            <ul className="mt-3 space-y-2">
              <li>Marketing Sites</li>
              <li>Web Apps</li>
              <li>Design Systems</li>
            </ul>
          </div>
          <div>
            <p className="font-medium text-white">Tech</p>
            <ul className="mt-3 space-y-2">
              <li>React + Tailwind</li>
              <li>FastAPI</li>
              <li>Framer Motion</li>
            </ul>
          </div>
          <div>
            <p className="font-medium text-white">Contact</p>
            <ul className="mt-3 space-y-2">
              <li>hello@yourstudio.dev</li>
              <li>Mon–Fri, 9–5</li>
              <li>Worldwide</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} Your Trusted Partner. All rights reserved.
        </div>
      </div>
    </section>
  );
}
