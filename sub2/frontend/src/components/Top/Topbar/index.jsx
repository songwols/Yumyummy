import React from "react";
import styled from "styled-components";
import Login from "../../Login";
import Join from "../../Join";
import { Link } from "react-router-dom";
import { inject, observer } from "mobx-react";

@observer
@inject("authStore")
class Topbar extends React.Component {
  constructor() {
    super();
    this.state = {
      showLogin: false,
      showJoin: false,
    };
  }
  toggleLogin() {
    this.setState({
      showLogin: !this.state.showLogin,
    });
  }

  toggleJoin() {
    this.setState({
      showJoin: !this.state.showJoin,
    });
  }

  render() {
    console.log(window.sessionStorage.getItem("token"));
    const Logout = (e) => {
      e.preventDefault();
      this.props.authStore.logout();
    };
    return (
      <div>
        {window.sessionStorage.getItem("token") === null ? (
          <div>
            <Button onClick={this.toggleLogin.bind(this)}>로그인</Button>
            <Button onClick={this.toggleJoin.bind(this)}>회원가입</Button>
          </div>
        ) : (
          <div>
            <Link to={"/my"} style={{ textDecoration: "none" }}>
              <Button name={window.sessionStorage.getItem("name")}>
                마이페이지
              </Button>
            </Link>
            <Button onClick={Logout}>로그아웃</Button>
          </div>
        )}
        {this.state.showLogin ? (
          <Login cancelLogin={this.toggleLogin.bind(this)} />
        ) : null}
        {this.state.showJoin ? (
          <Join cancelJoin={this.toggleJoin.bind(this)} />
        ) : null}
      </div>
    );
  }
}

const Button = styled.button`
  font-size: large;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
`;

export default Topbar;
