import {
  LayoutDashboard,
  Users,
  HeartHandshake,
  HandCoins,
  Hospital,
  BarChart3,
  Settings,
} from "lucide-react";

const menuItems = [
  {
    icon: LayoutDashboard,
    label: "Dashboard",
  },
  {
    icon: Users,
    label: "Families",
  },
  {
    icon: HeartHandshake,
    label: "Volunteers",
  },
  {
    icon: HandCoins,
    label: "Donations",
  },
  {
    icon: Hospital,
    label: "Hospital Visits",
  },
  {
    icon: BarChart3,
    label: "Reports",
  },
  {
    icon: Settings,
    label: "Settings",
  },
];

export default function Sidebar() {
  return (
    <aside className="flex h-screen w-72 flex-col border-r border-gray-200 bg-white">

      <div className="border-b p-8">
        <h1 className="text-2xl font-bold text-emerald-600">
          CareBridge
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          Kingdom Caregivers
        </p>
      </div>

      <nav className="flex-1 p-5">

        <ul className="space-y-2">

          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.label}>

                <button className="flex w-full items-center gap-4 rounded-xl px-5 py-4 text-gray-700 transition hover:bg-emerald-50 hover:text-emerald-700">

                  <Icon size={22} />

                  <span className="font-medium">
                    {item.label}
                  </span>

                </button>

              </li>
            );
          })}

        </ul>

      </nav>

    </aside>
  );
}