import React from "react";
import styled from "styled-components";
import Contents from './Contents';
import temp from './temp.png'
import { Link } from 'react-router-dom';


class Mainpage extends React.Component{
    render(){

        return(
            <Frame>
                <Top>
                    <Link to={"/a"} style={{ textDecoration: "none" }}>로그인</Link>&nbsp;&nbsp;&nbsp;
                    <Link to={"/b"} style={{ textDecoration: "none" }}>회원가입</Link>
                </Top>
                <Title><Out><Link to={"/MainPage"} style={{ textDecoration: "none" }}><Img src={temp}></Img></Link></Out></Title>
                <Searchs>
                    <IFrame><InputBox></InputBox></IFrame>
                </Searchs>
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
    grid-template-rows: 5% 20% 7% 68%;
    grid-template-areas: "Top" "Title" "Search" "content";
`

const Top = styled.div`
    justify-items: center;
    text-align: right;
    cursor : pointer;
    padding-top: .5rem;
    padding-right: 1rem;
    background-color: #ffde96; 
`

const Title = styled.div`
    grid-area: "Title";
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

const Searchs = styled.div`
    grid-area: "Search";
`

const IFrame = styled.div`
    justify-content: center;
    text-align: center;
    margin-top: .5rem;
`

const InputBox = styled.input`
    background: none;
    width: 50%;
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
`;

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