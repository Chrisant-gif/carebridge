"use client";

import { Family } from "../../types/family";

import { Visit } from "../../types/visit";

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
import { getVolunteers } from "../../lib/api/volunteers";

import WelcomeBanner from "../../components/dashboard/WelcomeBanner";
import QuickActions from "../../components/dashboard/QuickActions";
import DashboardCharts from "../../components/dashboard/DashboardCharts";
import StatCard from "../../components/dashboard/StatCard";

 export default function DashboardPage() {
  const [familyCount, setFamilyCount] =
    useState(0);

    const [families, setFamilies] =
  useState<Family[]>([]);

  const [visitCount, setVisitCount] =
    useState(0);

  const [donationTotal, setDonationTotal] =
    useState(0);

    const [volunteerCount, setVolunteerCount] =
  useState(0);

  const [recentActivity, setRecentActivity] =
  useState<
    {
      title: string;
      description: string;
      time: string;
    }[]
  >([]);

const [upcomingVisits, setUpcomingVisits] =
  useState<Visit[]>([]);


  useEffect(() => {
    loadDashboard();
  }, []);

  async function loadDashboard() {
    try {
      const [
  families,
  visits,
  donations,
  volunteers,
] = await Promise.all([
  getFamilies(),
  getVisits(),
  getDonations(),
  getVolunteers(),
]);

      setFamilyCount(families.length);

      setFamilies(families);

      setVisitCount(visits.length);

      const scheduledVisits = visits
  .filter(
    (visit) => visit.status === "Scheduled"
  )
  .sort(
    (a, b) =>
      new Date(a.date).getTime() -
      new Date(b.date).getTime()
  );

setUpcomingVisits(
  scheduledVisits.slice(0, 3)
);

      setVolunteerCount(volunteers.length);

      setDonationTotal(
        donations.reduce(
  (total, donation) =>
    total + Number(donation.amount),
  0
)
      );

setRecentActivity([
  ...(families.length
    ? [
        {
          title: "New Family Added",
          description: `${families[0].child} registered`,
          time: families[0].lastVisit ?? "Recently",
        },
      ]
    : []),

  ...(volunteers.length
    ? [
        {
          title: "Volunteer Registered",
          description: `${volunteers[0].name} joined`,
          time: volunteers[0].joinedDate,
        },
      ]
    : []),

  ...(visits.length
    ? [
        {
          title: `${visits[0].visitType} Visit`,
          description: `${visits[0].caregiver} • ${visits[0].location}`,
          time: visits[0].date,
        },
      ]
    : []),

  ...(donations.length
    ? [
        {
          title: "Donation Received",
          description: `${donations[0].currency} ${Number(
            donations[0].amount
          ).toLocaleString()} from ${donations[0].donor_name}`,
          time: donations[0].donation_date,
        },
      ]
    : []),
]);

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
            value={volunteerCount.toString()}
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
  {recentActivity.length === 0 ? (
    <p className="text-gray-500">
      No recent activity.
    </p>
  ) : (
    recentActivity.map((activity, index) => (
      <ActivityItem
        key={index}
        title={activity.title}
        description={activity.description}
        time={activity.time}
      />
    ))
  )}
</div>
        </section>

        {/* Upcoming Visits */}

        <section className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="mb-6 text-2xl font-bold">
            Upcoming Visits
          </h2>

         <div className="space-y-4">
  {upcomingVisits.length === 0 ? (
    <p className="text-gray-500">
      No upcoming visits scheduled.
    </p>
  ) : (
    upcomingVisits.map((visit) => {
  const family = families.find(
    (family) => family.id === visit.familyId
  );

  return (
    <VisitCard
      key={visit.id}
      child={
        family?.child ??
        `Family #${visit.familyId}`
      }
      caregiver={visit.caregiver}
      date={visit.date}
    />
  );
})
  )}
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