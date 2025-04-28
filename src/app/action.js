"use server";

import { revalidatePath } from "next/cache";
import { API_URL } from "./page";

export const handleDeletePost = async (dataId) => {
  await fetch(`${API_URL}/${dataId}`, {
    method: "DELETE",
  });
  revalidatePath("/");
};
