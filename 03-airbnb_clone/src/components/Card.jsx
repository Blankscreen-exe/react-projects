import React from "react";


export default function Card(props) {
    // const profilePic = require( props.profile_url);

    return (
        <div className="card">
            <img src={props.profile_url} className="card--image" />
            
            <div className="card--stats">
                <svg xmlns="http://www.w3.org/2000/svg" 
                className="star-svg" 
                preserveAspectRatio="xMidYMid meet" 
                viewBox="0 0 1024 1024">
                    <path fill="currentColor" 
                    d="m908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5c-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1l-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2c17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9l183.7-179.1c5-4.9 8.3-11.3 9.3-18.3c2.7-17.5-9.5-33.7-27-36.3z"/>
                </svg>
                <span> {props.rating}</span>
                <span className="gray"><span className="smaller">({props.reviewCount})</span></span> • 
                <span className="gray"> {props.location}</span>
            </div>
            
            <div className="card--details">
                <p><span className="card--title">{props.title}</span></p>
                <p><span className="bold">From ${props.price}</span> / person</p>
            </div>

        </div>
    )
}