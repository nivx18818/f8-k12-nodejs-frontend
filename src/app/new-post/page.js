import { handleAddPost } from "./action";

export const metadata = {
  title: "Bài viết mới",
};

function NewPost() {
  return (
    <>
      <h1>Thêm bài viết</h1>
      <form action={handleAddPost}>
        <div>
          <input
            type="text"
            name="title"
            placeholder="Tiêu đề..."
          />
        </div>
        <br />
        <div>
          <textarea
            type="text"
            name="body"
            placeholder="Nội dung..."
            rows={10}
            cols={40}
          ></textarea>
        </div>
        <button>Thêm</button>
      </form>
    </>
  );
}

export default NewPost;
