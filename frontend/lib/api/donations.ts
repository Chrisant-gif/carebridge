import { supabase } from "../supabase/client";
import { Donation } from "../../types/donation";

export async function getDonations() {
  const { data, error } = await supabase
    .from("donations")
    .select("*")
    .order("created_at", {
      ascending: false,
    });

  if (error) {
    throw error;
  }

  return data;
}

export async function createDonation(donation: {
  donor_name: string;
  amount: number;
  currency: string;
  payment_method: string;
  purpose: string;
  reference: string;
  status: string;
  donation_date: string;
}) {
  const { error } = await supabase
    .from("donations")
    .insert(donation);

  if (error) {
    throw error;
  }
}

export async function updateDonation(
  id: number,
  donation: {
    donor_name: string;
    amount: number;
    currency: string;
    payment_method: string;
    purpose: string;
    reference: string;
    status: string;
    donation_date: string;
  }
) {
  const { error } = await supabase
    .from("donations")
    .update(donation)
    .eq("id", id);

  if (error) {
    throw error;
  }
}

export async function deleteDonation(id: number) {
  const { error } = await supabase
    .from("donations")
    .delete()
    .eq("id", id);

  if (error) {
    throw error;
  }
}

export async function getDonation(
  id: number
): Promise<Donation | null> {
  const { data, error } = await supabase
    .from("donations")
    .select("*")
    .eq("id", id)
    .single();

  if (error) return null;

  return {
    id: data.id,
    donorName: data.donor_name,
    amount: data.amount,
    currency: data.currency,
    paymentMethod: data.payment_method,
    purpose: data.purpose,
    reference: data.reference,
    date: data.donation_date,
    status: data.status,
  };
}