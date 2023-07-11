import { FC } from "react";
import { type Time } from "@components/utils/types";
import DisplayTime from "@components/utils/displayTime";
const ServerComponent: FC = async () => {
  const res = await fetch(
    "http://localhost:3001"
    // {
    //   next: { revalidate: 5 },
    // }
  );
  const data = (await res.json()) as Time;
  console.log("This is fetching data from server.");
  return <DisplayTime time={data} />;
};

export default ServerComponent;
