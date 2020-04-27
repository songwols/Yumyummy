import React from "react";
import { inject, observer } from "mobx-react";
import styled from "styled-components";
import face from "../../assets/images/face.png";
import restaurant from "../../assets/images/restaurant.png";


export const Mapp = styled(Map)`
  display: none !important;

  @media (max-width: 768px) {
    display: block;
  }
`;

@inject("storeStore", "menuStore")
@observer
class DetailContent extends React.Component {
  componentWillMount() {
    window.scrollTo(0,0);
    this.props.storeStore.detail(this.props.storeid);
    this.props.menuStore.get_menu(this.props.storeid);
  }

  render() {
    const detailpost = this.props.storeStore.detailPost;
    const menus = this.props.menuStore.menus;
    return (
      <DCFrame>
        <IRFrame>
          <Info>
            <Title>
              <FaceIcon><img src={face} width="30" height="30" /></FaceIcon>
              <RTitle>{detailpost.store_name}식당 이름</RTitle>
              <ResIcon><img src={restaurant} width="30" height="25" /></ResIcon>
            </Title>            
            <Frame>
              <RInfo>
                <DInfo>
                  <DIVL>
                    <DIV>주소 : {detailpost.address}</DIV>
                    <DIV>영업시간 : 몰라</DIV>
                    <DIV>휴무일 : 미정</DIV>
                    <DIV>전화번호 : {detailpost.tel}</DIV>
                  </DIVL>
                  <Graph>
                    그래프
                    <div>d</div>
                  </Graph>
                </DInfo>
                <Menu>
                  <Div>메뉴</Div>
                  {menus.length !== 0 ? (
                    menus.map((item, index) => (
                      <DIV>
                        {item.menu} - {item.price}
                      </DIV>
                    ))
                  ) : (
                    <Nothing>등록된 메뉴가 없습니다.</Nothing>
                  )}
                </Menu>
              </RInfo>
            </Frame>
          </Info>
          {/* <Review>리뷰</Review> */}
        </IRFrame>
      </DCFrame>
    );
  }
}

const Div = styled.div`
  justify-items: center;
  align-items: center;
  padding-bottom: 0.8rem;
  font-size: 1.5rem;
`;
const Nothing = styled.div`
  margin-left: 50%;
`;

const DCFrame = styled.div`
  grid-area: content;
  display: grid;
  grid-template-columns: 10% 80% 10%;
  grid-template-areas: ". irframe .";
`;

const IRFrame = styled.div`
  grid-area: irframe;
  display: grid;
  grid-template-rows: 75% 25%;
  grid-template-areas: "info" "review";
`;

const Info = styled.div`
  grid-area: info;
  /* border-bottom: 1px solid #ffde96; */
  display: grid;
  grid-template-rows: 10% 90%;
  grid-template-areas: "title" "frame";
`;

const Title = styled.div`
  grid-area: title;
  display: grid;
  font-size: xx-large;
  align-items: center;
  justify-items: center;
  float: left;
  border-bottom: 1px solid #e9e9e9;
  line-height: 60px;
  grid-template-columns: 10% 80% 10%;
  grid-template-areas: "ResIcon RTitle FaceIcon";
  /* background: #ffde96; */

  :hover {
    border-bottom: 1px solid #ffde96;
    color: #281c07;
  }
`;

const ResIcon = styled.div`
  grid-area: ResIcon;
  display: grid;
`;

const RTitle = styled.div`
  grid-area: RTitle;
  display: grid;
  text-align: left;
`;

const FaceIcon = styled.div`
  grid-area: FaceIcon;
  display: grid;
`;

const Frame = styled.div`
  grid-area: frame;
  display: grid;
  grid-template-rows: 0 100%;
  grid-template-areas: "Map" "RInfo";
  margin-top: 3%;

  @media (max-width: 768px) {
    grid-template-rows: 33% 66%;
    grid-template-areas: "Map" "RInfo";
  }
`;

const RInfo = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-areas: "detailinfo menu";
  /* background: pink; */

  @media (max-width: 768px) {
    grid-template-columns: none;
    grid-template-rows: 50% 50%;
    grid-template-areas: "detailinfo" "menu";
  }
`;

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
`;
const DIVL = styled.div`
  grid-area: divL;
`;
const Graph = styled.div`
  grid-area: graph;
`;

const Menu = styled.div`
  grid-area: menu;
`;

const DIV = styled.div`
  justify-items: center;
  align-items: center;
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
`;

const Review = styled.div`
  grid-area: review;
  padding-top: 1rem;
  border-bottom: 1px solid #ffde96;
`;

export default inject(({ storeStore }) => ({
  posts: storeStore.storeItems,
  test: storeStore,
}))(observer(DetailContent));
