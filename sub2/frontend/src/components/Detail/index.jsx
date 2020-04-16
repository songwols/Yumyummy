import React from "react";
import { inject, observer } from "mobx-react";
import styled from "styled-components";
import Map from "../../components/Map";

export const Mapp = styled(Map)`
    display: none !important;

    @media (max-width: 768px) {
        display: block;
    }
`

@inject("storeStore")
@observer
class DetailContent extends React.Component{
    componentDidMount(){
        // console.log(this.state.posts)
    }

    render(){
        const { posts } = this.props.storeStore.storeItems;
        console.log("여기여기")
        console.log(this.props.storeStore.storeItems.target.store_name)
        // console.log(this.posts)
        // console.log(this.state.posts.get(this.props.storeid))
        // const post = this.state.posts.get(this.props.storeid);
        // const { store_name, address, tel } = post;
        // const post = this.props.posts.get(this.state.posts.storeid);
        // console.log(this.state.posts.storeid)
    
    return(
         <div></div>
        )
    }
}


const DCFrame = styled.div`
    grid-area: content;
    display: grid;
    grid-template-columns: 10% 80% 10%;
    grid-template-areas: ". irframe .";
`

const IRFrame = styled.div`
    grid-area: irframe;
    display: grid;
    grid-template-rows: 75% 25%;
    grid-template-areas: "info" "review";
`

const Info = styled.div`
    grid-area: info;
    border-bottom: 1px solid #ffde96; 
    display: grid;
    grid-template-rows: 10% 90%;
    grid-template-areas: "title" "frame";
`

const Title = styled.div`
    grid-area: title;
    font-size: xx-large;
    align-items: center;
    justify-items: center;
    float: left;
`

const Frame = styled.div`
    grid-area: frame;
    display: grid;
    grid-template-rows: 0 100%;
    grid-template-areas: "Map" "RInfo";

    @media (max-width: 768px) {
        grid-template-rows: 33% 66%;
        grid-template-areas: "Map" "RInfo";
    }
`

const RInfo = styled.div`
    height: 100%;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-areas: "detailinfo menu";

    @media (max-width: 768px) {
        grid-template-columns: none;
        grid-template-rows: 50% 50%;
        grid-template-areas: "detailinfo" "menu";
    }
`

const DInfo = styled.div`
    grid-area: detailinfo;
    display: grid;
    grid-template-rows: 50% 50%;
    grid-template-areas: "divL" "graph";

    @media (max-width: 768px) {
        display: block;
        grid-template-rows: 50% 50%;
        grid-template-areas: "divL" "graph";
        
    }
`
const DIVL = styled.div`
    grid-area: divL;
`
const Graph = styled.div`
    grid-area: graph;
`

const Menu = styled.div`
    grid-area: menu
`

const DIV = styled.div`
    justify-items: center;
    align-items: center;
    padding-top: .3rem;
    padding-bottom: .3rem;
`

const Review = styled.div`
    grid-area: review;
    padding-top: 1rem;
`


export default DetailContent;
