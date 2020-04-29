import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { inject, observer } from "mobx-react";
import psa from "../../../assets/images/psa.png";

@inject("storeStore", "reviewStore")
@withRouter
@observer
class ReviewCard extends React.Component {
  componentDidMount() {
    // console.log(this.props.post)
  }

  render() {
    const { review } = this.props;

    return (
      <ReviewItem>
        <ReviewUser>
          <Reviewer>
            <ReviewerPsa>
              <img src={psa} width="80" height="80" />
            </ReviewerPsa>
          </Reviewer>
        </ReviewUser>
        <ReviewerContent>
          <ReviewerText>{review.content}</ReviewerText>
        </ReviewerContent>
        <ReviewerRating>
          <ReviewerStar>{review.total_score}</ReviewerStar>
        </ReviewerRating>
      </ReviewItem>
    );
  }
}

const ReviewItem = styled.div`
  display: grid;
  /* background: orange; */
  grid-area: ReviewItem;
  grid-template-columns: 1fr 4fr 1fr;
  grid-template-areas: "ReviewUser ReviewContent ReviewRating";
`;
const ReviewUser = styled.div`
  grid-area: ReviewUser;
  display: grid;
  cursor: pointer;
`;
const Reviewer = styled.div`
  display: grid;
  grid-area: Reviewer;
  cursor: pointer;
  margin: 0 auto;
  grid-template-rows: 2fr 1fr;
  grid-template-areas:
    "ReviewerPsa"
    "ReviewerName";
`;
const ReviewerPsa = styled.div`
  display: grid;
  grid-area: ReviewerPsa;
  cursor: pointer;
  margin: 0 auto;
`;
const ReviewerName = styled.div`
  display: grid;
  grid-area: ReviewerName;
  cursor: pointer;
  margin: 0 auto;
`;
const ReviewerContent = styled.div`
  display: grid;
  grid-area: ReviewContent;
`;
const ReviewerText = styled.div`
  display: grid;
  grid-area: ReviewText;
`;
const ReviewerRating = styled.div`
  display: grid;
  grid-area: ReviewRating;
  margin: 0 auto;
`;
const ReviewerStar = styled.div`
  display: grid;
  grid-area: ReviewerStar;
`;

export default ReviewCard;
