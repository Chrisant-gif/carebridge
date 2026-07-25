"use client";

import Link from "next/link";
import { Eye, Pencil, Trash2 } from "lucide-react";

import { Visit } from "../../../types/visit";
import { initialFamilies } from "../../../data/families";

interface VisitsTableProps {
  visits: Visit[];
  onEdit: (visit: Visit) => void;
  onDelete: (visit: Visit) => void;
}

export default function VisitsTable({
  visits,
  onEdit,
  onDelete,
}: VisitsTableProps) {
  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-5 text-left text-sm font-semibold text-gray-600">
              Family
            </th>

            <th className="px-6 py-5 text-left text-sm font-semibold text-gray-600">
              Visit Type
            </th>

            <th className="px-6 py-5 text-left text-sm font-semibold text-gray-600">
              Date
            </th>

            <th className="px-6 py-5 text-left text-sm font-semibold text-gray-600">
              Location
            </th>

            <th className="px-6 py-5 text-left text-sm font-semibold text-gray-600">
              Status
            </th>

            <th className="px-6 py-5 text-right text-sm font-semibold text-gray-600">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {visits.map((visit) => {
            const family = initialFamilies.find(
              (family) => family.id === visit.familyId
            );

            return (
              <tr
                key={visit.id}
                className="border-t transition hover:bg-gray-50"
              >
                <td className="px-6 py-5 font-medium">
                  {family?.child ?? "Unknown Family"}
                </td>

                <td className="px-6 py-5">
                  {visit.visitType}
                </td>

                <td className="px-6 py-5">
                  {visit.date}
                </td>

                <td className="px-6 py-5">
                  {visit.location}
                </td>

                <td className="px-6 py-5">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      visit.status === "Completed"
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {visit.status}
                  </span>
                </td>

                <td className="px-6 py-5">
                  <div className="flex justify-end gap-4">
                    <Link
                      href={`/dashboard/visits/${visit.id}`}
                      className="flex items-center gap-1 text-blue-600 transition hover:text-blue-800"
                    >
                      <Eye size={16} />
                      <span>View</span>
                    </Link>

                    <button
                      type="button"
                      onClick={() => onEdit(visit)}
                      className="flex items-center gap-1 text-emerald-600 transition hover:text-emerald-800"
                    >
                      <Pencil size={16} />
                      <span>Edit</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => onDelete(visit)}
                      className="flex items-center gap-1 text-red-600 transition hover:text-red-800"
                    >
                      <Trash2 size={16} />
                      <span>Delete</span>
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}