"use client";

import { useEffect, useMemo, useState } from "react";
import {
  CalendarHeart,
  Home,
  Hospital,
  CheckCircle,
} from "lucide-react";

import { Visit } from "../../../types/visit";

import {
  getVisits,
  createVisit,
  updateVisit,
  deleteVisit,
} from "../../../lib/api/visits";

import {
  getFamilies,
} from "../../../lib/api/families";

import { Family } from "../../../types/family";

import PageHeader from "../../../components/dashboard/PageHeader";
import PrimaryButton from "../../../components/dashboard/PrimaryButton";
import SearchBar from "../../../components/dashboard/SearchBar";
import StatCard from "../../../components/dashboard/StatCard";

import VisitsTable from "../../../components/dashboard/visits/VisitsTable";
import VisitModal from "../../../components/dashboard/visits/VisitModal";
import {
  VisitFormData,
} from "../../../components/dashboard/visits/VisitForm";

import ConfirmDialog from "../../../components/dashboard/ConfirmDialog";

export default function VisitsPage() {
  const [visits, setVisits] =
  useState<Visit[]>([]);

const [families, setFamilies] =
  useState<Family[]>([]);

const [loading, setLoading] =
  useState(true);

  const [searchTerm, setSearchTerm] =
    useState("");

  const [isVisitModalOpen, setIsVisitModalOpen] =
    useState(false);

  const [editingVisit, setEditingVisit] =
    useState<Visit | null>(null);

  const [deletingVisit, setDeletingVisit] =
    useState<Visit | null>(null);

    useEffect(() => {
  loadData();
}, []);

async function loadData() {
  try {
    setLoading(true);

    const [visitData, familyData] =
      await Promise.all([
        getVisits(),
        getFamilies(),
      ]);

    setVisits(visitData);
    setFamilies(familyData);
  } catch (error) {
    console.error(error);
    alert("Failed to load visits.");
  } finally {
    setLoading(false);
  }
}

  const filteredVisits = useMemo(() => {
    const query = searchTerm
      .toLowerCase()
      .trim();

    if (!query) return visits;

    return visits.filter((visit) => {
      const family = families.find(
        (f) => f.id === visit.familyId
      );

      if (loading) {
  return (
    <div className="p-8 text-gray-500">
      Loading visits...
    </div>
  );
}
      return (
        family?.child
          .toLowerCase()
          .includes(query) ||
        visit.caregiver
          .toLowerCase()
          .includes(query) ||
        visit.visitType
          .toLowerCase()
          .includes(query) ||
        visit.location
          .toLowerCase()
          .includes(query) ||
        visit.status
          .toLowerCase()
          .includes(query) ||
        visit.date
          .toLowerCase()
          .includes(query)
      );
    });
  }, [searchTerm, visits]);

  const completedVisits = visits.filter(
    (visit) => visit.status === "Completed"
  ).length;

  const hospitalVisits = visits.filter(
    (visit) => visit.visitType === "Hospital"
  ).length;

  const homeVisits = visits.filter(
    (visit) => visit.visitType === "Home"
  ).length;

  const handleOpenCreateModal = () => {
    setEditingVisit(null);
    setIsVisitModalOpen(true);
  };

  const handleOpenEditModal = (
    visit: Visit
  ) => {
    setEditingVisit(visit);
    setIsVisitModalOpen(true);
  };

  const handleCloseModal = () => {
    setEditingVisit(null);
    setIsVisitModalOpen(false);
  };

const handleSaveVisit = async (
  data: VisitFormData
) => {
  try {
    if (editingVisit) {
      await updateVisit(editingVisit.id, data);
    } else {
      await createVisit(data);
    }

    await loadData();

    handleCloseModal();
  } catch (error) {
    console.error(error);
    alert("Failed to save visit.");
  }
};

  const handleDeleteClick = (
    visit: Visit
  ) => {
    setDeletingVisit(visit);
  };

  const handleConfirmDelete = () => {
  if (!deletingVisit) return;

  setVisits((prev) =>
    prev.filter(
      (visit) => visit.id !== deletingVisit.id
    )
  );

  setDeletingVisit(null);
};

return (
    <>
      <PageHeader
        title="Visits"
        description="Manage all hospital and home visits."
        action={
          <PrimaryButton
            onClick={handleOpenCreateModal}
          >
            + Add Visit
          </PrimaryButton>
        }
      />

      <div className="mb-8">
        <SearchBar
          placeholder="Search visits..."
          value={searchTerm}
          onChange={setSearchTerm}
        />
      </div>

      <div className="mb-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Total Visits"
          value={visits.length.toString()}
          subtitle="All recorded visits"
          icon={<CalendarHeart size={30} />}
        />

        <StatCard
          title="Hospital Visits"
          value={hospitalVisits.toString()}
          subtitle="Hospital care"
          icon={<Hospital size={30} />}
        />

        <StatCard
          title="Home Visits"
          value={homeVisits.toString()}
          subtitle="Home support"
          icon={<Home size={30} />}
        />

        <StatCard
          title="Completed"
          value={completedVisits.toString()}
          subtitle="Successfully completed"
          icon={<CheckCircle size={30} />}
        />
      </div>

      <VisitsTable
        visits={filteredVisits}
        onEdit={handleOpenEditModal}
        onDelete={handleDeleteClick}
      />

      <VisitModal
        open={isVisitModalOpen}
        initialData={
          editingVisit
            ? {
                familyId: editingVisit.familyId,
                caregiver: editingVisit.caregiver,
                visitType: editingVisit.visitType,
                date: editingVisit.date,
                location: editingVisit.location,
                status: editingVisit.status,
                notes: editingVisit.notes,
              }
            : undefined
        }
        families={families}
        onClose={handleCloseModal}
        onSave={handleSaveVisit}
      />

      <ConfirmDialog
        open={!!deletingVisit}
        title="Delete Visit"
        message={`Are you sure you want to delete this ${
          deletingVisit?.visitType.toLowerCase() ?? ""
        } visit? This action cannot be undone.`}
        confirmText="Delete"
        cancelText="Cancel"
        onConfirm={handleConfirmDelete}
        onCancel={() =>
          setDeletingVisit(null)
        }
      />
    </>
  );
}