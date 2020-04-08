import React from "react";
import styled from "styled-components";
import Top from "../../components/Top";

class My extends React.Component{
    render(){
        return(
            <MLayer>
                <TopLayer>
                    <Top></Top>
                </TopLayer>
                <DFrame>
                    <MDetail>
                        내 정보
                    </MDetail>
                </DFrame>
            </MLayer>
        )
    }
}

const MLayer = styled.div`
    height: 100vh;
    display: grid;
    grid-template-rows: 20% 80%;
    grid-template-areas: "TopLayer" "DFrame";
    background-color: pink;
`
const TopLayer = styled.div`
    height: 100%;
    width: 100%;
    grid-area: TopLayer;
    display: grid;
    grid-template-rows: 30% 40%;
    grid-template-areas: "Title" "Search";
    background-color: dodgerblue;
`
const DFrame = styled.div`
    height: 100vh;
    grid-area: Content;
    padding-top: 5%;
    padding-bottom: 5%;
    display: grid;
    grid-template-columns: 70% 30%;
    grid-template-areas: "List DFrame";
    background-color: hotpink;

    @media (max-width: 768px) {
        grid-template-columns: 10% 80% 10%;
        grid-template-areas: ". List .";

    }
`
const MDetail = styled.div`
    grid-area: content;
    display: grid;
    grid-template-rows: 70% 30%;
    grid-template-areas: "info" "review";
    background-color: yellow;
`

export default My;