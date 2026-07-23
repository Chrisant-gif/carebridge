import {
  Users,
  HeartHandshake,
  HandCoins,
  Activity,
  ArrowRight,
} from "lucide-react";

function StatCard({
  icon,
  title,
  value,
}: {
  icon: JSX.Element;
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10">
      <div className="text-emerald-400">{icon}</div>

      <h3 className="mt-6 text-4xl font-bold">{value}</h3>

      <p className="mt-2 text-gray-400">{title}</p>
    </div>
  );
}

function ActivityRow({
  title,
  time,
}: {
  title: string;
  time: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-xl bg-black/20 p-5 transition hover:bg-black/30">
      <div>
        <h5 className="font-semibold">{title}</h5>

        <p className="mt-1 text-sm text-gray-400">{time}</p>
      </div>

      <ArrowRight className="text-emerald-400" />
    </div>
  );
}

export default function DashboardPreview() {
  return (
    <section className="bg-gray-950 py-28 text-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <p className="font-semibold uppercase tracking-[0.35em] text-emerald-400">
            Platform Preview
          </p>

          <h2 className="mt-5 text-4xl font-bold md:text-5xl">
            A glimpse into CareBridge.
          </h2>

          <p className="mt-6 text-lg leading-9 text-gray-300">
            Designed to help organizations manage caregivers,
            beneficiaries, volunteers and donations from one beautiful
            dashboard.
          </p>
        </div>

        {/* Dashboard */}

        <div className="mt-20 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">
          {/* Top */}

          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="text-3xl font-bold">
                Dashboard Overview
              </h3>

              <p className="mt-2 text-gray-400">
                Live community impact at a glance.
              </p>
            </div>

            <button className="rounded-xl bg-emerald-600 px-6 py-3 font-semibold transition hover:bg-emerald-700">
              Open Dashboard
            </button>
          </div>

          {/* Stats */}

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <StatCard
              icon={<Users size={30} />}
              title="Families"
              value="148"
            />

            <StatCard
              icon={<HeartHandshake size={30} />}
              title="Volunteers"
              value="75"
            />

            <StatCard
              icon={<HandCoins size={30} />}
              title="Donations"
              value="KES 1.2M"
            />

            <StatCard
              icon={<Activity size={30} />}
              title="Hospital Visits"
              value="320"
            />
          </div>

          {/* Recent Activity */}

          <div className="mt-14 rounded-2xl bg-white/5 p-8">
            <h4 className="text-2xl font-bold">
              Recent Activity
            </h4>

            <div className="mt-8 space-y-5">
              <ActivityRow
                title="Home Visit Completed"
                time="Today • Nairobi"
              />

              <ActivityRow
                title="New Volunteer Registered"
                time="Yesterday"
              />

              <ActivityRow
                title="Donation Received"
                time="2 days ago"
              />

              <ActivityRow
                title="Wheelchair Delivered"
                time="This week"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}