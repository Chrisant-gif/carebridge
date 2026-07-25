"use client";

import { useEffect, useState } from "react";

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
  onSubmit: (data: VisitFormData) => void;
  onCancel: () => void;
}

export default function VisitForm({
  initialData,
  onSubmit,
  onCancel,
}: VisitFormProps) {
  const [formData, setFormData] =
    useState<VisitFormData>({
      familyId: 1,
      caregiver: "",
      visitType: "Hospital",
      date: "",
      location: "",
      status: "Scheduled",
      notes: "",
    });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "familyId"
          ? Number(value)
          : value,
    }));
  };

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <div>
        <label className="mb-2 block text-sm font-medium">
          Family ID
        </label>

        <input
          type="number"
          name="familyId"
          value={formData.familyId}
          onChange={handleChange}
          className="w-full rounded-xl border px-4 py-3 outline-none focus:border-emerald-500"
          required
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Caregiver
        </label>

        <input
          type="text"
          name="caregiver"
          value={formData.caregiver}
          onChange={handleChange}
          className="w-full rounded-xl border px-4 py-3 outline-none focus:border-emerald-500"
          required
        />
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium">
            Visit Type
          </label>

          <select
            name="visitType"
            value={formData.visitType}
            onChange={handleChange}
            className="w-full rounded-xl border px-4 py-3 outline-none focus:border-emerald-500"
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
          <label className="mb-2 block text-sm font-medium">
            Status
          </label>

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full rounded-xl border px-4 py-3 outline-none focus:border-emerald-500"
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
          <label className="mb-2 block text-sm font-medium">
            Date
          </label>

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full rounded-xl border px-4 py-3 outline-none focus:border-emerald-500"
            required
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Location
          </label>

          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full rounded-xl border px-4 py-3 outline-none focus:border-emerald-500"
            required
          />
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Notes
        </label>

        <textarea
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          rows={4}
          className="w-full rounded-xl border px-4 py-3 outline-none focus:border-emerald-500"
        />
      </div>

      <div className="flex justify-end gap-3 pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="rounded-xl border px-5 py-2.5 font-medium hover:bg-gray-100"
        >
          Cancel
        </button>

        <button
          type="submit"
          className="rounded-xl bg-emerald-600 px-5 py-2.5 font-medium text-white hover:bg-emerald-700"
        >
          Save Visit
        </button>
      </div>
    </form>
  );
}