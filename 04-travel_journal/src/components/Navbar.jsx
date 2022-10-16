import React from "react";

export default function (props) {
    return (
        <div className="navbar">
            <div>
                <h1>My Travel to COMSTECH</h1>
                <img src={props.comstechlogo} />
            </div>
        </div>
    )
}