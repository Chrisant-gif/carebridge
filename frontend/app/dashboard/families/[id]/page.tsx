import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Users,
  CalendarHeart,
  HeartHandshake,
  Activity,
} from "lucide-react";

import { getFamily } from "../../../../lib/api/families";
import StatCard from "../../../../components/dashboard/StatCard";

interface FamilyDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function FamilyDetailsPage({
  params,
}: FamilyDetailsPageProps) {
  const { id } = await params;

  const family = await getFamily(Number(id));

if (!family) {
  notFound();
}

  return (
    <div className="space-y-8">
      <div>
        <Link
          href="/dashboard/families"
          className="mb-4 inline-flex items-center gap-2 text-sm text-emerald-600 hover:text-emerald-700"
        >
          <ArrowLeft size={18} />
          Back to Families
        </Link>

        <h1 className="text-3xl font-bold">
          {family.child}
        </h1>

        <p className="mt-2 text-gray-500">
          Family profile and care information.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="mb-6 text-xl font-semibold">
            Family Information
          </h2>

          <div className="space-y-4">
            <div className="flex justify-between border-b pb-3">
              <span className="font-medium text-gray-500">
                Caregiver
              </span>
              <span>{family.caregiver}</span>
            </div>

            <div className="flex justify-between border-b pb-3">
              <span className="font-medium text-gray-500">
                Condition
              </span>
              <span>{family.condition}</span>
            </div>

            <div className="flex justify-between border-b pb-3">
              <span className="font-medium text-gray-500">
                Phone
              </span>
              <span>{family.phone}</span>
            </div>

            <div className="flex justify-between border-b pb-3">
              <span className="font-medium text-gray-500">
                Address
              </span>
              <span>{family.address}</span>
            </div>

            <div className="flex justify-between border-b pb-3">
              <span className="font-medium text-gray-500">
                Status
              </span>

              <span
                className={`rounded-full px-3 py-1 text-sm font-semibold ${
                  family.status === "Active"
                    ? "bg-emerald-100 text-emerald-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {family.status}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="font-medium text-gray-500">
                Last Visit
              </span>
              <span>{family.lastVisit}</span>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="mb-6 text-xl font-semibold">
            Care Notes
          </h2>

          <p className="leading-8 text-gray-600">
            No notes have been added for this family yet.
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Hospital Visits"
          value="12"
          subtitle="Total visits"
          icon={<CalendarHeart size={30} />}
        />

        <StatCard
          title="Home Visits"
          value="18"
          subtitle="Completed"
          icon={<Activity size={30} />}
        />

        <StatCard
          title="Care Plans"
          value="2"
          subtitle="Active"
          icon={<HeartHandshake size={30} />}
        />

        <StatCard
          title="Support Programs"
          value="4"
          subtitle="Enrolled"
          icon={<Users size={30} />}
        />
      </div>
    </div>
  );
}