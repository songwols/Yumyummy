import React from "react";
import styled from "styled-components";

class CardL extends React.Component{
    render(){
        const { post } = this.props;
        return(
            <CardLayout>
                <CardImg src={post.img}/>
                <Title className="title">
                    <T>{post.Title}</T>
                </Title>
            </CardLayout>
        )
    }
    
}


const CardLayout = styled.div`
    border: 1.5px solid black;
    position: relative;
    display: block;
    width: 100%;
    height: 0;
    overflow: hidden;
    padding-bottom: 100%;
    top: 0;
    left: 0;

    &:hover .title{
        display: block;
        background-color: #8a8a8a;
        opacity: 0.5;
        z-index: 1;
    }


`

const CardImg = styled.img`
    position: absolute;
    object-fit: cover;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`
const Title = styled.div`
    font-size: x-Large;
    position: absolute;
    object-fit: cover;
    display: none;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    @media (max-width: 768px) {
        
    }
`

const T = styled.div`
    position: absolute;
    margin-top: 40%;
    margin-left: 7%;
    z-index: 10;
`
export default CardL;