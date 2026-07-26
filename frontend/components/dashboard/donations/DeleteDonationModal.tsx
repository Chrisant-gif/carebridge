"use client";

import { AlertTriangle } from "lucide-react";

interface DeleteDonationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  donorName: string;
}

export default function DeleteDonationModal({
  isOpen,
  onClose,
  onConfirm,
  donorName,
}: DeleteDonationModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
          <AlertTriangle
            size={40}
            className="text-red-600"
          />
        </div>

        <h2 className="text-center text-2xl font-bold text-gray-900">
          Delete Donation
        </h2>

        <p className="mt-4 text-center leading-7 text-gray-600">
          Are you sure you want to permanently delete the
          donation from
          <span className="font-semibold">
            {" "}
            {donorName}
          </span>
          ?
        </p>

        <p className="mt-2 text-center text-sm text-red-500">
          This action cannot be undone.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={onClose}
            className="rounded-xl border border-gray-300 px-6 py-3 font-medium transition hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="rounded-xl bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700"
          >
            Delete Donation
          </button>
        </div>
      </div>
    </div>
  );
}