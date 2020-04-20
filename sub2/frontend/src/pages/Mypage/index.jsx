import React from "react";
import styled from "styled-components";
import Top from "../../components/Top";

import CardLayout from "../../components/ResultList";


class My extends React.Component{
    render(){
        return(
            <MyLayer>
                <TopLayer>
                    <Top></Top>
                </TopLayer>
                <MyFrame>
                    <MyProfile>
                        {/* <MyFaceName> */}
                            <MyFace>
                                <img src="https://seolyucode.github.io/imgs/thumb.png"></img>
                            </MyFace>
                            <MyName>NickName</MyName>
                        {/* </MyFaceName> */}
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
            
                        <DetailCon>
                            <CardLayout></CardLayout>
                        </DetailCon>
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
    /* background-color: pink; */
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
        "MyFace MyName ProfileEdit"
        ;
    padding-top: 3rem;
`

// const MyFaceName = styled.div`
//     grid-area: MyFaceName;
//     display: grid;
//     grid-template-columns: 1fr 2fr;
//     grid-template-areas:
//         "MyFace MyName"
//         ;
// `

const MyFace = styled.div`
    grid-area: MyFace;
    display: grid;
    transform: scale(0.8);
`

const MyName = styled.div`
    grid-area: MyName;
    display: grid;
    /* margin: 0 auto; */
    width: 100px;
    line-height: 200px;
`

const ProfileEdit = styled.div`
    margin: 0 auto;
    grid-area: ProfileEdit;
    display: grid;

    text-align: center;
    line-height: 35px;
    width: 120px;
    height: 35px;
    background-color: #fff;
    /* border: none; */
    border-radius: 45px;
    background-color: #ffde96;
    /* box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1); */
    /* transition: all 0.3s ease 0s; */
    cursor: pointer;
    /* outline: none; */
    
    margin-top: 85px;
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
    border-top: 1px solid rgba(var(--b38, 219, 219, 219), 1);
    padding-top: 1rem;
`

const Favorite = styled.div`
    grid-area: Favorite;
    display: grid;
    margin: 0 auto;
    
    font-weight: bold;
`

const Review = styled.div`
    grid-area: Review;
    display: grid;
    margin: 0 auto;
`

const Like = styled.div`
    grid-area: Like;
    display: grid;
    margin: 0 auto;
`

const Recent = styled.div`
    grid-area: Recent;
    display: grid;
    margin: 0 auto;
`

const Want = styled.div`
    grid-area: Want;
    display: grid;
    margin: 0 auto;
`

const DetailCon = styled.div`
    grid-area: DetailCon;
    display: grid;

    margin-top: -4rem;
    margin-left: -8rem;
`

export default My;