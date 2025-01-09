
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function logout() {
    const supabase = createClient()
  
    const { error } = await supabase.auth.signOut();

  
    revalidatePath('/', 'layout')
    return error;

  }



