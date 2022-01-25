import React, { useState } from "react";
import "./Login.scss";

function Login() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const isInputValid = id.length > 0 && pw.length > 0;

  const handleLogin = () => {
    fetch("api주소", {
      method: "POST",
      body: JSON.stringify({
        email: id,
        password: pw,
      }),
    })
      .then((response) => response.json())
      .then((result) => console.log("결과", result));
  };

  return (
    <main className="loginContainer">
      <div className="loginInner">
        <h1>Westagram</h1>
        <form className="loginForm">
          <input
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={(e) => setId(e.target.value)}
          />
          <input
            type="password"
            placeholder="비밀번호"
            onChange={(e) => setPw(e.target.value)}
          />
          <button
            className={`${isInputValid ? "active" : ""}`}
            type="button"
            onClick={handleLogin}
          >
            로그인
          </button>
        </form>
        <a href="/">비밀번호를 잊으셨나요?</a>
      </div>
    </main>
  );
}

export default Login;
