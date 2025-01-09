"use server"
import { logout } from "./actions";

   export async function getLoggedOut() {
      const error = await logout();
      return error;
    }
   