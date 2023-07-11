"use client";

import DisplayTime from "@components/utils/displayTime";
import { type Time } from "@components/utils/types";
import { useQuery } from "@tanstack/react-query";

async function getTime() {
  console.log("This is fetching data from ClientReactQuery.");
  const res = await fetch("http://localhost:3001");
  const data = (await res.json()) as Time;
  return data;
}

const ClientReactQuery = () => {
  const { data, isLoading, error } = useQuery(["time"], getTime);
  return <DisplayTime time={data || null} />;
};

export default ClientReactQuery;
