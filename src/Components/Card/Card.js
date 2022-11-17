import React from "react";

import "@/Components/Card/Card.css";

function Card({ id, image, titre }) {

    return (
        <li className="Card" id={id}>
            <img className="Card-image" src={image} alt="Card" />
            <div className="Card-sombre"></div>
            <h3 className="Card-titre">{titre}</h3>
        </li>
    );
}

export default Card;