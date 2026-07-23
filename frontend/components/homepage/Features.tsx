import {
  HeartHandshake,
  Users,
  HandCoins,
  BarChart3,
  CalendarCheck,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: HeartHandshake,
      title: "Caregiver Support",
      description:
        "Coordinate home visits, hospital visits, wheelchair support, and caregiver programs from one modern platform.",
    },
    {
      icon: Users,
      title: "Volunteer Management",
      description:
        "Organize volunteers, assign activities, and keep every outreach event running smoothly.",
    },
    {
      icon: HandCoins,
      title: "Donation Tracking",
      description:
        "Track donations, diaper drives, and sponsorships with complete transparency.",
    },
    {
      icon: CalendarCheck,
      title: "Activity Planning",
      description:
        "Schedule hospital visits, home visits, tree planting, and community outreach with ease.",
    },
    {
      icon: BarChart3,
      title: "Impact Reporting",
      description:
        "Generate meaningful reports that demonstrate measurable community impact.",
    },
    {
      icon: ShieldCheck,
      title: "Secure Platform",
      description:
        "Protect beneficiary information using a secure and reliable management system.",
    },
  ];

  return (
    <section
      id="features"
      className="bg-gradient-to-b from-gray-50 to-white py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <p className="font-semibold uppercase tracking-[0.35em] text-emerald-600">
            Features
          </p>

          <h2 className="mt-5 text-4xl font-bold text-gray-900 md:text-5xl">
            Everything your organization needs.
          </h2>

          <p className="mt-6 text-lg leading-9 text-gray-600">
            CareBridge provides modern tools that simplify NGO operations,
            strengthen collaboration, and increase transparency for every
            caregiver, volunteer, donor, and beneficiary.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-gray-100
                  bg-white
                  p-8
                  shadow-sm
                  transition-all
                  duration-500
                  hover:-translate-y-3
                  hover:border-emerald-200
                  hover:shadow-2xl
                "
              >
                {/* Background Glow */}

                <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-emerald-100 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100"></div>

                {/* Icon */}

                <div className="relative mb-8 inline-flex rounded-2xl bg-emerald-100 p-4 transition duration-500 group-hover:scale-110 group-hover:bg-emerald-600">

                  <Icon className="h-8 w-8 text-emerald-700 transition duration-500 group-hover:text-white" />

                </div>

                {/* Title */}

                <h3 className="relative text-2xl font-bold text-gray-900">
                  {feature.title}
                </h3>

                {/* Description */}

                <p className="relative mt-5 leading-8 text-gray-600">
                  {feature.description}
                </p>

                {/* Learn More */}

                <div className="relative mt-8 flex items-center gap-2 font-semibold text-emerald-600 opacity-0 transition duration-500 group-hover:opacity-100">

                  Learn More

                  <ArrowRight className="h-5 w-5" />

                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}