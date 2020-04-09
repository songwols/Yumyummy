import React from "react";
import styled from "styled-components";
import Top from "../../components/Top";

class My extends React.Component{
    render(){
        return(
            <MLayer>
                <TopLayer>
                    <Top></Top>
                </TopLayer>
                <DFrame>
                    <MProfile>
                        내 프로필
                    </MProfile>
                    <MDetail>
                        내 정보
                    </MDetail>
                </DFrame>
            </MLayer>
        )
    }
}

const MLayer = styled.div`
    height: 100vh;
    display: grid;
    grid-template-rows: 20% 80%;
    grid-template-areas: "TopLayer" "DFrame";
    background-color: pink;
`
const TopLayer = styled.div`
    height: 100%;
    width: 100%;
    grid-area: TopLayer;
    display: grid;
    grid-template-rows: 30% 40%;
    grid-template-areas: "Title";
    background-color: dodgerblue;
`
// const DFrame = styled.div`
//     height: 100vh;
//     grid-area: Content;
//     padding-top: 5%;
//     padding-bottom: 5%;
//     display: grid;
//     grid-template-columns: 70% 30%;
//     grid-template-areas: ". MDetail .";;
//     background-color: hotpink;

//     @media (max-width: 768px) {
//         grid-template-columns: 10% 80% 10%;
//         grid-template-areas: ". MDetail .";

//     }
// `
const DFrame = styled.div`
    grid-area: content;
    display: grid;
    grid-template-rows: 30% 70%;
    grid-template-areas: "MProfile" "MDetail";
    background-color: yellow;
`

const MProfile = styled.div`
    grid-area: mprofile;
    border-bottom: 1px solid #ffde96; 
`

const MDetail = styled.div`
    grid-area: mdetail;
    padding-top: 1rem;
`

export default My;