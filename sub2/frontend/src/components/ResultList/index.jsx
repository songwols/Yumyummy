import React from "react";
import { inject, observer } from "mobx-react";
import styled from "styled-components";
import Card from "./Card"

@inject("storeStore")
@observer
class CardLayout extends React.Component{
    getInfo = async () => {
        await this.props.storeStore.search(this.state.info);
        console.log("2번")
    }

    constructor(props){
        super();

        this.state = {
            items: [],
            info : [
                {
                store_name: localStorage.getItem("S_store_name"),
                address : localStorage.getItem("S_address"),
                menu: localStorage.getItem("S_menu"),
                score: localStorage.getItem("S_score"),
                review: localStorage.getItem("S_review"),
                }
            ]
          };
          console.log("cons")
    }

    componentWillMount(){
        this.getInfo();
        console.log("will")
    }
    
    componentDidMount() {
        // this.props.storeStore.loadPosts();
    }

    render(){
        console.log("ren")
        console.log(this.state.info)
        console.log(this.props.storeStore.returnItems)
        console.log(this.props.storeStore)

       
        const returns = this.props.storeStore.returnItems;

        return(
            <List>
                { returns? (returns.map((item, index) => (
                    <Card key={index} post={item} />
                ))) : (<></>)}

            </List>
        )
    }
}


const List = styled.div`
    padding-left: 10%;
    padding-right: 10%;
    height: 100vh;
    grid-area: List;
    display: grid;
    grid-column-gap: 3%;
    grid-row-gap: 3%;
    grid-template-columns: repeat(auto-fit, 47%);
    grid-template-rows: repeat(auto-fit, 1fr);

    @media (max-width: 768px) {
        grid-template-columns: 100%;
        grid-template-rows: repeat(auto-fit, 1fr);
        padding: 0;
    }
`

export default CardLayout;