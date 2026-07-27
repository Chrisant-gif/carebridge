import { supabase } from "../supabase/client";

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