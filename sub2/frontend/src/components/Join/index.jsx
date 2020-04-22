import React from "react";
import styled from "styled-components";
import Calendar from 'react-calendar';
import moment from 'moment';

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
                <Title>회원가입~~</Title>
                <IDFrame>ID<ID></ID></IDFrame>
                <PWFrame>PW<PW></PW></PWFrame>
                <NFrame>이름<Name></Name></NFrame>
                <GFrame>성별
                    <label>
                    <Gender type="radio" value="male" name="gender" onChange={() => this.onGenderChange("male")}>
                    </Gender>남자
                    </label>
                    <label>
                    <Gender type="radio" value="female" name="gender" onChange={() => this.onGenderChange("female")}>
                    </Gender>여자
                    </label>
                </GFrame>
                <BIFrame>생년월일<Birth></Birth></BIFrame>
                
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
`

const PopupInner = styled.div`
  position: absolute;
  left: 25%;
  right: 25%;
  top: 25%;
  bottom: 25%;
  margin: auto;
  background: white;

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
    display: grid;
    grid-template-rows: repeat(10, 1fr);
    grid-template-areas: "Title" "." "ID" "PW" "Name" "Gender" "Birth" "." "Bu" ".";
`

const Title = styled.div`
    grid-area: Title;
    padding-left: 1rem;
    padding-top: .5rem;
    font-size: x-large;
    text-align: left;
`
const IDFrame = styled.div`
    grid-area: ID;
    padding: auto;
    padding-left: 10%;
    justify-items: left;
    text-align: left;
`
const ID = styled.input`
    background: none;
    width: 70%;
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
    margin-left: 0.5rem;
    color: inherit;
`
const PWFrame = styled.div`
    grid-area: PW;
    padding: auto;
    padding-left: 10%;
    justify-items: left;
    text-align: left;
`
const PW = styled.input`
    background: none;
    width: 70%;
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
    margin-left: 0.5rem;
    color: inherit;
`
const NFrame = styled.div`
    grid-area: Name;
    padding: auto;
    padding-left: 10%;
    justify-items: left;
    text-align: left;
`
const Name = styled.input`
    background: none;
    width: 70%;
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
    margin-left: 0.5rem;
    color: inherit;
`
const GFrame = styled.div`
    grid-area: Gender;
    padding: auto;
    padding-left: 10%;
    justify-items: left;
    text-align: left;
`
const Gender = styled.input`
    background: none;
    margin-left: 1rem;
`
const BIFrame = styled.div`
    grid-area: Birth;
    padding: auto;
    padding-left: 10%;
    justify-items: left;
    text-align: left;
`
const Birth = styled.input`
    background: none;
    width: 70%;
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
    margin-left: 0.5rem;
    color: inherit;
`

const BFrame = styled.div`
    grid-area: Bu;
    justify-items: center;
    text-align: center;
`

const Confirm = styled.button`
    height: 100%;
    width: 40%;
    background: none;
    border: none;
    outline: none;
    background-color: green; 
    border-radius: .5rem;
    cursor: pointer;
`
const Cancel = styled.button`
    height: 100%;
    width: 40%;
    background: none;
    border: none;
    outline: none;
    background-color: red; 
    border-radius: .5rem;
    cursor: pointer;
`

export default Join;