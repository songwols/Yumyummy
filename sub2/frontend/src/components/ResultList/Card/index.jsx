import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { inject, observer } from "mobx-react";

@inject("storeStore")
@withRouter
@observer
class Card extends React.Component{
    componentDidMount(){
        // console.log(this.props.post)
    }

    render(){
        const { post } = this.props;

        const saveBtn = (e) => {
            e.preventDefault();
            this.props.storeStore.detail(post.store_id);
        }
        const DetailBtn  = (e) => {
            e.preventDefault();
            this.props.history.push("/detail/"+post.store_id);
        }

        return(
            <B onClick={DetailBtn} onMouseOver={saveBtn}>
            <Div>
                <Title>{post.store_name}</Title>
                <Address>주소 : {post.address}</Address>
                <Time>영업시간 : 아직 </Time>
                <Tel>전화번호 : {post.tel}</Tel>
            </Div>
            </B>
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