"use client";

import PrimaryButton from "../PrimaryButton";

export default function OrganizationSettings() {
  return (
    <section className="rounded-3xl bg-white p-8 shadow-sm">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">
          Organization Profile
        </h2>

        <p className="mt-2 text-gray-500">
          Update your organization's public information.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block font-medium text-gray-700">
            Organization Name
          </label>

          <input
            type="text"
            defaultValue="Kingdom Caregivers"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-emerald-500"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium text-gray-700">
            Email Address
          </label>

          <input
            type="email"
            defaultValue="info@kingdomcaregivers.org"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-emerald-500"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium text-gray-700">
            Phone Number
          </label>

          <input
            type="text"
            defaultValue="+254 700 000 000"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-emerald-500"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium text-gray-700">
            Website
          </label>

          <input
            type="text"
            defaultValue="www.kingdomcaregivers.org"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-emerald-500"
          />
        </div>
      </div>

      <div className="mt-6">
        <label className="mb-2 block font-medium text-gray-700">
          Address
        </label>

        <textarea
          rows={4}
          defaultValue="Nairobi, Kenya"
          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-emerald-500"
        />
      </div>

      <div className="mt-6">
        <label className="mb-2 block font-medium text-gray-700">
          Organization Description
        </label>

        <textarea
          rows={5}
          defaultValue="Kingdom Caregivers is dedicated to improving the lives of children living with disabilities through healthcare support, home visits, community outreach, therapy assistance and donor partnerships."
          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-emerald-500"
        />
      </div>

      <div className="mt-8 flex justify-end">
        <PrimaryButton>
          Save Changes
        </PrimaryButton>
      </div>
    </section>
  );
}