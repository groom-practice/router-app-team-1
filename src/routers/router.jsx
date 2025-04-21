import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import PostLists from "../pages/PostLists";
import PostDetail from "../pages/PostDetails";
import { getAllPosts, getPostById } from "../apis/posts";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "posts",
        element: <PostLists />,
        leader: async () => ({ allPosts: await getAllPosts() }),
      },
      {
        path: "posts/:id",
        element: <PostDetail />,
        loader: async ({ params }) => getPostById(params.id),
      },
    ],
  },
]);
export default router;
