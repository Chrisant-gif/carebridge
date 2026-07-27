"use client";

import {
  Database,
  Download,
  Upload,
  Clock,
} from "lucide-react";

import PrimaryButton from "../PrimaryButton";

export default function BackupSettings() {
  return (
    <section className="rounded-3xl bg-white p-8 shadow-sm">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">
          Backup & Restore
        </h2>

        <p className="mt-2 text-gray-500">
          Protect your data by creating backups and restoring previous versions.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Backup */}

        <div className="rounded-2xl border border-gray-200 p-6">
          <div className="mb-4 flex items-center gap-3">
            <Database
              className="text-emerald-600"
              size={24}
            />

            <h3 className="text-lg font-semibold">
              Create Backup
            </h3>
          </div>

          <p className="mb-6 text-gray-500">
            Download a copy of all dashboard data for safekeeping.
          </p>

          <PrimaryButton>
            <span className="flex items-center gap-2">
              <Download size={18} />
              Download Backup
            </span>
          </PrimaryButton>
        </div>

        {/* Restore */}

        <div className="rounded-2xl border border-gray-200 p-6">
          <div className="mb-4 flex items-center gap-3">
            <Upload
              className="text-emerald-600"
              size={24}
            />

            <h3 className="text-lg font-semibold">
              Restore Backup
            </h3>
          </div>

          <p className="mb-6 text-gray-500">
            Restore your dashboard from a previously saved backup.
          </p>

          <button className="rounded-xl border border-gray-300 px-6 py-3 font-medium transition hover:bg-gray-100">
            Upload Backup
          </button>
        </div>
      </div>

      {/* Last Backup */}

      <div className="mt-8 rounded-2xl bg-gray-50 p-6">
        <div className="flex items-center gap-3">
          <Clock
            className="text-emerald-600"
            size={22}
          />

          <div>
            <h4 className="font-semibold">
              Last Backup
            </h4>

            <p className="text-gray-500">
              July 27, 2026 • 10:45 AM
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}