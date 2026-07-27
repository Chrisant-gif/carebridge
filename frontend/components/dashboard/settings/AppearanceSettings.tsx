"use client";

import { useState } from "react";
import PrimaryButton from "../PrimaryButton";

export default function AppearanceSettings() {
  const [theme, setTheme] = useState("Light");

  return (
    <section className="rounded-3xl bg-white p-8 shadow-sm">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">
          Appearance
        </h2>

        <p className="mt-2 text-gray-500">
          Customize how the dashboard looks.
        </p>
      </div>

      <div className="space-y-8">
        {/* Theme */}

        <div>
          <label className="mb-3 block font-medium text-gray-700">
            Theme
          </label>

          <div className="grid gap-4 md:grid-cols-3">
            {["Light", "Dark", "System"].map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setTheme(option)}
                className={`rounded-2xl border p-5 text-center font-semibold transition ${
                  theme === option
                    ? "border-emerald-600 bg-emerald-50 text-emerald-700"
                    : "border-gray-300 hover:border-emerald-400"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Accent Color */}

        <div>
          <label className="mb-3 block font-medium text-gray-700">
            Accent Color
          </label>

          <div className="flex gap-4">
            {[
              "bg-emerald-500",
              "bg-blue-500",
              "bg-purple-500",
              "bg-red-500",
              "bg-orange-500",
            ].map((color) => (
              <button
                key={color}
                className={`h-12 w-12 rounded-full ${color} ring-offset-2 transition hover:scale-110`}
              />
            ))}
          </div>
        </div>

        {/* Layout */}

        <div>
          <label className="mb-3 block font-medium text-gray-700">
            Dashboard Layout
          </label>

          <select className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-emerald-500">
            <option>Comfortable</option>
            <option>Compact</option>
            <option>Spacious</option>
          </select>
        </div>
      </div>

      <div className="mt-8 flex justify-end">
        <PrimaryButton>
          Save Appearance
        </PrimaryButton>
      </div>
    </section>
  );
}