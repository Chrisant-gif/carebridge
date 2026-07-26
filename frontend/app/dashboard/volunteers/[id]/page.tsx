import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Phone,
  Briefcase,
  Calendar,
  CheckCircle,
} from "lucide-react";

import { initialVolunteers } from "../../../../data/volunteers";
import StatCard from "../../../../components/dashboard/StatCard";

interface VolunteerDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function VolunteerDetailsPage({
  params,
}: VolunteerDetailsPageProps) {
  const { id } = await params;

  const volunteer = initialVolunteers.find(
    (v) => v.id === Number(id)
  );

  if (!volunteer) {
    notFound();
  }

  return (
    <div className="space-y-8">
      <div>
        <Link
          href="/dashboard/volunteers"
          className="mb-4 inline-flex items-center gap-2 text-sm text-emerald-600 transition hover:text-emerald-700"
        >
          <ArrowLeft size={18} />
          Back to Volunteers
        </Link>

        <h1 className="text-3xl font-bold text-gray-900">
          {volunteer.name}
        </h1>

        <p className="mt-2 text-gray-500">
          Volunteer profile and information.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="mb-6 text-xl font-semibold">
            Volunteer Information
          </h2>

          <div className="space-y-4">
            <div className="flex justify-between border-b pb-3">
              <span className="font-medium text-gray-500">
                Full Name
              </span>
              <span>{volunteer.name}</span>
            </div>

            <div className="flex justify-between border-b pb-3">
              <span className="font-medium text-gray-500">
                Phone
              </span>
              <span>{volunteer.phone}</span>
            </div>

            <div className="flex justify-between border-b pb-3">
              <span className="font-medium text-gray-500">
                Email
              </span>
              <span>{volunteer.email}</span>
            </div>

            <div className="flex justify-between border-b pb-3">
              <span className="font-medium text-gray-500">
                Role
              </span>
              <span>{volunteer.role}</span>
            </div>

            <div className="flex justify-between border-b pb-3">
              <span className="font-medium text-gray-500">
                Joined
              </span>
              <span>{volunteer.joinedDate}</span>
            </div>

            <div className="flex justify-between border-b pb-3">
              <span className="font-medium text-gray-500">
                Status
              </span>

              <span
                className={`rounded-full px-3 py-1 text-sm font-semibold ${
                  volunteer.status === "Active"
                    ? "bg-emerald-100 text-emerald-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {volunteer.status}
              </span>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="mb-6 text-xl font-semibold">
            About Volunteer
          </h2>

          <p className="leading-8 text-gray-600">
            <strong>{volunteer.name}</strong> serves as a{" "}
            <strong>{volunteer.role}</strong> with Kingdom
            Caregivers, supporting children living with
            disabilities and their families through
            compassionate community care.
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 2xl:grid-cols-4">
        <StatCard
          title="Role"
          value={volunteer.role}
          subtitle="Current role"
          valueClassName="text-2xl"
          icon={<Briefcase size={30} />}
        />

        <StatCard
          title="Status"
          value={volunteer.status}
          subtitle="Volunteer status"
          valueClassName="text-2xl"
          icon={<CheckCircle size={30} />}
        />

        <StatCard
          title="Joined"
          value={volunteer.joinedDate}
          subtitle="Member since"
          valueClassName="text-2xl"
          icon={<Calendar size={30} />}
        />

        <StatCard
          title="Contact"
          value={volunteer.phone}
          subtitle="Phone number"
          valueClassName="text-2xl break-all"
          icon={<Phone size={30} />}
        />
      </div>
    </div>
  );
}