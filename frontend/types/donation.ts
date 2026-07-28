export interface Donation {
  id: number;

  donorName: string;

  amount: number;

  currency: string;

  paymentMethod: "M-PESA" | "Bank Transfer" | "Wise";

  purpose: string;

  reference: string;

  status: "Completed" | "Pending" | "Failed";

  date: string;
}