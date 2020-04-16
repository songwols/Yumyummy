import React from "react";

const TestC = ({post}) => {
    const {store_id, store_name, area, category} = post;

    return(
        <div>
            storeid: {store_id} <br></br>
            name: {store_name}<br></br>
            area: {area}<br></br>
            category: {category}
            <hr></hr>
        </div>
    )
}

export default TestC;