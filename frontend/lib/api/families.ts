import { supabase } from "../supabase/client";
import { Family } from "../../types/family";

export interface FamilyInput {
  child: string;
  caregiver: string;
  condition: string;
  phone: string;
  address: string;
}

export async function getFamilies(): Promise<Family[]> {
  const { data, error } = await supabase
    .from("families")
    .select("*")
    .order("id", { ascending: false });

  if (error) throw error;

  return (data ?? []).map((family) => ({
    id: family.id,
    child: family.child,
    caregiver: family.caregiver,
    condition: family.condition,
    phone: family.phone ?? "",
    address: family.address ?? "",
    lastVisit: family.last_visit ?? "",
    status:
      family.status === "Follow-up"
        ? "Follow-up"
        : "Active",
  }));
}

export async function createFamily(
  family: FamilyInput
): Promise<Family> {
  const { data, error } = await supabase
    .from("families")
    .insert({
      child: family.child,
      caregiver: family.caregiver,
      condition: family.condition,
      phone: family.phone,
      address: family.address,
      last_visit: new Date().toLocaleDateString("en-GB"),
      status: "Active",
    })
    .select()
    .single();

  if (error) throw error;

  return {
    id: data.id,
    child: data.child,
    caregiver: data.caregiver,
    condition: data.condition,
    phone: data.phone ?? "",
    address: data.address ?? "",
    lastVisit: data.last_visit ?? "",
    status: "Active",
  };
}

export async function updateFamily(
  id: number,
  family: FamilyInput
): Promise<Family> {
  const { data, error } = await supabase
    .from("families")
    .update({
      child: family.child,
      caregiver: family.caregiver,
      condition: family.condition,
      phone: family.phone,
      address: family.address,
    })
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;

  return {
    id: data.id,
    child: data.child,
    caregiver: data.caregiver,
    condition: data.condition,
    phone: data.phone ?? "",
    address: data.address ?? "",
    lastVisit: data.last_visit ?? "",
    status:
      data.status === "Follow-up"
        ? "Follow-up"
        : "Active",
  };
}

export async function deleteFamily(id: number) {
  const { error } = await supabase
    .from("families")
    .delete()
    .eq("id", id);

  if (error) throw error;
}

export async function getFamily(
  id: number
): Promise<Family | null> {
  const { data, error } = await supabase
    .from("families")
    .select("*")
    .eq("id", id)
    .single();

  if (error) return null;

  return {
    id: data.id,
    child: data.child,
    caregiver: data.caregiver,
    condition: data.condition,
    phone: data.phone ?? "",
    address: data.address ?? "",
    lastVisit: data.last_visit ?? "",
    status:
      data.status === "Follow-up"
        ? "Follow-up"
        : "Active",
  };
}