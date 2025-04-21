import { Link, Outlet, } from "react-router-dom";
import "./Layout.css";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Layout() {
  return (
    <div>
      <Header />
      <div className="page">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
}