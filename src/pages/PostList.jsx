import { Suspense, useState, useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { createPortal } from "react-dom";
import "./PostList.css";
import PostListDeleteModal from "../components/PostListDeleteModal";

export default function PostLists() {
  const { allPosts } = useLoaderData();
  const [posts, setPosts] = useState(allPosts);
  const [openModal, setOpenModal] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [bookmarks, setBookmarks] = useState([]);
  const [showBookmarks, setShowBookmarks] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("bookmarks");
    if (stored) {
      setBookmarks(JSON.parse(stored));
    }
  }, []);

  const toggleBookmark = (postId) => {
    setBookmarks((prev) => {
      const updated = prev.includes(postId)
        ? prev.filter((id) => id !== postId)
        : [...prev, postId];

      localStorage.setItem("bookmarks", JSON.stringify(updated));
      return updated;
    });
  };

  const displayedPosts = showBookmarks
    ? posts.filter((post) => bookmarks.includes(post.id))
    : posts;

  const handleDelete = async () => {
    if (openModal === null) return;

    setIsDeleting(true);

    try {
      await deletePost(openModal);
      setPosts((prev) => prev.filter((p) => p.id !== openModal));
    } catch (error) {
      console.log("Faild to delete post:", error);
      setIsDeleting(false);
    } finally {
      setIsDeleting(false);
      setOpenModal(null);
    }
  };
  return (
    <div className="container">
      <h3>Posts List</h3>
      <Suspense fallback={<p>Loading posts...</p>}>
        <ul className="postListContainer">
          {posts.map((post) => (
            <li key={post.id}>
              <Link to={`/posts/${post.id}`}>
                {post.id}. {post.title}
              </Link>
              <button onClick={() => setOpenModal(post.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </Suspense>

      <Suspense fallback={<p>Loading posts...</p>}>
        {displayedPosts.length > 0 ? (
          <ul>
            {displayedPosts.map((post) => (
              <li
                key={post.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "8px",
                }}
              >
                <Link
                  to={`/posts/${post.id}`}
                  style={{ marginRight: "10px", flex: 1 }}
                >
                  {post.id}. {post.title}
                </Link>

                <div
                  onClick={() => toggleBookmark(post.id)}
                  style={{ cursor: "pointer", marginRight: "10px" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill={bookmarks.includes(post.id) ? "#FFD43B" : "#ccc"}
                      d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                    />
                  </svg>
                </div>

                <button onClick={() => setOpenModal(post.id)}>Delete</button>
              </li>
            ))}
          </ul>
        ) : (
          <p>포스트가 없습니다.</p>
        )}
      </Suspense>
      {openModal &&
        createPortal(
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                backgroundColor: "white",
                padding: "20px",
                borderRadius: "5px",
              }}
            >
              <h3 style={{ paddingBottom: "16px", color: "#242424" }}>
                Are you sure you want to delete id={openModal} post?
              </h3>
              <button
                style={{
                  background: "#646cff",
                  color: "#fff",
                  marginRight: "10px",
                }}
                onClick={handleDelete}
                disabled={isDeleting}
              >
                Yes
              </button>
              <button
                style={{ color: "#fff", background: "#000" }}
                onClick={() => setOpenModal(null)}
                disabled={isDeleting}
              >
                No
              </button>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}
