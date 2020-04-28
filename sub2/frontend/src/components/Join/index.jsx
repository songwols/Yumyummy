import React from "react";
import styled from "styled-components";
import Radio from "./RadioButton";
import { withRouter } from "react-router-dom";
import { inject, observer } from "mobx-react";
import join from "../../assets/images/Join.png";

@inject("userStore")
@observer
@withRouter
class Join extends React.Component {
  constructor(props) {
    super(props);
    this.handleRadio = this.handleRadio.bind(this);
    this.state = {
      radioGroup: {
        boy: true,
        girl: false,
      },
      email: "",
      password: "",
      password2: "",
      username: "",
      gender: "",
      age: "",
    };
  }
  handleRadio(event) {
    let obj = {};
    obj[event.target.value] = event.target.checked; // true
    this.setState({ radioGroup: obj });
  }
  onIdChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  onPwChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };
  onPw2Change = (e) => {
    this.setState({
      password2: e.target.value,
    });
  };
  onNameChange = (e) => {
    this.setState({
      username: e.target.value,
    });
  };
  onAgeChange = (e) => {
    this.setState({
      age: e.target.value,
    });
  };
  Register = (e) => {
    if (this.state.radioGroup.boy === true) {
      this.setState({ gender: "남" });
    } else if (this.state.radioGroup.girl === true) {
      this.setState({ gender: "여" });
    }
    const user = {
      email: this.state.email,
      password: this.state.password,
      pw2: this.state.password2,
      username: this.state.username,
      //gender: "남자",
      //age: this.state.age,
    };
    this.props.userStore.register(user);
    alert(
      this.state.username + "님! 회원가입이 완료되었습니다!"
    );
    window.location.reload();
  };
  RadioBoy = (e) => {
    this.setState({
      gender: "남자",
    });
  };
  RadioGirl = (e) => {
    console.log("여자");
    this.setState({
      gender: "여자",
    });
  };

  render() {
    return (
      <Popup>
        <PopupInner>
          <PFrame>
            <Title>
              <JoinText>회원가입</JoinText>
              <JoinImage>
                <img src={join} width="80" height="80" />
              </JoinImage>
            </Title>
            <IDFrame>
              <IdText>EMAIL</IdText>
              <ID
                onChange={this.onIdChange}
                name="id"
                value={this.state.email}
              ></ID>
            </IDFrame>
            <PWFrame>
              <PwText>PW</PwText>
              <PW
                onChange={this.onPwChange}
                name="pw"
                type="password"
                value={this.state.password}
              ></PW>
            </PWFrame>
            <PW2Frame>
              <PwText>PW 확인</PwText>
              <PW
                onChange={this.onPw2Change}
                name="pw2"
                type="password"
                value={this.state.password2}
              ></PW>
            </PW2Frame>
            <NFrame>
              <NText>이름</NText>
              <Name
                onChange={this.onNameChange}
                name="name"
                value={this.state.username}
              ></Name>
            </NFrame>
            <GFrame>
              <GText>성별</GText>
              <GenderLabel>
                <Radio
                  type="radio"
                  name="gender"
                  value="boy"
                  checked={this.state.radioGroup["boy"]}
                  onChange={this.handleRadio}
                >
                  남자
                </Radio>
                <Radio
                  type="radio"
                  name="gender"
                  value="girl"
                  checked={this.state.radioGroup["girl"]}
                  onChange={this.handleRadio}
                >
                  여자
                </Radio>
              </GenderLabel>
            </GFrame>
            <BIFrame>
              <BText>나이</BText>
              <Birth
                onChange={this.onAgeChange}
                name="age"
                value={this.state.age}
              ></Birth>
            </BIFrame>
            <BFrame>
              <Confirm onClick={this.Register}>회원가입</Confirm>
              &nbsp;&nbsp;
              <Cancel onClick={this.props.cancelJoin}>취소</Cancel>
            </BFrame>
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
  top: 25%;
  bottom: 25%;
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

  @media (max-width: 768px) {
    left: 10%;
    right: 10%;
    top: 25%;
    bottom: 25%;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    top: 25%;
    bottom: 25%;
  }
`;

const PFrame = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: repeat(12, 1fr);
  grid-template-areas:
    "Title"
    "."
    "IDFrame"
    "PWFrame"
    "PW2Frame"
    "."
    "NFrame"
    "GFrame"
    "BIFrame"
    "."
    "Bu"
    "Bu"
    ".";
`;

const Title = styled.div`
  grid-area: Title;
  display: grid;

  padding-left: 1rem;
  padding-top: 0.5rem;
  font-size: x-large;
  text-align: left;
  background: #ffde96;

  grid-template-columns: repeat(6, 1fr);
  grid-template-areas: ". . JoinImage JoinText . .";
`;

const JoinText = styled.div`
  grid-area: JoinText;
  margin-top: 10%;
  font-size: 1.3rem;
`;

const JoinImage = styled.div`
  grid-area: JoinImage;
`;

const IDFrame = styled.div`
  grid-area: IDFrame;
  display: grid;
  padding: auto;
  /* padding-left: 15%; */
  /* justify-items: left; */
  text-align: left;

  grid-template-columns: repeat(8, 1fr);
  grid-template-areas: ". IdText ID ID ID ID ID .";
  margin-left: -3%;
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
  /* width: 70%; */
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
  /* margin-left: 1.2rem; */
  color: inherit;
`;

const PWFrame = styled.div`
  grid-area: PWFrame;
  display: grid;
  padding: auto;
  /* padding-left: 15%; */
  /* justify-items: left; */
  text-align: left;

  grid-template-columns: repeat(8, 1fr);
  grid-template-areas: ". PwText PW PW PW PW PW .";
  margin-left: -3%;
`;
const PW2Frame = styled.div`
  grid-area: PW2Frame;
  display: grid;
  padding: auto;
  /* padding-left: 15%; */
  /* justify-items: left; */
  text-align: left;

  grid-template-columns: repeat(8, 1fr);
  grid-template-areas: ". PwText PW PW PW PW PW .";
  margin-left: -3%;
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
  /* width: 70%; */
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
  /* margin-left: 0.5rem; */
  color: inherit;
`;

const NFrame = styled.div`
  grid-area: NFrame;
  display: grid;
  padding: auto;
  /* padding-left: 15%; */
  /* justify-items: left; */
  text-align: left;
  grid-template-columns: repeat(8, 1fr);
  grid-template-areas: ". NText N N N N N .";
  margin-left: -3%;
`;

const NText = styled.div`
  grid-area: NText;
  display: grid;
  text-align: center;
  line-height: 36.8px;
`;

const Name = styled.input`
  grid-area: N;
  display: grid;
  background: none;
  /* width: 70%; */
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
  /* margin-left: 0.5rem; */
  color: inherit;
`;

const GFrame = styled.div`
  grid-area: GFrame;
  display: grid;
  padding: auto;
  /* padding-left: 10%; */
  /* justify-items: left; */
  text-align: left;

  grid-template-columns: repeat(8, 1fr);
  grid-template-areas: ". GText GenderLabel GenderLabel . . . .";
  margin-left: -3%;
`;

const GText = styled.div`
  grid-area: GText;
  display: grid;
  text-align: center;
  line-height: 36.8px;
`;

const GenderLabel = styled.div`
  grid-area: GenderLabel;
  display: grid;
  background: none;
  /* height: 20px; */
  /* line-height: 36.8px; */
  /* margin-left: 12rem; */
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas: "Gender1 Gender2";
`;

// const Gender1 = styled.input`
//     grid-area: Gender1;
//     display: grid;
// `;

// const Gender2 = styled.input`
//     grid-area: Gender2;
//     display: grid;
// `;

const BIFrame = styled.div`
  grid-area: BIFrame;
  display: grid;
  padding: auto;
  /* padding-left: 10%; */
  /* justify-items: left; */
  text-align: left;

  grid-template-columns: repeat(8, 1fr);
  grid-template-areas: "BText BText B B B B B .";
  margin-left: -3%;
`;

const BText = styled.div`
  grid-area: BText;
  display: grid;
  text-align: right;
  line-height: 36.8px;
  padding-right: 10%;
  /* font-size: 0.85rem; */
`;

const Birth = styled.input`
  grid-area: B;
  display: grid;
  background: none;
  /* width: 70%; */
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
  /* margin-left: 0.5rem; */
  color: inherit;
`;

const BFrame = styled.div`
  grid-area: Bu;
  /* justify-items: center; */
  text-align: center;
`;

const Confirm = styled.button`
  height: 100%;
  width: 40%;
  background: none;
  border: none;
  outline: none;
  background-color: green;
  border-radius: 0.5rem;
  cursor: pointer;
  font-size: 1rem;

  transform: scale(0.95);

  :hover {
    border-radius: 0.7rem;
    opacity: 0.85;
    transform: scale(1);
  }
`;

const Cancel = styled.button`
  height: 100%;
  width: 40%;
  background: none;
  border: none;
  outline: none;
  background-color: red;
  border-radius: 0.5rem;
  cursor: pointer;
  font-size: 1rem;

  transform: scale(0.95);

  :hover {
    border-radius: 0.7rem;
    opacity: 0.85;
    transform: scale(1);
  }
`;

export default Join;
