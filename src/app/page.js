import { Suspense } from "react";
import ToastHandler from "@/app/components/ToastHandler";
import CreatePostButton from "./components/CreatePostButton";
import FunctionButtons from "./components/FunctionButtons";
import CommentForm from "./components/CommentForm";
import Comments from "./components/Comments";

export const API_URL = "http://localhost:3001/api/v1/posts";

const fetchPosts = async () => {
  try {
    const response = await fetch(API_URL);
    const res = await response.json();

    if (res.success) {
      return res.data;
    } else {
      throw new Error(res.message);
    }
  } catch (error) {
    console.error(error);
    return [];
  }
};

async function Posts() {
  const posts = await fetchPosts();

  return (
    <>
      <h1>Bài viết</h1>
      <CreatePostButton />
      <ul>
        {posts.map(({ id, title, body }) => (
          <li key={id}>
            <h2>{title}</h2>
            <p>{body}</p>
            <FunctionButtons id={id} />
            <CommentForm id={id} />
            <Comments id={id} />
          </li>
        ))}
      </ul>
      <Suspense>
        <ToastHandler />
      </Suspense>
    </>
  );
}

export default Posts;
