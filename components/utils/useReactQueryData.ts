import { useQuery } from "@tanstack/react-query";
import { type Time } from "./types";

async function getTime() {
  console.log("This is fetching data from useReactQueryData.");
  const res = await fetch("http://localhost:3001");
  const data = (await res.json()) as Time;
  return data;
}

function useReactQueryData() {
  const { data, isLoading, error } = useQuery(["time"], getTime, {
    refetchInterval: 1000,
  });

  return { data };
}

export default useReactQueryData;
