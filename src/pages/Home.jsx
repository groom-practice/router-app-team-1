import { useState } from "react";
import { createPortal } from "react-dom";
import Modal from "../components/Modal";
import "./Home.css";

export default function Home(){
  const [showLoginModal, setShowLoginModal] = useState(false);
  return (
    <div className="home">
      <h3>Welcome to the Main Page!</h3>
      <button className="modalBtn" onClick={() => setShowLoginModal(true)}>Login</button>

      
      {showLoginModal &&
        createPortal(
          <Modal onClose={() => setShowLoginModal(false)} />,
          document.body
        )}
    </div>
  )
}