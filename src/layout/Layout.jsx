import { Link, Outlet, useNavigate } from "react-router-dom";
import "./index.css";

export default function Layout() {
  const navigate = useNavigate();
  return (
    <main>
      <header>
        <h2>협업 프로젝트</h2>
      </header>
      <div className="mainContent">
        <nav className="leftSideBar">
          <Link to="/">HOME</Link>
          <Link to={"/posts"}>POSTS</Link>
          <button onClick={ () => navigate(-1) }>←</button>
        </nav>
        <Outlet />
      </div>
    </main>
  );
}