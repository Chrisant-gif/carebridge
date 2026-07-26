"use client";

import {
  Smartphone,
  Landmark,
  Globe,
  Copy,
} from "lucide-react";

const methods = [
  {
    title: "M-PESA",
    icon: Smartphone,
    color: "bg-emerald-100 text-emerald-600",
    details: [
      "PayBill/Till Number",
      "XXXXXX",
      "Account: Donation",
    ],
    button: "Copy Details",
  },
  {
    title: "Bank Transfer",
    icon: Landmark,
    color: "bg-blue-100 text-blue-600",
    details: [
      "Kingdom Caregivers",
      "Account No: XXXXXXXX",
      "SWIFT: XXXXXXXX",
    ],
    button: "Copy Details",
  },
  {
    title: "Wise",
    icon: Globe,
    color: "bg-purple-100 text-purple-600",
    details: [
      "International Donations",
      "Fast & Secure",
      "Supports Multiple Currencies",
    ],
    button: "Donate via Wise",
  },
];

export default function DonationMethods() {
  return (
    <section className="mb-16">
      <div className="mb-10 text-center">
        <h2 className="text-4xl font-bold text-gray-900">
          Choose Your Donation Method
        </h2>

        <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-500">
          Every donation, no matter the amount,
          helps us improve the lives of children
          living with disabilities.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {methods.map((method) => {
          const Icon = method.icon;

          return (
            <div
              key={method.title}
              className="rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div
                className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${method.color}`}
              >
                <Icon size={32} />
              </div>

              <h3 className="text-2xl font-bold">
                {method.title}
              </h3>

              <div className="mt-6 space-y-3">
                {method.details.map((detail) => (
                  <p
                    key={detail}
                    className="text-gray-600"
                  >
                    {detail}
                  </p>
                ))}
              </div>

              <button className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-4 font-semibold text-white transition hover:bg-emerald-700">
                <Copy size={18} />
                {method.button}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}