"use client";

import {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  HeartHandshake,
  UserCheck,
  UserX,
  Briefcase,
} from "lucide-react";

import { Volunteer } from "../../../types/volunteer";

import {
  getVolunteers,
  createVolunteer,
  updateVolunteer,
  deleteVolunteer,
} from "../../../lib/api/volunteers";

import PageHeader from "../../../components/dashboard/PageHeader";
import PrimaryButton from "../../../components/dashboard/PrimaryButton";
import SearchBar from "../../../components/dashboard/SearchBar";
import StatCard from "../../../components/dashboard/StatCard";

import VolunteersTable from "../../../components/dashboard/volunteers/VolunteersTable";
import VolunteerModal from "../../../components/dashboard/volunteers/VolunteerModal";
import {
  VolunteerFormData,
} from "../../../components/dashboard/volunteers/VolunteerForm";

import ConfirmDialog from "../../../components/dashboard/ConfirmDialog";

export default function VolunteersPage() {
  const [volunteers, setVolunteers] =
    useState<Volunteer[]>([]);

const [loading, setLoading] =
  useState(true);

  const [searchTerm, setSearchTerm] =
    useState("");

  const [isVolunteerModalOpen, setIsVolunteerModalOpen] =
    useState(false);

  const [editingVolunteer, setEditingVolunteer] =
    useState<Volunteer | null>(null);

  const [deletingVolunteer, setDeletingVolunteer] =
    useState<Volunteer | null>(null);
useEffect(() => {
  loadVolunteers();
}, []);

async function loadVolunteers() {
  try {
    setLoading(true);

    const data = await getVolunteers();

    setVolunteers(data);
  } catch (error) {
    console.error(error);
    alert("Failed to load volunteers.");
  } finally {
    setLoading(false);
  }
}
  const filteredVolunteers = useMemo(() => {
    const query = searchTerm.toLowerCase().trim();

    if (!query) return volunteers;

    return volunteers.filter((volunteer) =>
      volunteer.name.toLowerCase().includes(query) ||
      volunteer.phone.toLowerCase().includes(query) ||
      volunteer.email.toLowerCase().includes(query) ||
      volunteer.role.toLowerCase().includes(query) ||
      volunteer.status.toLowerCase().includes(query)
    );
  }, [searchTerm, volunteers]);

  const activeVolunteers = volunteers.filter(
    (v) => v.status === "Active"
  ).length;

  const inactiveVolunteers = volunteers.filter(
    (v) => v.status === "Inactive"
  ).length;

  const handleOpenCreateModal = () => {
    setEditingVolunteer(null);
    setIsVolunteerModalOpen(true);
  };

  const handleOpenEditModal = (
    volunteer: Volunteer
  ) => {
    setEditingVolunteer(volunteer);
    setIsVolunteerModalOpen(true);
  };

  const handleCloseModal = () => {
    setEditingVolunteer(null);
    setIsVolunteerModalOpen(false);
  };

  const handleSaveVolunteer = async (
  data: VolunteerFormData
) => {
  try {
    if (editingVolunteer) {
      await updateVolunteer(
        editingVolunteer.id,
        data
      );
    } else {
      await createVolunteer(data);
    }

    await loadVolunteers();

    handleCloseModal();
  } catch (error) {
    console.error(error);
    alert("Failed to save volunteer.");
  }
};

const handleDeleteClick = (
  volunteer: Volunteer
) => {
  setDeletingVolunteer(volunteer);
};

const handleConfirmDelete = async () => {
  if (!deletingVolunteer) return;

  try {
    await deleteVolunteer(
      deletingVolunteer.id
    );

    await loadVolunteers();

    setDeletingVolunteer(null);
  } catch (error) {
    console.error(error);
    alert("Failed to delete volunteer.");
  }
};

  if (loading) {
  return (
    <div className="flex h-[60vh] items-center justify-center">
      <div className="text-lg font-semibold text-gray-500">
        Loading volunteers...
      </div>
    </div>
  );
}
  return (
    <>
      <PageHeader
        title="Volunteers"
        description="Manage all Kingdom Caregivers volunteers."
        action={
          <PrimaryButton
            onClick={handleOpenCreateModal}
          >
            + Add Volunteer
          </PrimaryButton>
        }
      />

      <div className="mb-8">
        <SearchBar
          placeholder="Search volunteers..."
          value={searchTerm}
          onChange={setSearchTerm}
        />
      </div>

      <div className="mb-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Total Volunteers"
          value={volunteers.length.toString()}
          subtitle="Registered volunteers"
          icon={<HeartHandshake size={30} />}
        />

        <StatCard
          title="Active"
          value={activeVolunteers.toString()}
          subtitle="Currently active"
          icon={<UserCheck size={30} />}
        />

        <StatCard
          title="Inactive"
          value={inactiveVolunteers.toString()}
          subtitle="Not active"
          icon={<UserX size={30} />}
        />

        <StatCard
          title="Roles"
          value={
            new Set(
              volunteers.map((v) => v.role)
            ).size.toString()
          }
          subtitle="Volunteer roles"
          icon={<Briefcase size={30} />}
        />
      </div>

      <VolunteersTable
        volunteers={filteredVolunteers}
        onEdit={handleOpenEditModal}
        onDelete={handleDeleteClick}
      />

      <VolunteerModal
        open={isVolunteerModalOpen}
        volunteer={editingVolunteer}
        onClose={handleCloseModal}
        onSave={handleSaveVolunteer}
      />

      <ConfirmDialog
        open={!!deletingVolunteer}
        title="Delete Volunteer"
        message={`Are you sure you want to delete ${
          deletingVolunteer?.name ?? "this volunteer"
        }? This action cannot be undone.`}
        confirmText="Delete"
        cancelText="Cancel"
        onConfirm={handleConfirmDelete}
        onCancel={() =>
          setDeletingVolunteer(null)
        }
      />
    </>
  );
}