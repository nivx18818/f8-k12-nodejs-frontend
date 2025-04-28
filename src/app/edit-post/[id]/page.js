import { API_URL } from "@/app/page";
import { handleEditPost } from "./action";

export const metadata = {
  title: "Sửa bài viết",
};

const fetchPostById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`);
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

async function EditPost({ params }) {
  const { id } = await params;
  const { title, body } = await fetchPostById(id);

  return (
    <>
      <h1>Sửa bài viết</h1>
      <form action={handleEditPost.bind(null, id)}>
        <div>
          <input
            type="text"
            name="title"
            defaultValue={title}
            placeholder="Tiêu đề..."
          />
        </div>
        <br />
        <div>
          <textarea
            type="text"
            name="body"
            defaultValue={body}
            placeholder="Nội dung..."
            rows={10}
            cols={40}
          ></textarea>
        </div>
        <button>Sửa</button>
      </form>
    </>
  );
}

export default EditPost;
