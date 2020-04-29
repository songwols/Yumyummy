import React from "react";
import styled from "styled-components";
import Top from "../../components/Top";
import DetailContent from "../../components/Detail";
import MapContainer from "../../components/Map";
import ReviewCon from "../../components/Review";

const Detail = ({ match }) => {
  const { id } = match.params;

  return (
    <DLayer>
      <TopLayer>
        <Top></Top>
      </TopLayer>
      <CFrame>
        <DetailF storeid={id}></DetailF>
        {/* <MFrame>
          <MapContainer storeid={id}></MapContainer>
        </MFrame> */}
        {/* <MFrame storeid={id}></MFrame> */}
      </CFrame>
      <ReviewCon storeid={id}></ReviewCon>
    </DLayer>
  );
};

const DLayer = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 140px;
  grid-template-areas: "TopLayer" "CFrame";
`;
const TopLayer = styled.div`
  // height: 100%;
  width: 100%;
  grid-area: TopLayer;
  display: grid;
  grid-template-rows: 60px 80px;
  grid-template-areas: "Title" "Search";
`;
const CFrame = styled.div`
  height: 80vh;
  grid-area: CFrame;
  /* display: grid; */

  /* grid-template-columns: 50% 50%;
  grid-template-areas: "DetailContent" "MFrame";

  @media (max-width: 768px) {
    grid-template-columns: 100%;
  } */
`;
export const MFrame = styled(MapContainer)`
  width: 50%;
  box-sizing: border-box;
  float: right;

  @media (max-width: 768px) {
    display: none;
  }
`;
export const DetailF = styled(DetailContent)`
  width: 50%;
  float: left;
  box-sizing: border-box;
`;

export default Detail;
