"use client";
import { FC } from "react";
import DisplayTime from "@components/utils/displayTime";
import ResetButton from "@components/utils/resetButton";
import useClientUseEffect from "@components/utils/useClientUseEffect";
const ClientUserEffectTwo: FC = () => {
  const { data, setData } = useClientUseEffect();
  return (
    <div>
      <DisplayTime time={data} />
      <ResetButton time={data} setTime={setData} />
    </div>
  );
};

export default ClientUserEffectTwo;
