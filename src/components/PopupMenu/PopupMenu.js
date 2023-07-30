import { useEffect, useState } from "react";
import './PopupMenu.css'
import { useNavigate,  NavLink, Link, useLocation } from 'react-router-dom';

function Popup ({isOpen, onClose}) {
  useEffect(() => {
    if (!isOpen) return;
      const closeByEscape = (e) => {
        if (e.key === 'Escape') {
          onClose();
        }
      }
      document.addEventListener('keydown', closeByEscape)
      return () => document.removeEventListener('keydown', closeByEscape)
    }, [isOpen, onClose])
    // создаем обработчик оверлея
    const handleOverlay = (e) => {
    if (e.target === e.currentTarget) {
        onClose();
      }
    }

  const location = useLocation();
  const styleUnderline = {
    borderBottom: "2px solid",
    paddingBottom: "4px"
  };
    return (
      <div className={`popup-menu${isOpen ? " popup-menu_opened":""}`} onClick={handleOverlay}>
        <button className="popup-menu__button-close" onClick={onClose}></button>
        <div className="popup-menu__content">
          <nav className="popup-menu__nav">
            <NavLink to="/" className="popup-menu__link" onClick={onClose} style={location.pathname==="/"? styleUnderline: {}}>Главная</NavLink>
            <NavLink to="/movies" className="popup-menu__link" onClick={onClose} style={location.pathname==="/movies"? styleUnderline: {}}>Фильмы</NavLink>
            <NavLink to="/saved-movies" className="popup-menu__link" onClick={onClose} style={location.pathname==="/saved-movies"? styleUnderline: {}}>Сохраненные фильмы</NavLink>
          </nav>   
          <div className="popup-menu__profile" style={location.pathname==="/profile"? styleUnderline: {}}>
            <Link to="/profile" className="popup-menu__profile-text" onClick={onClose} >Аккаунт</Link>
            <div className="header__icon"></div>
          </div>   
      </div>    
    </div>
    );
  };

export default Popup;