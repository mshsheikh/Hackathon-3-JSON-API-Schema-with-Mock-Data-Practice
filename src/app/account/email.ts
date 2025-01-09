"use server"
import PrivatePage from "../private/page";

   export async function getEmailServer() {
      const email = await PrivatePage();
      return email;
    }
   
