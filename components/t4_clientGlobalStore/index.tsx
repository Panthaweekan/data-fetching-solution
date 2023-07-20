"use client";

// import { useEffect } from "react";
import DisplayPost from "@components/utils/displayTime";
// import useStore from "@components/utils/store";
// import getTime from "@components/utils/getTime";
import useClientGlobalStore from "@components/utils/useClientGlobalStore";
const ClientGlobalStore = () => {
  // const [data, setData] = useStore((state) => [state.time, state.setTime]);

  // useEffect(() => {
  //   getTime("Client Global Store").then((data) => setData(data));
  // }, []);

  const { data, setData } = useClientGlobalStore();
  return <DisplayPost time={data} />;
};

export default ClientGlobalStore;
