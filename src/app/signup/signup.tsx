"use server";

import { signup } from "../login/actions";

export async function getSignedup(formdata: {
  email: string;
  password: string;
}) {
  const error = await signup(formdata);
  return error;
}
