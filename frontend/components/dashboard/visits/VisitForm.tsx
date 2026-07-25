"use client";

import { useEffect, useState } from "react";

import { Family } from "../../../types/family";
import PrimaryButton from "../PrimaryButton";

export interface VisitFormData {
  familyId: number;
  caregiver: string;
  visitType: "Hospital" | "Home";
  date: string;
  location: string;
  status: "Completed" | "Scheduled";
  notes: string;
}

interface VisitFormProps {
  initialData?: VisitFormData;
  families: Family[];
  onSubmit: (data: VisitFormData) => void;
  onCancel: () => void;
}

const initialForm: VisitFormData = {
  familyId: 0,
  caregiver: "",
  visitType: "Hospital",
  date: "",
  location: "",
  status: "Scheduled",
  notes: "",
};

export default function VisitForm({
  initialData,
  families,
  onSubmit,
  onCancel,
}: VisitFormProps) {
  const [form, setForm] =
    useState<VisitFormData>(initialForm);

  useEffect(() => {
    if (initialData) {
      setForm(initialData);
    } else if (families.length > 0) {
      setForm({
        ...initialForm,
        familyId: families[0].id,
      });
    } else {
      setForm(initialForm);
    }
  }, [initialData, families]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLSelectElement |
      HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]:
        name === "familyId"
          ? Number(value)
          : value,
    }));
  };

  const resetForm = () => {
    if (families.length > 0) {
      setForm({
        ...initialForm,
        familyId: families[0].id,
      });
    } else {
      setForm(initialForm);
    }
  };

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (
      !form.caregiver.trim() ||
      !form.date ||
      !form.location.trim()
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    onSubmit(form);

    if (!initialData) {
      resetForm();
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <div>
        <label className="mb-2 block font-medium">
          Family
        </label>

        <select
          name="familyId"
          value={form.familyId}
          onChange={handleChange}
          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-emerald-500"
        >
          {families.map((family) => (
            <option
              key={family.id}
              value={family.id}
            >
              {family.child}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Caregiver
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

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block font-medium">
            Visit Type
          </label>

          <select
            name="visitType"
            value={form.visitType}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-emerald-500"
          >
            <option value="Hospital">
              Hospital
            </option>

            <option value="Home">
              Home
            </option>
          </select>
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Status
          </label>

          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-emerald-500"
          >
            <option value="Scheduled">
              Scheduled
            </option>

            <option value="Completed">
              Completed
            </option>
          </select>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block font-medium">
            Visit Date
          </label>

          <input
            name="date"
            type="date"
            value={form.date}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-emerald-500"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Location
          </label>

          <input
            name="location"
            type="text"
            value={form.location}
            onChange={handleChange}
            placeholder="Enter visit location"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-emerald-500"
          />
        </div>
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Notes
        </label>

        <textarea
          name="notes"
          rows={4}
          value={form.notes}
          onChange={handleChange}
          placeholder="Additional visit notes..."
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
          {initialData
            ? "Update Visit"
            : "Save Visit"}
        </PrimaryButton>
      </div>
    </form>
  );
}