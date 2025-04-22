import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import PostDetail from "../pages/PostDetails";
import { getAllPosts, getPostById } from "../apis/posts";
import App from "../App";
import ErrorPage from "../pages/ErrorPage";
import PostList from "../pages/PostList";
import EditPost from "../pages/EditPost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "posts",
        element: <PostList />,
        loader: async () => ({ allPosts: await getAllPosts() }),
      },
      {
        path: "posts/:id",
        element: <PostDetail />,
        loader: async ({ params }) => getPostById(params.id),
      },
      {
        path: "posts/:id/edit",
        element: <EditPost />,
      },
    ],
  },
]);
export default router;
