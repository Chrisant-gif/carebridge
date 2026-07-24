import { Family } from "../../../types/family";

interface FamiliesTableProps {
  families: Family[];
}

export default function FamiliesTable({
  families,
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
              Action
            </th>

          </tr>

        </thead>

        <tbody>

          {families.map((family) => (

            <tr
              key={family.id}
              className="border-t hover:bg-gray-50 transition"
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

              <td className="px-6 py-5 text-right">

                <button className="font-medium text-emerald-600 hover:text-emerald-800">
                  View
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}