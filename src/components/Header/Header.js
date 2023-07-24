import React from 'react';
import { useNavigate, useLocation, NavLink, Link } from 'react-router-dom';
import './Header.css' 

function Header(props) {
  const navigate = useNavigate()
  const location = useLocation();

  return (
    <header className="header">
      <div className="header__logo"></div>
      <div className="header__navigate">
        <nav className="menu">
          <NavLink to="/" className="menu__link">Фильмы</NavLink>
          <NavLink to="/reviews" className="menu__link">Сохраненные фильмы</NavLink>
        </nav>
        <div className="profile">
          <Link to="/" className="profile__text">Аккаунт</Link>
          <div className="profile__icon"></div>
        </div>
      </div>
      {/* <div className="header__user-panel">
        {props.loggedIn && <p className="header__link">{props.email}</p>}
        <button className="header__link-exit" 
          onClick={props.loggedIn ? props.signOut: (location.pathname ==="/signup" ? () => {navigate("/signin")}: () => {navigate("/signup")} )}>
          {props.loggedIn ? "Выйти": location.pathname ==="/signup" ? "Войти" : "Регистрация"}
        </button>
      </div> */}
    </header>
  );
}
export default Header;
