import React from "react";
import profilepic from '../assets/profile.png'

export default function Imageframe() {
    return (
        <div className="profile-image-container">
            <img src={profilepic} className="profile-image" />
        </div>
    )
};