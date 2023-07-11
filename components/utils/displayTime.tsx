import { FC } from "react";
import { type Time } from "@components/utils/types";
interface Props {
  time: Time | null;
}
const DisplayTime: FC<Props> = ({ time }) => {
  if (!time)
    return (
      <div className="border p-2 rounded text-sm text-red-300">No Time</div>
    );
  return (
    <div className="border p-2 rounded text-sm text-green-600">
      {time.hour}:{time.minute}:{time.second}
    </div>
  );
};

export default DisplayTime;
