"use client";

import { useMemo, useState } from "react";
import {
  CalendarHeart,
  Home,
  Hospital,
  CheckCircle,
} from "lucide-react";

import { Visit } from "../../../types/visit";
import { initialVisits } from "../../../data/visits";
import { initialFamilies } from "../../../data/families";

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
    useState<Visit[]>(initialVisits);

  const [searchTerm, setSearchTerm] =
    useState("");

  const [isVisitModalOpen, setIsVisitModalOpen] =
    useState(false);

  const [editingVisit, setEditingVisit] =
    useState<Visit | null>(null);

  const [deletingVisit, setDeletingVisit] =
    useState<Visit | null>(null);

  const filteredVisits = useMemo(() => {
    const query = searchTerm
      .toLowerCase()
      .trim();

    if (!query) return visits;

    return visits.filter((visit) => {
      const family = initialFamilies.find(
        (f) => f.id === visit.familyId
      );

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

  const handleSaveVisit = (
    data: VisitFormData
  ) => {
    if (editingVisit) {
      const updatedVisit: Visit = {
        ...editingVisit,
        familyId: data.familyId,
        caregiver: data.caregiver,
        visitType: data.visitType,
        date: data.date,
        location: data.location,
        status: data.status,
        notes: data.notes,
      };

      setVisits((prev) =>
        prev.map((visit) =>
          visit.id === updatedVisit.id
            ? updatedVisit
            : visit
        )
      );
    } else {
      const newVisit: Visit = {
        id: Date.now(),
        familyId: data.familyId,
        caregiver: data.caregiver,
        visitType: data.visitType,
        date: data.date,
        location: data.location,
        status: data.status,
        notes: data.notes,
      };

      setVisits((prev) => [
        ...prev,
        newVisit,
      ]);
    }

    handleCloseModal();
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
        families={initialFamilies}
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