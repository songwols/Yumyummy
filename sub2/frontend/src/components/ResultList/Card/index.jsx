import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Links = styled(Link)`
    color: black;
`

const Card = ({ post }) => {
    const { STORE_ID, NAME, ADDRESS, OPEN, CLOSE, TEL, HOLIDAY, LATITUDE, LONGITUDE, AREA } = post;
    return(
        <Links to={"/detail/"+STORE_ID} style={{ textDecoration: "none"}}>
        <Div>
            <Title>{NAME}</Title>
            <Address>주소 : {ADDRESS}</Address>
            <Time>영업시간 : {OPEN} - {CLOSE}</Time>
            <Tel>전화번호 : {TEL}</Tel>
        </Div>
        </Links>
    )
}

const Div = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    border: 1px solid #ffde96; 
    outline: none;
    box-shadow: none;
    grid-template-rows: repeat(5, 1fr);
    grid-template-areas: "title" "address" "time" "tel" ".";
    // padding-left: 1rem;
    align-content: center;
`
const Title = styled.div`
    grid-area: title;
    font-size: x-large;
`
const Address = styled.div`
    grid-area: address;
    font-size: large;
`
const Time = styled.div`
    grid-area: time;
    font-size: large;
`
const Tel = styled.div`
    grid-area: tel;
    font-size: large;
`

export default Card;