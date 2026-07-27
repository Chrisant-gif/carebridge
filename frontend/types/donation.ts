export interface Donation {
  id: number;

  donor_name: string;

  amount: number;

  currency: string;

  payment_method: "M-PESA" | "Bank Transfer" | "Wise";

  purpose: string;

  reference: string;

  status: "Completed" | "Pending" | "Failed";

  donation_date: string;

  created_at?: string;
}