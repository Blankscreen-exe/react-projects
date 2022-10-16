import React from "react";

export default function (props) {
    return (
        <div className="text-section">
            <span className="text-location">
                <svg xmlns="http://www.w3.org/2000/svg" 
                    preserveAspectRatio="xMidYMid meet" 
                    viewBox="0 0 384 512">
                    <path fill="currentColor" 
                        d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z"/>
                </svg>
                <span> {props.location} </span>
                <a href={props.googleMapsUrl}>View on Google Maps</a>
            </span>
            <h1>{props.title}</h1>
            <h4>{props.endDate === "" ? `${props.startDate}` : `${props.startDate} - ${props.endDate}`} </h4>
            <p>{props.description}</p>
        </div>
    )
}