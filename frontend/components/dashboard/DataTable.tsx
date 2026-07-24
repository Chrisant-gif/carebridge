interface Family {
  id: number;
  child: string;
  caregiver: string;
  condition: string;
  lastVisit: string;
  status: "Active" | "Follow-up";
}

const families: Family[] = [
  {
    id: 1,
    child: "Brian Mwangi",
    caregiver: "Stella K.",
    condition: "Cerebral Palsy",
    lastVisit: "21 Jul 2026",
    status: "Active",
  },
  {
    id: 2,
    child: "Mercy Achieng",
    caregiver: "Anne W.",
    condition: "Autism",
    lastVisit: "18 Jul 2026",
    status: "Follow-up",
  },
  {
    id: 3,
    child: "Kevin Otieno",
    caregiver: "Jane M.",
    condition: "Cerebral Palsy",
    lastVisit: "15 Jul 2026",
    status: "Active",
  },
  {
    id: 4,
    child: "Faith Njeri",
    caregiver: "Mary N.",
    condition: "Autism",
    lastVisit: "12 Jul 2026",
    status: "Active",
  },
];

export default function DataTable() {
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
              className="border-t hover:bg-gray-50"
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