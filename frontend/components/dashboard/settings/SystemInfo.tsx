import {
  Server,
  Cpu,
  HardDrive,
  Info,
} from "lucide-react";

const items = [
  {
    icon: <Server size={22} />,
    title: "Application Version",
    value: "CareBridge v1.0.0",
  },
  {
    icon: <Cpu size={22} />,
    title: "Environment",
    value: "Production",
  },
  {
    icon: <HardDrive size={22} />,
    title: "Database",
    value: "Supabase (Coming Soon)",
  },
  {
    icon: <Info size={22} />,
    title: "Framework",
    value: "Next.js 15 + React 19",
  },
];

export default function SystemInfo() {
  return (
    <section className="rounded-3xl bg-white p-8 shadow-sm">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">
          System Information
        </h2>

        <p className="mt-2 text-gray-500">
          Technical information about the CareBridge platform.
        </p>
      </div>

      <div className="space-y-5">
        {items.map((item) => (
          <div
            key={item.title}
            className="flex items-center justify-between rounded-2xl border border-gray-200 p-5"
          >
            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-emerald-100 p-3 text-emerald-600">
                {item.icon}
              </div>

              <span className="font-medium">
                {item.title}
              </span>
            </div>

            <span className="font-semibold text-gray-700">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}