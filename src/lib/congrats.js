import { supabase } from "./supabase";

function generateUUID() {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID();
  }

  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export async function postCongrats(name, message) {
  const id = generateUUID();
  const delete_token = generateUUID();

  const { error } = await supabase.from("congrats").insert({
    id,
    name,
    message,
    delete_token,
  });

  if (error) {
    console.error(error);
    return { error };
  }

  localStorage.setItem(`congrats_token_${id}`, delete_token);

  localStorage.setItem("has_congratulated", "true");

  return { error: null };
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
    localStorage.removeItem("has_congratulated"); // let them post again
  }
  return { error };
}

// Admin: delete any comment directly (bypasses the token, relies on RLS policy)
export async function adminDeleteCongrats(id) {
  const { error } = await supabase.from("congrats").delete().eq("id", id);
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

// Admin: check if currently logged in (useful on page load / refresh)
export async function getAdminSession() {
  const { data } = await supabase.auth.getSession();
  return data.session;
}
