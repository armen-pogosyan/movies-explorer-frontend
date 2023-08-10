import React from 'react';
import { Routes, Route,  useNavigate } from 'react-router-dom';
import Main from '../Main/Main.js'
import Login from '../Login/Login.js';
import Register from '../Register/Register.js';
import Profile from '../Profile/Profile.js';
import Movies from '../Movies/Movies.js';
import SavedMovies from '../SavedMovies/SavedMovies.js';
import PageNotFound from '../PageNotFound/PageNotFound.js';
import PopupMenu from '../Popup/PopupMenu.js';
import PopupInfo from '../Popup/PopupInfo.js';
import { moviesApi } from '../../utils/MoviesApi.js';
import  {mainApi}  from '../../utils/MainApi.js';
import {CurrentUserContext} from '../../contexts/CurrentUserContext.js';
import ProtectedRouteElement from '../ProtectedRoute/ProtectedRoute.js';
import './App.css';

function App() {
  const navigate = useNavigate()
  const [movies, setMovies] = React.useState([])
  const [isPopupMenuOpen, setPopupMenuOpen] = React.useState(false);
  const [isPopupInfoOpen, setIsPopupInfoOpen] = React.useState({
    isPopupInfoOpen: false,
    message: ""
  })
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false) // для прелоадера
  const [isErrorLoadingMovies, setIsErrorLoadingMovies] = React.useState(false)  //При ошибке загрузки с серверера
  const [isSearch, setIsSearch] = React.useState(false); // Произведен поиск через форму 
  const [currentUser, setCurrentUser] = React.useState({});
  const [savedMovisesList, setSavedMovisesList] = React.useState([]);

  React.useEffect(() => {
    if (localStorage.getItem('jwt')) {
      mainApi.getMovies()
      .then((result) => {
        setSavedMovisesList(result)
      })
      .catch(err => {
        console.log(err)
      })
      }
    }, [])

    //Проверка токена при загрузке страницы
    React.useEffect(() => {
      if (!localStorage.getItem('jwt')){
        setLoggedIn(false)
        return
      }
      mainApi.checkToken()
      .then((user) => {
        if (user){
          setLoggedIn(true);
          navigate("/", {replace: true})
          setCurrentUser(user)
        }
      })
      .catch(err => {
        console.log(err)
      })
    }, [loggedIn])

  function getMovies () {
    if (localStorage.getItem('jwt')) {
      mainApi.getMovies()
      .then((result) => {
        setSavedMovisesList(result)
      })
      .catch(err => {
        console.log(err)
      })
      }
  }

  function closeAllPopups() {   // боковое меню на разрешении <768
    setPopupMenuOpen(false)
    setIsPopupInfoOpen({
      isPopupInfoOpen: false,
      message: ""
    })
  }

  function buttonMenuClick() {   // боковое меню на разрешении <768
    setPopupMenuOpen(true)
  }

  function wordSearchStr (arr, str, checked) {
    const indexList = [];
    for (let i = 0; i < arr.length; i++) {
      if (checked) {
        if ((arr[i].nameRU.toLowerCase().indexOf(str.toLowerCase())!==(-1) || arr[i].nameEN.toLowerCase().indexOf(str)!==(-1)) && arr[i].duration <= 40) {
          indexList.push(arr[i]);
        }
      }
      else {
        if (arr[i].nameRU.toLowerCase().indexOf(str.toLowerCase())!==(-1) || arr[i].nameEN.toLowerCase().indexOf(str)!==(-1)) {
          indexList.push(arr[i]);
        }
      }
    }
    return indexList
  }

  function wordSearchMovies(arr, str, checked) { //фильтр массива фильмов
    const indexList =  wordSearchStr (arr, str, checked);
    localStorage.setItem('queryResult', JSON.stringify({
      queryResultCardList: indexList,
      queryStr: str,
      switchStatus: checked,
    }))  
    setMovies(indexList)
    setIsSearch(true)
  }

  function handleSubmitFormSearch(value, checked) { //загрузка карточек фильмов с сервера
    setIsLoading(true) //выводим прелоадер
    moviesApi.getInitialMovies()
    .then((result) => {
      setIsLoading(false)
      wordSearchMovies(result, value, checked)
    })
    .catch(err => {
      setIsErrorLoadingMovies(true)
      setIsLoading(false)
      console.log(err)
    })
  }
  function handleSubmitFormSearchSaved(value, checked) { //загрузка карточек фильмов с сервера
    setSavedMovisesList(wordSearchStr (savedMovisesList, value, checked))
  }

  function registerUser({name, email, password}) {
    mainApi.register(name, password, email)
    .then(() => {
      loginUser({email, password})
    })
    .catch(err => {
      err
      .then((result) => {
        setIsPopupInfoOpen({
          isPopupInfoOpen: true,
          message: result.message
        })
      })
      .catch(err => {
        console.log(err)
    })
   })
  }
  
  function loginUser({email, password}) {
    mainApi.login(password, email)
     .then((data) => {
       if (data.token){
         localStorage.setItem('jwt', data.token);
         setLoggedIn(true)
         navigate('/movies', {replace: true})
         setCurrentUser({
          name: data.name,
          email: email,
         })
       }
     })
     .catch(err => {
        err
        .then((result) => {
          setIsPopupInfoOpen({
            isPopupInfoOpen: true,
            message: result.message
          })
        })
        .catch(err => {
          console.log(err)
      })
     })
  }

  function updateUser ({name, email}) { // обновление данных пользователя
    mainApi.setUserInfo(name, email)
    .then(()=> {
      setIsPopupInfoOpen({
        isPopupInfoOpen: true,
        message: "Данные успешно изменены"
      })
    })
    .catch(err => {
      err
      .then((result) => {
        setIsPopupInfoOpen({
          isPopupInfoOpen: true,
          message: result.message
        })
      })
      .catch(err => {
        console.log(err)
    })
   })
  }

  function signOut(){ //Выход из системы
    setLoggedIn(false)
    navigate("/", {replace: true})
    localStorage.removeItem('jwt');
    localStorage.removeItem('queryResult')
  }

  function savedMovie(movie) {
    mainApi.addMovies(movie)
    .then(()=> {
      getMovies()
    })
    .catch(err => {
      console.log(err)
    })
  }

  function deleteMovie (movieId){
    mainApi.deleteMovie(movieId)
    .then(()=> {
      getMovies()
    })
    .catch(err => {
      console.log(err)
    })
  }

  return (   
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route path="/" element={<Main onMenuClick={buttonMenuClick} loggedIn={loggedIn}/>} />
          <Route path="/signup" element={<Register registerUser={registerUser}/>} />
          <Route path="/signin" element={<Login loginUser={loginUser}/>} />
            <Route path="/profile" element={<ProtectedRouteElement element={Profile} onMenuClick={buttonMenuClick} signOut={signOut} updateUser={updateUser} loggedIn={loggedIn}/>} />
            <Route path="/movies" element={<ProtectedRouteElement element={Movies}
                movies={movies} 
                onMenuClick={buttonMenuClick} 
                handleSubmitFormSearch={handleSubmitFormSearch}
                loggedIn={loggedIn}             
                isLoading={isLoading}
                isErrorLoadingMovies={isErrorLoadingMovies}
                isSearch={isSearch}
                savedMovie={savedMovie}
                savedMovisesList={savedMovisesList}
                deleteMovie={deleteMovie}/>}
                />
            <Route path="/saved-movies" element={<ProtectedRouteElement element={SavedMovies} movies={savedMovisesList} onMenuClick={buttonMenuClick} loggedIn={loggedIn} deleteButton={true} deleteMovie={deleteMovie} handleSubmitFormSearch={handleSubmitFormSearchSaved} />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
      </CurrentUserContext.Provider>
      <PopupMenu isOpen={isPopupMenuOpen} onClose={closeAllPopups}/>
      <PopupInfo isOpen={isPopupInfoOpen.isPopupInfoOpen} onClose={closeAllPopups} InfoTooltip={isPopupInfoOpen.message}/>
    </div>
  );
}

export default App;
