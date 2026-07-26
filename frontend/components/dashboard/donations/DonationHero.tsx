"use client";

import {
  HeartHandshake,
  Hospital,
  Home,
  Users,
  ArrowRight,
  Copy,
} from "lucide-react";

export default function DonationHero() {
  const copyText = async (text: string) => {
    await navigator.clipboard.writeText(text);
    alert("Copied!");
  };

  return (
    <section className="mb-10 overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-600 to-emerald-700 text-white shadow-lg">

      <div className="p-10 lg:p-14">

        <div className="max-w-3xl">
          <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-medium">
            Kingdom Caregivers
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight lg:text-5xl">
            Support Children Living with Disabilities
          </h1>

          <p className="mt-6 text-lg leading-8 text-emerald-50">
            Every contribution helps provide hospital visits,
            home-based care, therapy support, nutrition,
            diapers and community outreach for children and
            families across Kenya.
          </p>

          <button className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-4 font-semibold text-emerald-700 transition hover:scale-105">
            Donate Now
            <ArrowRight size={20} />
          </button>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">

          <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
            <Users className="mb-3" />
            <p className="text-3xl font-bold">128</p>
            <p className="text-emerald-100">
              Families Supported
            </p>
          </div>

          <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
            <Hospital className="mb-3" />
            <p className="text-3xl font-bold">542</p>
            <p className="text-emerald-100">
              Hospital Visits
            </p>
          </div>

          <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
            <Home className="mb-3" />
            <p className="text-3xl font-bold">381</p>
            <p className="text-emerald-100">
              Home Visits
            </p>
          </div>

          <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
            <HeartHandshake className="mb-3" />
            <p className="text-3xl font-bold">45</p>
            <p className="text-emerald-100">
              Active Volunteers
            </p>
          </div>

        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">

          <div className="rounded-2xl bg-white p-6 text-gray-900">
            <h3 className="mb-4 text-xl font-bold">
              🇰🇪 M-PESA
            </h3>

            <p className="text-gray-600">
              Paybill Number
            </p>

            <div className="mt-2 flex items-center justify-between rounded-xl bg-gray-100 px-4 py-3">
              <span>000000</span>

              <button
                onClick={() => copyText("000000")}
              >
                <Copy size={18} />
              </button>
            </div>

            <p className="mt-4 text-gray-600">
              Account Number
            </p>

            <div className="mt-2 flex items-center justify-between rounded-xl bg-gray-100 px-4 py-3">
              <span>DONATION</span>

              <button
                onClick={() =>
                  copyText("DONATION")
                }
              >
                <Copy size={18} />
              </button>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 text-gray-900">
            <h3 className="mb-4 text-xl font-bold">
              🌍 Bank Transfer
            </h3>

            <p className="leading-8 text-gray-600">
              Bank Name
              <br />
              Account Name
              <br />
              Account Number
              <br />
              SWIFT Code
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 text-gray-900">
            <h3 className="mb-4 text-xl font-bold">
              🌍 Wise
            </h3>

            <p className="leading-8 text-gray-600">
              International donors can send securely
              using Wise.
            </p>

            <button className="mt-6 w-full rounded-xl bg-emerald-600 py-3 font-semibold text-white transition hover:bg-emerald-700">
              Donate via Wise
            </button>
          </div>

        </div>

      </div>

    </section>
  );
}