import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';

const Bar = () => {
    return(
        <Layout>
            <Home>홈</Home>
            <CLayout>
            <C>카테고리</C>
                <Category className="bar">
                    <Link to={"/"} style={{ textDecoration: "none" }}>
                    <SelectCategory>양식</SelectCategory>
                    </Link>

                    <Link to={"/"} style={{ textDecoration: "none" }}>
                    <SelectCategory>한식</SelectCategory>
                    </Link>

                    <Link to={"/"} style={{ textDecoration: "none" }}>
                    <SelectCategory>중식</SelectCategory>
                    </Link>
                </Category>
            </CLayout>
            <Div3>추천</Div3>
            <Div4>뭐야</Div4>
        </Layout>
    )
}

const Layout = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-areas: ". home category Div3 Div4 .";
`
const Home = styled.div`
    grid-area: home;
    padding-top: 10px;
    justify-items: center;
    text-align: center;
    cursor : pointer;
    :hover{
        background-color: #ffde96; 
    }
`

const Div3 = styled.div`
    grid-area: Div3;
    padding-top: 10px;
    justify-items: center;
    text-align: center;
    cursor : pointer;
    :hover{
        background-color: #ffde96; 
    }
`
const Div4 = styled.div`
    grid-area: Div4;
    padding-top: 10px;
    justify-items: center;
    text-align: center;
    cursor : pointer;
    :hover{
        background-color: #ffde96; 
    }
`
const CLayout = styled.div`
    grid-area: category;
    &:hover .bar {
        display: block;
    }
    :hover{
        background-color: #ffde96; 
    }
`
const C = styled.div`
    padding-top: 10px;
    padding-bottom: 10px;
    justify-items: center;
    text-align: center;
    cursor : pointer;
    &:hover .bar {
        display: block;
    }
`
const Category = styled.div`
    display: none;
    position: relative;
    background-color: #fafafa;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    &:hover .bar {
        display: block;
    }
    @media (max-width: 768px) {
    }

    @media (min-width: 768px) and (max-width: 1024px) {  
    }
`
const SelectCategory = styled.a`
  color: black;
  padding: 10px 12px;
  text-decoration: none;
  display: block;
  text-align: center;
  cursor: pointer;
  :hover {
    background-color: #ffeec9;
  }
`;

export default Bar;