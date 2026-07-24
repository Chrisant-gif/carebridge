"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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
    href: "/dashboard",
  },
  {
    icon: Users,
    label: "Families",
    href: "/dashboard/families",
  },
  {
    icon: HeartHandshake,
    label: "Volunteers",
    href: "/dashboard/volunteers",
  },
  {
    icon: HandCoins,
    label: "Donations",
    href: "/dashboard/donations",
  },
  {
    icon: Hospital,
    label: "Hospital Visits",
    href: "/dashboard/hospital-visits",
  },
  {
    icon: BarChart3,
    label: "Reports",
    href: "/dashboard/reports",
  },
  {
    icon: Settings,
    label: "Settings",
    href: "/dashboard/settings",
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-72 flex-col border-r border-gray-200 bg-white">
      {/* Logo */}

      <div className="border-b p-8">
        <h1 className="text-3xl font-bold text-emerald-600">
          CareBridge
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          Kingdom Caregivers
        </p>
      </div>

      {/* Navigation */}

      <nav className="flex-1 p-5">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;

            const active = pathname === item.href;

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-4 rounded-2xl px-5 py-4 font-medium transition-all duration-200 ${
                    active
                      ? "bg-emerald-600 text-white shadow-lg"
                      : "text-gray-600 hover:bg-emerald-50 hover:text-emerald-700"
                  }`}
                >
                  <Icon size={22} />

                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}

      <div className="border-t p-6">
        <div className="rounded-2xl bg-emerald-50 p-4">
          <p className="font-semibold text-emerald-700">
            CareBridge v1.0
          </p>

          <p className="mt-1 text-sm text-gray-500">
            Built for Kingdom Caregivers
          </p>
        </div>
      </div>
    </aside>
  );
}