import { Pencil, Eye } from "lucide-react";

import { Family } from "../../../types/family";

interface FamiliesTableProps {
  families: Family[];
  onEdit: (family: Family) => void;
}

export default function FamiliesTable({
  families,
  onEdit,
}: FamiliesTableProps) {
  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-5 text-left text-sm font-semibold text-gray-600">
              Child
            </th>

            <th className="px-6 py-5 text-left text-sm font-semibold text-gray-600">
              Caregiver
            </th>

            <th className="px-6 py-5 text-left text-sm font-semibold text-gray-600">
              Condition
            </th>

            <th className="px-6 py-5 text-left text-sm font-semibold text-gray-600">
              Last Visit
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
          {families.map((family) => (
            <tr
              key={family.id}
              className="border-t transition hover:bg-gray-50"
            >
              <td className="px-6 py-5 font-medium">
                {family.child}
              </td>

              <td className="px-6 py-5">
                {family.caregiver}
              </td>

              <td className="px-6 py-5">
                {family.condition}
              </td>

              <td className="px-6 py-5">
                {family.lastVisit}
              </td>

              <td className="px-6 py-5">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    family.status === "Active"
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {family.status}
                </span>
              </td>

              <td className="px-6 py-5">
                <div className="flex justify-end gap-3">
                  <button
                    type="button"
                    className="flex items-center gap-1 font-medium text-blue-600 transition hover:text-blue-800"
                  >
                    <Eye size={16} />
                    View
                  </button>

                  <button
                    type="button"
                    onClick={() => onEdit(family)}
                    className="flex items-center gap-1 font-medium text-emerald-600 transition hover:text-emerald-800"
                  >
                    <Pencil size={16} />
                    Edit
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}