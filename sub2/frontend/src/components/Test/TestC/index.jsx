import React from "react";

const TestC = ({post}) => {
    const {STORE_ID, NAME, BRANCH} = post;

    return(
        <div>
            storeid: {STORE_ID} <br></br>
            name: {NAME}<br></br>
            branch: {BRANCH}
            <hr></hr>
        </div>
    )
}

export default TestC;