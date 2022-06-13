import React from "react";

import "./Card.scss";

const Card = (props) => {
    const { beer } = props;

    const {
        image_url: imageURL,
        name,
        abv,
        // description,
        tagline,
        first_brewed: firstBrewed,
        ph,
    } = beer;

    return (
        <div className="card">
            <img className="card__image" src={imageURL} alt="asd" />
            <p className="card__name"> {name} </p>
            <p className="card__tagline">{tagline}</p>
            <p className="card__first-brewed">First Brewed: {firstBrewed}</p>
            <p className="card__alcohol-percentage">Alcohol content: {abv}%</p>
            <p className="card__acidity">Acidity: {ph}ph</p>
            
        </div>
    );
};

export default Card;
