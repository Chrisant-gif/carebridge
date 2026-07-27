"use client";

import Link from "next/link";
import {
  Users,
  Heart,
  CalendarPlus,
  HandCoins,
} from "lucide-react";

const actions = [
  {
    title: "Add Family",
    href: "/dashboard/families",
    icon: Users,
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Register Volunteer",
    href: "/dashboard/volunteers",
    icon: Heart,
    color: "bg-pink-50 text-pink-600",
  },
  {
    title: "Schedule Visit",
    href: "/dashboard/visits",
    icon: CalendarPlus,
    color: "bg-orange-50 text-orange-600",
  },
  {
    title: "Record Donation",
    href: "/dashboard/donations",
    icon: HandCoins,
    color: "bg-emerald-50 text-emerald-600",
  },
];

export default function QuickActions() {
  return (
    <div className="mb-10">
      <h2 className="mb-6 text-2xl font-bold">
        Quick Actions
      </h2>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <Link
              key={action.title}
              href={action.href}
              className="group rounded-3xl border bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div
                className={`mb-5 inline-flex rounded-2xl p-4 ${action.color}`}
              >
                <Icon size={30} />
              </div>

              <h3 className="text-xl font-bold">
                {action.title}
              </h3>

              <p className="mt-2 text-gray-500">
                Open module
              </p>

              <span className="mt-6 inline-block font-semibold text-emerald-600 transition group-hover:translate-x-2">
                Open →
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}