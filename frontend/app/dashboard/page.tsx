"use client";

import {
  Users,
  HeartHandshake,
  HandCoins,
  Activity,
} from "lucide-react";
import { useEffect, useState } from "react";

import { getFamilies } from "../../lib/api/families";
import { getVisits } from "../../lib/api/visits";
import { getDonations } from "../../lib/api/donations";

import WelcomeBanner from "../../components/dashboard/WelcomeBanner";
import QuickActions from "../../components/dashboard/QuickActions";
import DashboardCharts from "../../components/dashboard/DashboardCharts";
import StatCard from "../../components/dashboard/StatCard";

 export default function DashboardPage() {
  const [familyCount, setFamilyCount] =
    useState(0);

  const [visitCount, setVisitCount] =
    useState(0);

  const [donationTotal, setDonationTotal] =
    useState(0);

  useEffect(() => {
    loadDashboard();
  }, []);

  async function loadDashboard() {
    try {
      const [
        families,
        visits,
        donations,
      ] = await Promise.all([
        getFamilies(),
        getVisits(),
        getDonations(),
      ]);

      setFamilyCount(families.length);

      setVisitCount(visits.length);

      setDonationTotal(
        donations.reduce(
  (total, donation) =>
    total + Number(donation.amount),
  0
)
      );
    } catch (error) {
      console.error(error);
    }
  }   
  return (
    <div className="space-y-10">
      {/* Welcome Banner */}

      <WelcomeBanner />

      {/* Quick Actions */}

      <QuickActions />

      {/* Dashboard Statistics */}

      <section>
        <h2 className="mb-6 text-2xl font-bold text-gray-900">
          Dashboard Overview
        </h2>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <StatCard
            title="Families Supported"
            value={familyCount.toString()}
            subtitle="Currently enrolled"
            icon={<Users size={30} />}
          />

          <StatCard
            title="Volunteers"
            value="75"
            subtitle="Active volunteers"
            icon={<HeartHandshake size={30} />}
          />

          <StatCard
            title="Hospital Visits"
            value={visitCount.toString()}
            subtitle="Completed this year"
            icon={<Activity size={30} />}
          />

          <StatCard
            title="Donations"
            value={`KES ${donationTotal.toLocaleString()}`}
            subtitle="Funds raised"
            icon={<HandCoins size={30} />}
          />
        </div>
      </section>

      {/* Dashboard Charts */}

      <DashboardCharts />

      {/* Bottom Section */}

      <div className="grid gap-8 xl:grid-cols-2">
        {/* Recent Activity */}

        <section className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="mb-6 text-2xl font-bold">
            Recent Activity
          </h2>

          <div className="space-y-4">
            <ActivityItem
              title="Home Visit Completed"
              description="Mary Wanjiku • Nairobi"
              time="Today"
            />

            <ActivityItem
              title="Donation Received"
              description="KES 10,000 from John Kamau"
              time="Yesterday"
            />

            <ActivityItem
              title="Volunteer Registered"
              description="Grace Njeri joined CareBridge"
              time="2 days ago"
            />

            <ActivityItem
              title="Therapy Session Completed"
              description="Brian Otieno"
              time="This week"
            />
          </div>
        </section>

        {/* Upcoming Visits */}

        <section className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="mb-6 text-2xl font-bold">
            Upcoming Visits
          </h2>

          <div className="space-y-4">
            <VisitCard
              child="Mary Wanjiku"
              caregiver="Jane Wanjiku"
              date="Tomorrow"
            />

            <VisitCard
              child="Brian Otieno"
              caregiver="Peter Otieno"
              date="Friday"
            />

            <VisitCard
              child="Faith Achieng"
              caregiver="Lucy Achieng"
              date="Monday"
            />
          </div>
        </section>
      </div>
    </div>
  );
}

function ActivityItem({
  title,
  description,
  time,
}: {
  title: string;
  description: string;
  time: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-gray-100 p-5 transition hover:bg-gray-50">
      <div>
        <h3 className="font-semibold text-gray-900">
          {title}
        </h3>

        <p className="text-sm text-gray-500">
          {description}
        </p>
      </div>

      <span className="text-sm text-gray-400">
        {time}
      </span>
    </div>
  );
}

function VisitCard({
  child,
  caregiver,
  date,
}: {
  child: string;
  caregiver: string;
  date: string;
}) {
  return (
    <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5">
      <h3 className="font-semibold text-gray-900">
        {child}
      </h3>

      <p className="mt-1 text-gray-600">
        Caregiver: {caregiver}
      </p>

      <p className="mt-3 font-medium text-emerald-700">
        📅 {date}
      </p>
    </div>
  );
}