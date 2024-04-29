import React, { useState } from 'react';
import { Post } from '../types/post';
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

interface PostFormProps {
  create: (newPost: Post) => void;
}

const PostForm: React.FC<PostFormProps> = ({ create }) => {
  const [post, setPost] = useState<{ title: string; body: string }>({ title: '', body: '' });

  const addNewPost = (e: React.FormEvent) => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now()
    };
    create(newPost);
    setPost({ title: '', body: '' });
  };

  return (
    <form className="postForm">
      <MyInput
        type="text"
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        placeholder="Назва поста"
      />
      <MyInput
        type="text"
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        placeholder="Опис поста"
      />
      <MyButton onClick={addNewPost}>Створити пост</MyButton>
    </form>
  );
}

export default PostForm;
