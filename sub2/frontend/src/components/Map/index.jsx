import React from "react";
import styled from "styled-components";

class Map extends React.Component{

    
    render(){
        return(
            <Maps></Maps>
        )
    }
}

const Maps = styled.div`
    grid-area: Map;
    background-color: red;
`

export default Map;