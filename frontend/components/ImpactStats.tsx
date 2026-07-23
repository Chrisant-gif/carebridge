export default function ImpactStats() {
  const stats = [
    { value: "350+", label: "Families Supported" },
    { value: "$120K", label: "Donations Managed" },
    { value: "180", label: "Active Volunteers" },
    { value: "2,400", label: "Hospital Visits" },
  ];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Our Impact
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Connecting communities through transparency,
            compassion, and measurable change.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl bg-emerald-50 p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-4xl font-bold text-emerald-600">
                {stat.value}
              </h3>

              <p className="mt-3 text-gray-700">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}