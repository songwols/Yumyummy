import React from "react";
import styled from "styled-components";
import Button from "../../assets/images/Button.png";
import StarRating from "./Star";
import ReviewCard from "./ReviewCard";
import { inject, observer } from "mobx-react";

@inject("reviewStore")
@observer
class ReviewCon extends React.Component {
  componentWillMount() {
    this.props.reviewStore.get_review(this.props.storeid);
  }
  render() {
    const reviews = this.props.reviewStore.reviews;
    return (
      <RFrame>
        <Content>
          <ReviewWriteBox>
            <ReviewStar>
              <StarRating></StarRating>
            </ReviewStar>
            <ReviewWrite>
              <ReviewText>
                <textarea
                  className="ReviewTextInput"
                  placeholder="리뷰 쓰기"
                ></textarea>
              </ReviewText>
              <ReviewSend>
                <img
                  className="SendButton"
                  src={Button}
                  width="50"
                  height="40"
                />
              </ReviewSend>
            </ReviewWrite>
          </ReviewWriteBox>
          <ReviewHeader>
            <ReviewNum>리뷰({reviews.length})</ReviewNum>
            {/* <ReviewFilter>
              <ReviewRecent>최신순</ReviewRecent>
              <ReviewRate>평점순</ReviewRate>
            </ReviewFilter> */}
          </ReviewHeader>
          <ReviewList>
            {reviews.length != 0 ? (
              reviews.map((item, index) => (
                <div>
                  <Review key={index} review={item} />
                </div>
              ))
            ) : (
              <Nothing>등록된 리뷰가 없습니다.</Nothing>
            )}
          </ReviewList>
        </Content>
      </RFrame>
    );
  }
}

const RFrame = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 70% 30%;
  grid-template-areas: "Content .";
  /* grid-template-areas: "Content ."; */
  @media (max-width: 768px) {
    grid-template-columns: 100%;
  }
`;
const Content = styled.div`
  height: 100%;
  display: grid;
  grid-area: Content;
  grid-template-columns: 10% 90%;
  grid-template-rows: 2fr 1fr 5fr;
  grid-template-areas:
    ". ReviewWriteBox"
    ". ReviewHeader"
    ". ReviewList";
`;

const ReviewWriteBox = styled.div`
  /* background: dodgerblue; */
  display: grid;
  grid-area: ReviewWriteBox;
  grid-template-rows: 1fr 2fr;
  grid-template-areas:
    "ReviewStar"
    "ReviewWrite"
    /* "ReviewSend" */;
  /* margin-left: 30px; */
`;
const ReviewStar = styled.div`
  display: grid;
  grid-area: ReviewStar;
  /* background: red; */
`;
const ReviewWrite = styled.div`
  display: grid;
  grid-area: ReviewWrite;
  /* background: black; */
  grid-template-columns: 9fr 1fr;
  grid-template-areas: "ReviewText ReviewSend";
  .ReviewTextInput {
    font-size: 1.2rem;
    height: 55px;
    width: 100%;
    border: 1.5px solid #ffde96;
    border-radius: 7px;
    flex-grow: 1;
    outline: none;
  }
`;
const ReviewText = styled.div`
  display: grid;
  grid-area: ReviewText;
`;
const ReviewSend = styled.div`
  display: grid;
  grid-area: ReviewSend;
  cursor: pointer;
  margin: 0 auto;

  .SendButton {
    margin: 0 auto;
    margin-top: 20px;
    margin-left: 20px;
  }
`;

const ReviewHeader = styled.div`
  display: grid;
  grid-area: ReviewHeader;
  /* background: pink; */
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-areas: "ReviewNum ReviewFilter";
  align-items: center;
  /* padding-left: 8%; */
  border-bottom: 0.5px solid #ffde96;
`;
const ReviewNum = styled.div`
  display: grid;
  grid-area: ReviewNum;
`;
const ReviewFilter = styled.div`
  display: grid;
  grid-area: ReviewFilter;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "ReviewRecent ReviewRate";
`;
const ReviewRecent = styled.div`
  display: grid;
  grid-area: ReviewRecent;
`;
const ReviewRate = styled.div`
  display: grid;
  grid-area: ReviewRate;
`;

const ReviewList = styled.div`
  display: grid;
  grid-area: ReviewList;
  grid-template-rows: repeat(auto-fit, 1fr);
  /* grid-template-areas: "ReviewItem"; */
  margin-top: 3%;
`;

export const Review = styled(ReviewCard)`
  /* display: grid;
  grid-area: Review; */
`;
const Nothing = styled.div`
  margin-left: 50%;
`;

export default ReviewCon;
