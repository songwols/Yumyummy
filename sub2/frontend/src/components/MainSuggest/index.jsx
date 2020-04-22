import React from "react";
import styled from "styled-components";
import { inject, observer } from "mobx-react";
import CardL from "./Card"

@inject("suggestStore")
@observer
class Suggest extends React.Component {
    state={
        items: [],
        start: 0,
        end: 3
    }

    componentDidMount() {
        const { suggestStore } = this.props;
        suggestStore.getItems(this.state.start, 3);
        this.setState({
            items: suggestStore.returnItems
        });
        
    }

    handleChangeIndexUp = () =>{
        const { start, end} = this.state;
        if(start ===3) return;
        this.setState({
            start: start+3,
            end: end+3
        })
        this.props.suggestStore.getItems(this.state.start+3, 3);
        this.setState({
            items: this.props.suggestStore.returnItems
        })
    }

    handleChangeIndexDown = () => {
        const { start, end} = this.state;
        if(start ===0) return;
        this.setState({
            start: start-3,
            end: end-3
        })
        this.props.suggestStore.getItems(this.state.start-3, 3);
        this.setState({
            items: this.props.suggestStore.returnItems
        })
    }

    render(){
        const {items} = this.state;

        return(
            <SFrame>
                <DF>
                <Down onClick={this.handleChangeIndexDown}>
                    <DI src="https://image.flaticon.com/icons/svg/271/271220.svg"/>
                </Down>
                </DF>
                <Content>
                {items.map((item, index) => (
                    <CardL key={index} post={item} />
                ))}

                </Content>
                <UF>
                <Up onClick={this.handleChangeIndexUp}>
                    <UI src="https://image.flaticon.com/icons/svg/271/271228.svg"/>
                </Up>
                </UF>
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

const DF = styled.div`
    grid-area: down;
    text-align: center;
`

const DI = styled.img`
    width: 3rem;
    height: 28rem;
    cursor: pointer;
    z-index: 1;
    justify-items: center;
    text-align: center;

    @media (max-width: 768px) {
        width: 1.5rem;
    }
`

const Down = styled.button`
    background: none;
    border: none;
    outline: none;
    z-index: 0;
    
`
const UF = styled.div`
    grid-area: up;
    text-align: center;
`

const UI = styled.img`
    width: 3rem;
    height: 28rem;
    cursor: pointer;
    z-index: 1;
    justify-items: center;
    text-align: center;

    @media (max-width: 768px) {
        width: 1.5rem;
    }
`

const Up = styled.button`
    background: none;
    border: none;
    outline: none;
    z-index: 0;
`


const Content = styled.div`
    grid-area: content;
    display: grid;
    align-content: center;
    grid-template-columns: repeat(auto-fit, 31%);
    grid-column-gap: 3%;
    grid-template-rows: repeat(auto-fit, 1fr);

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