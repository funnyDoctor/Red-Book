import React from "react";
import PropTypes from 'prop-types';

const Card = ({property}) => {
    const {index, name, kind, description, image, link} = property;
    return (
        <div id={`card-${index}`} className={"card"}>
            <div className={"card__image"} style={{backgroundImage: `url(${image})`}}/>
            <div className={"card__text"}>
                <span className={"card__date"}>{kind}</span>
                <h2 className={"card__header"}>{name}</h2>
                <p className={"card__description"}>{description}</p>
            </div>
            <div className={"card__stats"}>
                <a href={link} className={"btn__stats"} target={"_blank"}  rel="noopener noreferrer">View page</a>
            </div>
        </div>
    )
};

Card.propTypes = { property: PropTypes.object.isRequired };



export default Card;