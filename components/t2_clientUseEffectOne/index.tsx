"use client";

import { FC } from "react";
// import {useEffect, useState } from "react";
// import { type Time } from "@components/utils/types";
import DisplayTime from "@components/utils/displayTime";
import ResetButton from "@components/utils/resetButton";
// import getTime from "@components/utils/getTime";
import useClientUseEffect from "@components/utils/useClientUseEffect";
const ClientUseEffect: FC = () => {
  // const [data, setData] = useState<Time | null>(null);

  // useEffect(() => {
  //   getTime("clientUserEffect").then((data) => setData(data));
  // }, []);

  const { data, setData } = useClientUseEffect();

  return (
    <div>
      <DisplayTime time={data} />
      <ResetButton time={data} setTime={setData} />
    </div>
  );
};

export default ClientUseEffect;
