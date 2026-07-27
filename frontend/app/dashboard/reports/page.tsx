import {
  Users,
  HeartHandshake,
  HandCoins,
  Activity,
  FileText,
} from "lucide-react";

import PageHeader from "../../../components/dashboard/PageHeader";
import ReportsSummary from "../../../components/dashboard/reports/ReportsSummary";
import ReportsCharts from "../../../components/dashboard/reports/ReportsCharts";
import ReportCard from "../../../components/dashboard/reports/ReportCard";
import ExportButtons from "../../../components/dashboard/reports/ExportButtons";
import RecentReports from "../../../components/dashboard/reports/RecentReports";

export default function ReportsPage() {
  return (
    <>
      <PageHeader
        title="Reports"
        description="Generate, analyze and export reports for Kingdom Caregivers."
      />

      <ReportsSummary />

      <div className="mt-10">
        <ReportsCharts />
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <ReportCard
          title="Families Report"
          description="Generate a complete report of all registered beneficiary families."
          icon={<Users size={30} />}
        />

        <ReportCard
          title="Volunteers Report"
          description="View volunteer registrations, participation and activity."
          icon={<HeartHandshake size={30} />}
        />

        <ReportCard
          title="Donations Report"
          description="Track donations, donor history and financial summaries."
          icon={<HandCoins size={30} />}
        />

        <ReportCard
          title="Visits Report"
          description="Review hospital visits, home visits and scheduled appointments."
          icon={<Activity size={30} />}
        />

        <ReportCard
          title="Community Impact"
          description="Measure the overall impact of Kingdom Caregivers programmes."
          icon={<FileText size={30} />}
        />

        <ReportCard
          title="Annual Summary"
          description="Generate a yearly summary suitable for stakeholders and donors."
          icon={<FileText size={30} />}
        />
      </div>

      <div className="mt-10">
        <ExportButtons />
      </div>

      <div className="mt-10">
        <RecentReports />
      </div>
    </>
  );
}