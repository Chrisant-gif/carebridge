export interface Volunteer {
  id: number;

  name: string;

  phone: string;

  email: string;

  role: string;

  joinedDate: string;

  status: "Active" | "Inactive";
}