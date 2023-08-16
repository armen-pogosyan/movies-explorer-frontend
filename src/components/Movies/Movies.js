import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import Header from '../Header/Header';
import Preloader from '../Preloader/Preloader';
import { useState, useEffect} from 'react';
import { useResize } from "../../utils/use-resize";

function Movies ({onMenuClick, loggedIn, handleSubmitFormSearch, isLoading, isErrorLoadingMovies, isSearch, handleSavedMovie, savedMoviesList, deleteMovie, foundMovies}) {
  const {width, cardsLoad, numberOfItems} = useResize()
  const [loadedСards, setLoadedСards] = useState(cardsLoad);
  
  useEffect(()=> {
    setLoadedСards(cardsLoad)
  },[cardsLoad])
  
  function showMoreCards() {
    setLoadedСards(loadedСards + numberOfItems)
  }

  function setNumberCards() {
    setLoadedСards(cardsLoad)
  }

  const queryResult = JSON.parse(localStorage.getItem('queryResult'));  //получаем данные предыдущего запроса из локального хранилища
  const {queryResultCardList=[], queryStr="", switchStatus=false} = queryResult || {}  // и если переменная isSearch = false тогда  выводим данне запроса

  let drewMovies;
  if(isSearch) {
    drewMovies = foundMovies;
  }
  else {
    drewMovies = queryResultCardList;
  }

  return (
    <>
      <Header onMenuClick={onMenuClick} loggedIn={loggedIn}/>
      <main className="main">
        <SearchForm handleSubmitFormSearch={handleSubmitFormSearch} queryStr={queryStr} switchStatus={switchStatus} setNumberCards={setNumberCards}/>
        <Preloader isLoading={isLoading}/>
        {!isErrorLoadingMovies? // если ошибка сервера выводим собщение
        //если поиск и длина массива = 0 тогда выводим ошибку
          !(drewMovies.length === 0 && isSearch) ?
            <MoviesCardList movies={drewMovies}
              deleteButton={false}
              isLoading={isLoading}
              width={width}
              handleSavedMovie={handleSavedMovie}
              savedMoviesList={savedMoviesList}
              deleteMovie={deleteMovie}
              showMoreCards={showMoreCards}
              loadedСards={loadedСards}/>:
            <p className="movies__error" style={{textAlign : "center"}}>Ничего не найдено</p>
          :<p className="movies__error" style={{textAlign : "center"}}>
            Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз
          </p> 
        }
      </main>
      <Footer />
    </>
  );
}

export default Movies;