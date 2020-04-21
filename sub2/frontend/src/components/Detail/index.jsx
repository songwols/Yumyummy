import React from "react";
import { inject, observer } from "mobx-react";
import styled from "styled-components";
import MapContainer from "../../components/Map";
import ReviewCon from "../../components/Review"

export const Mapp = styled(Map)`
    display: none !important;

    @media (max-width: 768px) {
        display: block;
    }
`

class DetailContent extends React.Component{
    componentDidMount(){
        console.log(this.props)
    }

    render(){
        return(
        <DCFrame>
        <IRFrame>
            <Info>
                <Title>{localStorage.getItem("store_name")}</Title>
                <Frame>
                    <RInfo>
                        <DInfo>
                            <DIVL>
                                <DIV>주소 : {localStorage.getItem("address")}</DIV>
                                <DIV>영업시간 : 몰라</DIV>
                                <DIV>휴무일 : 미정</DIV>
                                <DIV>전화번호 : {localStorage.getItem("tel")}</DIV>
                            </DIVL>
                            <Graph>
                                
                                그래프
                                <div>d</div>
                            </Graph>
                        </DInfo>
                        <Menu>
                            <DIV>메뉴</DIV>
                            <div>1</div>
                            <div>1</div>
                            <div>1</div>
                            <div>1</div>
                            <div>1</div>
                        </Menu>
                        
                    </RInfo>
                </Frame>
            </Info>
            <Review>리뷰</Review>
        </IRFrame>
    </DCFrame>
        )
    }
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
    height: 100vh;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-areas: "detailinfo menu";

    @media (max-width: 768px) {
        grid-template-columns: none;
        grid-template-rows: 50% 50%;
        grid-template-areas: "detailinfo" "menu";
    }
`

const DInfo = styled.div`
    grid-area: detailinfo;
    display: grid;
    grid-template-rows: 50% 50%;
    grid-template-areas: "divL" "graph";

    @media (max-width: 768px) {
        display: block;
        grid-template-rows: 50% 50%;
        grid-template-areas: "divL" "graph";
        
    }
`
const DIVL = styled.div`
    grid-area: divL;
`
const Graph = styled.div`
    grid-area: graph;
`

const Menu = styled.div`
    grid-area: menu
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


export default inject(({ storeStore }) => ({
    posts: storeStore.storeItems,
    test: storeStore,
  }))(observer(DetailContent));
  