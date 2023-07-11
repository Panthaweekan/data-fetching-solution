"use client";

import DisplayTime from "@components/utils/displayTime";
// import { type Time } from "@components/utils/types";
// import { useQuery } from "@tanstack/react-query";
import useReactQueryData from "@components/utils/useReactQueryData";

// async function getTime() {
//   console.log("This is fetching data from ClientReactQueryTwo.");
//   const res = await fetch("http://localhost:3001");
//   const data = (await res.json()) as Time;
//   return data;
// }

const ClientReactQueryTwo = () => {
  // const { data, isLoading, error } = useQuery(["time"], getTime);
  const { data } = useReactQueryData();
  return <DisplayTime time={data || null} />;
};

export default ClientReactQueryTwo;
