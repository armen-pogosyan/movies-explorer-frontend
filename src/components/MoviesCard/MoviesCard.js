import React from 'react';
import './MoviesCard.css'

function Card({card}) {
  return (
    <li className="element">
      <div className="element__group">
        <p className="element__title">{card.nameRU}</p>
        <p className="element__movie-length">{card.duration}</p>
        <button className="element__like-button" type ="button" ></button>
      </div>
      <img src={`https://api.nomoreparties.co${card.image.url}`} className="element__image" alt={''} />
    </li>
  );
}
export default Card;