import { useEffect } from "react";
import getTime from "./getTime";
import useStore from "@components/utils/store";
function useClientGlobalStore() {
  const [data, setData] = useStore((state) => [state.time, state.setTime]);

  useEffect(() => {
    getTime("Client Global Store").then((data) => setData(data));
  }, []);
  return { data, setData };
}

export default useClientGlobalStore;
