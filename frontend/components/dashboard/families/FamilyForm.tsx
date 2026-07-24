"use client";

import { useEffect, useState } from "react";

import { Family } from "../../../types/family";
import PrimaryButton from "../PrimaryButton";

export interface FamilyFormData {
  child: string;
  caregiver: string;
  condition: string;
  phone: string;
  address: string;
}

interface FamilyFormProps {
  family?: Family | null;
  onCancel: () => void;
  onSave: (data: FamilyFormData) => void;
}

const initialForm: FamilyFormData = {
  child: "",
  caregiver: "",
  condition: "Cerebral Palsy",
  phone: "",
  address: "",
};

export default function FamilyForm({
  family,
  onCancel,
  onSave,
}: FamilyFormProps) {
  const [form, setForm] = useState<FamilyFormData>(initialForm);

  useEffect(() => {
    if (family) {
      setForm({
        child: family.child,
        caregiver: family.caregiver,
        condition: family.condition,
        phone: family.phone,
        address: family.address,
      });
    } else {
      setForm(initialForm);
    }
  }, [family]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setForm(initialForm);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !form.child.trim() ||
      !form.caregiver.trim() ||
      !form.phone.trim() ||
      !form.address.trim()
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    onSave(form);

    if (!family) {
      resetForm();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="mb-2 block font-medium">
          Child Name
        </label>

        <input
          name="child"
          type="text"
          value={form.child}
          onChange={handleChange}
          placeholder="Enter child's name"
          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-emerald-500"
        />
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Caregiver Name
        </label>

        <input
          name="caregiver"
          type="text"
          value={form.caregiver}
          onChange={handleChange}
          placeholder="Enter caregiver's name"
          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-emerald-500"
        />
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Condition
        </label>

        <select
          name="condition"
          value={form.condition}
          onChange={handleChange}
          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-emerald-500"
        >
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
          name="phone"
          type="text"
          value={form.phone}
          onChange={handleChange}
          placeholder="+254..."
          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-emerald-500"
        />
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Address
        </label>

        <input
          name="address"
          type="text"
          value={form.address}
          onChange={handleChange}
          placeholder="Enter address"
          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-emerald-500"
        />
      </div>

      <div className="flex justify-end gap-4 pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="rounded-xl border border-gray-300 px-6 py-3 font-medium transition hover:bg-gray-100"
        >
          Cancel
        </button>

        <PrimaryButton type="submit">
          {family ? "Update Family" : "Save Family"}
        </PrimaryButton>
      </div>
    </form>
  );
}