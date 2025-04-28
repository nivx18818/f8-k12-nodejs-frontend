"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { API_URL } from "@/app/page";

export const handleEditPost = async (id, formData) => {
  const updatedPost = {
    title: formData.get("title") ?? "Bài viết này không có tiêu đề",
    body: formData.get("body") ?? "Bài viết này không có nội dung",
  };

  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedPost),
  });

  if (res.ok) {
    revalidatePath("/");
    revalidatePath(`/edit-post/${id}`);
    redirect("/?updated=true");
  }
};
