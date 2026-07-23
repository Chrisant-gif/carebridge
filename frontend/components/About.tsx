import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-gray-50 py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-2">

        {/* Left Side */}
        <div>
          <Image
            src="/images/hero.jpg"
            alt="Community Support"
            width={700}
            height={500}
            className="rounded-3xl shadow-xl object-cover"
          />
        </div>

        {/* Right Side */}
        <div>
          <p className="text-emerald-600 font-semibold uppercase tracking-widest">
            About CareBridge
          </p>

          <h2 className="mt-4 text-5xl font-bold text-gray-900">
            Technology that empowers compassionate communities.
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-600">
            CareBridge is a digital platform designed to help organizations
            like Kingdom Caregivers manage donations, volunteers,
            beneficiaries, and community outreach with transparency and
            efficiency.
          </p>

          <div className="mt-10 space-y-4">
            <div>✅ Track families and beneficiaries</div>
            <div>✅ Monitor donations transparently</div>
            <div>✅ Coordinate volunteers</div>
            <div>✅ Record hospital visits and outreach</div>
          </div>

          <button className="mt-10 rounded-xl bg-emerald-600 px-8 py-4 font-semibold text-white hover:bg-emerald-700 transition">
            Learn More
          </button>
        </div>

      </div>
    </section>
  );
}