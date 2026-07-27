"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Users,
  HeartHandshake,
  CalendarHeart,
  Activity,
} from "lucide-react";

import { Family } from "../../../types/family";

import {
  getFamilies,
  createFamily,
  updateFamily,
  deleteFamily,
} from "../../../lib/api/families";

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
  const [families, setFamilies] = useState<Family[]>([]);

  const [loading, setLoading] = useState(true);

  const [searchTerm, setSearchTerm] =
    useState("");

  const [isFamilyModalOpen, setIsFamilyModalOpen] =
    useState(false);

  const [editingFamily, setEditingFamily] =
    useState<Family | null>(null);

  const [deletingFamily, setDeletingFamily] =
    useState<Family | null>(null);

  useEffect(() => {
    loadFamilies();
  }, []);

  async function loadFamilies() {
    try {
      setLoading(true);

      const data = await getFamilies();

      setFamilies(data);
    } catch (error) {
      console.error(error);

      alert("Failed to load families.");
    } finally {
      setLoading(false);
    }
  }

  const filteredFamilies = useMemo(() => {
    const query = searchTerm
      .toLowerCase()
      .trim();

    if (!query) return families;

    return families.filter((family) =>
      [
        family.child,
        family.caregiver,
        family.condition,
        family.phone,
        family.address,
        family.status,
        family.lastVisit,
      ]
        .join(" ")
        .toLowerCase()
        .includes(query)
    );
  }, [families, searchTerm]);

  const handleOpenCreateModal = () => {
    setEditingFamily(null);
    setIsFamilyModalOpen(true);
  };

  const handleOpenEditModal = (
    family: Family
  ) => {
    setEditingFamily(family);
    setIsFamilyModalOpen(true);
  };

  const handleCloseModal = () => {
    setEditingFamily(null);
    setIsFamilyModalOpen(false);
  };

  const handleSaveFamily = async (
  data: FamilyFormData
) => {
  try {
    if (editingFamily) {
      await updateFamily(editingFamily.id, {
        child: data.child,
        caregiver: data.caregiver,
        condition: data.condition,
        phone: data.phone,
        address: data.address,
      });
    } else {
      await createFamily({
        child: data.child,
        caregiver: data.caregiver,
        condition: data.condition,
        phone: data.phone,
        address: data.address,
      });
    }

    await loadFamilies();

    handleCloseModal();
  } catch (error) {
    console.error(error);
    alert("Failed to save family.");
  }
};

const handleDeleteClick = (
  family: Family
) => {
  setDeletingFamily(family);
};

const handleConfirmDelete = async () => {
  if (!deletingFamily) return;

  try {
    await deleteFamily(deletingFamily.id);

    await loadFamilies();

    setDeletingFamily(null);
  } catch (error) {
    console.error(error);
    alert("Failed to delete family.");
  }
};

if (loading) {
  return (
    <div className="flex h-[60vh] items-center justify-center">
      <div className="text-lg font-semibold text-gray-500">
        Loading families...
      </div>
    </div>
  );
}

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
        subtitle="Registered families"
        icon={<Users size={30} />}
      />

      <StatCard
        title="Active Cases"
        value={
          families.filter(
            (family) => family.status === "Active"
          ).length.toString()
        }
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