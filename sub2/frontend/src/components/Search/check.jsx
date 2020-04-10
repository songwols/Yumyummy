import React from "react";
import styled from "styled-components";

class CheckList extends React.Component{
    render(){
        return(
            <Frame>
                <SFrame>
                    <STitle>평점</STitle>
                    <SContent>
                        <label>
                        <Out type="radio" value="up3.0" name="score"></Out>
                        평점 3.0이상
                        </label><br></br>
                        <label>
                            <Out type="radio" value="up4.0" name="score"></Out>
                            평점 4.0이상
                        </label><br></br>
                        <label>
                            <Out type="radio" value="up5.0" name="score"></Out>
                            평점 5.0이상
                        </label><br></br>
                    </SContent>
                </SFrame>
                <RFrame>
                    <RTitle>리뷰</RTitle>
                    <RContent>
                        <label>
                        <Out type="radio" value="100" name="review"></Out>
                        리뷰 100개 이하
                        </label><br></br>
                        <label>
                            <Out type="radio" value="300" name="review"></Out>
                            리뷰 300개 언저리
                        </label><br></br>
                        <label>
                            <Out type="radio" value="500" name="review"></Out>
                            리뷰 500개 이상
                        </label>
                    </RContent>
                </RFrame>
            </Frame>
        )
    }
}

const Frame = styled.div`
    z-index: 1;
    display: grid;
    grid-template-rows: 50% 50%;
    grid-template-areas: "Score" "Review";
    margin-left: 23.5%;
    position: relative;
    width: 49%;
    height: 10rem;
    background-color: white;
    justify-items: center;
    text-align: center;
    border-left: 2px solid #ffde96;
    border-right: 2px solid #ffde96;
    border-bottom: 2px solid #ffde96;

    @media (max-width: 768px) {
        margin-left: 20%;
        width: 45%;
        height: 15rem;
    }
      
    @media (min-width: 768px) and (max-width: 1024px) {  
        margin-left: 23%;
    }
`
const SFrame = styled.div`
    height: 100%;
    width: 100%;
    grid-area: Score;
    display: grid;
    grid-template-columns: 20% 80%;
    grid-template-areas: "STitle SContent"
`

const STitle = styled.div`
    grid-area: STitle;
    justify-items: center;
    text-align: center;
`
const SContent = styled.div`
    grid-area: SContent;
    justify-items: center;
    text-align: center;
`

const RFrame = styled.div`
    width: 100%;
    grid-area: Review;
    display: grid;
    grid-template-columns: 20% 80%;
    grid-template-areas: "RTitle RContent"
`
const RTitle = styled.div`
    grid-area: RTitle;
    justify-items: center;
    text-align: center;
`
const RContent = styled.div`
    grid-area: RContent;
    justify-items: center;
    text-align: center;
`

const Out = styled.input`
    background: none;
`

export default CheckList;