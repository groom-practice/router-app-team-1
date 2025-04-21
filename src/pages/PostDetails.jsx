import { Link, useLoaderData } from "react-router-dom";

export default function PostDetail() {
  const post = useLoaderData();

  return (
    <div>
      <h2>포스트 아이디 : {post.id}</h2>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <Link to={`/posts/${post.id}/edit`}>수정</Link>
    </div>
  );
}
