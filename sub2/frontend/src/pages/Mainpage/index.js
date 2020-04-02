import React from "react";
import styled from "styled-components";
import Bar from './Bar';
import Contents from './Contents';
import temp from './temp.png'
import { Link } from 'react-router-dom';

class Mainpage extends React.Component{
    render(){
        return(
            <Frame>
                <TFrame>
                    <Title><Out><Link to={"/MainPage"} style={{ textDecoration: "none" }}><Img src={temp}></Img></Link></Out></Title>
                    <Bar></Bar>
                </TFrame>
                <CFrame>
                    <Contents></Contents>
                </CFrame>
            </Frame>
        )
    }
}

const Frame = styled.div`
    height: 100vh;
    width: 100%;
    display: grid;
    grid-template-rows: 20% 80%;
    grid-template-areas: "TFrame" "content";
`
const TFrame = styled.div`
    grid-area: TFrame;
    display: grid;
    grid-template-rows: 75% 25%;
`
const Title = styled.div`
    background-color: #ffde96; 
`
const Img = styled.img`
    display: flex;
    justify-content: center;
    text-align: center;
    height: 100%;
    object-fit: cover;
    margin: auto;
`
const Out = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    height: 100%;
    object-fit: cover;
    margin: auto;
`
const CFrame = styled.div`
    grid-area: content;
`

export default Mainpage;