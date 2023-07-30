import React from 'react';
import { useNavigate,  NavLink, Link, useLocation } from 'react-router-dom';
import './Header.css';
import menuIcon from '../../images/icon-main_white.svg';

function Header({onMenuClick, loggedIn}) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    
    <header className= {`header${location.pathname === "/"?" header-main" : ""}`}>
      <Link to="/" className="header__logo" ></Link> 
      <div className="header__navigate">
        {!loggedIn &&   
            <div className="header__profile">
              <Link to="/signup" className="header__link-registration">Регистрация</Link>
              <button className="header__link-login" onClick={() => {navigate("/signin")}}>Войти</button>
            </div>
          }  
        {loggedIn &&   
          <div className="header__menu-container">
            <div className="header__menu">
              <nav className="menu">
                <NavLink to="/movies" className="menu__link" style={location.pathname==="/"?{color:"white"}:{}}>Фильмы</NavLink>
                <NavLink to="/saved-movies" className="menu__link" style={location.pathname==="/"?{color:"white"}:{}}>Сохраненные фильмы</NavLink>
              </nav>
              <div className="header__profile">
                <Link to="/profile" className="header__profile-text" style={location.pathname==="/"?{color:"white"}:{}}>Аккаунт</Link>
                <div className="header__icon"></div>
              </div>
            </div>
            <button className="header__menu-button" type ="button" onClick={onMenuClick} style={location.pathname==="/"?{backgroundImage: `url(${menuIcon})`}:{}}></button>
          </div>    
        }
      </div>
      
    </header>
  );
}
export default Header;

