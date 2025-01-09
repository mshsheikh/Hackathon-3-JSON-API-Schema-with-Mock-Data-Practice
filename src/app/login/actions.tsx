// "use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

export async function login(formData: any) {
  const supabase = createClient();

  const data = {
    email: formData.email,
    password: formData.password,
  };

  const { error } = await supabase.auth.signInWithPassword(data);
  revalidatePath("/", "layout");
  return error;
}

export async function signup(formData: any) {
  const supabase = createClient();
  const data = {
    email: formData.email,
    password: formData.password,
  };

  const { error } = await supabase.auth.signUp(data);
  revalidatePath("/", "layout");
  return error;
}
