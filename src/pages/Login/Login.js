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

  handleLogin = () => {
    fetch("", {
      method: "POST",
      body: JSON.stringify({
        email: this.state.id,
        passwrod: this.state.password,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
      });
  };

  render() {
    const { id, password } = this.state;
    const isInputValid = id.length > 0 && password.length > 0;
    return (
      <main className="loginContainer">
        <div className="loginInner">
          <h1>Westagram</h1>
          <form className="loginForm" onChange={this.handleInput}>
            <input name="id" type="text" placeholder="전화번호, 사용자 이름 또는 이메일" />
            <input name="password" type="password" placeholder="비밀번호" />
            <button className={`${isInputValid ? "active" : ""}`} type="button" onClick={this.handleLogin}>
              로그인
            </button>
          </form>
          <a href="/">비밀번호를 잊으셨나요?</a>
        </div>
      </main>
    );
  }
}

export default Login;
