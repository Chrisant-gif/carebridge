import { ReactNode } from "react";

interface StatCardProps {
  title: string;
  value: string;
  icon: ReactNode;
  subtitle: string;
  valueClassName?: string;
}

export default function StatCard({
  title,
  value,
  icon,
  subtitle,
  valueClassName = "text-4xl",
}: StatCardProps) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <p className="text-gray-500">
            {title}
          </p>

          <h2
            className={`mt-3 break-words font-bold leading-tight text-gray-900 ${valueClassName}`}
          >
            {value}
          </h2>

          <p className="mt-3 text-sm text-emerald-600">
            {subtitle}
          </p>
        </div>

        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
          {icon}
        </div>
      </div>
    </div>
  );
}