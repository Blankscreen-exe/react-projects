import React from "react";
import photogrid from '../assets/photo-grid.png'

export default function Hero() {
    return (
        <section className="hero-container">
            <img src={photogrid} />
            <h1>Online Experiences</h1>
            <span className="hero--para-container">
            <p>Join unique interactive activities led by 
            one-of-a-kind hosts — all without leaving home.</p>
            </span>
        </section>
    )
}