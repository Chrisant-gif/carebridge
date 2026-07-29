import { supabase } from "../supabase/client";
import { Volunteer } from "../../types/volunteer";

type VolunteerRow = {
  id: number;
  name: string;
  phone: string;
  email: string;
  role: string;
  status: "Active" | "Inactive";
  joined_date: string;
};

function mapVolunteer(
  row: VolunteerRow
): Volunteer {
  return {
    id: row.id,
    name: row.name,
    phone: row.phone,
    email: row.email,
    role: row.role,
    status: row.status,
    joinedDate: row.joined_date,
  };
}

export async function getVolunteers(): Promise<
  Volunteer[]
> {
  const { data, error } = await supabase
    .from("volunteers")
    .select("*")
    .order("joined_date", {
      ascending: false,
    });

  if (error) throw error;

  return (data as VolunteerRow[]).map(
    mapVolunteer
  );
}

export async function createVolunteer(
  volunteer: Omit<
    Volunteer,
    "id" | "joinedDate"
  >
): Promise<Volunteer> {
  const { data, error } = await supabase
    .from("volunteers")
    .insert({
      name: volunteer.name,
      phone: volunteer.phone,
      email: volunteer.email,
      role: volunteer.role,
      status: volunteer.status,
      joined_date: new Date()
        .toISOString()
        .split("T")[0],
    })
    .select()
    .single();

  if (error) throw error;

  return mapVolunteer(data as VolunteerRow);
}

export async function updateVolunteer(
  id: number,
  volunteer: Omit<
    Volunteer,
    "id" | "joinedDate"
  >
): Promise<Volunteer> {
  const { data, error } = await supabase
    .from("volunteers")
    .update({
      name: volunteer.name,
      phone: volunteer.phone,
      email: volunteer.email,
      role: volunteer.role,
      status: volunteer.status,
    })
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;

  return mapVolunteer(data as VolunteerRow);
}

export async function deleteVolunteer(
  id: number
) {
  const { error } = await supabase
    .from("volunteers")
    .delete()
    .eq("id", id);

  if (error) throw error;
}

export async function getVolunteer(
  id: number
): Promise<Volunteer | null> {
  const { data, error } = await supabase
    .from("volunteers")
    .select("*")
    .eq("id", id)
    .single();

  if (error) return null;

  return {
    id: data.id,
    name: data.name,
    phone: data.phone,
    email: data.email,
    role: data.role,
    status: data.status,
    joinedDate: data.joined_date,
  };
}