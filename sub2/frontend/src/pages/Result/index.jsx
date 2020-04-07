import React from "react";
import styled from "styled-components";
import Top from "../../components/Top";
import { Link } from 'react-router-dom';
import CardLayout from "../../components/List";

class Result extends React.Component{
    
    render(){
        return(
            <RFrame>
                <TopLayer>
                    <Top></Top>
                    <Categories>
                        <Link to="/result">한식</Link>&nbsp;
                        <Link to="/result">중식</Link>&nbsp;
                        <Link to="/result">일식</Link>&nbsp;
                        <Link to="/result">양식</Link>&nbsp;
                        <Link to="/result">카페</Link>&nbsp;
                    </Categories>
                </TopLayer>
                <LFrame>
                    <List>
                        <CardLayout></CardLayout>
                    </List>
                    <MFrame>
                        <Map></Map>
                    </MFrame>
                </LFrame>
            </RFrame>
        )
    }
}

const RFrame = styled.div`
    height: 100vh;
    display: grid;
    grid-template-rows: 20% 80%;
    grid-template-areas: "TopLayer" "Content"
`

const TopLayer = styled.div`
    height: 100%;
    grid-area: TopLayer;
    display: grid;
    grid-template-rows: 30% 40% 30%;
    grid-template-areas: "Title" "Search" "Categories";
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
    grid-template-columns: 70% 30%;
    grid-template-areas: "List MFrame";

    @media (max-width: 768px) {
        grid-template-columns: 10% 80% 10%;
        grid-template-areas: ". List .";

    }
`

const List = styled.div`
    padding-left: 10%;
    padding-right: 10%;
    grid-area: List;
    display: grid;
    grid-template-columns: repeat(auto-fit, 45%);
    grid-template-rows: repeat(auto-fit, 50%);

    @media (max-width: 768px) {
        grid-template-columns: 100%;
        grid-template-rows: repeat(auto-fit, 50%);
        padding-left: 0;
    }
`

const MFrame = styled.div`
    grid-area: MFrame;
    display: grid;
    grid-template-rows: 50% 50%;
    grid-template-areas: "Map" ".";
`

const Map = styled.div`
    background-color: red;
    @media (max-width: 768px) {
        display: none;
    }
`

export default Result;