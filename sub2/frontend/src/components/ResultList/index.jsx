import React from "react";
import { inject, observer } from "mobx-react";
import styled from "styled-components";
import Card from "./Card"

@inject("storeStore")
@observer
class CardLayout extends React.Component{
    state = {
        stores: [
          {
            store_name: this.props.store_name,
            address: this.props.address,
            menu: this.props.menu,
          },
        ],
      };

    componentWillMount(){
        this.props.storeStore.search(this.state.stores)
    }

    render(){     
        const returns = this.props.storeStore.storeItems;

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