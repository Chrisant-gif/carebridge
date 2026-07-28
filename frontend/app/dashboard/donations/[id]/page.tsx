import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  DollarSign,
  Calendar,
  Globe,
  CheckCircle,
  HeartHandshake,
  HandHeart,
  Banknote,
  FileText,
} from "lucide-react";

import { getDonation } from "../../../../lib/api/donations";
import StatCard from "../../../../components/dashboard/StatCard";

interface DonationDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function DonationDetailsPage({
  params,
}: DonationDetailsPageProps) {
  const { id } = await params;

  const donation = await getDonation(Number(id));

if (!donation) {
  notFound();
}

  return (
    <div className="space-y-8">
      {/* Header */}

      <div>
        <Link
          href="/dashboard/donations"
          className="mb-5 inline-flex items-center gap-2 text-sm font-medium text-emerald-600 hover:text-emerald-700"
        >
          <ArrowLeft size={18} />
          Back to Donations
        </Link>

        <h1 className="text-4xl font-bold">
          Donation Details
        </h1>

        <p className="mt-2 text-gray-500">
          View complete information about this
          contribution.
        </p>
      </div>

      {/* Stats */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Donation Amount"
          value={`${donation.currency} ${donation.amount.toLocaleString()}`}
          subtitle="Contribution received"
          icon={<DollarSign size={28} />}
        />

        <StatCard
          title="Payment Method"
          value={donation.paymentMethod}
          subtitle="How it was received"
          icon={<Banknote size={28} />}
        />

        <StatCard
          title="Status"
          value={donation.status}
          subtitle="Current payment status"
          icon={<CheckCircle size={28} />}
        />

        <StatCard
          title="Donation Date"
          value={donation.date}
          subtitle="Date recorded"
          icon={<Calendar size={28} />}
        />
      </div>

      {/* Main Grid */}

      <div className="grid gap-8 lg:grid-cols-3">

        {/* Left */}

        <div className="lg:col-span-2 rounded-3xl bg-white p-8 shadow-sm">

          <h2 className="mb-8 text-2xl font-bold">
            Donation Information
          </h2>

          <div className="space-y-5">

            <InfoRow
              label="Donor Name"
              value={donation.donorName}
            />

            <InfoRow
              label="Donation Amount"
              value={`${donation.currency} ${donation.amount.toLocaleString()}`}
            />

            <InfoRow
              label="Payment Method"
              value={donation.paymentMethod}
            />

            <InfoRow
              label="Purpose"
              value={donation.purpose}
            />

            <InfoRow
              label="Reference"
              value={donation.reference}
            />

            <InfoRow
              label="Date"
              value={donation.date}
            />

            <InfoRow
              label="Status"
              value={donation.status}
            />

          </div>
        </div>

        {/* Right */}

        <div className="space-y-6">

          <div className="rounded-3xl bg-gradient-to-br from-emerald-600 to-green-700 p-8 text-white">

            <HandHeart
              size={44}
              className="mb-6"
            />

            <h3 className="text-2xl font-bold">
              Thank You
            </h3>

            <p className="mt-4 leading-8 text-emerald-50">
              Every donation directly supports
              children living with disabilities and
              empowers Kingdom Caregivers to
              continue serving vulnerable families
              across Kenya.
            </p>

          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm">

            <div className="mb-5 flex items-center gap-3">

              <FileText className="text-emerald-600" />

              <h3 className="text-xl font-bold">
                Donation Reference
              </h3>

            </div>

            <p className="rounded-xl bg-gray-100 p-4 font-mono text-lg">
              {donation.reference}
            </p>

          </div>

        </div>

      </div>

      {/* Impact */}

      <div className="rounded-3xl bg-white p-10 shadow-sm">

        <div className="mb-8 flex items-center gap-3">

          <HeartHandshake
            className="text-emerald-600"
            size={30}
          />

          <h2 className="text-2xl font-bold">
            Donation Impact
          </h2>

        </div>

        <div className="grid gap-6 md:grid-cols-2">

          <ImpactItem text="Physiotherapy sessions for children" />

          <ImpactItem text="Home visits and caregiver support" />

          <ImpactItem text="Medical and hygiene supplies" />

          <ImpactItem text="Community outreach programmes" />

          <ImpactItem text="Tree planting initiatives" />

          <ImpactItem text="Hospital visit assistance" />

        </div>

        <div className="mt-10 rounded-2xl bg-emerald-50 p-6">

          <p className="leading-8 text-gray-700">

            Every contribution made to
            <span className="font-semibold text-emerald-700">
              {" "}
              Kingdom Caregivers
            </span>{" "}
            helps improve the lives of children living
            with disabilities while supporting their
            families through healthcare, therapy,
            education, nutrition and community
            outreach programmes.

          </p>

        </div>

      </div>

    </div>
  );
}

function InfoRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between border-b pb-4">
      <span className="font-medium text-gray-500">
        {label}
      </span>

      <span className="font-semibold text-right">
        {value}
      </span>
    </div>
  );
}

function ImpactItem({
  text,
}: {
  text: string;
}) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border p-5">
      <div className="rounded-full bg-emerald-100 p-2">
        <CheckCircle
          size={20}
          className="text-emerald-600"
        />
      </div>

      <span className="font-medium">
        {text}
      </span>
    </div>
  );
}