"use client";

import {
  Shield,
  UserPlus,
  Trash2,
} from "lucide-react";

import PrimaryButton from "../PrimaryButton";

const admins = [
  {
    id: 1,
    name: "Administrator",
    email: "admin@kingdomcaregivers.org",
    role: "Super Admin",
  },
  {
    id: 2,
    name: "Volunteer Manager",
    email: "volunteers@kingdomcaregivers.org",
    role: "Manager",
  },
];

export default function UserSettings() {
  return (
    <section className="rounded-3xl bg-white p-8 shadow-sm">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Admin Users
          </h2>

          <p className="mt-2 text-gray-500">
            Manage administrators and their permissions.
          </p>
        </div>

        <PrimaryButton>
          <span className="flex items-center gap-2">
            <UserPlus size={18} />
            Add Admin
          </span>
        </PrimaryButton>
      </div>

      <div className="space-y-5">
        {admins.map((admin) => (
          <div
            key={admin.id}
            className="flex flex-col gap-5 rounded-2xl border border-gray-200 p-6 transition hover:border-emerald-300 md:flex-row md:items-center md:justify-between"
          >
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                {admin.name}
              </h3>

              <p className="mt-1 text-gray-500">
                {admin.email}
              </p>
            </div>

            <div className="flex items-center gap-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700">
                <Shield size={16} />
                {admin.role}
              </span>

              <button className="rounded-xl border border-red-200 p-3 text-red-500 transition hover:bg-red-50">
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-end">
        <PrimaryButton>
          Save User Settings
        </PrimaryButton>
      </div>
    </section>
  );
}