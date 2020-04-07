import React from "react";
import styled from "styled-components";
import Top from "../../components/Top";

class Detail extends React.Component{
    render(){
        return(
            <DLayer>
                <TopLayer>
                    <Top></Top>
                </TopLayer>
                <CFrame>
                    <Content>
                        <Info>정보</Info>
                        <Review>리뷰</Review>
                    </Content>   
                </CFrame>
            </DLayer>
        )
    }
}

const DLayer = styled.div`
    height: 100vh;
    display: grid;
    grid-template-rows: 20% 80%;
    grid-template-areas: "TopLayer" "CFrame";
`
const TopLayer = styled.div`
    height: 100%;
    width: 100%;
    grid-area: TopLayer;
    display: grid;
    grid-template-rows: 30% 40%;
    grid-template-areas: "Title" "Search";
`
const CFrame = styled.div`
    padding-left: 5%;
    grid-area: CFrame;
    display: grid;
    grid-template-columns: 15% 70% 15%;
    grid-template-areas: ". content .";
`
const Content = styled.div`
    grid-area: content;
    display: grid;
    grid-template-rows: 70% 30%;
    grid-template-areas: "info" "review";
`
const Info = styled.div`
    grid-area: info;
    border-bottom: 1px solid #ffde96; 
`

const Review = styled.div`
    grid-area: review;
    padding-top: 1rem;
`
export default Detail;