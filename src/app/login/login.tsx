"use server";

import { login } from "./actions";

export async function getLoggedIn(formdata: {
  email: string;
  password: string;
}) {
  const error = await login(formdata);
  return error;
}
