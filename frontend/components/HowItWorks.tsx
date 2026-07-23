import { UserPlus, ClipboardList, BarChart3 } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: UserPlus,
      title: "Register",
      description:
        "Create your organization profile and securely register your NGO on CareBridge.",
    },
    {
      icon: ClipboardList,
      title: "Manage",
      description:
        "Coordinate volunteers, beneficiaries, donations, hospital visits, home visits, and outreach activities from one place.",
    },
    {
      icon: BarChart3,
      title: "Measure",
      description:
        "Track progress, generate reports, and showcase the impact your organization is making in the community.",
    },
  ];

  return (
    <section id="how-it-works" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-emerald-600">
            How It Works
          </p>

          <h2 className="mt-4 text-4xl font-bold text-gray-900 md:text-5xl">
            Three simple steps to create impact
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            CareBridge simplifies the way nonprofit organizations manage
            programs, volunteers, caregivers, and community initiatives.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-20 grid gap-10 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="relative rounded-3xl bg-gray-50 p-10 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Step Number */}
                <div className="absolute -top-5 left-8 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 font-bold text-white">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="mb-6 inline-flex rounded-2xl bg-emerald-100 p-4">
                  <Icon className="h-8 w-8 text-emerald-700" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mt-4 leading-8 text-gray-600">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}