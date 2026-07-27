import {
  Download,
  FileText,
} from "lucide-react";

const reports = [
  {
    name: "Families Report",
    generated: "Today",
    format: "PDF",
  },
  {
    name: "Volunteer Report",
    generated: "Yesterday",
    format: "Excel",
  },
  {
    name: "Donations Report",
    generated: "2 days ago",
    format: "PDF",
  },
  {
    name: "Visits Report",
    generated: "This Week",
    format: "CSV",
  },
];

export default function RecentReports() {
  return (
    <section className="rounded-3xl bg-white p-8 shadow-sm">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Recent Reports
          </h2>

          <p className="mt-2 text-gray-500">
            Recently generated reports available for download.
          </p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b text-left text-sm uppercase tracking-wide text-gray-500">
              <th className="pb-4">Report</th>
              <th className="pb-4">Generated</th>
              <th className="pb-4">Format</th>
              <th className="pb-4 text-right">Action</th>
            </tr>
          </thead>

          <tbody>
            {reports.map((report) => (
              <tr
                key={report.name}
                className="border-b transition hover:bg-gray-50"
              >
                <td className="py-5">
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-emerald-100 p-3 text-emerald-600">
                      <FileText size={20} />
                    </div>

                    <span className="font-semibold">
                      {report.name}
                    </span>
                  </div>
                </td>

                <td>{report.generated}</td>

                <td>{report.format}</td>

                <td className="text-right">
                  <button className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2 text-white transition hover:bg-emerald-700">
                    <Download size={16} />
                    Download
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}