import { useEffect } from "react";
import DisplayPost from "@components/utils/displayPost";
import { type Post } from "@components/utils/types";
import usePostStore from "@components/utils/postStore";

async function getPosts() {
  console.log("This is fetching data from useEffect.");
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = (await res.json()) as Post[];
  return data;
}

const ClientGlobalStore = () => {
  const [data, setData] = usePostStore((state) => [
    state.posts,
    state.setPosts,
  ]);

  useEffect(() => {
    getPosts().then((data) => setData(data));
  }, []);

  return <DisplayPost posts={data} />;
};

export default ClientGlobalStore;
