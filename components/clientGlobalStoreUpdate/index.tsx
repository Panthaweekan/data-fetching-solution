"use client";

import DisplayPost from "@components/utils/displayTime";
import usePostStore from "@components/utils/postStore";
const ClientGlobalStoreUpdate = () => {
  const [data, setData] = usePostStore((state) => [state.time, state.setTime]);

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
