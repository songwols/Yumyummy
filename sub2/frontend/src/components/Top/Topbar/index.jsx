import React from "react";
import styled from "styled-components";
import Login from '../../Login';
import Join from '../../Join';

class Topbar extends React.Component{
    constructor() {
        super();
        this.state = {
          showLogin: false,
          showJoin: false
        };
      }
      toggleLogin() {
        this.setState({
            showLogin: !this.state.showLogin
        });
      }
      toggleJoin() {
        this.setState({
            showJoin: !this.state.showJoin
        });
      }

    render(){
        return(
            <div>
                <Button onClick={this.toggleLogin.bind(this)}>로그인</Button>
                <Button onClick={this.toggleJoin.bind(this)}>회원가입</Button>
                {this.state.showLogin ? 
                    <Login
                        cancelLogin={this.toggleLogin.bind(this)}
                    />
                    : null
                }
                {this.state.showJoin ? 
                    <Join
                        cancelJoin={this.toggleJoin.bind(this)}
                    />
                    : null
                }
            </div>
        )
    }
}

const Button = styled.button`
    font-size: large;
    background: none;
    border: none;
    outline: none;
    cursor : pointer;
`

export default Topbar;