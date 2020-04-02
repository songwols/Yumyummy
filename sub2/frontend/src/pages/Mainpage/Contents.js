import React from "react";
import styled from "styled-components";

const Contents = () => {
    return(
        <Layout>
            <Content>test</Content>
        </Layout>
    )
}

const Layout = styled.div`
    width: 100vw;
    display: grid;
    grid-template-columns: 10% 80% 10%;
    grid-template-areas: ". content ."
`
const Content = styled.div`
    grid-area: content;
    padding: 2%;
    display: grid;
    grid-template-columns: repeat(auto-fit, 33%);
    grid-template-rows: repeat(auto-fit, 1fr);

    @media (max-width: 768px) {
        grid-template-columns: 100%;
        grid-template-rows: repeat(auto-fit, 1fr);
    }

    @media (min-width: 769px and max-width: 1024px) {
        grid-template-columns: repeat(auto-fit, 50%);
        grid-template-rows: repeat(auto-fit, 1fr);
    }

    

`

export default Contents;