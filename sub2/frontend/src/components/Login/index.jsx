import React from "react";
import styled from "styled-components";
import { inject, observer } from "mobx-react";
import login from "../../assets/images/Login.png";
import GLogin from "./GLogin";
import KLogin from "./KLogin";

@observer
@inject("authStore")
class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      info: [
        {
          ID: "",
          PW: "",
        },
      ],
    };
  }

  onIDChange = (e) => {
    this.setState({
      info: {
        ID: e.target.value,
        PW: this.state.info.PW,
      },
    });
  };

  onPWChange = (e) => {
    this.setState({
      info: {
        ID: this.state.info.ID,
        PW: e.target.value,
      },
    });
  };

  render() {
    const Login = (e) => {
      e.preventDefault();
      // this.props.authStore.setInfo()
      this.props.authStore.login(this.state.info);
      alert(window.sessionStorage.getItem("name") + "님! 반갑습니다!");
    };

    return (
      <Popup>
        <PopupInner>
          <PFrame>
            <Title>
              <LoginText>로그인</LoginText>
              <LoginImage>
                <img src={login} width="80" height="80" />
              </LoginImage>
            </Title>
            <IDFrame>
              <IdText>NAME</IdText>
              <ID
                placeholder="이름을 입력하세요."
                value={this.state.ID}
                onChange={this.onIDChange}
              ></ID>
            </IDFrame>
            <PWFrame>
              <PwText>PW</PwText>
              <PW
                placeholder="비밀번호를 입력하세요."
                type="password"
                value={this.state.PW}
                onChange={this.onPWChange}
              ></PW>
            </PWFrame>
            <BFrame>
              <Confirm onClick={Login}>로그인</Confirm>&nbsp;&nbsp;
              <Cancel onClick={this.props.cancelLogin}>취소</Cancel>
            </BFrame>
            <Tag>
              <Hr>&nbsp;소셜 로그인하기&nbsp;</Hr>
            </Tag>
            <SocialLogin>
              <KFrame>
                <KLogin></KLogin>
              </KFrame>
              <GFrame>
                <GLogin></GLogin>
              </GFrame>
            </SocialLogin>
          </PFrame>
        </PopupInner>
      </Popup>
    );
  }
}

const Popup = styled.div`
  z-index: 10;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const PopupInner = styled.div`
  position: absolute;
  left: 25%;
  right: 25%;
  top: 20%;
  bottom: 20%;
  margin: auto;
  background: white;

  border-radius: 4%;
  overflow: hidden;

  animation-name: zoom;
  animation-duration: 0.6s;

  @keyframes zoom {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }

  @media (max-width: 733px) {
    left: 10%;
    right: 10%;
    top: 10%;
    bottom: 15%;
  }

  @media (min-width: 733px) and (max-width: 1024px) {
    top: 10%;
    bottom: 15%;
  }
`;

const PFrame = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: repeat(10, 1fr);
  grid-template-areas:
    "Title"
    "."
    "IDFrame"
    "."
    "PWFrame"
    "."
    "Bu"
    "Tag"
    "SocialLogin"
    ".";

  @media (max-width: 773px) {
    grid-template-rows: 1fr 1fr 1fr 1fr 0.7fr 1fr;
    grid-template-areas:
      "Title"
      "IDFrame"
      "PWFrame"
      "Bu"
      "Tag"
      "SocialLogin";
  }
`;
const Title = styled.div`
    grid-area: Title;
    display: grid;

    padding-left: 1rem;
    padding-top: .5rem;
    font-size: x-large;
    text-align: center;
    background: #ffde96;

    grid-template-columns: repeat(6, 1fr);
    grid-template-areas: ". . LoginImage LoginText . .";

    @media (max-width: 773px) {
        grid-template-columns: 1fr 1fr 2fr 1fr;
        grid-template-areas: ". LoginImage LoginText LoginText .";

`;

const LoginText = styled.div`
  grid-area: LoginText;
  margin-top: 10%;
`;

const LoginImage = styled.div`
  grid-area: LoginImage;
`;

const IDFrame = styled.div`
  grid-area: IDFrame;
  display: grid;
  padding: auto;
  text-align: left;

  grid-template-columns: repeat(8, 1fr);
  grid-template-areas: ". IdText ID ID ID ID ID .";
  margin-left: -8%;

  @media (max-width: 773px) {
    padding-top: 6%;
    padding-bottom: 6%;
  }
`;

const IdText = styled.div`
  grid-area: IdText;
  display: grid;
  text-align: center;
  line-height: 36.8px;
`;

const ID = styled.input`
  grid-area: ID;
  display: grid;
  background: none;
  border-color: #ffde96;
  border-style: solid;
  border-radius: 0.5rem;
  outline: none;
  box-shadow: none;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  font-size: 0.875rem;
  -ms-flex: 1 1;
  flex: 1 1;
  color: inherit;
`;
const PWFrame = styled.div`
  grid-area: PWFrame;
  display: grid;
  padding: auto;
  text-align: left;

  grid-template-columns: repeat(8, 1fr);
  grid-template-areas: ". PwText PW PW PW PW PW .";
  margin-left: -8%;

  @media (max-width: 773px) {
    padding-top: 6%;
    padding-bottom: 6%;
  }
`;

const PwText = styled.div`
  grid-area: PwText;
  display: grid;
  text-align: center;
  line-height: 36.8px;
`;

const PW = styled.input`
  grid-area: PW;
  display: grid;
  background: none;
  border-color: #ffde96;
  border-style: solid;
  border-radius: 0.5rem;
  outline: none;
  box-shadow: none;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  font-size: 0.875rem;
  -ms-flex: 1 1;
  flex: 1 1;
  color: inherit;
`;

const BFrame = styled.div`
  grid-area: Bu;
  justify-items: center;
  text-align: center;
  display: block;

  @media (max-width: 773px) {
    padding-top: 6%;
    padding-bottom: 6%;
  }
`;

const Confirm = styled.button`
  height: 110%;
  width: 37%;
  background: none;
  border: none;
  outline: none;
  background-color: green;
  border-radius: 0.5rem;
  cursor: pointer;
  transform: scale(0.95);
  font-size: 1.2rem;

  :hover {
    border-radius: 0.7rem;
    opacity: 0.85;
    transform: scale(1);
  }
`;
const Cancel = styled.button`
  height: 110%;
  width: 37%;
  background: none;
  border: none;
  outline: none;
  background-color: red;
  border-radius: 0.5rem;
  cursor: pointer;
  transform: scale(0.95);
  font-size: 1.2rem;

  :hover {
    border-radius: 0.7rem;
    opacity: 0.8;
    transform: scale(1);
  }
`;

const Tag = styled.div`
  grid-area: Tag;
  text-align: center;
  padding-top: 1.3rem;
`;
const Hr = styled.div`
  padding-right: 1rem;
  padding-left: 1rem;
  display: flex;
  flex-basis: 100%;
  align-items: center;
  color: black;
  font-size: medium;
  ::before,
  ::after {
    content: "";
    flex-grow: 1;
    background: black;
    height: 0.1rem;
  }
`;
const SocialLogin = styled.div`
  margin-top: 3%;
  grid-area: SocialLogin;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas: ". KFrame GFrame .";

  @media (max-width: 773px) {
    transform: scale(1.4);
  }
`;

const KFrame = styled.div`
  grid-area: KFrame;
  display: grid;
  justify-items: center;
  text-align: center;
`;

const GFrame = styled.div`
  grid-area: GFrame;
  display: grid;
  justify-items: center;
  text-align: center;
`;

export default Login;
