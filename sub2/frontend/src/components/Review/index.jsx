import React from "react";
import styled from "styled-components";
import psa from '../../assets/images/psa.png';
import Button from '../../assets/images/Button.png';

const ReviewCon = () => {
    return(
        <RFrame>
            <Content>
                <ReviewWriteBox>
                    <ReviewStar>
                        평점 주기
                    </ReviewStar>
                    <ReviewWrite>
                        <ReviewText>
                            <textarea className="ReviewTextInput" placeholder="리뷰 쓰기"></textarea>
                        </ReviewText>
                        <ReviewSend>
                            <img className="SendButton" src={Button} width='50' height='40'/>
                        </ReviewSend>
                    </ReviewWrite>
                </ReviewWriteBox>
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
        "ReviewWriteBox"
        "ReviewHeader"
        "ReviewList"
        ;
`;

const ReviewWriteBox = styled.div`
    /* background: dodgerblue; */
    display: grid;
    grid-area: ReviewWriteBox;
    grid-template-rows: 1fr 2fr;
    grid-template-areas:
        "ReviewStar"
        "ReviewWrite"
        /* "ReviewSend" */
        ;
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
    grid-template-areas:
        "ReviewText ReviewSend"
        ;
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
    grid-template-areas: 
        "ReviewNum ReviewFilter"
        ;
    align-items: center;
    padding-left: 8%;
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
    margin-top: 3%;
`;
const ReviewItem = styled.div`
    display: grid;
    /* background: orange; */
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