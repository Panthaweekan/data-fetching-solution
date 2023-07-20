import { useState, useEffect } from "react";
import getTime from "./getTime";
import { Time } from "./types";

function useClientUseEffect() {
  const [data, setData] = useState<Time | null>(null);

  useEffect(() => {
    getTime("clientUserEffect").then((data) => setData(data));
  }, []);

  return { data, setData };
}

export default useClientUseEffect;
