import './PopupMenu.css'
import { NavLink, Link, useLocation } from 'react-router-dom';
import Popup from './Popup';

function PopupMenu ({isOpen, onClose}) {

  const location = useLocation();
  const styleUnderline = {
    borderBottom: "2px solid",
    paddingBottom: "4px"
  };
    return (
      <Popup isOpen={isOpen} onClose={onClose} name="menu">
        <div className="popup-menu__content">
          <nav className="popup-menu__nav">
            <NavLink to="/" className="popup-menu__link" onClick={onClose} style={location.pathname==="/"? styleUnderline: {}}>Главная</NavLink>
            <NavLink to="/movies" className="popup-menu__link" onClick={onClose} style={location.pathname==="/movies"? styleUnderline: {}}>Фильмы</NavLink>
            <NavLink to="/saved-movies" className="popup-menu__link" onClick={onClose} style={location.pathname==="/saved-movies"? styleUnderline: {}}>Сохраненные фильмы</NavLink>
          </nav>           
            <Link to="/profile" className="popup-menu__profile" onClick={onClose}></Link>    
      </div>  
      </Popup>
    );
  };

export default PopupMenu;