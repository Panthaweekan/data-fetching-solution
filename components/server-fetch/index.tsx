import { FC } from "react";
import { type Post } from "@components/utils/types";
import DisplayPost from "@components/utils/displayPost";
const ServerComponent: FC = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = (await res.json()) as Post[];
  console.log("This is fetching data from server.");
  return <DisplayPost posts={data} />;
};

export default ServerComponent;
