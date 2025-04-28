"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { API_URL } from "@/app/page";

export const handleAddPost = async (formData) => {
  const newPost = {
    title: formData.get("title") ?? "Bài viết này không có tiêu đề",
    body: formData.get("body") ?? "Bài viết này không có nội dung",
  };

  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPost),
  });

  if (res.ok) {
    revalidatePath("/");
    redirect("/?created=true");
  }
};
