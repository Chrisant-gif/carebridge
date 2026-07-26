"use client";

import { useEffect, useState } from "react";

import { Volunteer } from "../../../types/volunteer";
import PrimaryButton from "../PrimaryButton";

export interface VolunteerFormData {
  name: string;
  phone: string;
  email: string;
  role: string;
  status: "Active" | "Inactive";
}

interface VolunteerFormProps {
  volunteer?: Volunteer | null;
  onCancel: () => void;
  onSave: (data: VolunteerFormData) => void;
}

const initialForm: VolunteerFormData = {
  name: "",
  phone: "",
  email: "",
  role: "Caregiver",
  status: "Active",
};

export default function VolunteerForm({
  volunteer,
  onCancel,
  onSave,
}: VolunteerFormProps) {
  const [form, setForm] =
    useState<VolunteerFormData>(initialForm);

  useEffect(() => {
    if (volunteer) {
      setForm({
        name: volunteer.name,
        phone: volunteer.phone,
        email: volunteer.email,
        role: volunteer.role,
        status: volunteer.status,
      });
    } else {
      setForm(initialForm);
    }
  }, [volunteer]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (
      !form.name.trim() ||
      !form.phone.trim() ||
      !form.email.trim()
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    onSave(form);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <div>
        <label className="mb-2 block font-medium">
          Full Name
        </label>

        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Volunteer name"
          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-emerald-500"
        />
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Phone Number
        </label>

        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="+254..."
          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-emerald-500"
        />
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Email Address
        </label>

        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="example@email.com"
          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-emerald-500"
        />
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Role
        </label>

        <select
          name="role"
          value={form.role}
          onChange={handleChange}
          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-emerald-500"
        >
          <option>Caregiver</option>
          <option>Physiotherapist</option>
          <option>Community Health Worker</option>
          <option>Occupational Therapist</option>
          <option>Counsellor</option>
          <option>Driver</option>
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
          <option>Active</option>
          <option>Inactive</option>
        </select>
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
          {volunteer
            ? "Update Volunteer"
            : "Save Volunteer"}
        </PrimaryButton>
      </div>
    </form>
  );
}