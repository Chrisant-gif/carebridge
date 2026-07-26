"use client";

import Link from "next/link";
import {
  Eye,
  Pencil,
  Trash2,
  Heart,
} from "lucide-react";

import { Donation } from "../../../types/donation";

interface DonationsTableProps {
  donations: Donation[];
  onEdit?: (donation: Donation) => void;
  onDelete?: (donation: Donation) => void;
}

export default function DonationsTable({
  donations,
  onEdit,
  onDelete,
}: DonationsTableProps) {
  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-5 text-left text-sm font-semibold text-gray-600">
              Donor
            </th>

            <th className="px-6 py-5 text-left text-sm font-semibold text-gray-600">
              Amount
            </th>

            <th className="px-6 py-5 text-left text-sm font-semibold text-gray-600">
              Method
            </th>

            <th className="px-6 py-5 text-left text-sm font-semibold text-gray-600">
              Purpose
            </th>

            <th className="px-6 py-5 text-left text-sm font-semibold text-gray-600">
              Status
            </th>

            <th className="px-6 py-5 text-left text-sm font-semibold text-gray-600">
              Date
            </th>

            <th className="px-6 py-5 text-right text-sm font-semibold text-gray-600">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {donations.map((donation) => (
            <tr
              key={donation.id}
              className="border-t transition hover:bg-gray-50"
            >
              <td className="px-6 py-5">
                <div>
                  <p className="font-semibold">
                    {donation.donorName}
                  </p>

                  <p className="text-sm text-gray-500">
                    {donation.reference}
                  </p>
                </div>
              </td>

              <td className="px-6 py-5 font-semibold">
                {donation.currency}{" "}
                {donation.amount.toLocaleString()}
              </td>

              <td className="px-6 py-5">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    donation.paymentMethod === "M-PESA"
                      ? "bg-emerald-100 text-emerald-700"
                      : donation.paymentMethod === "Bank Transfer"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-purple-100 text-purple-700"
                  }`}
                >
                  {donation.paymentMethod}
                </span>
              </td>

              <td className="px-6 py-5">
                {donation.purpose}
              </td>

              <td className="px-6 py-5">
                <span
                  className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${
                    donation.status === "Completed"
                      ? "bg-emerald-100 text-emerald-700"
                      : donation.status === "Pending"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {donation.status === "Completed" && (
                    <Heart
                      size={12}
                      className="fill-current"
                    />
                  )}

                  {donation.status}
                </span>
              </td>

              <td className="px-6 py-5">
                {donation.date}
              </td>

              <td className="px-6 py-5">
                <div className="flex justify-end gap-4">
                  <Link
                    href={`/dashboard/donations/${donation.id}`}
                    className="flex items-center gap-1 text-blue-600 hover:text-blue-800"
                  >
                    <Eye size={16} />
                    <span>View</span>
                  </Link>

                  <button
                    onClick={() => onEdit?.(donation)}
                    className="flex items-center gap-1 text-emerald-600 hover:text-emerald-800"
                  >
                    <Pencil size={16} />
                    <span>Edit</span>
                  </button>

                  <button
                    onClick={() => onDelete?.(donation)}
                    className="flex items-center gap-1 text-red-600 hover:text-red-800"
                  >
                    <Trash2 size={16} />
                    <span>Delete</span>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {donations.length === 0 && (
        <div className="py-12 text-center text-gray-500">
          No donations found.
        </div>
      )}
    </div>
  );
}