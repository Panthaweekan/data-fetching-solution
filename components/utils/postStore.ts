import { create } from "zustand";
import { type Time } from "./types";

interface PostStore {
  time: Time | null;
  setTime: (time: Time) => void;
}

const usePostStore = create<PostStore>((set) => ({
  time: null,
  setTime: (time) => set({ time }),
}));

export default usePostStore;
