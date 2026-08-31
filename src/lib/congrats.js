import { supabase } from "./supabase";

// Guests: post a new congrats message
export async function postCongrats(name, message) {
  const { data, error } = await supabase
    .from("congrats")
    .insert({ name, message })
    .select()
    .single();

  if (!error) {
    localStorage.setItem(`congrats_token_${data.id}`, data.delete_token);
  }
  return { data, error };
}

// Everyone: read the public list (no tokens exposed)
export async function fetchCongrats() {
  const { data, error } = await supabase
    .from("congrats_public")
    .select("*")
    .order("created_at", { ascending: false });
  return { data, error };
}

// Guests: delete their own comment using their saved token
export async function deleteOwnCongrats(id) {
  const token = localStorage.getItem(`congrats_token_${id}`);
  if (!token) return { error: "No token found for this comment" };

  const { error } = await supabase.rpc("delete_congrats", {
    p_id: id,
    p_token: token,
  });

  if (!error) {
    localStorage.removeItem(`congrats_token_${id}`);
  }
  return { error };
}

// Admin: log in
export async function adminLogin(email, password) {
  return await supabase.auth.signInWithPassword({ email, password });
}

// Admin: log out
export async function adminLogout() {
  return await supabase.auth.signOut();
}

// Admin: delete any comment directly (bypasses the token, relies on RLS policy)
export async function adminDeleteCongrats(id) {
  const { error } = await supabase.from("congrats").delete().eq("id", id);
  return { error };
}

// Admin: check if currently logged in (useful on page load / refresh)
export async function getAdminSession() {
  const { data } = await supabase.auth.getSession();
  return data.session;
}
