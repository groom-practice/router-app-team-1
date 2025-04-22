import { useParams, useNavigate } from "react-router-dom";
import PostForm from "../components/PostForm";
import { useEffect, useState } from "react";
import { getPostById, updatePost } from "../apis/posts";
import "./EditPost.css";

const EditPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getPostById(id).then((res) => setPost(res));
  }, [id]);

  const handleUpdate = async (data) => {
    try {
      const result = await updatePost(id, data);
      console.log("수정 성공", result);
      navigate(`/posts/${id}`);
    } catch (error) {
      console.error(error);
      alert("수정 실패 다시 수정 부탁드립니다.");
    }
  };

  if (!post) return <div>...Loading</div>;
  return (
    <div className="edit-title">
      <h2>수정하실 Post ID : {id}번</h2>
      <PostForm onSubmit={handleUpdate} initialValues={post} />
    </div>
  );
};

export default EditPost;
