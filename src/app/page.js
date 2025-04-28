import ToastHandler from "@/app/components/ToastHandler";
import AddPostButton from "./components/AddPostButton";
import FunctionButtons from "./components/FunctionButtons";

export const API_URL = "http://localhost:3001/posts";

const fetchPosts = async () => {
  try {
    const response = await fetch(API_URL);
    const res = await response.json();

    if (res.status === "success") {
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
      <AddPostButton />
      <ul>
        {posts.map(({ id, title, body }) => (
          <li key={id}>
            <h2>{title}</h2>
            <p>{body}</p>
            <FunctionButtons id={id} />
          </li>
        ))}
      </ul>
      <ToastHandler />
    </>
  );
}

export default Posts;
