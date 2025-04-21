import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
// import PostLists from "../pages/PostLists";
import { getAllPosts } from "../apis/posts";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true, element: <Home />
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
