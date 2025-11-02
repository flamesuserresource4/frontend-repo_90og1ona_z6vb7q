import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* soft gradient edges that don't block interaction */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 pb-16 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-3 py-1 text-xs font-medium text-red-600">
          <SparkleDot /> Interactive + Minimal
        </span>
        <h1 className="mt-6 text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl md:text-6xl">
          Your trusted partner for modern, interactive web experiences
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base text-gray-600 sm:text-lg">
          We craft elegant, performant sites with delightful motion and purposeful interactions that convert.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#features"
            className="group inline-flex items-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-white shadow-sm transition hover:shadow-lg hover:bg-black"
          >
            <Rocket size={18} className="transition group-hover:translate-x-0.5" />
            Explore capabilities
            <ArrowRight size={18} className="transition group-hover:translate-x-0.5" />
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-6 py-3 text-gray-900 transition hover:bg-gray-50"
          >
            View our work
          </a>
        </div>
      </div>
    </section>
  );
}

function SparkleDot() {
  return (
    <span className="relative inline-flex h-2.5 w-2.5">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500" />
    </span>
  );
}
