import { useState } from "react";
import { createPortal } from "react-dom";
import PortalModalContainer from "../components/PortalModalContainser";
import "./Home.css";

export default function Home(){
  const [showLoginModal, setShowLoginModal] = useState(false);
  return (
    <div className="home">
      <h3>Welcome to the Main Page!</h3>
      <button>Login</button>

      
      {showLoginModal &&
        createPortal(
          <PortalModalContainer>
            <div className="loginModalInner">
              <p>
                로그인 정보 입력
              </p>
              <input placeholder="id : exampleId" />
              <input placeholder="pw : examplePassword" />
              <div className="buttons">
                <button>로그인</button>
                <button onClick={() => setShowLoginModal(false)}>취소</button>
              </div>
            </div>
          </PortalModalContainer>,
          document.body
        )}
    </div>
  )
}