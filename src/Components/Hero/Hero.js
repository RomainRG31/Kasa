import React from "react";
import "@/Components/Hero/Hero.css";

function Hero({ image, texte }) {
    return (
        <section className="hero">
            <img className="hero-img" src={image} alt="Bannière" />
            <div className="hero-sombre"></div>
            <h1>{texte}</h1>
        </section>
    );
}

export default Hero;