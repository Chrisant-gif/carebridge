"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
} from "recharts";

const donationData = [
  { month: "Jan", donations: 18000 },
  { month: "Feb", donations: 25000 },
  { month: "Mar", donations: 42000 },
  { month: "Apr", donations: 37000 },
  { month: "May", donations: 52000 },
  { month: "Jun", donations: 61000 },
];

const visitsData = [
  { name: "Home Visits", value: 62 },
  { name: "Hospital Visits", value: 38 },
];

const COLORS = ["#10B981", "#3B82F6"];

export default function ReportsCharts() {
  return (
    <section className="grid gap-8 xl:grid-cols-2">
      {/* Monthly Donations */}

      <div className="rounded-3xl bg-white p-8 shadow-sm">
        <h2 className="mb-2 text-2xl font-bold text-gray-900">
          Monthly Donations
        </h2>

        <p className="mb-6 text-gray-500">
          Donations received over the last six months.
        </p>

        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={donationData}>
              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="month" />

              <YAxis />

              <Tooltip />

              <Bar
                dataKey="donations"
                fill="#10B981"
                radius={[10, 10, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Visits Breakdown */}

      <div className="rounded-3xl bg-white p-8 shadow-sm">
        <h2 className="mb-2 text-2xl font-bold text-gray-900">
          Visits Breakdown
        </h2>

        <p className="mb-6 text-gray-500">
          Home visits versus hospital visits.
        </p>

        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={visitsData}
                dataKey="value"
                nameKey="name"
                outerRadius={110}
                label
              >
                {visitsData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>

              <Tooltip />

              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}