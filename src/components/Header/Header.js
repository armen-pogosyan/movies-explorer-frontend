import React from 'react';
import { useNavigate,  NavLink, Link, useLocation } from 'react-router-dom';
import './Header.css';
import menuIcon from '../../images/icon-main_white.svg';
import profilIcon from '../../images/method-draw-image.svg';


function Header({onMenuClick, loggedIn}) {
  const navigate = useNavigate();
  const location = useLocation();
  const styleUnderline = {
    borderBottom: "2px solid #000",
  };
  
  const styleMenuLink = {
    color:"white", 
    borderBottom:"2px solid #5C5C5C"
  }

  const styleMenuIcon ={
    backgroundImage: `url(${profilIcon})`
  }
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
                <NavLink to="/movies" className="menu__link" style={location.pathname==="/movies" ? styleUnderline: location.pathname==="/"? styleMenuLink:{}} >Фильмы</NavLink>
                <NavLink to="/saved-movies" className="menu__link" style={location.pathname==="/saved-movies" ? styleUnderline: location.pathname==="/"? styleMenuLink:{}}>Сохраненные фильмы</NavLink>
              </nav>
              <div className="header__profile">
                <Link to="/profile" className="header__icon" style={location.pathname==="/" ? styleMenuIcon:{}}></Link>
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

