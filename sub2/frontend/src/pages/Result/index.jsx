import React from "react";
import styled from "styled-components";
import Topbar from "../../components/Top";
import Searching from "../../components/Search";
import temp from '../../pages/Mainpage/temp.png'
import { Link } from 'react-router-dom';

class Result extends React.Component{
    render(){
        return(
            <RFrame>
                <Top>
                    <TFrame>
                        <Out><Link to={"/MainPage"} style={{ textDecoration: "none" }}><Img src={temp}></Img></Link></Out>
                        <Tb><Topbar></Topbar></Tb>
                    </TFrame>
                    <IFrame>
                        <Searching></Searching>
                    </IFrame>
                    <Categories>
                        <Link to="/result">한식</Link>&nbsp;
                        <Link to="/result">중식</Link>&nbsp;
                        <Link to="/result">일식</Link>&nbsp;
                        <Link to="/result">양식</Link>&nbsp;
                        <Link to="/result">카페</Link>&nbsp;
                    </Categories>
                </Top>
                <LFrame>
                    <List>리스트</List>
                </LFrame>
            </RFrame>
        )
    }
}

const RFrame = styled.div`
    height: 100vh;
    display: grid;
    grid-template-rows: 20% 80%;
    grid-template-areas: "Top" "Content"
`

const Top = styled.div`
    height: 100%;
    grid-area: Top;
    display: grid;
    grid-template-rows: 30% 40% 30%;
    grid-template-areas: "Title" "Search" "Categories";
`
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
    padding-top: .5rem;
    padding-right: 1rem;
`
const IFrame = styled.div`
    grid-area: Search;
    justify-content: center;
    text-align: center;
    padding-top: 1%;
`

const Categories = styled.div`
    grid-area: Categories;
    padding-top: .5rem;
    justify-items: center;
    text-align: center;
    font-size: large;
`
const LFrame = styled.div`
    grid-area: Content;
    padding-top: 5%;
    display: grid;
    grid-template-columns: 10% 80% 10%;
    grid-template-areas: ". List .";
`

const List = styled.div`
    grid-area: List;
`
export default Result;