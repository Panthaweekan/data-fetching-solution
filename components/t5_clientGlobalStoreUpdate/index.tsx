"use client";

import DisplayPost from "@components/utils/displayTime";
import ResetButton from "@components/utils/resetButton";
// import useClientGlobalStore from "@components/utils/useClientGlobalStore";
import useStore from "@components/utils/store";
const ClientGlobalStoreUpdate = () => {
  const [data, setData] = useStore((state) => [state.time, state.setTime]);

  return (
    <div>
      <DisplayPost time={data} />
      <ResetButton time={data} setTime={setData} />
    </div>
  );
};

export default ClientGlobalStoreUpdate;
