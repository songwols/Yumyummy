import React from "react";
import styled from "styled-components";
import Top from "../../components/Top";
import BestLayout from "../../components/BestList";
import StarImag from "../../assets/images/Star.png";
import ReviewImag from "../../assets/images/Review.png";
import MapContainer from "../../components/Map";

const Best = ({ match }) => {
  const { address } = match.params;

  return (
    <RFrame>
      <TopLayer>
        <Top></Top>
        <Filter>
          <GradeReview>
            <Grade>
              <img src={StarImag} width="70" height="60" />
              평점순
            </Grade>
            <Review>
              <img src={ReviewImag} width="70" height="60" />
              리뷰순
            </Review>
          </GradeReview>
        </Filter>
      </TopLayer>
      <LFrame>
        <BestLayout address={address}></BestLayout>
        <MFrame>
          <MapContainer></MapContainer>
        </MFrame>
      </LFrame>
    </RFrame>
  );
};

const RFrame = styled.div`
  height: 100%;
  display: grid;
  /* grid-template-rows: 200px; */
  grid-template-rows: 200px 100px;
  grid-template-areas: "TopLayer" "Filter" "Content";
  @media (max-width: 768px) {
    grid-template-areas: "TopLayer" "Filter" "MFrame" "Content";
  }
`;

const TopLayer = styled.div`
  height: 100%;
  grid-area: TopLayer;
  display: grid;
  grid-template-rows: 30% 40% 30%;
  /* grid-template-areas: "Title" "Search" "Categories"; */
  grid-template-areas: "Title" "Search" "Filter";
`;

const Filter = styled.div`
  grid-area: Filter;
  display: grid;

  justify-items: center;
  text-align: center;

  grid-template-columns: 1fr 4fr 1fr;
  grid-template-areas: ". GradeReview .";

  @media (max-width: 768px) {
    grid-template-rows: 1fr;
    grid-template-areas: ". GradeReview .";
  }
`;

const GradeReview = styled.div`
  grid-area: GradeReview;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-areas: ". Grade . Review .";
  @media (max-width: 768px) {
    padding-bottom: 20px;
    margin-left: -20px;
  }
`;
const Grade = styled.div`
  grid-area: Grade;

  display: grid;
  border-radius: 45px;
  cursor: pointer;

  margin: 0 auto;
`;
const Review = styled.div`
  grid-area: Review;

  display: grid;
  border-radius: 45px;
  cursor: pointer;

  margin: 0 auto;
`;

const LFrame = styled.div`
  height: 100vh;
  grid-area: Content;
  padding-top: 5%;
  padding-bottom: 5%;
  display: grid;
  grid-template-columns: 70% 30%;
  grid-template-areas: "List MFrame";

  @media (max-width: 768px) {
    grid-template-rows: 30% 70%;
    grid-template-areas: "Map";
    grid-template-columns: 10% 80% 10%;
    grid-template-areas: ". List .";
  }
`;
const MFrame = styled.div`
  grid-area: MFrame;
  display: grid;
  grid-template-rows: 50% 50%;
  grid-template-areas: "Map" ".";
  @media (max-width: 768px) {
    display: none;
  }
`;

export default Best;
