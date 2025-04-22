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
    await updatePost(id, data).then((res) => console.log(res));

    navigate(`/posts/${id}`);
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
