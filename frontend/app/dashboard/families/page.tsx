"use client";

import { useState } from "react";
import {
  Users,
  HeartHandshake,
  CalendarHeart,
  Activity,
} from "lucide-react";

import { Family } from "../../../types/family";
import { initialFamilies } from "../../../data/families";

import PageHeader from "../../../components/dashboard/PageHeader";
import PrimaryButton from "../../../components/dashboard/PrimaryButton";
import SearchBar from "../../../components/dashboard/SearchBar";
import StatCard from "../../../components/dashboard/StatCard";

import FamilyModal from "../../../components/dashboard/families/FamilyModal";
import FamiliesTable from "../../../components/dashboard/families/FamiliesTable";
import {
  FamilyFormData,
} from "../../../components/dashboard/families/FamilyForm";

import ConfirmDialog from "../../../components/dashboard/ConfirmDialog";

export default function FamiliesPage() {
  const [isFamilyModalOpen, setIsFamilyModalOpen] = useState(false);

  const [editingFamily, setEditingFamily] =
    useState<Family | null>(null);

  const [deletingFamily, setDeletingFamily] =
    useState<Family | null>(null);

  const [families, setFamilies] =
    useState<Family[]>(initialFamilies);

  const handleOpenCreateModal = () => {
    setEditingFamily(null);
    setIsFamilyModalOpen(true);
  };

  const handleOpenEditModal = (family: Family) => {
    setEditingFamily(family);
    setIsFamilyModalOpen(true);
  };

  const handleCloseModal = () => {
    setEditingFamily(null);
    setIsFamilyModalOpen(false);
  };

  const handleSaveFamily = (data: FamilyFormData) => {
    if (editingFamily) {
      const updatedFamily: Family = {
        ...editingFamily,
        child: data.child,
        caregiver: data.caregiver,
        condition: data.condition,
        phone: data.phone,
        address: data.address,
      };

      setFamilies((prev) =>
        prev.map((family) =>
          family.id === updatedFamily.id
            ? updatedFamily
            : family
        )
      );
    } else {
      const newFamily: Family = {
        id: Date.now(),
        child: data.child,
        caregiver: data.caregiver,
        condition: data.condition,
        phone: data.phone,
        address: data.address,
        lastVisit: new Date().toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }),
        status: "Active",
      };

      setFamilies((prev) => [...prev, newFamily]);
    }

    handleCloseModal();
  };

  const handleDeleteClick = (family: Family) => {
    setDeletingFamily(family);
  };

  const handleConfirmDelete = () => {
    if (!deletingFamily) return;

    setFamilies((prev) =>
      prev.filter(
        (family) => family.id !== deletingFamily.id
      )
    );

    setDeletingFamily(null);
  };

  return (
    <>
      <PageHeader
        title="Families"
        description="Manage all beneficiary families supported by Kingdom Caregivers."
        action={
          <PrimaryButton onClick={handleOpenCreateModal}>
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
            .filter((family) => family.status === "Active")
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

      <FamiliesTable
        families={families}
        onEdit={handleOpenEditModal}
        onDelete={handleDeleteClick}
      />

      <FamilyModal
        open={isFamilyModalOpen}
        family={editingFamily}
        onClose={handleCloseModal}
        onSave={handleSaveFamily}
      />

      <ConfirmDialog
        open={!!deletingFamily}
        title="Delete Family"
        message={`Are you sure you want to delete ${
          deletingFamily?.child ?? "this family"
        }? This action cannot be undone.`}
        confirmText="Delete"
        cancelText="Cancel"
        onConfirm={handleConfirmDelete}
        onCancel={() => setDeletingFamily(null)}
      />
    </>
  );
}