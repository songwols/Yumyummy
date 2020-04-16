import React from "react";
import styled from "styled-components";
import Top from "../../components/Top";
import { Link } from 'react-router-dom';
import CardLayout from "../../components/ResultList";
import Map from "../../components/Map";
import StarImag from '../../assets/images/Star.png';
import ReviewImag from '../../assets/images/Review.png';
import KoreanImag from '../../assets/images/Korean.png';
import ChineseImag from '../../assets/images/Chinese.png';
import JapaneseImag from '../../assets/images/Japanese.png';
import WesternImag from '../../assets/images/Western.png';
import CafeImag from '../../assets/images/Cafe.png';
import OtherImag from '../../assets/images/Other.png';

class Result extends React.Component{
    render(){
        return(
            <RFrame>
                <TopLayer>
                    <Top></Top>
                    <Filter>
                        <GradeReview>
                            <Grade>
                                <img src={StarImag} width='70' height='60'/>
                                평점순
                            </Grade>
                            <Review>
                                <img src={ReviewImag} width='70' height='60'/>
                                리뷰순
                            </Review>
                        </GradeReview>
                        <Menus>
                            <Korean>
                                <img src={KoreanImag} width='80' height='60'/>
                                한식
                            </Korean>
                            <Chinese>
                                <img src={ChineseImag} width='80' height='60'/>
                                중식
                            </Chinese>
                            <Japanese>
                                <img src={JapaneseImag} width='80' height='60'/>
                                일식
                            </Japanese>
                            <Western>
                                <img src={WesternImag} width='80' height='60'/>
                                양식
                            </Western>
                            <Cafe>
                                <img src={CafeImag} width='80' height='60'/>
                                카페
                            </Cafe>
                            <Other>
                                <img src={OtherImag} width='50' height='60'/>
                                기타
                            </Other>
                        </Menus>
                    </Filter>
                    {/* <Categories>
                        <Link to="/result">한식</Link>&nbsp;
                        <Link to="/result">중식</Link>&nbsp;
                        <Link to="/result">일식</Link>&nbsp;
                        <Link to="/result">양식</Link>&nbsp;
                        <Link to="/result">카페</Link>&nbsp;
                    </Categories> */}
                </TopLayer>
                <LFrame>
                    <CardLayout></CardLayout>
                    <MFrame>
                        <Map></Map>
                    </MFrame>
                </LFrame>
            </RFrame>
        )
    }
}

const RFrame = styled.div`
    height: 100%;
    display: grid;
    /* grid-template-rows: 200px; */
    grid-template-rows: 200px 100px;
    grid-template-areas: "TopLayer" "Filter" "Content"
`

const TopLayer = styled.div`
    height: 100%;
    grid-area: TopLayer;
    display: grid;
    grid-template-rows: 30% 40% 30%;
    /* grid-template-areas: "Title" "Search" "Categories"; */
    grid-template-areas: "Title" "Search" "Filter";
`

const Filter = styled.div`
    grid-area: Filter;
    display: grid;

    justify-items: center;
    text-align: center;
    
    /* grid-template-rows: 1fr 4fr 1fr; */
    grid-template-columns: 1fr 2fr 4fr 1fr;
    grid-template-areas:
        ". GradeReview Menus ."
        ;

    @media (max-width: 768px) {
        grid-template-rows: 1fr 1fr;
        grid-template-areas:
            ". GradeReview GradeReview ."
            ". Menus Menus ."
            ;
    }   
`

const GradeReview = styled.div`
    grid-area: GradeReview;
    display: grid;
    /* padding-bottom: 10px; */
    /* padding-top: 20px; */
    /* background: dodgerblue; */
    grid-template-columns: repeat(5, 1fr);
    grid-template-areas:
        ". Grade . Review ."
        ;
    @media (max-width: 768px) {
    padding-bottom: 20px;
    }
`
const Grade = styled.div`
    grid-area: Grade;

    display: grid;
    border-radius: 45px;
    /* background-color: #ffde96; */
    cursor: pointer;

    margin: 0 auto;
    /* text-align: center; */
    /* line-height: 35px; */
    /* width: 100px; */
    /* height: 35px; */
`
const Review = styled.div`
    grid-area: Review;

    display: grid;
    border-radius: 45px;
    /* background-color: #ffde96; */
    cursor: pointer;

    margin: 0 auto;
    /* text-align: center; */
    /* line-height: 35px; */
    /* width: 100px; */
    /* height: 35px; */
`
const Menus = styled.div`
    grid-area: Menus;
    display: grid;

    /* background: pink; */

    grid-template-columns: repeat(6, 1fr);
    grid-template-areas:
        "Korean Chinese Japanese Western Cafe Other"
        ;
`
const Korean = styled.div`
    grid-area: Korean;
    display: grid;
    cursor: pointer;
    margin: 0 auto;
`
const Chinese = styled.div`
    grid-area: Chinese;
    display: grid;
    cursor: pointer;
    margin: 0 auto;
`
const Japanese = styled.div`
    grid-area: Japanese;
    display: grid;
    cursor: pointer;
    margin: 0 auto;
`
const Western = styled.div`
    grid-area: Western;
    display: grid;
    cursor: pointer;
    margin: 0 auto;
`
const Cafe = styled.div`
    grid-area: Cafe;
    display: grid;
    cursor: pointer;
    margin: 0 auto;
`

const Other = styled.div`
    grid-area: Other;
    display: grid;
    cursor: pointer;
    margin: 0 auto;
`

/* const Categories = styled.div`
    grid-area: Categories;
    padding-top: .5rem;
    justify-items: center;
    text-align: center;
    font-size: large;
` */
const LFrame = styled.div`
    height: 100vh;
    grid-area: Content;
    padding-top: 5%;
    padding-bottom: 5%;
    display: grid;
    grid-template-columns: 70% 30%;
    grid-template-areas: "List MFrame";

    @media (max-width: 768px) {
        grid-template-columns: 10% 80% 10%;
        grid-template-areas: ". List .";

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

export default Result;