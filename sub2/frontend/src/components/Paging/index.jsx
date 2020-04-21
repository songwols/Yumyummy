import React from "react";
import styled from "styled-components";

class Paging extends React.Component {
  render() {
    return (
      <div>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <Button></Button>
        </Link>
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
