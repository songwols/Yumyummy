import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

class Paging extends React.Component {
  render() {
    return (
      <div>
        <Button onClick={}></Button>
      </div>
    );
  }
}

const Button = styled.div`
  grid-area: Search;
  justify-content: center;
  text-align: center;
  padding-top: 1%;
`;

export default Paging;
