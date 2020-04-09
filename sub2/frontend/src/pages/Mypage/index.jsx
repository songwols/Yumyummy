import React from "react";
import styled from "styled-components";
import Top from "../../components/Top";

class My extends React.Component{
    render(){
        return(
            <MyLayer>
                <TopLayer>
                    <Top></Top>
                </TopLayer>
                <MyFrame>
                    <MyProfile>
                        <MyFaceName>
                            <MyFace>프사</MyFace>
                            <MyName>닉네임</MyName>
                        </MyFaceName>
                        <ProfileEdit>프로필 수정</ProfileEdit>
                    </MyProfile>
                    <MyDetail>
                        <DCategory>
                            <Favorite>즐겨찾기(2)</Favorite>
                            <Review>리뷰(2)</Review>
                            <Like>좋아요(2)</Like>
                            <Recent>최근 본 맛집(2)</Recent>
                            <Want>가고싶다(2)</Want>
                        </DCategory>
            
                        <DetailCon>내용</DetailCon>
                    </MyDetail>
                </MyFrame>
            </MyLayer>
        )
    }
}

const MyLayer = styled.div`
    height: 100vh;
    display: grid;
    grid-template-rows: repeat(9, 60px);
    grid-template-columns: 1fr 3fr 1fr;
    grid-template-areas:
        "TopLayer TopLayer TopLayer"
        "MyFrame MyFrame MyFrame"
        "MyFrame MyFrame MyFrame"
        "MyFrame MyFrame MyFrame"
        "MyFrame MyFrame MyFrame"
        "MyFrame MyFrame MyFrame"
        "MyFrame MyFrame MyFrame"
        "MyFrame MyFrame MyFrame"
        "MyFrame MyFrame MyFrame";
    background-color: pink;
`

const TopLayer = styled.div`
    grid-area: TopLayer;
    background-color: hotpink;
    display: grid;
    grid-template-rows: 60px 20px;    
`

const MyFrame = styled.div`
    grid-area: MyFrame;
    display: grid;
    grid-template-rows: 1fr 2fr 5fr;
    grid-template-columns: 1fr 3fr 1fr;
    grid-template-areas:
        ". . ."
        ". MyProfile ."
        ". MyDetail ."
        ;
`

const MyProfile = styled.div`
    grid-area: MyProfile;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas:
        "MyFaceName . ProfileEdit"
        ;
`

const MyFaceName = styled.div`
    grid-area: MyFaceName;
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-areas:
        "MyFace MyName"
        ;
`

const MyFace = styled.div`
    grid-area: MyFace;
    display: grid;
`

const MyName = styled.div`
    grid-area: MyName;
    display: grid;
`

const ProfileEdit = styled.div`
    grid-area: ProfileEdit;
    display: grid;
`

const MyDetail = styled.div`
    grid-area: MyDetail;
    display: grid;
    grid-template-rows: 1fr 4fr;
    grid-template-columns: repeat(5, 1fr);
    grid-template-areas:
        "DCategory DCategory DCategory DCategory DCategory"
        "DetailCon DetailCon DetailCon DetailCon DetailCon"
        "DetailCon DetailCon DetailCon DetailCon DetailCon"
        "DetailCon DetailCon DetailCon DetailCon DetailCon"
        "DetailCon DetailCon DetailCon DetailCon DetailCon"
        ;
`

const DCategory = styled.div`
    grid-area: DCategory;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-areas:
        "Favorite Review Like Recent Want"
        ;
`

const Favorite = styled.div`
    grid-area: Favorite;
    display: grid;
`

const Review = styled.div`
    grid-area: Review;
    display: grid;
`

const Like = styled.div`
    grid-area: Like;
    display: grid;
`

const Recent = styled.div`
    grid-area: Recent;
    display: grid;
`

const Want = styled.div`
    grid-area: Want;
    display: grid;
`

const DetailCon = styled.div`
    grid-area: DetailCon;
    display: grid;
`

export default My;