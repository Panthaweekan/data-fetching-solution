import { FC } from "react";
import { type Post } from "@components/utils/types";
interface Props {
  posts: Post[];
}
const DisplayPost: FC<Props> = ({ posts }) => {
  return (
    <div>
      {posts.slice(0, 3).map((post) => (
        <div>
          {post.id} {post.title}
        </div>
      ))}
    </div>
  );
};

export default DisplayPost;
