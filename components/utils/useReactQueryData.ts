import { useQuery } from "@tanstack/react-query";
import { type Time } from "./types";
import { API_URL } from "utils";

async function getTime() {
  console.log("This is fetching data from useReactQueryData.");
  const res = await fetch(API_URL);
  const data = (await res.json()) as Time;
  return data;
}

function useReactQueryData() {
  const { data, isLoading, error } = useQuery(["time"], getTime);
  return { data };
}

export default useReactQueryData;
