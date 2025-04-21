import { createBrowserRouter } from "react-router-dom";
import PostLists from "../pages/PostLists";
import { getAllPosts } from "../apis/posts";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
      },
      {
        path: "posts",
        element: <PostLists />,
        leader: async () => ({ allPosts: await getAllPosts() }),
      },
    ],
  },
]);
export default router;
