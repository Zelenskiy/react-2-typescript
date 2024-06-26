import React from "react";
import { Post } from "../types/post";
import MyButton from "./UI/button/MyButton";

interface PostItemProps {
  number: number;
  post: Post;
  remove: (post: Post) => void;
}

const PostItem: React.FC<PostItemProps> = ({ number, post, remove }) => {
  console.log(number);
  
  return (
    <div className="post">
      <div>
        <strong>
          {post.id}. {post.title}
        </strong>
        <div>{post.body}</div>
      </div>

      <div>
        <MyButton onClick={() => remove(post)}>Вилучити</MyButton>
      </div>
    </div>
  );
};

export default PostItem;
