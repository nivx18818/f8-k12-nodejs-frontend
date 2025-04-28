"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { toast } from "react-toastify";

function ToastHandler() {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    if (searchParams.get("updated") === "true") {
      toast.success("Cập nhật bài viết thành công");
    }

    if (searchParams.get("created") === "true") {
      toast.success("Thêm bài viết thành công");
    }

    const url = window.location.pathname;
    router.replace(url);
  }, []);

  return null;
}

export default ToastHandler;
