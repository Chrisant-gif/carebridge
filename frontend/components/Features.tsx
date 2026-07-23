import {
  HeartHandshake,
  Users,
  HandHelping,
  Hospital,
  BarChart3,
  ShieldCheck,
} from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: HeartHandshake,
      title: "Donor Management",
      description:
        "Track donors, monitor contributions, and build lasting relationships through transparent records.",
    },
    {
      icon: Users,
      title: "Volunteer Coordination",
      description:
        "Manage volunteers, assign community activities, and monitor participation effortlessly.",
    },
    {
      icon: HandHelping,
      title: "Beneficiary Records",
      description:
        "Maintain secure records of families, individuals, and the support they receive.",
    },
    {
      icon: Hospital,
      title: "Hospital Visit Tracking",
      description:
        "Log outreach visits, appointments, and follow-up care for every beneficiary.",
    },
    {
      icon: BarChart3,
      title: "Reports & Analytics",
      description:
        "Generate meaningful insights to help NGOs measure impact and make informed decisions.",
    },
    {
      icon: ShieldCheck,
      title: "Secure Online Donations",
      description:
        "Allow donors to contribute safely while providing clear records of every donation.",
    },
  ];

  return (
    <section id="features" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-emerald-600">
            Features
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            Everything an NGO needs in one platform
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            CareBridge brings together donors, volunteers, beneficiaries,
            administrators, and community partners into one secure,
            easy-to-use platform.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:border-emerald-200 hover:shadow-2xl"
              >
                <div className="mb-6 inline-flex rounded-2xl bg-gradient-to-br from-emerald-100 to-emerald-200 p-4 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-8 w-8 text-emerald-700" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}