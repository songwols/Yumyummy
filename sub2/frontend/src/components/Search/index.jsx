import React from "react";
import styled from "styled-components";
import { inject, observer } from "mobx-react";
import { withRouter } from "react-router-dom";

@inject("storeStore")
@withRouter
@observer
class Searching extends React.Component {
  constructor() {
    super();
    this.state = {
      info: [
        {
          store_name: "",
          address: "",
          // menu: "",
        },
      ],
    };
  }

  onNameChange = (e) => {
    this.setState({
      info: {
        store_name: e.target.value,
        address: this.state.info.address,
        // menu: this.state.info.menu,
      },
    });
  };

  onAreaChange = (e) => {
    this.setState({
      info: {
        store_name: this.state.info.store_name,
        address: e.target.value,
        // menu: this.state.info.menu,
      },
    });
  };

  onMenuChange = (e) => {
    this.setState({
      info: {
        store_name: this.state.info.store_name,
        address: this.state.info.address,
        // menu: e.target.value,
      },
    });
  };

  render() {
    const SearchBtn = (e) => {
      e.preventDefault();
      this.props.storeStore.setInfo(this.state.info);
      this.props.storeStore.search(this.state.info);
      this.props.history.push(
        "/result/" +
          this.state.info.store_name +
          "/" +
          this.state.info.address +
          "/" +
          this.state.info.menu
      );
    };

    const Enterkey = (e) => {
      if (window.event.keyCode === 13) {
        SearchBtn(e);
      }
    };

    return (
      <div>
        <IBO>
          <InputBox
            placeholder="가게 이름(ex. 스타벅스, 민들레)"
            value={this.state.store_name}
            onChange={this.onNameChange}
            onKeyPress={Enterkey}
          ></InputBox>{" "}
          &nbsp;
          <InputBox
            placeholder="주소(ex. 강남, 한남동)"
            value={this.state.address}
            onChange={this.onAreaChange}
            onKeyPress={Enterkey}
          ></InputBox>{" "}
          &nbsp;
          {/* <InputBox
            placeholder="메뉴(ex. 파스타, 햄버거)"
            value={this.state.menu}
            onChange={this.onMenuChange}
            onKeyPress={Enterkey}
          ></InputBox>{" "}
          &nbsp; */}
          <SButton onClick={SearchBtn}>검색</SButton>
        </IBO>
      </div>
    );
  }
}

const IBO = styled.div`
  display: inline-block;
  justify-items: center;
  align-items: center;
  text-align: center;
`;

const InputBox = styled.input`
  background: none;
  height: 70%;
  width: 35%;
  border-color: #ffde96;
  border-style: solid;
  border-radius: 0.5rem;
  outline: none;
  box-shadow: none;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  font-size: 0.875rem;
  -ms-flex: 1 1;
  flex: 1 1;
  margin-left: 0.5rem;
  color: inherit;

  @media (max-width: 768px) {
    width: 20%;
  }
`;

const SButton = styled.button`
  background: #ffde96;
  font-size: medium;
  height: 70%;
  border: 2px solid #ffde96;
  outline: none;
  border-radius: 0.5rem;
  cursor: pointer;
`;

export default Searching;
