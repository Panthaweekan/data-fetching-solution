"use client";

import { FC, useEffect, useState } from "react";
import { type Time } from "@components/utils/types";
import DisplayTime from "@components/utils/displayTime";
import { API_URL } from "utils";
async function getTime() {
  console.log("This is fetching data from ClientUseEffect.");
  const res = await fetch(API_URL);
  const data = (await res.json()) as Time;
  return data;
}

const ClientUseEffect: FC = () => {
  const [data, setData] = useState<Time | null>(null);

  useEffect(() => {
    getTime().then((data) => setData(data));
  }, []);

  return <DisplayTime time={data} />;
};

export default ClientUseEffect;
