"use client";

import PrimaryButton from "../PrimaryButton";

export default function DonationSettings() {
  return (
    <section className="rounded-3xl bg-white p-8 shadow-sm">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">
          Donation Methods
        </h2>

        <p className="mt-2 text-gray-500">
          Configure how supporters can donate to your organization.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block font-medium text-gray-700">
            M-Pesa Paybill / Till Number
          </label>

          <input
            type="text"
            placeholder="Enter Paybill or Till Number"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-emerald-500"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium text-gray-700">
            Bank Name
          </label>

          <input
            type="text"
            placeholder="Enter Bank Name"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-emerald-500"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium text-gray-700">
            Bank Account Number
          </label>

          <input
            type="text"
            placeholder="Enter Account Number"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-emerald-500"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium text-gray-700">
            PayPal Email
          </label>

          <input
            type="email"
            placeholder="donations@example.org"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-emerald-500"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium text-gray-700">
            Stripe Public Key
          </label>

          <input
            type="text"
            placeholder="pk_live_..."
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-emerald-500"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium text-gray-700">
            Flutterwave Public Key
          </label>

          <input
            type="text"
            placeholder="FLWPUBK..."
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-emerald-500"
          />
        </div>
      </div>

      <div className="mt-8 flex justify-end">
        <PrimaryButton>
          Save Donation Settings
        </PrimaryButton>
      </div>
    </section>
  );
}