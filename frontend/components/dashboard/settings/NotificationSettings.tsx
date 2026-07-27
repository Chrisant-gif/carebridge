"use client";

import { useState } from "react";
import PrimaryButton from "../PrimaryButton";

export default function NotificationSettings() {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    smsNotifications: false,
    donationAlerts: true,
    volunteerUpdates: true,
    visitReminders: true,
  });

  const handleToggle = (
    key: keyof typeof settings
  ) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const Toggle = ({
    label,
    setting,
  }: {
    label: string;
    setting: keyof typeof settings;
  }) => (
    <div className="flex items-center justify-between rounded-2xl border border-gray-200 p-5">
      <div>
        <h3 className="font-semibold text-gray-900">
          {label}
        </h3>
      </div>

      <button
        onClick={() => handleToggle(setting)}
        className={`relative h-7 w-14 rounded-full transition ${
          settings[setting]
            ? "bg-emerald-600"
            : "bg-gray-300"
        }`}
      >
        <span
          className={`absolute top-1 h-5 w-5 rounded-full bg-white transition ${
            settings[setting]
              ? "left-8"
              : "left-1"
          }`}
        />
      </button>
    </div>
  );

  return (
    <section className="rounded-3xl bg-white p-8 shadow-sm">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">
          Notifications
        </h2>

        <p className="mt-2 text-gray-500">
          Choose which notifications administrators receive.
        </p>
      </div>

      <div className="space-y-5">
        <Toggle
          label="Email Notifications"
          setting="emailNotifications"
        />

        <Toggle
          label="SMS Notifications"
          setting="smsNotifications"
        />

        <Toggle
          label="Donation Alerts"
          setting="donationAlerts"
        />

        <Toggle
          label="Volunteer Updates"
          setting="volunteerUpdates"
        />

        <Toggle
          label="Visit Reminders"
          setting="visitReminders"
        />
      </div>

      <div className="mt-8 flex justify-end">
        <PrimaryButton>
          Save Notification Settings
        </PrimaryButton>
      </div>
    </section>
  );
}