import React from 'react';
import './Card.css'

function Card(props) {

  return (
    <>
  
    <li className="element">
      <div className="element__group">
        <p className="element__title">33 слова о дизайне</p>
        <p className="element__movie-length">1ч 42м</p>
        <button className={`element__like-button ${props.isLiked && 'element__like-button_status_active'}`} type ="button" ></button>
      </div>
      <img src={'*'} className="element__image" alt={''} />
    </li>
    <li className="element">
      <div className="element__group">
        <p className="element__title">Киноальманах «100 лет дизайна»</p>
        <p className="element__movie-length">1ч 42м</p>
        <button className={`element__like-button ${props.isLiked && 'element__like-button_status_active'}`} type ="button" ></button>
      </div>
      <img src={'*'} className="element__image" alt={''} />
    </li>
    </> 
  );
}
export default Card;