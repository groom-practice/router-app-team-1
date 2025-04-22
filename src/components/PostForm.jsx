import { useState } from "react";
import "./PostForm.css";

export default function PostForm({
  onSubmit,
  initialValues = { title: "", body: "" },
}) {
  const [title, setTitle] = useState(initialValues.title);
  const [body, setBody] = useState(initialValues.body);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, body });
  };

  return (
    <form onSubmit={handleSubmit} className="post-form">
      <input
        className="post-input"
        placeholder="제목을 입력하세요"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="post-textarea"
        placeholder="내용을 작성하세요"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />

      <button type="submit" className="post-submit-btn">
        제출
      </button>
    </form>
  );
}
