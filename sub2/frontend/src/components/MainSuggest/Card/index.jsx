import React from "react";
import styled from "styled-components";

const CardL = ({post}) => {
    const {title, address, menu} = post;

    return(
        <CardLayout>
            {title}
        </CardLayout>
    )
}


const CardLayout = styled.div`
    border: 1.5px solid black;
`

export default CardL;