import { type Time } from "./types";

import { API_URL } from "utils";

export default async function getTime(msg: string) {
  console.log(`Get time from ${msg}`);
  const res = await fetch(API_URL);
  const data = (await res.json()) as Time;
  return data;
}
