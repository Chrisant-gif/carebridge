import {
  FileText,
  FileSpreadsheet,
  Database,
} from "lucide-react";

import PrimaryButton from "../PrimaryButton";

export default function ExportButtons() {
  return (
    <section className="rounded-3xl bg-white p-8 shadow-sm">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Export Reports
          </h2>

          <p className="mt-2 text-gray-500">
            Download reports in your preferred format.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <PrimaryButton>
            <span className="flex items-center gap-2">
              <FileText size={18} />
              PDF
            </span>
          </PrimaryButton>

          <PrimaryButton>
            <span className="flex items-center gap-2">
              <FileSpreadsheet size={18} />
              Excel
            </span>
          </PrimaryButton>

          <PrimaryButton>
            <span className="flex items-center gap-2">
              <Database size={18} />
              CSV
            </span>
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}