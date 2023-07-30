import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from '../Main/Main.js'
import Login from '../Login/Login.js';
import Register from '../Register/Register.js';
import Profile from '../Profile/Profile.js';
import Movies from '../Movies/Movies.js';
import SavedMovies from '../SavedMovies/SavedMovies.js';
import PageNotFound from '../PageNotFound/PageNotFound.js';
import PopupMenu from '../PopupMenu/PopupMenu.js';
import {api} from '../../utils/Api.js'
import './App.css';

function App() {

  const [movies, setMovies] = React.useState([])
  const [isPopupMenuOpen, setPopupMenuOpen] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(false);

  React.useEffect(() => {
    api.getInitialMovies()
    .then((result) => {
      setMovies(result)
    })
      .catch(err => {
        console.log(err)
      })
   
  }, []);

  function closeMenuPopup () {
    setPopupMenuOpen(false)
  }

  function buttonMenuClick() {
    setPopupMenuOpen(true)
  }

  return (
    <div className="page">
      <Routes>
        <Route path="/" element={<Main onMenuClick={buttonMenuClick} loggedIn={loggedIn}/>} />
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/profile" element={<Profile onMenuClick={buttonMenuClick} loggedIn={loggedIn}/>} />
        <Route path="/movies" element={<Movies movies={movies} onMenuClick={buttonMenuClick} loggedIn={loggedIn} deleteButton={false}/>} />
        <Route path="/saved-movies" element={<SavedMovies movies={movies} onMenuClick={buttonMenuClick} loggedIn={loggedIn} deleteButton={true}/>} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <PopupMenu isOpen={isPopupMenuOpen} onClose={closeMenuPopup}/>
    </div>
  );
}

export default App;
