import React from "react";
import styled from "styled-components";
import { inject, observer } from "mobx-react";
import { withRouter } from "react-router-dom";

@inject("storeStore")
@withRouter
@observer
class CardL extends React.Component {
  constructor() {
    super();
    this.state = {
      info: [
        {
          address: "",
          menu: "",
          score: "3.0",
          review: "0",
        },
      ],
    };
  }

  render() {
    const { post } = this.props;

    const saveBtn = (e) => {
      e.preventDefault();
      this.setState({
        info: {
          address: post.address,
          menu: post.menu,
          score: "3.0",
          review: "0",
        },
      });
    };

    const SearchBtn = (e) => {
      e.preventDefault();
      this.props.storeStore.setInfo(this.state.info);
      this.props.storeStore.count_stores(this.state.info);
      this.props.history.push("/best/" + this.state.info.address);
    };

    return (
      <CardLayout>
        <BLayout onClick={SearchBtn} onMouseOver={saveBtn}>
          <CardImg src={post.img} className="img" />
          <Title className="title">
            <T>{post.Title}</T>
          </Title>
        </BLayout>
      </CardLayout>
    );
  }
}

const CardLayout = styled.div`
  border: 1.5px solid black;
  position: relative;
  display: block;
  width: 100%;
  height: 0;
  overflow: hidden;
  padding-bottom: 100%;
  top: 0;
  left: 0;
`;

const BLayout = styled.button`
  cursor: pointer;
  &:hover .title {
    display: block;
  }
  &:hover .img {
    display: block;
    background-color: #8a8a8a;
    opacity: 0.5;
  }
`;

const CardImg = styled.img`
  position: absolute;
  object-fit: cover;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
const Title = styled.div`
  font-size: x-Large;
  color: black;
  position: absolute;
  object-fit: cover;
  display: none;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  @media (max-width: 768px) {
  }
`;

const T = styled.div`
  position: absolute;
  margin-top: 45%;
  margin-left: 20%;
  z-index: 10;
`;
export default CardL;
