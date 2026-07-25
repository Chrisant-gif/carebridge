"use client";

import { useMemo, useState } from "react";
import {
  Users,
  HeartHandshake,
  CalendarHeart,
  Activity,
} from "lucide-react";

import { Family } from "../../../types/family";

import PageHeader from "../../../components/dashboard/PageHeader";
import PrimaryButton from "../../../components/dashboard/PrimaryButton";
import SearchBar from "../../../components/dashboard/SearchBar";
import StatCard from "../../../components/dashboard/StatCard";

import ConfirmDialog from "../../../components/dashboard/ConfirmDialog";
import FamilyModal from "../../../components/dashboard/families/FamilyModal";
import FamiliesTable from "../../../components/dashboard/families/FamiliesTable";

import {
  FamilyFormData,
} from "../../../components/dashboard/families/FamilyForm";

export default function FamiliesPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const [isFamilyModalOpen, setIsFamilyModalOpen] = useState(false);

  const [editingFamily, setEditingFamily] =
    useState<Family | null>(null);

  const [familyToDelete, setFamilyToDelete] =
    useState<Family | null>(null);

  const [families, setFamilies] = useState<Family[]>([
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

  const filteredFamilies = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    if (!query) {
      return families;
    }

    return families.filter((family) =>
      family.child.toLowerCase().includes(query) ||
      family.caregiver.toLowerCase().includes(query) ||
      family.condition.toLowerCase().includes(query) ||
      family.phone.toLowerCase().includes(query) ||
      family.address.toLowerCase().includes(query)
    );
  }, [families, searchTerm]);

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
    setFamilyToDelete(family);
  };

  const handleConfirmDelete = () => {
    if (!familyToDelete) return;

    setFamilies((prev) =>
      prev.filter((family) => family.id !== familyToDelete.id)
    );

    setFamilyToDelete(null);
  };

  const handleCancelDelete = () => {
    setFamilyToDelete(null);
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
        <SearchBar
          placeholder="Search families..."
          value={searchTerm}
          onChange={setSearchTerm}
        />
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
        families={filteredFamilies}
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
        open={familyToDelete !== null}
        title="Delete Family"
        message={
          familyToDelete
            ? `Are you sure you want to delete "${familyToDelete.child}"? This action cannot be undone.`
            : ""
        }
        confirmText="Delete"
        cancelText="Cancel"
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
      />
    </>
  );
}