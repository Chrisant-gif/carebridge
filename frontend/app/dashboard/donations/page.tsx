"use client";

import { useEffect, useMemo, useState } from "react";
import {
  HandHeart,
  DollarSign,
  Globe,
  CheckCircle,
} from "lucide-react";

import { Donation } from "../../../types/donation";

import {
  getDonations,
  createDonation,
  updateDonation,
  deleteDonation,
} from "../../../lib/api/donations";

import PageHeader from "../../../components/dashboard/PageHeader";
import PrimaryButton from "../../../components/dashboard/PrimaryButton";
import SearchBar from "../../../components/dashboard/SearchBar";
import StatCard from "../../../components/dashboard/StatCard";

import DonationHero from "../../../components/dashboard/donations/DonationHero";
import DonationImpact from "../../../components/dashboard/donations/DonationImpact";
import ImpactStories from "../../../components/dashboard/donations/ImpactStories";
import DonationMethods from "../../../components/dashboard/donations/DonationMethods";
import DonationsTable from "../../../components/dashboard/donations/DonationsTable";
import DonationFormModal from "../../../components/dashboard/donations/DonationFormModal";
import DeleteDonationModal from "../../../components/dashboard/donations/DeleteDonationModal";

export default function DonationsPage() {
  const [donations, setDonations] = useState<Donation[]>([]);
  const [loading, setLoading] = useState(true);

  const [searchTerm, setSearchTerm] =
    useState("");

  const [isModalOpen, setIsModalOpen] =
    useState(false);

  const [selectedDonation, setSelectedDonation] =
    useState<Donation | null>(null);

  const [isDeleteOpen, setIsDeleteOpen] =
    useState(false);

  const [donationToDelete, setDonationToDelete] =
    useState<Donation | null>(null);

  useEffect(() => {
    loadDonations();
  }, []);

  async function loadDonations() {
    try {
      setLoading(true);

      const data = await getDonations();

      setDonations(data);
    } catch (error) {
      console.error(error);
      alert("Failed to load donations.");
    } finally {
      setLoading(false);
    }
  }

  const filteredDonations = useMemo(() => {
    const query = searchTerm
      .toLowerCase()
      .trim();

    if (!query) return donations;

    return donations.filter((donation) =>
      [
        donation.donor_name,
        donation.payment_method,
        donation.purpose,
        donation.reference,
        donation.status,
        donation.currency,
        donation.donation_date,
      ]
        .join(" ")
        .toLowerCase()
        .includes(query)
    );
  }, [donations, searchTerm]);

  const totalAmount = donations.reduce(
    (sum, donation) => sum + Number(donation.amount),
    0
  );

  const completed = donations.filter(
    (donation) =>
      donation.status === "Completed"
  ).length;

  const international = donations.filter(
    (donation) =>
      donation.currency !== "KES"
  ).length;

  const handleAddDonation = () => {
    setSelectedDonation(null);
    setIsModalOpen(true);
  };

  const handleEditDonation = (
    donation: Donation
  ) => {
    setSelectedDonation(donation);
    setIsModalOpen(true);
  };

  const handleSaveDonation = async (
    donation: Donation
  ) => {
    try {
      if (selectedDonation) {
        await updateDonation(donation.id, {
          donor_name: donation.donor_name,
          amount: donation.amount,
          currency: donation.currency,
          payment_method: donation.payment_method,
          purpose: donation.purpose,
          reference: donation.reference,
          status: donation.status,
          donation_date: donation.donation_date,
        });
      } else {
        await createDonation({
          donor_name: donation.donor_name,
          amount: donation.amount,
          currency: donation.currency,
          payment_method: donation.payment_method,
          purpose: donation.purpose,
          reference: donation.reference,
          status: donation.status,
          donation_date: donation.donation_date,
        });
      }

      await loadDonations();

      setSelectedDonation(null);
      setIsModalOpen(false);
    } catch (error) {
      console.error(error);
      alert("Failed to save donation.");
    }
  };

  const handleDeleteDonation = (
    donation: Donation
  ) => {
    setDonationToDelete(donation);
    setIsDeleteOpen(true);
  };

  const confirmDeleteDonation =
    async () => {
      if (!donationToDelete) return;

      try {
        await deleteDonation(
          donationToDelete.id
        );

        await loadDonations();

        setDonationToDelete(null);
        setIsDeleteOpen(false);
      } catch (error) {
        console.error(error);
        alert("Failed to delete donation.");
      }
    };

  if (loading) {
    return (
      <div className="flex h-[60vh] items-center justify-center">
        <div className="text-lg font-semibold text-gray-500">
          Loading donations...
        </div>
      </div>
    );
  }

  return (
    <>
      <PageHeader
        title="Donations"
        description="Support Kingdom Caregivers and track donor contributions."
        action={
          <PrimaryButton
            onClick={handleAddDonation}
          >
            Add Donation
          </PrimaryButton>
        }
      />

      <DonationHero />

      <DonationImpact />

      <ImpactStories />

      <DonationMethods />

      <div className="my-10">
        <SearchBar
          placeholder="Search donations..."
          value={searchTerm}
          onChange={setSearchTerm}
        />
      </div>

      <div className="mb-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Total Donations"
          value={donations.length.toString()}
          subtitle="All donations received"
          icon={<HandHeart size={30} />}
        />

        <StatCard
          title="Amount Raised"
          value={totalAmount.toLocaleString()}
          subtitle="Across all donations"
          icon={<DollarSign size={30} />}
        />

                <StatCard
          title="Completed"
          value={completed.toString()}
          subtitle="Successfully received"
          icon={<CheckCircle size={30} />}
        />

        <StatCard
          title="International"
          value={international.toString()}
          subtitle="Outside Kenya"
          icon={<Globe size={30} />}
        />
      </div>

      <DonationsTable
        donations={filteredDonations}
        onEdit={handleEditDonation}
        onDelete={handleDeleteDonation}
      />

      <DonationFormModal
        isOpen={isModalOpen}
        donation={selectedDonation}
        onClose={() => {
          setSelectedDonation(null);
          setIsModalOpen(false);
        }}
        onSave={handleSaveDonation}
      />

      <DeleteDonationModal
        isOpen={isDeleteOpen}
        donorName={
          donationToDelete?.donor_name ?? ""
        }
        onClose={() => {
          setDonationToDelete(null);
          setIsDeleteOpen(false);
        }}
        onConfirm={confirmDeleteDonation}
      />
    </>
  );
}