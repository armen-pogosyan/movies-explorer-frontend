import React from 'react';
import { Routes, Route,  useNavigate,  useLocation, Navigate} from 'react-router-dom';
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
import {DURATION} from '../../utils/constants.js'
import './App.css';

function App() {
  const navigate = useNavigate()
  const location = useLocation();
  const [movies, setMovies] = React.useState([])
  const [foundMovies, setFoundMovies] = React.useState([])
  const [isPopupMenuOpen, setPopupMenuOpen] = React.useState(false);
  const [isPopupInfoOpen, setIsPopupInfoOpen] = React.useState({
    isPopupInfoOpen: false,
    message: ""
  })
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false) // для прелоадера
  const [isErrorLoadingMovies, setIsErrorLoadingMovies] = React.useState(false)  //При ошибке загрузки с серверера
  const [isSearch, setIsSearch] = React.useState(false); // Произведен поиск через форму 
  const [isSearchSavedMovies, setSearchSavedMovies] = React.useState(false); // Произведен поиск через форму 
  const [currentUser, setCurrentUser] = React.useState({});
  const [savedMovisesList, setSavedMovisesList] = React.useState([]);
  const [foundSavedMovisesList, setFoundSavedMovisesList] = React.useState([]);
  const [isLockForm, setIsLockForm] = React.useState(false)

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

    React.useEffect(() => {  // Карточки с сервера MoviesApi
        moviesApi.getInitialMovies()
        .then((result) => {
          setMovies(result)
        })
        .catch(err => {
          console.log(err)
          setIsErrorLoadingMovies(true)
        })
    }, [])

    //Проверка токена при загрузке страницы
    React.useEffect(() => {
      const token = localStorage.getItem('jwt')
      if (!token){
        setLoggedIn(false)
        return
      }
      mainApi.checkToken(token)
      .then((user) => {
        if (user){
          setLoggedIn(true);
          navigate(location.pathname, {replace: true})
          setCurrentUser(user)
        }
      })
      .catch(err => {
        console.log(err)
      })
    }, [loggedIn])

 
  function closeAllPopups() {   // Закрытие попапов
    setPopupMenuOpen(false)
    setIsPopupInfoOpen({
      isPopupInfoOpen: false,
      message: ""
    })
  }

  function buttonMenuClick() {   // боковое меню на разрешении <768
    setPopupMenuOpen(true)
  }

  function wordSearchStr (arr, str, checked) {   // поиск по части строки в массиве
    const indexList = [];
    for (let i = 0; i < arr.length; i++) {
      if (checked) {
        if ((arr[i].nameRU.toLowerCase().indexOf(str.toLowerCase())!==(-1) || arr[i].nameEN.toLowerCase().indexOf(str)!==(-1)) && arr[i].duration <= DURATION) {
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

  function wordSearchMovies(arr, str, checked) {        //фильтр массива фильмов
    const indexList =  wordSearchStr (arr, str, checked);
    localStorage.setItem('queryResult', JSON.stringify({
      queryResultCardList: indexList,
      queryStr: str,
      switchStatus: checked,
    }))  
    setFoundMovies(indexList)
    setIsSearch(true)
  }

  function handleSubmitFormSearch(value, checked) { //Поиск фильма по строке
    //setIsLoading(true) //выводим прелоадер
    wordSearchMovies(movies, value, checked)
    //setIsLoading(false)
  }

  function handleSubmitFormSearchSaved(value, checked) { //Поиск фильма по строке в сохраненных
    setFoundSavedMovisesList(wordSearchStr (savedMovisesList, value, checked))
    setSearchSavedMovies(true)
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
    setIsLockForm(true)
    mainApi.login(password, email)
      .then((data) => {
        if (data.token){
          setLoggedIn(true) 
          localStorage.setItem('jwt', data.token);
          navigate('/movies', {replace: true});
          setCurrentUser({
          name: data.name,
          email: email,
         })
         getMoviesUser()
         setIsLockForm(false)
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
      setIsLockForm(false)
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

  function getMoviesUser () {
    setIsLoading(true)
    if (localStorage.getItem('jwt')) {
      mainApi.getMovies()
      .then((result) => {
        setSavedMovisesList(result)
        setIsLoading(false)
      })
      .catch(err => {
        setIsLoading(false)
        console.log(err)
      })
      }
  }

  function handleSavedMovie(movie) {
    mainApi.addMovies(movie)
    .then(() => {
      getMoviesUser()
    })
    .catch(err => {
      console.log(err)
    })
  }

  function deleteMovie (cardId){
    mainApi.deleteMovie(cardId)
    .then(() => {
      setFoundSavedMovisesList(foundSavedMovisesList.filter(card =>card.movieId !== cardId))
      getMoviesUser()
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
          <Route path="/signup" element={!loggedIn ? <Register registerUser={registerUser}  isLockForm={isLockForm}/> : <Navigate to="/movies" />} />
          <Route path="/signin" element={!loggedIn ? <Login loginUser={loginUser} isLockForm={isLockForm}/>: <Navigate to="/movies" />} />
            <Route path="/profile" element={<ProtectedRouteElement element={Profile} onMenuClick={buttonMenuClick} signOut={signOut} updateUser={updateUser} loggedIn={loggedIn}/>} />
            <Route path="/movies" element={<ProtectedRouteElement element={Movies}
                foundMovies={foundMovies}
                onMenuClick={buttonMenuClick} 
                handleSubmitFormSearch={handleSubmitFormSearch}
                loggedIn={loggedIn}             
                isLoading={isLoading}
                isErrorLoadingMovies={isErrorLoadingMovies}
                isSearch={isSearch}
                handleSavedMovie={handleSavedMovie}
                savedMovisesList={savedMovisesList}
                deleteMovie={deleteMovie}/>}
                />
            <Route path="/saved-movies" element={<ProtectedRouteElement element={SavedMovies}
                movies={savedMovisesList}
                foundSavedMovisesList={foundSavedMovisesList}
                onMenuClick={buttonMenuClick}
                loggedIn={loggedIn}
                deleteButton={true}
                deleteMovie={deleteMovie}
                handleSubmitFormSearch={handleSubmitFormSearchSaved}
                isSearch={isSearchSavedMovies} />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
      </CurrentUserContext.Provider>
      <PopupMenu isOpen={isPopupMenuOpen} onClose={closeAllPopups}/>
      <PopupInfo isOpen={isPopupInfoOpen.isPopupInfoOpen} onClose={closeAllPopups} InfoTooltip={isPopupInfoOpen.message}/>
    </div>
  );
}

export default App;
