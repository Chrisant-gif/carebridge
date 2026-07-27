import { ReactNode } from "react";
import PrimaryButton from "../PrimaryButton";

interface ReportCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  buttonText?: string;
}

export default function ReportCard({
  title,
  description,
  icon,
  buttonText = "Generate Report",
}: ReportCardProps) {
  return (
    <div className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 transition group-hover:bg-emerald-600 group-hover:text-white">
        {icon}
      </div>

      <h3 className="text-xl font-bold text-gray-900">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-gray-600">
        {description}
      </p>

      <div className="mt-8">
        <PrimaryButton>
          {buttonText}
        </PrimaryButton>
      </div>
    </div>
  );
}