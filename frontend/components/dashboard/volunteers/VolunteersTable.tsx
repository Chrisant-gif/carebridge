"use client";

import Link from "next/link";
import { Eye, Pencil, Trash2 } from "lucide-react";

import { Volunteer } from "../../../types/volunteer";

interface VolunteersTableProps {
  volunteers: Volunteer[];
  onEdit?: (volunteer: Volunteer) => void;
  onDelete?: (volunteer: Volunteer) => void;
}

export default function VolunteersTable({
  volunteers,
  onEdit,
  onDelete,
}: VolunteersTableProps) {
  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-5 text-left text-sm font-semibold text-gray-600">
              Name
            </th>

            <th className="px-6 py-5 text-left text-sm font-semibold text-gray-600">
              Role
            </th>

            <th className="px-6 py-5 text-left text-sm font-semibold text-gray-600">
              Phone
            </th>

            <th className="px-6 py-5 text-left text-sm font-semibold text-gray-600">
              Joined
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
          {volunteers.map((volunteer) => (
            <tr
              key={volunteer.id}
              className="border-t transition hover:bg-gray-50"
            >
              <td className="px-6 py-5 font-medium">
                {volunteer.name}
              </td>

              <td className="px-6 py-5">
                {volunteer.role}
              </td>

              <td className="px-6 py-5">
                {volunteer.phone}
              </td>

              <td className="px-6 py-5">
                {volunteer.joinedDate}
              </td>

              <td className="px-6 py-5">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    volunteer.status === "Active"
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {volunteer.status}
                </span>
              </td>

              <td className="px-6 py-5">
                <div className="flex justify-end gap-4">
                  <Link
                    href={`/dashboard/volunteers/${volunteer.id}`}
                    className="flex items-center gap-1 text-blue-600 transition hover:text-blue-800"
                  >
                    <Eye size={16} />
                    <span>View</span>
                  </Link>

                  <button
                    type="button"
                    onClick={() => onEdit?.(volunteer)}
                    className="flex items-center gap-1 text-emerald-600 transition hover:text-emerald-800"
                  >
                    <Pencil size={16} />
                    <span>Edit</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => onDelete?.(volunteer)}
                    className="flex items-center gap-1 text-red-600 transition hover:text-red-800"
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

      {volunteers.length === 0 && (
        <div className="py-12 text-center text-gray-500">
          No volunteers found.
        </div>
      )}
    </div>
  );
}