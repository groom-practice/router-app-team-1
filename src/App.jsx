import { Link, Outlet } from 'react-router-dom';

function App() {

  return (
    <div>
      <nav>
        <Link to="/">HOME</Link> | <Link to="/posts">POSTS</Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  )
}

export default App
