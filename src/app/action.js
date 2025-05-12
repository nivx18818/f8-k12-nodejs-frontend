"use server";

import { revalidatePath } from "next/cache";
import { API_URL } from "./page";

export const handleDeletePost = async (dataId) => {
  const response = await fetch(`${API_URL}/${dataId}`, {
    method: "DELETE",
  });
  const res = await response.json();

  if (res.success) {
    revalidatePath("/");
  } else {
    console.error(res.errors ?? res.message);
  }
};

export const handleCreateComment = async (id, formData) => {
  const data = Object.fromEntries(formData.entries());

  if (!data.name || data.name.trim() === "") {
    console.error("Name is required");
    return;
  }

  if (!data.body || data.body.trim() === "") {
    console.error("Body is required");
    return;
  }

  const response = await fetch(`${API_URL}/${id}/comments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const res = await response.json();

  if (res.success) {
    console.log(res.data);
    revalidatePath("/");
  } else {
    console.error(res.errors ?? res.message);
  }
};
