import {
  Users,
  HeartHandshake,
  HandCoins,
  Activity,
} from "lucide-react";

import StatCard from "../StatCard";

export default function ReportsSummary() {
  return (
    <section>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Families"
          value="148"
          subtitle="Registered families"
          icon={<Users size={30} />}
        />

        <StatCard
          title="Volunteers"
          value="75"
          subtitle="Active volunteers"
          icon={<HeartHandshake size={30} />}
        />

        <StatCard
          title="Donations"
          value="KES 1.2M"
          subtitle="Total contributions"
          icon={<HandCoins size={30} />}
        />

        <StatCard
          title="Visits"
          value="534"
          subtitle="Home & hospital visits"
          icon={<Activity size={30} />}
        />
      </div>
    </section>
  );
}