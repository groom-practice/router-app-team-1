import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import "./Layout.css"

export default function Sidebar() {
  return (
    <div>
      <nav className="sidebar">
        <div className="sidebarItems">
          <Link to="/" className="sidebarLink">HOME</Link>
          <Link to={"/posts"} className="sidebarLink">POSTS</Link>
          <button className="previousBtn" onClick={ () => Navigate(-1) }>←</button>
        </div>
      </nav>
    </div>
  )
}
