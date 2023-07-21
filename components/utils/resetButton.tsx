import { FC } from "react";
import { Time } from "./types";
interface Props {
  time: Time | null;
  setTime: (data: Time) => void;
}

const ResetButton: FC<Props> = ({ time, setTime }) => {
  return (
    <button
      className="border p-1 rounded"
      onClick={() => {
        time &&
          setTime({
            ...time,
            hour: 0,
            minute: 0,
            second: 0,
          });
      }}
    >
      Reset Time
    </button>
  );
};

export default ResetButton;
