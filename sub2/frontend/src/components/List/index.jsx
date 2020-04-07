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
            <Div>
                {items.map((item, index) => (
                    <Card key={index} post={item}></Card> 
                ))}
            </Div>
        )
    }
}

const Div = styled.div`
`

export default CardLayout;