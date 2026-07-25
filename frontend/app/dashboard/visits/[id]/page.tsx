import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  CalendarHeart,
  CheckCircle,
  Home,
  Hospital,
  MapPin,
  User,
} from "lucide-react";

import { initialVisits } from "../../../../data/visits";
import { initialFamilies } from "../../../../data/families";

import DetailSummary from "../../../../components/dashboard/DetailSummary";

interface VisitDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function VisitDetailsPage({
  params,
}: VisitDetailsPageProps) {
  const { id } = await params;

  const visit = initialVisits.find(
    (v) => v.id === Number(id)
  );

  if (!visit) {
    notFound();
  }

  const family = initialFamilies.find(
    (f) => f.id === visit.familyId
  );

  return (
    <div className="space-y-8">
      <div>
        <Link
          href="/dashboard/visits"
          className="mb-4 inline-flex items-center gap-2 text-sm text-emerald-600 hover:text-emerald-700"
        >
          <ArrowLeft size={18} />
          Back to Visits
        </Link>

        <h1 className="text-3xl font-bold">
          {visit.visitType} Visit
        </h1>

        <p className="mt-2 text-gray-500">
          Visit details and care information.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="mb-6 text-xl font-semibold">
            Visit Information
          </h2>

          <div className="space-y-4">
            <div className="flex justify-between border-b pb-3">
              <span className="font-medium text-gray-500">
                Family
              </span>
              <span>{family?.child ?? "Unknown Family"}</span>
            </div>

            <div className="flex justify-between border-b pb-3">
              <span className="font-medium text-gray-500">
                Caregiver
              </span>
              <span>{visit.caregiver}</span>
            </div>

            <div className="flex justify-between border-b pb-3">
              <span className="font-medium text-gray-500">
                Visit Type
              </span>
              <span>{visit.visitType}</span>
            </div>

            <div className="flex justify-between border-b pb-3">
              <span className="font-medium text-gray-500">
                Date
              </span>
              <span>{visit.date}</span>
            </div>

            <div className="flex justify-between border-b pb-3">
              <span className="font-medium text-gray-500">
                Location
              </span>
              <span>{visit.location}</span>
            </div>

            <div className="flex justify-between">
              <span className="font-medium text-gray-500">
                Status
              </span>

              <span
                className={`rounded-full px-3 py-1 text-sm font-semibold ${
                  visit.status === "Completed"
                    ? "bg-emerald-100 text-emerald-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {visit.status}
              </span>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="mb-6 text-xl font-semibold">
            Visit Notes
          </h2>

          <p className="leading-8 text-gray-600">
            {visit.notes}
          </p>
        </div>
      </div>

      <DetailSummary
        title="Quick Summary"
        items={[
          {
            label: "Visit Type",
            value: visit.visitType,
            icon: <Hospital size={24} />,
          },
          {
            label: "Visit Date",
            value: visit.date,
            icon: <CalendarHeart size={24} />,
          },
          {
            label: "Caregiver",
            value: visit.caregiver,
            icon: <User size={24} />,
          },
          {
            label: "Status",
            value: visit.status,
            icon: <CheckCircle size={24} />,
          },
          {
            label: "Location",
            value: visit.location,
            icon: <MapPin size={24} />,
          },
          {
            label: "Family",
            value: family?.child ?? "Unknown Family",
            icon: <Home size={24} />,
          },
        ]}
      />
    </div>
  );
}