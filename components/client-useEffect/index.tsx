"use client";

import { FC, useEffect, useState } from "react";
import { type Post } from "@components/utils/types";
import DisplayPost from "@components/utils/displayPost";

async function getPosts() {
  console.log("This is fetching data from useEffect.");
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = (await res.json()) as Post[];
  return data;
}

const ClientUseEffect: FC = () => {
  const [data, setData] = useState<Post[]>([]);

  useEffect(() => {
    getPosts().then((data) => setData(data));
  }, []);

  return <DisplayPost posts={data} />;
};

export default ClientUseEffect;
