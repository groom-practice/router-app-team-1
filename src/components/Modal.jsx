import { useState } from "react";
import "./Modal.css"

export default function Modal({ onClose }) {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [resultMessage, setResultMessage] = useState(null);

  const sampleUser = {
    id: "test123",
    password: "test123pw"
  };

  const handleLogin = () => {
    if (id === sampleUser.id && password === sampleUser.password){
      setResultMessage(`${id}님 어서오세요!`);
    } else{
      setResultMessage("로그인 실패. 다시 시도해주세요.");
    }
  }

  const handleResultClose = () => {
    setResultMessage(null);
    onClose();
  };

  return (
    <div className="modalWrapper">
      <div className="modalContainer">
      {resultMessage ? (
          <div className="resultModalInner">
            <p>{resultMessage}</p>
            <button className="confirmBtn" onClick={handleResultClose}>확인</button>
          </div>
        ) : (
          <div className="loginModalInner">
            <p>로그인 정보 입력</p>
            <input
              value={id}
              placeholder="id: test123"
              onChange={(e) => setId(e.target.value)}
              type="text"
            />
            <input
              value={password}
              placeholder="pw: test123pw"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
            <div className="buttons">
              <button onClick={handleLogin}>로그인</button>
              <button onClick={onClose}>취소</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}