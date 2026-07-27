"use client";

import { useState } from "react";
import {
  Shield,
  KeyRound,
  Smartphone,
  LogOut,
} from "lucide-react";

import PrimaryButton from "../PrimaryButton";

export default function SecuritySettings() {
  const [twoFactorEnabled, setTwoFactorEnabled] =
    useState(false);

  return (
    <section className="rounded-3xl bg-white p-8 shadow-sm">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">
          Security
        </h2>

        <p className="mt-2 text-gray-500">
          Manage your account security and administrator access.
        </p>
      </div>

      <div className="space-y-8">
        {/* Change Password */}

        <div className="rounded-2xl border border-gray-200 p-6">
          <div className="mb-5 flex items-center gap-3">
            <KeyRound className="text-emerald-600" size={24} />

            <h3 className="text-lg font-semibold">
              Change Password
            </h3>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <input
              type="password"
              placeholder="Current Password"
              className="rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-emerald-500"
            />

            <input
              type="password"
              placeholder="New Password"
              className="rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-emerald-500"
            />

            <input
              type="password"
              placeholder="Confirm Password"
              className="rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-emerald-500"
            />
          </div>
        </div>

        {/* Two Factor Authentication */}

        <div className="rounded-2xl border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Smartphone
                className="text-emerald-600"
                size={24}
              />

              <div>
                <h3 className="text-lg font-semibold">
                  Two-Factor Authentication
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  Add an extra layer of security.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() =>
                setTwoFactorEnabled((prev) => !prev)
              }
              className={`relative h-7 w-14 rounded-full transition ${
                twoFactorEnabled
                  ? "bg-emerald-600"
                  : "bg-gray-300"
              }`}
            >
              <span
                className={`absolute top-1 h-5 w-5 rounded-full bg-white transition ${
                  twoFactorEnabled
                    ? "left-8"
                    : "left-1"
                }`}
              />
            </button>
          </div>
        </div>

        {/* Active Sessions */}

        <div className="rounded-2xl border border-gray-200 p-6">
          <div className="mb-5 flex items-center gap-3">
            <Shield
              className="text-emerald-600"
              size={24}
            />

            <h3 className="text-lg font-semibold">
              Active Sessions
            </h3>
          </div>

          <div className="flex items-center justify-between rounded-xl bg-gray-50 p-5">
            <div>
              <p className="font-semibold">
                Windows • Chrome
              </p>

              <p className="mt-1 text-sm text-gray-500">
                Nairobi, Kenya • Active Now
              </p>
            </div>

            <button className="flex items-center gap-2 rounded-xl border border-red-200 px-4 py-2 text-red-600 transition hover:bg-red-50">
              <LogOut size={18} />
              Sign Out
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-end">
        <PrimaryButton>
          Save Security Settings
        </PrimaryButton>
      </div>
    </section>
  );
}