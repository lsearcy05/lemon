import React from "react";
import food from "./images/restauranfood.jpg"

export default function Main() {
    return (
        <main>
            <span className="intro">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant focused on traditional recipes served with a modern twist.</p>
                <button className="Reserve">Reserve Table</button>
            </span>
            <span><img src={food} alt="Food"></img></span>     
        </main>
    )
}