import React from "react";
import styled from "styled-components";
import Calendar from 'react-calendar';
import moment from 'moment';

import logo from '../../assets/images/Login.png';

export const Cal = styled(Calendar)`
    width: 100%;
`

class Join extends React.Component {
    state = {
        date: moment(new Date()).format("YYYY-MM-DD"),
        gender: "",
    }
     
    onDateChange = date => { 
        this.setState({
          date: moment(date).format("YYYY-MM-DD")
        })
      };

    onGenderChange = gender => {
        this.setState({
            gender: gender
        })
    }

    render() {
        console.log(this.state.date)
        console.log(this.state.gender)
      return (
        <Popup>
          <PopupInner>
              <PFrame>
                <Title>
                    <JoinText>회원가입~~</JoinText>
                    <JoinImage>
                        <img src={logo} width='80' height='80'/>
                    </JoinImage>
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
                <NFrame>
                    <NText>
                        이름
                    </NText>
                    <Name></Name>
                </NFrame>
                <GFrame>
                    <GText>성별</GText>
                    <GenderLabel>
                        <label>
                        <Gender1 type="radio" value="male" name="gender" onChange={() => this.onGenderChange("male")}>
                        </Gender1>남자
                        </label>
                        <label>
                        <Gender2 type="radio" value="female" name="gender" onChange={() => this.onGenderChange("female")}>
                        </Gender2>여자
                        </label>
                    </GenderLabel>
                </GFrame>
                <BIFrame>
                    <BText>
                        생년월일
                    </BText>
                    <Birth></Birth>
                </BIFrame>
                <BFrame>
                    <Confirm onClick={this.props.cancelJoin}>회원가입</Confirm>&nbsp;&nbsp;
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
    background-color: rgba(0,0,0, 0.5);
    z-index: 999;
`

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
    from {transform:scale(0)}
    to {transform:scale(1)}
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
`

const PFrame = styled.div`
    height: 100%;
    display: grid;
    grid-template-rows: repeat(12, 1fr);
    grid-template-areas: 
        "Title" 
        "." 
        "IDFrame" 
        "PWFrame"
        "."  
        "NFrame" 
        "GFrame" 
        "BIFrame" 
        "." 
        "Bu" 
        "Bu"
        "."
        ;
`

const Title = styled.div`
    grid-area: Title;
    display: grid;

    padding-left: 1rem;
    padding-top: .5rem;
    font-size: x-large;
    text-align: left;
    background: #ffde96;

    grid-template-columns: repeat(4, 1fr);
    grid-template-areas: ". JoinImage JoinText .";
`

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
    line-height: 36.8px;
    /* margin-left: 12rem; */
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas: "Gender1 Gender2";
`;

const Gender1 = styled.input`
    grid-area: Gender1;
    display: grid;
`;

const Gender2 = styled.input`
    grid-area: Gender2;
    display: grid;
`;

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
    border-radius: .5rem;
    cursor: pointer;
    font-size: 1rem;

    transform: scale(0.95);

    :hover {
        border-radius: .7rem;
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
    border-radius: .5rem;
    cursor: pointer;
    font-size: 1rem;

    transform: scale(0.95);

    :hover {
        border-radius: .7rem;
        opacity: 0.85;
        transform: scale(1);
    }  
`;

export default Join;