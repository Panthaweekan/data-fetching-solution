import { create } from "zustand";
import { type Post } from "./types";

interface PostStore {
  posts: Post[];
  setPosts: (posts: Post[]) => void;
}

const usePostStore = create<PostStore>((set) => ({
  posts: [],
  setPosts: (posts) => set({ posts }),
}));

export default usePostStore;
