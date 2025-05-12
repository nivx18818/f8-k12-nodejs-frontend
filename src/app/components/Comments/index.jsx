import { API_URL } from "@/app/page";

const fetchCommentsByPostId = async (postId) => {
  try {
    const response = await fetch(`${API_URL}/${postId}/comments`);
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

async function Comments({ id }) {
  const comments = await fetchCommentsByPostId(id);

  return (
    <ul>
      {comments.map(({ id, name, body }) => (
        <li key={id}>
          <p>
            <strong>{name}</strong>
          </p>
          <p>{body}</p>
        </li>
      ))}
    </ul>
  );
}

export default Comments;
