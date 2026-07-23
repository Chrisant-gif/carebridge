import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen">
      {/* Background Image */}
      <Image
        src="/images/hero.jpg"
        alt="CareBridge Hero"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="mx-auto max-w-7xl px-6">

          {/* Badge */}
          <div className="inline-flex items-center rounded-full border border-emerald-400/30 bg-emerald-500/20 px-5 py-2 text-sm font-medium text-emerald-100 backdrop-blur-sm">
            🌍 Empowering NGOs Across Kenya
          </div>

          {/* Heading */}
          <h1 className="mt-8 max-w-4xl text-5xl font-extrabold leading-tight text-white md:text-7xl">
            Building stronger communities through
            <span className="text-emerald-400"> technology.</span>
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-2xl text-xl leading-9 text-gray-200">
            CareBridge connects donors, volunteers, NGOs, and
            beneficiaries into one transparent platform that makes
            community outreach easier, faster, and more impactful.
          </p>

          {/* Buttons */}
          <div className="mt-12 flex flex-wrap gap-5">
            <a
              href="#about"
              className="rounded-xl bg-emerald-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-emerald-700"
            >
              Get Started
            </a>

            <a
              href="#features"
              className="rounded-xl border border-white px-8 py-4 text-lg font-semibold text-white transition hover:bg-white hover:text-black"
            >
              Explore Features
            </a>
          </div>

          {/* Trust Text */}
          <p className="mt-12 text-sm tracking-wide text-gray-300 uppercase">
            Built to support NGOs, volunteers and community organizations.
          </p>

        </div>
      </div>
    </section>
  );
}