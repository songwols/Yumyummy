import React from "react";
import styled from "styled-components";
import Top from "../../components/Top";
import { inject, observer } from "mobx-react";
import MyReview from "../../components/MyReview";
import Here from "../../components/Here";

@inject("reviewStore", "userStore", "authStore")
@observer
class My extends React.Component {
    componentWillMount() {
        // this.props.reviewStore.get_myreview(
        //   this.props.userStore.currentUser.user_id
        // );
        //console.log(this.props.authStore.name);
      }
      render() {
        return(
            <MyLayer>
                <TopLayer>
                    <Top></Top>
                    <ProfileFrame>
                    <MyProfile>
                        <MyFace>
                        <IMG src="https://image.flaticon.com/icons/svg/660/660611.svg"></IMG>
                        </MyFace>
                        <MyName>{window.sessionStorage.getItem("name")}</MyName>
                        <ProfileEdit>프로필 수정</ProfileEdit>
                    </MyProfile>
                    </ProfileFrame>
                </TopLayer>
                <BottomLayer>
                    <CFrame>
                        <Title>
                            <Review>리뷰()</Review>
                            <Want>여기어때?</Want>
                        </Title>
                        <Content>
                            <MyReviewList></MyReviewList>
                            <RHere></RHere>
                        </Content>
                    </CFrame>
                </BottomLayer>
            </MyLayer>
        )
      }

}

const MyLayer = styled.div`
    height: 100vh;
    display: grid;
    grid-template-rows: 350px;
    grid-template-areas: "TopLayer" "BottomLayer";
`
const TopLayer = styled.div`
    height: 100%;
    grid-area: TopLayer;
    display: grid;
    grid-template-rows: 60px 80px;
    grid-template-areas: "Title" "Search" "profile";
`;

const ProfileFrame = styled.div`
    height: 100%;
    grid-area: profile;
    display: grid;
    grid-template-columns: 15% 70% 15%;
    grid-template-areas: ". pinfo .";
`
const MyProfile = styled.div`
    height: 100%;
    grid-area: pinfo;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas: "MyFace MyName ProfileEdit";
`;

const MyFace = styled.div`
  grid-area: MyFace;
  height: 50%
transform: scale(0.5);

  :hover {
    animation: psa 1s forwards;
  }

  @keyframes psa {
    0% {
      opacity: 0.8;
      transform: scale(0.5);
    }

    50% {
      opacity: 1;
      transform: scale(0.7);
    }

    100% {
      opacity: 1;
      transform: scale(0.6);
    }
  }
`;

const IMG = styled.img`

width: 10rem;
height: 10rem;

    object-fit: cover;

`

const MyName = styled.div`
  grid-area: MyName;
  display: grid;
  width: 100px;
  line-height: 200px;
`;

const ProfileEdit = styled.div`
    margin: 0 auto;
    grid-area: ProfileEdit;
    display: grid;

    text-align: center;
    line-height: 35px;
    width: 120px;
    height: 35px;
    background-color: #fff;
    border-radius: 45px;
    background-color: #ffde96;
    cursor: pointer;
    
    margin-top: 85px;

    :hover {
        animation: edit 1s forwards;
    }

    @keyframes edit {
    0% {
        opacity: 0.8;
        transform: scale(0.8);
    }

    50% {
        opacity: 1;
        transform: scale(1.1);
    }

    100% {
        opacity: 1;
        transform: scale(1);
    }
`;

const BottomLayer = styled.div`
    height: 100%;
    grid-area: BottomLayer;
    display: grid;
    grid-template-columns: 15% 70% 15%;
    grid-template-areas: ". CFrame .";
`

const CFrame = styled.div`
    display: grid;
    grid-area: CFrame;
    grid-template-rows: 15% 85%;
    grid-template-areas: "title" "content";
`

const Title = styled.div`
    grid-area: title;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas: "Review Want";
`

const Review = styled.div`
    grid-area: Review;
    margin: 0 auto;
    padding-top: 1rem;
`;

const Want = styled.div`
    grid-area: Want;
    margin: 0 auto;
    padding-top: 1rem;
`;

const Content = styled.div`
    grid-area: content;
`
export const MyReviewList = styled(MyReview)`
    display: none !important;
`;
export const RHere = styled(Here)`
    display: block;
`;

export default My;
