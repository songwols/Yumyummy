import React from "react";
import styled from "styled-components";

const Suggest = () => {
    return(
        <SFrame>
            <Content>
                <CardLayout>
                    추천추천<br></br>
                </CardLayout>
            </Content>
        </SFrame>
    )
}

const SFrame = styled.div`
    padding-top: 5%;
    padding-bottom: 5%;
    width: 100%;
    height: 90%;
    display: grid;
    grid-template-columns: 10% 80% 10%;
    grid-template-areas: ". content ."
`
const Content = styled.div`
    grid-area: content;
    display: grid;
    align-content: center;
    grid-template-columns: repeat(auto-fit, 33%);
    grid-template-rows: repeat(auto-fit, 50%);

    @media (max-width: 768px) {
        grid-template-columns: 100%;
        grid-template-rows: repeat(auto-fit, 1fr);
    }

    @media (min-width: 769px and max-width: 1024px) {
        grid-template-columns: repeat(auto-fit, 50%);
        grid-template-rows: repeat(auto-fit, 1fr);
    }

`
const CardLayout = styled.div`
    border: 1px solid black;
`

export default Suggest;