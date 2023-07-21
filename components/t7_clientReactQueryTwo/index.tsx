"use client";

import DisplayTime from "@components/utils/displayTime";
import { useQuery } from "@tanstack/react-query";
import useReactQueryData from "@components/utils/useReactQueryData";
import getTime from "@components/utils/getTime";
const ClientReactQueryTwo = () => {
  const { data, isLoading, error } = useQuery(["time"], () =>
    getTime("React Query 2")
  );
  // const { data } = useReactQueryData();
  return <DisplayTime time={data || null} />;
};

export default ClientReactQueryTwo;
