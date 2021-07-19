import React, { Component } from "react";
import "./Login.scss";

class Login extends Component {
  state = {
    id: "",
    password: "",
  };

  handleInput = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <main className="loginContainer">
        <div className="loginInner">
          <h1>Westagram</h1>
          <form className="loginForm" onChange={this.handleInput}>
            <input name="id" type="text" placeholder="전화번호, 사용자 이름 또는 이메일" />
            <input name="password" type="password" placeholder="비밀번호" />
            <button type="button">로그인</button>
          </form>
          <a href="/">비밀번호를 잊으셨나요?</a>
        </div>
      </main>
    );
  }
}

export default Login;
