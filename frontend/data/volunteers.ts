import { Volunteer } from "../types/volunteer";

export const initialVolunteers: Volunteer[] = [
  {
    id: 1,
    name: "Grace Wanjiku",
    phone: "+254712345678",
    email: "grace@example.com",
    role: "Physiotherapist",
    joinedDate: "12 Jan 2025",
    status: "Active",
  },
  {
    id: 2,
    name: "David Otieno",
    phone: "+254722111222",
    email: "david@example.com",
    role: "Caregiver",
    joinedDate: "05 Mar 2025",
    status: "Active",
  },
  {
    id: 3,
    name: "Mary Njeri",
    phone: "+254733444555",
    email: "mary@example.com",
    role: "Community Health Worker",
    joinedDate: "20 Apr 2025",
    status: "Inactive",
  },
];