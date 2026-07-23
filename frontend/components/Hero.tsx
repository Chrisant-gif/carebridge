import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen">
      <Image
        src="/images/hero.jpg"
        alt="CareBridge Hero"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-6">
        <h1 className="text-6xl md:text-7xl font-bold">
          CareBridge
        </h1>

        <p className="mt-6 max-w-3xl text-xl md:text-2xl">
          Connecting NGOs, Donors, Volunteers, and Communities to create lasting impact.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="rounded-xl bg-emerald-600 px-8 py-4 font-semibold hover:bg-emerald-700 transition">
            Get Started
          </button>

          <button className="rounded-xl border border-white px-8 py-4 font-semibold hover:bg-white hover:text-black transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}