import React, { useState } from "react";
import "./Login.scss";

function Login() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const isInputValid = id.length > 0 && pw.length > 0;

  const handleLogin = () => {
    fetch("API 주소", {
      method: "POST",
      body: JSON.stringify({
        email: id,
        password: pw,
      }),
    })
      .then((response) => response.json())
      .then((result) => console.log(result));
  };

  return (
    <div className="login">
      <section className="wrapper">
        <h1 className="logo">Westagram</h1>
        <form className="loginBox">
          <div className="textBox">
            <input
              className="loginInput"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              onChange={(e) => setId(e.target.value)}
            />
          </div>
          <div className="textBox">
            <input
              className="loginInput"
              type="password"
              placeholder="비밀번호"
              onChange={(e) => setPw(e.target.value)}
            />
          </div>
          <button
            className={`loginBtn ${isInputValid ? "" : "disabled"}`}
            type="button"
            onClick={handleLogin}
          >
            로그인
          </button>
        </form>
        <span>
          <a href="https://www.google.co.kr">비밀번호를 잊으셨나요?</a>
        </span>
      </section>
    </div>
  );
}

export default Login;
