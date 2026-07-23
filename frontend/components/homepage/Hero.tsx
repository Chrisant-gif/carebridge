import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Background Image */}
      <Image
        src="/images/hero.jpg"
        alt="Kingdom Caregivers community outreach"
        fill
        priority
        className="object-cover scale-105"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-emerald-900/40"></div>

      {/* Soft Glow */}
      <div className="absolute -left-40 top-40 h-96 w-96 rounded-full bg-emerald-500/20 blur-[120px]" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Badge */}
        <div className="inline-flex items-center rounded-full border border-emerald-400/30 bg-white/10 px-5 py-2 text-sm font-medium text-emerald-200 backdrop-blur-md">
          🌍 Empowering Communities Across Kenya
        </div>

        {/* Heading */}
        <h1 className="mt-8 max-w-4xl text-5xl font-extrabold leading-tight text-white md:text-7xl">
          Connecting{" "}
          <span className="text-emerald-400">
            Care.
          </span>
          <br />
          Inspiring{" "}
          <span className="text-emerald-400">
            Hope.
          </span>
          <br />
          Creating{" "}
          <span className="text-emerald-400">
            Impact.
          </span>
        </h1>

        {/* Description */}
        <p className="mt-8 max-w-2xl text-lg leading-9 text-gray-200 md:text-xl">
          CareBridge empowers organizations like Kingdom Caregivers to
          connect caregivers, volunteers, donors, and communities through
          one modern platform designed for transparency, compassion, and
          measurable impact.
        </p>

        {/* Buttons */}
        <div className="mt-12 flex flex-wrap gap-5">

          <a
            href="#about"
            className="rounded-2xl bg-emerald-600 px-8 py-4 text-lg font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:bg-emerald-700"
          >
            Get Started
          </a>

          <a
            href="#features"
            className="rounded-2xl border border-white/40 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white hover:text-gray-900"
          >
            Explore Features
          </a>

        </div>

        {/* Bottom Trust Text */}
        <div className="mt-16 flex flex-wrap items-center gap-8 text-sm text-gray-300">

          <span>✓ NGO Focused</span>

          <span>✓ Community Driven</span>

          <span>✓ Transparent Impact</span>

        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a
          href="#about"
          className="flex flex-col items-center text-white/80 hover:text-white transition"
        >
          <span className="mb-2 text-xs uppercase tracking-[0.3em]">
            Scroll
          </span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </a>
      </div>

    </section>
  );
}