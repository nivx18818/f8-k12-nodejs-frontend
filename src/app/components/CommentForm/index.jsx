"use client";

import { useState } from "react";
import { handleCreateComment } from "@/app/action";

function CommentForm({ id }) {
  const [name, setName] = useState("");
  const [body, setBody] = useState("");
  const [nameError, setNameError] = useState("");
  const [bodyError, setBodyError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    let isValid = true;

    if (!name.trim()) {
      setNameError("Họ và tên là bắt buộc");
      isValid = false;
    } else {
      setNameError("");
    }

    if (!body.trim()) {
      setBodyError("Nội dung bình luận là bắt buộc");
      isValid = false;
    } else {
      setBodyError("");
    }

    if (isValid) {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("body", body);
      await handleCreateComment(id, formData);
      setName("");
      setBody("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          <span>Họ và tên: </span>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {nameError && <p style={{ color: "red" }}>{nameError}</p>}
        </label>
      </div>
      <div>
        <label>
          <span>Nội dung bình luận: </span>
          <input
            type="text"
            name="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          {bodyError && <p style={{ color: "red" }}>{bodyError}</p>}
        </label>
      </div>
      <button type="submit">Bình luận</button>
    </form>
  );
}

export default CommentForm;
