import React from "react";
import styled from "styled-components";
import { inject, observer } from "mobx-react";
import { withRouter } from "react-router-dom";

@inject("storeStore")
@withRouter
@observer
class CardFrame extends React.Component{
    render(){
        const DetailBtn  = (e) => {
            e.preventDefault();
            console.log("여긴 디테일 프레임")
            // this.props.history.push("/detail");
        }

        return(
            <B onClick={DetailBtn}></B>
        )
    }
}

const B = styled.button`
    background: none;
    height: 100%;
    border: none;
    outline: none;
    border-radius: .5rem;
    cursor: pointer;
`

export default CardFrame;