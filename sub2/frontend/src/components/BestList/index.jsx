import React from "react";
import { inject, observer } from "mobx-react";
import styled from "styled-components";
import Card from "./Card";

@inject("storeStore")
@observer
class BestLayout extends React.Component {
  state = {
    stores: [
      {
        address: this.props.address,
      },
    ],
  };

  componentWillMount() {
    this.props.storeStore.count_stores(this.state.stores[0]);
  }

  render() {
    const returns = this.props.storeStore.storeItems;

    return (
      <List>
        {returns ? (
          returns.map((item, index) => <Card key={index} post={item} />)
        ) : (
          <></>
        )}
      </List>
    );
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
`;

export default BestLayout;
