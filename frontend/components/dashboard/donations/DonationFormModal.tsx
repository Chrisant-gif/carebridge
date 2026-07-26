"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Donation } from "../../../types/donation";

interface DonationFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (donation: Donation) => void;
  donation?: Donation | null;
}

export default function DonationFormModal({
  isOpen,
  onClose,
  onSave,
  donation,
}: DonationFormModalProps) {
  const [formData, setFormData] = useState<Donation>({
    id: Date.now(),
    donorName: "",
    amount: 0,
    currency: "KES",
    paymentMethod: "M-PESA",
    purpose: "",
    reference: "",
    status: "Completed",
    date: new Date().toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }),
  });

  useEffect(() => {
    if (donation) {
      setFormData(donation);
    } else {
      setFormData({
        id: Date.now(),
        donorName: "",
        amount: 0,
        currency: "KES",
        paymentMethod: "M-PESA",
        purpose: "",
        reference: "",
        status: "Completed",
        date: new Date().toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }),
      });
    }
  }, [donation, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onSave(formData);

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-2xl rounded-3xl bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b px-8 py-6">
          <h2 className="text-2xl font-bold">
            {donation ? "Edit Donation" : "Add Donation"}
          </h2>

          <button
            onClick={onClose}
            className="rounded-lg p-2 transition hover:bg-gray-100"
          >
            <X size={22} />
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 p-8"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium">
                Donor Name
              </label>

              <input
                required
                value={formData.donorName}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    donorName: e.target.value,
                  })
                }
                className="w-full rounded-xl border p-3 focus:border-emerald-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Amount
              </label>

              <input
                type="number"
                required
                value={formData.amount}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    amount: Number(e.target.value),
                  })
                }
                className="w-full rounded-xl border p-3 focus:border-emerald-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Currency
              </label>

              <select
                value={formData.currency}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    currency: e.target.value,
                  })
                }
                className="w-full rounded-xl border p-3"
              >
                <option>KES</option>
                <option>USD</option>
                <option>EUR</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Payment Method
              </label>

              <select
                value={formData.paymentMethod}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    paymentMethod: e.target
                      .value as Donation["paymentMethod"],
                  })
                }
                className="w-full rounded-xl border p-3"
              >
                <option>M-PESA</option>
                <option>Wise</option>
                <option>Bank Transfer</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium">
                Purpose
              </label>

              <input
                required
                value={formData.purpose}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    purpose: e.target.value,
                  })
                }
                className="w-full rounded-xl border p-3"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Reference
              </label>

              <input
                required
                value={formData.reference}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    reference: e.target.value,
                  })
                }
                className="w-full rounded-xl border p-3"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Status
              </label>

              <select
                value={formData.status}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    status: e.target
                      .value as Donation["status"],
                  })
                }
                className="w-full rounded-xl border p-3"
              >
                <option>Completed</option>
                <option>Pending</option>
                <option>Failed</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end gap-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border px-6 py-3 font-medium transition hover:bg-gray-100"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700"
            >
              {donation ? "Save Changes" : "Add Donation"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}