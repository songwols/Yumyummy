import React from "react";
import styled from "styled-components";
import psa from '../../assets/images/psa.png';

const ReviewCon = () => {
    return(
        <RFrame>
            <Content>
                <ReviewWrite>
                    <ReviewStar>
                        평점 주기
                    </ReviewStar>
                    <ReviewText>
                        리뷰 작성하기
                    </ReviewText>
                    <ReviewSend>
                        작성 버튼
                    </ReviewSend>
                </ReviewWrite>
                <ReviewHeader>
                    <ReviewNum>
                        리뷰(3)
                    </ReviewNum>
                    <ReviewFilter>
                        <ReviewRecent>최신순</ReviewRecent>
                        <ReviewRate>평점순</ReviewRate>
                    </ReviewFilter>
                </ReviewHeader>
                <ReviewList>
                    <ReviewItem>
                        <ReviewUser>
                            <Reviewer>
                                <ReviewerPsa>
                                    <img src={psa} width='80' height='80'/>
                                </ReviewerPsa>
                                <ReviewerName>
                                    닉네임
                                </ReviewerName>
                            </Reviewer>
                        </ReviewUser>
                        <ReviewerContent>
                            <ReviewerText>
                                맛있어요
                            </ReviewerText>
                        </ReviewerContent>
                        <ReviewerRating>
                            <ReviewerStar>
                                5점
                            </ReviewerStar>
                        </ReviewerRating>
                    </ReviewItem>

                </ReviewList>
            </Content>
        </RFrame>
    )
}

const RFrame = styled.div`
    height: 100%;
    display: grid;
    grid-template-areas:
        "Content"
        ;
`;
const Content = styled.div`
    height: 100%;
    display: grid;
    grid-area: Content;
    grid-template-rows: 2fr 1fr 5fr;
    grid-template-areas: 
        "ReviewWrite"
        "ReviewHeader"
        "ReviewList"
        ;
`;

const ReviewWrite = styled.div`
    background: dodgerblue;
    display: grid;
    grid-area: ReviewWrite;
    grid-template-rows: 1fr 2fr 1fr;
    grid-template-areas:
        "ReviewStar"
        "ReviewText"
        "ReviewSend"
        ;
`;
const ReviewStar = styled.div`
    display: grid;
    grid-area: ReviewStar;
    background: red;
`;
const ReviewText = styled.div`
    display: grid;
    grid-area: ReviewText;
    background: black;
`;
const ReviewSend = styled.div`
    display: grid;
    grid-area: ReviewSend;
`;

const ReviewHeader = styled.div`
    display: grid;
    grid-area: ReviewHeader;
    background: pink;
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-areas: 
        "ReviewNum ReviewFilter"
        ;
`;
const ReviewNum = styled.div`
    display: grid;
    grid-area: ReviewNum;
`;
const ReviewFilter = styled.div`
    display: grid;
    grid-area: ReviewFilter;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 
        "ReviewRecent ReviewRate"
        ;
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
    // grid-template-rows: repeat(5, 2fr);
    grid-template-areas:
        "ReviewItem"
        ;
`;
const ReviewItem = styled.div`
    display: grid;
    background: orange;
    grid-area: ReviewItem;
    grid-template-columns: 1fr 4fr 1fr;
    grid-template-areas: 
        "ReviewUser ReviewContent ReviewRating"
        ;
`;  
const ReviewUser = styled.div`
    // display: grid;
    grid-area: ReviewUser;
    // cursor: pointer;
`;
const Reviewer = styled.div`
    display: grid;
    grid-area: Reviewer;
    cursor: pointer;
    margin: 0 auto;
    grid-template-rows: 2fr 1fr;
    grid-template-areas: 
        "ReviewerPsa"
        "ReviewerName"
        ;
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
    // display: grid;
    grid-area: ReviewContent;
`;
const ReviewerText = styled.div`
    display: grid;
    grid-area: ReviewText;
`;
const ReviewerRating = styled.div`
    // display: grid;
    grid-area: ReviewRating;
    margin: 0 auto;
`;
const ReviewerStar = styled.div`
    display: grid;
    grid-area: ReviewerStar;    
`;


export default ReviewCon;