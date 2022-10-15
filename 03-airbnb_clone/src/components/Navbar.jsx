import React from "react";
import airbnblogo from '../assets/airbnb-logo.png';

export default function Navbar() {
    return (
        <nav className="navbar">
            <img src={airbnblogo} />
        </nav>
    );
}