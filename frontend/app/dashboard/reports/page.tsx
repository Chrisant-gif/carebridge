function Card({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-sm">
      <p className="text-gray-500">{title}</p>

      <h3 className="mt-4 text-4xl font-bold text-emerald-600">
        {value}
      </h3>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <>
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        <Card title="Families Supported" value="148" />
        <Card title="Volunteers" value="75" />
        <Card title="Hospital Visits" value="320" />
        <Card title="Donations" value="KES 1.2M" />
      </div>

      <div className="mt-10 rounded-3xl bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-bold">
          Recent Activity
        </h2>

        <p className="mt-3 text-gray-500">
          Dashboard activity feed coming next...
        </p>
      </div>
    </>
  );
}