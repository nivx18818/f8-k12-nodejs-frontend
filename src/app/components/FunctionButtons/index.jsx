"use client";

import { useRouter } from "next/navigation";
import { handleDeletePost } from "@/app/action";

function FunctionButtons({ id }) {
  const router = useRouter();

  return (
    <div>
      <button onClick={() => router.push(`/edit-post/${id}`)}>Sửa</button>
      <button
        onClick={() => {
          if (window.confirm("Xoá bài viết này?")) {
            handleDeletePost(id);
          }
        }}
      >
        Xoá
      </button>
    </div>
  );
}

export default FunctionButtons;
