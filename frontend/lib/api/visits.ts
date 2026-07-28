import { supabase } from "../supabase/client";
import { Visit } from "../../types/visit";

type VisitRow = {
  id: number;
  family_id: number;
  visit_type: "Hospital" | "Home";
  date: string;
  caregiver: string;
  location: string;
  notes: string;
  status: "Completed" | "Scheduled";
};

function mapVisit(row: VisitRow): Visit {
  return {
    id: row.id,
    familyId: row.family_id,
    visitType: row.visit_type,
    date: row.date,
    caregiver: row.caregiver,
    location: row.location,
    notes: row.notes,
    status: row.status,
  };
}

export async function getVisits(): Promise<Visit[]> {
  const { data, error } = await supabase
    .from("visits")
    .select("*")
    .order("date", { ascending: false });

  if (error) throw error;

  return (data as VisitRow[]).map(mapVisit);
}

export async function createVisit(
  visit: Omit<Visit, "id">
): Promise<Visit> {
  const { data, error } = await supabase
    .from("visits")
    .insert({
      family_id: visit.familyId,
      visit_type: visit.visitType,
      date: visit.date,
      caregiver: visit.caregiver,
      location: visit.location,
      notes: visit.notes,
      status: visit.status,
    })
    .select()
    .single();

  if (error) throw error;

  return mapVisit(data as VisitRow);
}

export async function updateVisit(
  id: number,
  visit: Omit<Visit, "id">
): Promise<Visit> {
  const { data, error } = await supabase
    .from("visits")
    .update({
      family_id: visit.familyId,
      visit_type: visit.visitType,
      date: visit.date,
      caregiver: visit.caregiver,
      location: visit.location,
      notes: visit.notes,
      status: visit.status,
    })
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;

  return mapVisit(data as VisitRow);
}

export async function deleteVisit(id: number) {
  const { error } = await supabase
    .from("visits")
    .delete()
    .eq("id", id);

  if (error) throw error;
}