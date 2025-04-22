import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./Layout.css"

export default function Sidebar() {
  const navigate = useNavigate()
  return (
    <div>
      <nav className="sidebar">
        <div className="sidebarItems">
          <Link to="/" className="sidebarLink">HOME</Link>
          <Link to={"/posts"} className="sidebarLink">POSTS</Link>
          <button className="previousBtn" onClick={ () => navigate(-1) }>←</button>
        </div>
      </nav>
    </div>
  )
}
