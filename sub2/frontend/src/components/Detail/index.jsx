import React from "react";
import { inject, observer } from "mobx-react";
import styled from "styled-components";
import Map from "../../components/Map";
import ReviewCon from "../../components/Review"

export const Mapp = styled(Map)`
    display: none !important;

    @media (max-width: 768px) {
        display: block;
    }
`

const DetailContent = ({storeid, posts}) => {
    const post = posts.get(storeid);
    const { STORE_ID, NAME, ADDRESS, OPEN, CLOSE, TEL, HOLIDAY, LATITUDE, LONGITUDE, AREA } = post;
    
    return(
        <DCFrame>
            <IRFrame>
                <Info>
                    <Title>{NAME}</Title>
                    <Frame>
                        <Mapp></Mapp>
                        <RInfo>
                            <DIV>주소 : {ADDRESS}</DIV>
                            <DIV>영업시간 : {OPEN} - {CLOSE}</DIV>
                            <DIV>휴무일 : {HOLIDAY}</DIV>
                            <DIV>전화번호 : {TEL}</DIV>
                            <DIV>메뉴</DIV>
                        </RInfo>
                    </Frame>
                </Info>
                <Review>
                    <ReviewCon></ReviewCon>
                </Review>
            </IRFrame>
        </DCFrame>
    )
    
}

const DCFrame = styled.div`
    grid-area: content;
    display: grid;
    grid-template-columns: 10% 80% 10%;
    grid-template-areas: ". irframe .";
`

const IRFrame = styled.div`
    grid-area: irframe;
    display: grid;
    grid-template-rows: 75% 25%;
    grid-template-areas: "info" "review";
`

const Info = styled.div`
    grid-area: info;
    border-bottom: 1px solid #ffde96; 
    display: grid;
    grid-template-rows: 10% 90%;
    grid-template-areas: "title" "frame";
`

const Title = styled.div`
    grid-area: title;
    font-size: xx-large;
    align-items: center;
    justify-items: center;
    float: left;
`

const Frame = styled.div`
    grid-area: frame;
    display: grid;
    grid-template-rows: 0 100%;
    grid-template-areas: "Map" "RInfo";

    @media (max-width: 768px) {
        grid-template-rows: 33% 66%;
        grid-template-areas: "Map" "RInfo";
    }
`

const RInfo = styled.div`

`

const DIV = styled.div`
    justify-items: center;
    align-items: center;
    padding-top: .3rem;
    padding-bottom: .3rem;
`

const Review = styled.div`
    grid-area: review;
    padding-top: 1rem;
`


export default inject(({ testStore }) => ({
    posts: testStore.sItems
  }))(observer(DetailContent));