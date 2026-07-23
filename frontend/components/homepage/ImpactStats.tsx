"use client";

import CountUp from "react-countup";

export default function ImpactStats() {
  const stats = [
    {
      number: 148,
      suffix: "+",
      label: "Families Supported",
    },
    {
      number: 320,
      suffix: "+",
      label: "Hospital Visits",
    },
    {
      number: 75,
      suffix: "+",
      label: "Volunteers",
    },
    {
      number: 18,
      suffix: "",
      label: "Wheelchairs Donated",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <p className="font-semibold uppercase tracking-[0.3em] text-emerald-600">
            Our Impact
          </p>

          <h2 className="mt-4 text-4xl font-bold text-gray-900 md:text-5xl">
            Every number represents a life touched.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600 leading-8">
            Behind every visit, every donation, and every volunteer is a
            family receiving hope and support.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl border border-gray-100 bg-white p-10 text-center shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
            >
              <h3 className="text-5xl font-extrabold text-emerald-600">

                <CountUp
                  end={stat.number}
                  duration={2.5}
                  enableScrollSpy
                  scrollSpyOnce
                />

                {stat.suffix}

              </h3>

              <p className="mt-5 text-lg text-gray-600">
                {stat.label}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}