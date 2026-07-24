"use client";

import { useState } from "react";
import {
  Users,
  HeartHandshake,
  CalendarHeart,
  Activity,
} from "lucide-react";

import { Family } from "../../../types/family";

import Modal from "../../../components/dashboard/Modal";
import PageHeader from "../../../components/dashboard/PageHeader";
import PrimaryButton from "../../../components/dashboard/PrimaryButton";
import SearchBar from "../../../components/dashboard/SearchBar";
import StatCard from "../../../components/dashboard/StatCard";

import FamilyForm from "../../../components/dashboard/families/FamilyForm";
import FamiliesTable from "../../../components/dashboard/families/FamiliesTable";

export default function FamiliesPage() {
  const [openModal, setOpenModal] = useState(false);

  const [families] = useState<Family[]>([
    {
      id: 1,
      child: "Brian Mwangi",
      caregiver: "Stella K",
      condition: "Cerebral Palsy",
      phone: "+254700123456",
      address: "Kasarani",
      lastVisit: "15 Jul 2026",
      status: "Active",
    },
    {
      id: 2,
      child: "Aisha Wanjiku",
      caregiver: "Mary W",
      condition: "Autism",
      phone: "+254711654321",
      address: "Roysambu",
      lastVisit: "10 Jul 2026",
      status: "Follow-up",
    },
    {
      id: 3,
      child: "Kevin Otieno",
      caregiver: "Jane A",
      condition: "Cerebral Palsy",
      phone: "+254722345678",
      address: "Kahawa West",
      lastVisit: "08 Jul 2026",
      status: "Active",
    },
  ]);

  return (
    <>
      <PageHeader
        title="Families"
        description="Manage all beneficiary families supported by Kingdom Caregivers."
        action={
          <PrimaryButton onClick={() => setOpenModal(true)}>
            + Add Family
          </PrimaryButton>
        }
      />

      <div className="mb-8">
        <SearchBar placeholder="Search families..." />
      </div>

      <div className="mb-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <StatCard
          title="Total Families"
          value={families.length.toString()}
          subtitle="+12 this month"
          icon={<Users size={30} />}
        />

        <StatCard
          title="Active Cases"
          value={families
            .filter((f) => f.status === "Active")
            .length.toString()}
          subtitle="Currently active"
          icon={<HeartHandshake size={30} />}
        />

        <StatCard
          title="Hospital Visits"
          value="320"
          subtitle="This year"
          icon={<CalendarHeart size={30} />}
        />

        <StatCard
          title="Home Visits"
          value="214"
          subtitle="Completed"
          icon={<Activity size={30} />}
        />

      </div>

      <FamiliesTable families={families} />

      <Modal
        open={openModal}
        title="Register New Family"
        onClose={() => setOpenModal(false)}
      >
        <FamilyForm onCancel={() => setOpenModal(false)} />
      </Modal>
    </>
  );
}