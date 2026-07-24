interface FamilyFormProps {
  onCancel: () => void;
}

import PrimaryButton from "../PrimaryButton";

export default function FamilyForm({
  onCancel,
}: FamilyFormProps) {
  return (
    <form className="space-y-5">

      <div>
        <label className="mb-2 block font-medium">
          Child Name
        </label>

        <input
          type="text"
          placeholder="Enter child's name"
          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-emerald-500"
        />
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Caregiver Name
        </label>

        <input
          type="text"
          placeholder="Enter caregiver's name"
          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-emerald-500"
        />
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Condition
        </label>

        <select className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-emerald-500">
          <option>Cerebral Palsy</option>
          <option>Autism</option>
          <option>Multiple Disabilities</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Phone Number
        </label>

        <input
          type="text"
          placeholder="+254..."
          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-emerald-500"
        />
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Address
        </label>

        <input
          type="text"
          placeholder="Enter address"
          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-emerald-500"
        />
      </div>

      <div className="flex justify-end gap-4 pt-4">

        <button
          type="button"
          onClick={onCancel}
          className="rounded-xl border border-gray-300 px-6 py-3 font-medium hover:bg-gray-100"
        >
          Cancel
        </button>

        <PrimaryButton type="submit">
          Save Family
        </PrimaryButton>

      </div>

    </form>
  );
}