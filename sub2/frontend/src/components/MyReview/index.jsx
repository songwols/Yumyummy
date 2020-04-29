import React from "react";
import styled from "styled-components";
import Button from "../../assets/images/Button.png";
import StarRating from "./Star";
import ReviewCard from "./ReviewCard";
import { inject, observer } from "mobx-react";

@inject("reviewStore")
@observer
class MyReview extends React.Component {
  componentWillMount() {
    this.props.reviewStore.get_myreview(localStorage.getItem("name"));
  }
  render() {
    const reviews = this.props.reviewStore.reviews;
    return (
      <ReviewList>
        {reviews.length !== 0 ? (
          reviews.map((item, index) => (
            <div>
              <Review key={index} review={item} />
            </div>
          ))
        ) : (
          <Nothing>등록된 리뷰가 없습니다.</Nothing>
        )}
      </ReviewList>
    );
  }
}
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

export default MyReview;
