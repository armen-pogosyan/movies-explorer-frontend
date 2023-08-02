import React from 'react';
import './MoviesCard.css'

function Card({card, deleteButton}) {
  return (
    <li className="element">
      <div className="element__group">
        <p className="element__title">{card.nameRU}</p>
        <p className="element__movie-length">{card.duration}</p>
        <button className={`element__like-button ${deleteButton ? "visible-none" : ""}`} type ="button" ></button>
        <button className={`element__delete-button ${!deleteButton ? "visible-none" : ""}`} type ="button" ></button>
      </div>
      <img src={`https://api.nomoreparties.co${card.image.url}`} className="element__image" alt={card.nameRU} />
    </li>
  );
}
export default Card;