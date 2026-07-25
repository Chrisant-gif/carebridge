export interface Visit {
  id: number;
  familyId: number;

  visitType: "Hospital" | "Home";

  date: string;

  caregiver: string;

  location: string;

  notes: string;

  status: "Completed" | "Scheduled";
}