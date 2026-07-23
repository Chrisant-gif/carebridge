import Image from "next/image";

export default function FounderStory() {
  return (
    <section id="founder" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Heading */}
        <div className="text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-emerald-600">
            Meet Our Founder
          </p>

          <h2 className="mt-4 text-4xl font-bold text-gray-900 md:text-5xl">
            One mother's journey became a mission of hope.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Kingdom Caregivers was born from lived experience, compassion,
            and the belief that no caregiver should ever walk alone.
          </p>
        </div>

        {/* Content */}
        <div className="mt-20 grid items-center gap-16 lg:grid-cols-2">

          {/* Founder Image */}
          <div className="flex justify-center">
            <Image
              src="/images/stella.jpg"
              alt="Stella K. - Founder of Kingdom Caregivers"
              width={520}
              height={620}
              className="rounded-3xl object-cover shadow-2xl"
            />
          </div>

          {/* Story */}
          <div>

            <p className="text-lg leading-9 text-gray-700">
              In <strong>2022</strong>, Stella K. founded{" "}
              <strong>Kingdom Caregivers</strong> after experiencing
              firsthand the challenges of raising a daughter living with
              cerebral palsy.
            </p>

            <p className="mt-6 text-lg leading-9 text-gray-700">
              She remembers spending long nights in hospital corridors,
              feeling alone, wishing there was another caregiver to talk
              to. She also understands the financial strain many families
              face, including struggling to afford essential items such as
              diapers.
            </p>

            <p className="mt-6 text-lg leading-9 text-gray-700">
              Rather than letting those experiences define her, she chose
              to build a community where caregivers could find support,
              encouragement, practical assistance, and hope.
            </p>

            <p className="mt-6 text-lg leading-9 text-gray-700">
              Today, Kingdom Caregivers is a Nairobi-based community
              walking alongside families raising children living with
              cerebral palsy and autism through hospital visits, home
              visits, diaper drives, wheelchair support, tree planting,
              and compassionate outreach.
            </p>

            {/* Quote */}
            <div className="mt-10 rounded-2xl border-l-4 border-emerald-600 bg-white p-6 shadow-sm">
              <p className="text-xl italic leading-9 text-gray-800">
                “No caregiver should ever feel alone. Together, we can
                build a community where every family is supported with
                compassion, dignity, and hope.”
              </p>

              <div className="mt-6">
                <h3 className="text-xl font-bold text-gray-900">
                  Stella K.
                </h3>

                <p className="text-emerald-600">
                  Founder, Kingdom Caregivers
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}