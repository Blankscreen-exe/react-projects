import React from "react";

export default function (props) {
    return (
        <div className="image-container">
            <img src={props.imageUrl} />
        </div>
    )
}