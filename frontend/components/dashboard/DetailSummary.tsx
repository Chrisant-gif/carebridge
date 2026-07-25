import { ReactNode } from "react";

interface DetailItem {
  label: string;
  value: string;
  icon: ReactNode;
}

interface DetailSummaryProps {
  title: string;
  items: DetailItem[];
}

export default function DetailSummary({
  title,
  items,
}: DetailSummaryProps) {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-sm">
      <h2 className="mb-6 text-xl font-semibold">
        {title}
      </h2>

      <div className="grid gap-5 md:grid-cols-2">
        {items.map((item) => (
          <div
            key={item.label}
            className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-gray-50 p-4"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
              {item.icon}
            </div>

            <div className="min-w-0">
              <p className="text-sm font-medium text-gray-500">
                {item.label}
              </p>

              <p className="mt-1 break-words text-lg font-semibold text-gray-900">
                {item.value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}