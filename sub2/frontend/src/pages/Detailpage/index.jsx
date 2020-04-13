import React from "react";
import styled from "styled-components";
import Top from "../../components/Top";
import DetailContent from "../../components/Detail";
import Map from "../../components/Map";

const Detail = ({match}) => {
    const { id } = match.params;

    return(
        <DLayer>
            <TopLayer>
                <Top></Top>
            </TopLayer>
            <CFrame>
                <DetailContent storeid={id}></DetailContent>
                <MFrame>
                    <Map></Map>
                </MFrame>
            </CFrame>
        </DLayer>
    )
}


const DLayer = styled.div`
    height: 100vh;
    display: grid;
    grid-template-rows: 140px;
    grid-template-areas: "TopLayer" "CFrame";
`
const TopLayer = styled.div`
    // height: 100%;
    width: 100%;
    grid-area: TopLayer;
    display: grid;
    grid-template-rows: 60px 80px;
    grid-template-areas: "Title" "Search";
`
const CFrame = styled.div`
    height: 100vh;
    grid-area: CFrame;
    display: grid;
    grid-template-columns: 70% 30%;
    grid-template-areas: "content MFrame";
    
    @media (max-width: 768px) {      
        grid-template-columns: 100%;
    }
`
const MFrame = styled.div`
    grid-area: MFrame;
    display: grid;
    grid-template-rows: 50% 50%;
    grid-template-areas: "Map" ".";
    @media (max-width: 768px) {      
        display: none;
    }
`

export default Detail;
