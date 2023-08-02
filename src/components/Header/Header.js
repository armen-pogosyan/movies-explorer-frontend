import React from 'react';
import { useNavigate,  NavLink, Link, useLocation } from 'react-router-dom';
import './Header.css';
import menuIcon from '../../images/icon-main_white.svg';

function Header({onMenuClick, loggedIn}) {
  const navigate = useNavigate();
  const location = useLocation();
  const styleUnderline = {
    borderBottom: "2px solid #000",
  };
  
  return (
    <header className= {`header${location.pathname === "/"?" header-main" : ""}`}>
      <Link to="/" className="header__logo" ></Link> 
      <div className="header__navigate">
        {/* {!loggedIn &&  */}
        {location.pathname==="/" &&     
            <div className="header__profile">
              <Link to="/signup" className="header__link-registration">Регистрация</Link>
              <button className="header__link-login" onClick={() => {navigate("/signin")}}>Войти</button>
            </div>
          }  
        {/* {loggedIn &&    */}
        {!(location.pathname === "/") &&   
          <div className="header__menu-container">
            <div className="header__menu">
              <nav className="menu">
                <NavLink to="/movies" className="menu__link" style={location.pathname==="/movies" ? styleUnderline:{}} >Фильмы</NavLink>
                <NavLink to="/saved-movies" className="menu__link" style={location.pathname==="/saved-movies" ? styleUnderline:{}}>Сохраненные фильмы</NavLink>
              </nav>
              <div className="header__profile">
                <Link to="/profile" className="header__icon" style={location.pathname==="/"?{color:"white"}:{}}></Link>
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

