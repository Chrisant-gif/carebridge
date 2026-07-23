import Image from "next/image";

export default function FounderStory() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-emerald-600">
            Meet Our Founder
          </p>

          <h2 className="mt-4 text-4xl font-bold text-gray-900 md:text-5xl">
            A mother's journey that became a community's hope.
          </h2>
        </div>

        <div className="mt-16 grid items-center gap-16 lg:grid-cols-2">

          {/* Founder Image */}
          <div className="flex justify-center">
            <Image
              src="/images/stella.jpg"
              alt="Stella K., Founder of Kingdom Caregivers"
              width={520}
              height={620}
              className="rounded-3xl object-cover shadow-2xl"
            />
          </div>

          {/* Story */}
          <div>

            <p className="text-lg leading-9 text-gray-700">
              In <strong>2022</strong>, Stella K. founded
              <strong> Kingdom Caregivers</strong> after experiencing
              firsthand the realities of raising a daughter living with
              cerebral palsy.
            </p>

            <p className="mt-6 text-lg leading-9 text-gray-700">
              She remembers spending long nights in hospital corridors,
              feeling isolated, with no one to talk to. She understands
              the emotional and financial strain many families face,
              including the difficulty of affording everyday essentials
              such as diapers.
            </p>

            <p className="mt-6 text-lg leading-9 text-gray-700">
              Those experiences inspired a simple but powerful mission:
              <span className="font-semibold text-emerald-700">
                {" "}
                no caregiver should walk alone.
              </span>
            </p>

            <p className="mt-6 text-lg leading-9 text-gray-700">
              Today, Kingdom Caregivers is a Nairobi-based community
              walking alongside families raising children living with
              cerebral palsy and autism through wheelchair support,
              diaper drives, hospital visits, home visits, tree
              planting initiatives, and a message of hope.
            </p>

            <div className="mt-10 border-l-4 border-emerald-600 pl-6">
              <p className="italic text-xl text-gray-800">
                "Every caregiver deserves compassion, dignity, and a
                community that reminds them they are never alone."
              </p>

              <p className="mt-6 font-bold text-gray-900">
                Stella K.
              </p>

              <p className="text-emerald-600">
                Founder, Kingdom Caregivers
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}