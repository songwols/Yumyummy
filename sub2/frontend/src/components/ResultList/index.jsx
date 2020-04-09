import React from "react";
import { inject, observer } from "mobx-react";
import styled from "styled-components";
import Card from "./Card"

@inject("testStore")
@observer
class CardLayout extends React.Component{
    state = {
        items: [],
      };

    componentDidMount() {
        const { testStore } = this.props;
        testStore.getItems(0,4);
        this.setState({
            items: testStore.returnItems
        });
        console.log(this.items)
    }

    render(){
        const { items } = this.state;
        console.log(this.state)
        return(
            <List>
                {items.map((item, index) => (
                    <Card key={index} post={item}></Card> 
                ))}
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