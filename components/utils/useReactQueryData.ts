import { useQuery } from "@tanstack/react-query";
import { type Time } from "./types";
import { API_URL } from "utils";
import getTime from "./getTime";

function useReactQueryData() {
  const { data, isLoading, error } = useQuery(
    ["time"],
    () => getTime("React Query Custom Hook"),
    {
      refetchInterval: 1000,
    }
  );

  return { data };
}

export default useReactQueryData;
