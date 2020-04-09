import React from "react";
import styled from "styled-components";
import title from '../../pages/Mainpage/title.png';
import { Link } from 'react-router-dom';
import Topbar from "../../components/Top/Topbar";
import Searching from "../../components/Search";

class Top extends React.Component{
    render(){
        return(
            <div>
                <TFrame>
                    <Out><Link to={"/"} style={{ textDecoration: "none" }}><Img src={title}></Img></Link></Out>
                    <Tb><Topbar></Topbar></Tb>
                </TFrame>
                <IFrame>
                    <Searching></Searching>
                </IFrame>
            </div>
        )
    }
}

const TFrame = styled.div`
    grid-area: Title;
    background-color: #ffde96; 
    height: 100%;
`
const Out = styled.div`
    display: inline-block;
    float: left;
    width: 45%;
    justify-content: Left;
    height: 100%;
    padding-left: 1%;
    object-fit: cover;
    margin: auto;
`
const Img = styled.img`
    justify-content: Left;
    object-fit: cover;
    height: 100%;
    margin: auto;
`

const Tb = styled.div`
    width: 45%;
    justify-items: center;
    text-align: right;
    float: right;
    padding-top: 1.5%;
    padding-right: 1rem;

    @media (max-width: 768px) {
        padding-top: 4%;
      }
`
const IFrame = styled.div`
    grid-area: Search;
    justify-content: center;
    text-align: center;
    padding-top: 1%;
`

export default Top;