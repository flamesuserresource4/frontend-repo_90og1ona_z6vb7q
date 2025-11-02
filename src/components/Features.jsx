import React from 'react';
import { Rocket, Shield, Layers, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: 'Performance-first',
    desc: 'Blazing fast, SEO-friendly builds that scale gracefully.',
  },
  {
    icon: Shield,
    title: 'Enterprise-ready',
    desc: 'Security, accessibility, and reliability baked in.',
  },
  {
    icon: Layers,
    title: 'Modular architecture',
    desc: 'Clean, composable components for long-term maintainability.',
  },
  {
    icon: Sparkles,
    title: 'Delightful motion',
    desc: 'Micro-interactions that feel natural and enhance clarity.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Capabilities that move people</h2>
          <p className="mt-4 text-gray-600">
            We combine thoughtful UX, modern engineering, and tasteful animation to deliver standout products.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-lg"
            >
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-red-100 opacity-0 blur-xl transition group-hover:opacity-100" />
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-900 text-white">
                  <Icon size={20} />
                </span>
                <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-gray-600">{desc}</p>
              <div className="mt-6 h-1 w-10 rounded bg-gray-900 transition-all group-hover:w-16" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
