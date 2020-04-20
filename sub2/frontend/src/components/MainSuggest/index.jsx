import React from "react";
import styled from "styled-components";
import { inject, observer } from "mobx-react";
import CardL from "./Card"

@inject("suggestStore")
@observer
class Suggest extends React.Component {
    state={
        items: [],
        
    }

    componentDidMount() {
        const { suggestStore } = this.props;
        suggestStore.getItems(0, 3);
        this.setState({
            items: suggestStore.returnItems
        });
    }

    handleChangeIndexUp = () =>{
        console.log("up")
        const {page, start, end} = this.state;
        this.setState({
            page: page+1,
            start: start+3,
            end: end+3
        })
    }

    handleChangeIndexDown = () => {
        console.log("down")
        const {page, start, end} = this.state;
        if(start ===0) return;

        this.setState({
            page: page-1,
            start: start-3,
            end: end-3
        })
    }

    render(){
        const {items} = this.state;

        return(
            <SFrame>
                <Down onClick={this.handleChangeIndexDown}></Down>
                <Content>
                {items.map((item, index) => (
                    <CardL key={index} post={item} />
                ))}

                </Content>
                <Up onClick={this.handleChangeIndexUp}></Up>
            </SFrame>
        )
    }
    
}

const SFrame = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 10% 80% 10%;
    grid-template-areas: "down content up"
`

const Down = styled.button`
    grid-area: down;
`

const Up = styled.button`
    grid-area: up;
`


const Content = styled.div`
    grid-area: content;
    display: grid;
    align-content: center;
    grid-template-columns: repeat(auto-fit, 30%);
    grid-column-gap: 3%;
    grid-template-rows: repeat(auto-fit, 50%);

    @media (max-width: 768px) {
        grid-template-columns: 100%;
        grid-template-rows: repeat(auto-fit, 1fr);
    }

    @media (min-width: 769px and max-width: 1024px) {
        grid-template-columns: repeat(auto-fit, 50%);
        grid-template-rows: repeat(auto-fit, 1fr);
    }

`


export default Suggest;