"use client";

import DisplayPost from "@components/utils/displayTime";
import useStore from "@components/utils/store";
const ClientGlobalStoreUpdate = () => {
  const [data, setData] = useStore((state) => [state.time, state.setTime]);

  return (
    <>
      <DisplayPost time={data} />
      <button
        className="border p-1 rounded"
        onClick={() => {
          data &&
            setData({
              ...data,
              hour: 0,
              minute: 0,
              second: 0,
            });
        }}
      >
        Reset Time
      </button>
    </>
  );
};

export default ClientGlobalStoreUpdate;
