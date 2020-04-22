import React from "react";
import styled from "styled-components";
import { inject, observer } from "mobx-react";
import { withRouter } from "react-router-dom";
import { RightArrowAlt } from "@styled-icons/boxicons-solid/RightArrowAlt";
import { LeftArrowAlt } from "@styled-icons/boxicons-solid/LeftArrowAlt";

export const RightArrow = styled(RightArrowAlt)`
  width: 60px;
  float: right;
  cursor: pointer;
  color: black;
  margin-right: 70px;
  :hover {
    opacity: 0.5;
  }
`;

export const LeftArrow = styled(LeftArrowAlt)`
  width: 60px;
  float: left;
  cursor: pointer;
  color: black;
  margin-left: 40px;
  :hover {
    opacity: 0.5;
  }
`;

@inject("storeStore")
@observer
@withRouter
class Paging extends React.Component {
  render() {
    const NextPage = (e) => {
      this.props.storeStore.pageIncrease();
    };
    const PreviousPage = (e) => {
      this.props.storeStore.pageDecrease();
    };

    return (
      <div>
        {/* {this.props.storeStore.pageNumber == 1 ? (
          <></>
        ) : (
          <LeftArrow onClick={PreviousPage}></LeftArrow>
        )} */}
        <LeftArrow onClick={PreviousPage}></LeftArrow>
        <RightArrow onClick={NextPage}></RightArrow>
      </div>
    );
  }
}

export default Paging;
