"use client";

import { useRouter } from "next/navigation";

function AddPostButton() {
  const router = useRouter();

  return (
    <button onClick={() => router.push("/new-post")}>Tạo bài viết mới</button>
  );
}

export default AddPostButton;
