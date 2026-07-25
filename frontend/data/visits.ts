import { Visit } from "../types/visit";

export const initialVisits: Visit[] = [
  {
    id: 1,
    familyId: 1,
    visitType: "Hospital",
    date: "20 Jul 2026",
    caregiver: "Stella K",
    location: "Kenyatta National Hospital",
    notes: "Routine physiotherapy session completed successfully.",
    status: "Completed",
  },
  {
    id: 2,
    familyId: 1,
    visitType: "Home",
    date: "24 Jul 2026",
    caregiver: "Stella K",
    location: "Kasarani",
    notes: "Home assessment and caregiver support.",
    status: "Scheduled",
  },
  {
    id: 3,
    familyId: 2,
    visitType: "Hospital",
    date: "18 Jul 2026",
    caregiver: "Mary W",
    location: "Aga Khan Hospital",
    notes: "Behavioral therapy follow-up appointment.",
    status: "Completed",
  },
  {
    id: 4,
    familyId: 3,
    visitType: "Home",
    date: "22 Jul 2026",
    caregiver: "Jane A",
    location: "Kahawa West",
    notes: "Wheelchair assessment and family counseling.",
    status: "Completed",
  },
];