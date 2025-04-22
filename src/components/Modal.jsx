import "./Modal.css"

export default function Modal({ onClose }) {
  return (
    <div className="modalWrapper">
      <div className="modalContainer">
        <div className="loginModalInner">
            <p>
              로그인 정보 입력
            </p>
            <input id="idInput" placeholder="id : exampleId" />
            <input id="passwordInput" placeholder="pw : examplePassword" />
            <div className="buttons">
              <button>로그인</button>
              <button onClick={onClose}>취소</button>
            </div>
          </div>
      </div>
    </div>
  );
}