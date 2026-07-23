import { UserPlus, ClipboardList, BarChart3 } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: UserPlus,
      title: "Register",
      description:
        "Create your organization account and securely set up your NGO profile.",
    },
    {
      icon: ClipboardList,
      title: "Manage",
      description:
        "Coordinate volunteers, beneficiaries, donations, hospital visits, and community activities from one place.",
    },
    {
      icon: BarChart3,
      title: "Measure",
      description:
        "Generate reports and monitor your organization's impact with clear insights.",
    },
  ];

  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-emerald-600">
            How It Works
          </p>

          <h2 className="mt-4 text-4xl font-bold text-gray-900 md:text-5xl">
            Three simple steps to create impact
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            CareBridge helps organizations simplify operations so they can
            spend more time serving communities.
          </p>
        </div>

        <div className="mt-20 grid gap-10 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="relative rounded-3xl bg-white p-10 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="absolute -top-5 left-8 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-white font-bold">
                  {index + 1}
                </div>

                <div className="mb-6 inline-flex rounded-2xl bg-emerald-100 p-4">
                  <Icon className="h-8 w-8 text-emerald-700" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
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