import React from "react";
import styled from "styled-components";
import Mymap from "../../components/Mymap";

class Here extends React.Component {
  render() {
    return (
      <HereLayout>
        <Mymap></Mymap>
      </HereLayout>
    );
  }
}
const HereLayout = styled.div``;
export default Here;
