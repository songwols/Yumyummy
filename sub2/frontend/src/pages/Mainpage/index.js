import React from "react";
import styled from "styled-components";
import Suggest from './Suggest';
import temp from './temp.png'
import { Link } from 'react-router-dom';
import Topbar from "../../components/Top/Topbar";
import Searching from "../../components/Search";

class Mainpage extends React.Component{
    
    render(){
        return(
            <Frame>
                <Top>
                    <Topbar></Topbar>
                </Top>
                <Title><Out><Link to={"/MainPage"} style={{ textDecoration: "none" }}><Img src={temp}></Img></Link></Out></Title>
                <Searchs>
                    <IFrame>
                        <Searching></Searching>
                    </IFrame>
                </Searchs>
                <CFrame>
                    <Suggest></Suggest>
                </CFrame>
            </Frame>
        )
    }
}

const Frame = styled.div`
    height: 100vh;
    width: 100%;
    display: grid;
    align-content: center;
    grid-template-rows: 5% 20% 7% 68%;
    grid-template-areas: "Topb" "Title" "Search" "content";
`

const Top = styled.div`
    // height: 95%;
    grid-area: Topb;
    justify-items: center;
    text-align: right;
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
    align-content: center;
`

const IFrame = styled.div`
    justify-content: center;
    text-align: center;
    padding-top: 1%;
    height: 90%;
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