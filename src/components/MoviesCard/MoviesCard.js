import React from 'react';
import './MoviesCard.css'

function Card({card, deleteButton, savedMovie, isLiked, deleteMovie}) {
  const hours = Math.floor(card.duration / 60);
  const minutes = card.duration % 60;

  function handleClicklike() {
    if(!isLiked) {
      savedMovie(card)
    }
    else {
      deleteMovie(card.id)
    }
  }
  
  function handleClickDelete() {
    deleteMovie(card.movieId)
  }

  return (
    <li className="element">
      <img src={`${deleteButton ? card.image:`https://api.nomoreparties.co${card.image.url}`}`} className="element__image" alt={card.nameRU} />
      <div className="element__group">
        <p className="element__title">{card.nameRU}</p>
        <button className={`element__like-button ${deleteButton ? "visible-none" : ""} ${isLiked ? "element__like-button_status_active": ""}`} type ="button" onClick={handleClicklike}></button>
        <button className={`element__delete-button ${!deleteButton ? "visible-none" : ""}`} type ="button" onClick={handleClickDelete}></button>
      </div>
      <p className="element__movie-length">{`${hours}ч ${minutes}м`}</p>
      
    </li>
  );
}
export default Card;