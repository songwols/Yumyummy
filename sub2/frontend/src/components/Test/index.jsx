import React from "react";
import TestC from "./TestC";
import { inject, observer } from "mobx-react";

@inject("storeStore")
@observer
class Test extends React.Component{
    componentDidMount() {
        this.props.storeStore.loadPosts();
        // console.log(this.props.storeStore.loadPosts)
    }
    
    state = {
        items: [],
      };

    fetchMoreData = () => {
        setTimeout(() => {
            this.props.storeStore.getItems(this.state.items.length, 6);
            this.setState({
            items: this.state.items.concat(this.props.storeStore.returnItems)
            });
        }, 500);
    };
    
    
    
    render(){
        const returns = this.props.storeStore.returnItems;
        console.log(returns)
        return(
            <div>
                { returns? (returns.map((item, index) => (
                    <TestC key={index} post={item} />
                ))) : (<></>)}

            </div>
        )
    }
}

export default Test;