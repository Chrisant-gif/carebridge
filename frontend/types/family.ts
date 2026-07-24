export interface Family {
  id: number;
  child: string;
  caregiver: string;
  condition: string;
  phone: string;
  address: string;
  lastVisit: string;
  status: "Active" | "Follow-up";
}