import { createClient } from "@/utils/supabase/client";
const getUser = async() => {
    const supabase = createClient()
    
    const {
      data,error
    } = await supabase.auth.getUser()
    return {data,error};
}

export {getUser}