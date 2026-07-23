export default function About() {
  return (
    <section
      id="about"
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

          {/* Left Side */}
          <div>
            <p className="font-semibold uppercase tracking-[0.3em] text-emerald-600">
              About CareBridge
            </p>

            <h2 className="mt-4 text-4xl font-bold text-gray-900 md:text-5xl">
              Empowering communities through connection and compassion.
            </h2>

            <p className="mt-8 text-lg leading-9 text-gray-600">
              CareBridge is a digital platform created to help nonprofit
              organizations, caregivers, volunteers, and donors work
              together more effectively. It simplifies the coordination of
              community programs while increasing transparency and impact.
            </p>

            <p className="mt-6 text-lg leading-9 text-gray-600">
              Inspired by the mission of Kingdom Caregivers, CareBridge
              supports initiatives such as hospital visits, home visits,
              diaper drives, wheelchair support, tree planting, and many
              other community outreach programs.
            </p>

            <div className="mt-10">
              <a
                href="#features"
                className="inline-flex rounded-xl bg-emerald-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-emerald-700"
              >
                Discover Our Features
              </a>
            </div>
          </div>

          {/* Right Side */}
          <div className="rounded-3xl bg-emerald-50 p-10 shadow-sm">

            <h3 className="text-2xl font-bold text-gray-900">
              Our Mission
            </h3>

            <p className="mt-6 leading-8 text-gray-700">
              To empower organizations serving children living with
              cerebral palsy and autism by providing a modern platform
              that connects caregivers, volunteers, donors, and
              communities.
            </p>

            <div className="mt-10 space-y-5">

              <div className="flex items-start gap-4">
                <div className="mt-1 h-3 w-3 rounded-full bg-emerald-600"></div>
                <p className="text-gray-700">
                  Increase transparency and accountability.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 h-3 w-3 rounded-full bg-emerald-600"></div>
                <p className="text-gray-700">
                  Simplify volunteer and beneficiary management.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 h-3 w-3 rounded-full bg-emerald-600"></div>
                <p className="text-gray-700">
                  Support caregivers through collaboration and technology.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 h-3 w-3 rounded-full bg-emerald-600"></div>
                <p className="text-gray-700">
                  Measure and showcase community impact.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}