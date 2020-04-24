import React from "react";
import styled from "styled-components";

import login from '../../assets/images/Login.png';
import GLogin from "./GLogin";
import KLogin from "./KLogin";



class Login extends React.Component {
    render() {
      return (
        <Popup>
          <PopupInner>
            <PFrame>
                <Title>
                    <LoginText>로그인~~</LoginText>
                    <LoginImage>
                        <img src={login} width='80' height='80'/>
                    </LoginImage>
                </Title>
                <IDFrame>
                    <IdText>
                        ID
                    </IdText>
                    <ID></ID>
                </IDFrame>
                <PWFrame>
                    <PwText>
                        PW    
                    </PwText>
                    <PW></PW>
                </PWFrame>
                <BFrame>
                    <Confirm onClick={this.props.cancelLogin}>로그인</Confirm>&nbsp;&nbsp;
                    <Cancel onClick={this.props.cancelLogin}>취소</Cancel>
                </BFrame>
                <Tag><Hr>&nbsp;소셜 로그인하기&nbsp;</Hr></Tag>
                    <KFrame><KLogin></KLogin></KFrame>
                    <GFrame><GLogin></GLogin></GFrame>
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
  background-color: rgba(0,0,0, 0.5);
  z-index: 999;
`

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
    from {transform:scale(0)}
    to {transform:scale(1)}
  }

  @media (max-width: 768px) {
    left: 10%;
    right: 10%;
    top: 10%;
    bottom: 15%;
  }
  
  @media (min-width: 768px) and (max-width: 1024px) {  
    
    top: 10%;
    bottom: 15%;
  }
`

const PFrame = styled.div`
    height: 100%;
    display: grid;
    /* grid-template-columns: repeat(2, 1fr); */
    grid-template-rows: repeat(12, 1fr);
    grid-template-areas: 
        "Title" 
        "." 
        "IDFrame"
        "PWFrame" 
        "." 
        "Bu" 
        "." 
        "Tag" 
        "." 
        "Kakao" 
        "Google" 
        "."
        ;
`
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
`

const LoginText = styled.div`
    grid-area: LoginText;
    margin-top: 10%;
`;

const LoginImage = styled.div`
    grid-area: LoginImage;
`;

// const IDFrame = styled.div`
//     grid-area: ID;
//     padding: auto;
//     padding-left: 12%;
//     justify-items: left;
//     text-align: left;
// `
// const ID = styled.input`
//     background: none;
//     width: 70%;
//     border-color: #ffde96;
//     border-style: solid;
//     border-radius: .5rem;
//     outline: none;
//     box-shadow: none;
//     padding-top: 0.5rem;
//     padding-bottom: 0.5rem;
//     font-size: 0.875rem;
//     -ms-flex: 1 1;
//     flex: 1 1;
//     margin-left: 1.2rem;
//     color: inherit;
// `

const IDFrame = styled.div`
    grid-area: IDFrame;
    display: grid;
    padding: auto;
    /* padding-left: 15%; */
    /* justify-items: left; */
    text-align: left;

    grid-template-columns: repeat(8, 1fr);
    grid-template-areas: ". IdText ID ID ID ID ID .";
    margin-left: -8%;
`

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
    border-radius: .5rem;
    outline: none;
    box-shadow: none;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    font-size: 0.875rem;
    -ms-flex: 1 1;
    flex: 1 1;
    /* margin-left: 1.2rem; */
    color: inherit;
`

// const PWFrame = styled.div`
//     grid-area: PW;
//     padding: auto;
//     padding-left: 12%;
//     justify-items: left;
//     text-align: left;
// `
// const PW = styled.input`
//     background: none;
//     width: 70%;
//     border-color: #ffde96;
//     border-style: solid;
//     border-radius: .5rem;
//     outline: none;
//     box-shadow: none;
//     padding-top: 0.5rem;
//     padding-bottom: 0.5rem;
//     font-size: 0.875rem;
//     -ms-flex: 1 1;
//     flex: 1 1;
//     margin-left: 0.5rem;
//     color: inherit;
// `

const PWFrame = styled.div`
    grid-area: PWFrame;
    display: grid;
    padding: auto;
    /* padding-left: 15%; */
    /* justify-items: left; */
    text-align: left;

    grid-template-columns: repeat(8, 1fr);
    grid-template-areas: ". PwText PW PW PW PW PW .";
    margin-left: -8%;
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
    border-radius: .5rem;
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
    justify-items: center;
    text-align: center;
`

const Confirm = styled.button`
    height: 100%;
    width: 37%;
    background: none;
    border: none;
    outline: none;
    background-color: green; 
    border-radius: .5rem;
    cursor: pointer;
    transform: scale(0.95);
    font-size: 1rem;


    :hover {
        border-radius: .7rem;
        opacity: 0.85;
        transform: scale(1);
    }    
`
const Cancel = styled.button`
    height: 100%;
    width: 37%;
    background: none;
    border: none;
    outline: none;
    background-color: red; 
    border-radius: .5rem;
    cursor: pointer;
    transform: scale(0.95);
    font-size: 1rem;


    :hover {
        border-radius: .7rem;
        opacity: 0.8;
        transform: scale(1);
    } 
`

const Tag = styled.div`
    grid-area: Tag;
    text-align: center;
    padding-top: .5rem;
`
const Hr = styled.div`
    padding-right: 1rem;
    padding-left: 1rem;
    display: flex;
    flex-basis: 100%;
    align-items: center;
    color: black;
    font-size: medium;
    ::before, ::after{
        content: "";
        flex-grow: 1;
        background: black;
        height: .1rem;
    }
`
const KFrame = styled.div`
    grid-area: Kakao;
    justify-items: center;
    text-align: center;

`
const Kakao = styled.button` 
    height: 90%;
    width: 80%;
    background: none;
    border: none;
    outline: none;
    background-color: yellow; 
    border-radius: .5rem;
    cursor: pointer;
    justify-items: center;
    text-align: center;

    transform: scale(0.95);


    :hover {
        border-radius: .7rem;
        opacity: 0.95;
        transform: scale(0.97);
    } 
`
const GFrame = styled.div`
    grid-area: Google;
    justify-items: center;
    text-align: center;

`
const Google = styled.button`
    height: 90%;
    width: 80%;
    background: none;
    border: none;
    outline: none;
    background-color: gray; 
    border-radius: .5rem;
    cursor: pointer;
    justify-items: center;
    text-align: center;

    transform: scale(0.95);


    :hover {
        border-radius: .7rem;
        opacity: 0.95;
        transform: scale(0.97);
    } 
`


export default Login;