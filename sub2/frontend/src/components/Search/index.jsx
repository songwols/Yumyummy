import React from "react";
import styled from "styled-components";
import CheckList from "./check"
import { Link } from 'react-router-dom';

class Searching extends React.Component{
    constructor() {
        super();
        this.state = {
          showSearch: false,
        };
      }
      toggleSearch() {
        this.setState({
            showSearch: !this.state.showSearch
        });
      }

    render(){
        return(
            <div>
                <InputBox onClick={this.toggleSearch.bind(this)}></InputBox> &nbsp;
                <Link to="/result">
                    <SButton>검색</SButton>
                </Link>
                {this.state.showSearch ? 
                    <CheckList
                        cancelSearch={this.toggleSearch.bind(this)}
                    />
                    : null
                }
            </div>
        )
    }
}

const InputBox = styled.input`
    background: none;
    height: 50%;
    width: 50%;
    border-color: #ffde96;
    border-style: solid;
    border-radius: .5rem;
    outline: none;
    box-shadow: none;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    font-size: 0.875rem;
    -ms-flex: 1 1;
    flex: 1 1;
    margin-left: 0.5rem;
    color: inherit;
`;

const SButton = styled.button`
    background: #ffde96;
    font-size: medium;
    height: 100%;
    border: 2px solid #ffde96;
    outline: none;
    border-radius: .5rem;
    cursor: pointer;
`

export default Searching;