import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import Header from '../Header/Header';
import Preloader from '../Preloader/Preloader';
import { useState, useEffect} from 'react';

function Movies ({movies, onMenuClick, loggedIn, handleSubmitFormSearch, isLoading, isErrorLoadingMovies, isSearch, savedMovie, savedMovisesList, deleteMovie}) {

  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => { 
    const handleResize = (event) => {
      setTimeout(()=> {
        setWidth(event.target.innerWidth);
      }, 1000)
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  let cardsLoad = 0;
  let numberOfItems = 0;

  if (width > 768) {
    cardsLoad = 16;
    numberOfItems = 4;
  }
  else if (width <= 768 && width > 480 ) {
    cardsLoad = 8;
    numberOfItems = 2;
  }
  else if (width <= 480) {
    cardsLoad = 5;
    numberOfItems = 2;
  }

  const [loadedСards, setLoadedСards] = useState(cardsLoad);
  
  useEffect(()=> {
    setLoadedСards(cardsLoad)
  },[cardsLoad])
  
  function showMoreCards() {
    setLoadedСards(loadedСards + numberOfItems)
  }


  const queryResult = JSON.parse(localStorage.getItem('queryResult'));  //получаем данные предыдущего запроса из локального хранилища
  const {queryResultCardList=[], queryStr="", switchStatus=false} = queryResult || {}  // и если переменная isSearch = false тогда  выводим данне запроса


  let drewMovies;
  if(isSearch) {
    drewMovies = movies;
  }
  else {
    drewMovies = queryResultCardList;
  }

  return (
    <>
      <Header onMenuClick={onMenuClick} loggedIn={loggedIn}/>
      <main className="main">
        <SearchForm handleSubmitFormSearch={handleSubmitFormSearch} queryStr={queryStr} switchStatus={switchStatus}/>
        <Preloader isLoading={isLoading}/>
        {!isErrorLoadingMovies? // если ошибка сервера выводим собщение
        //если поиск и длина массива = 0 тогда выводим ошибку
          !(drewMovies.length === 0) ?
            <MoviesCardList movies={drewMovies}
              deleteButton={false}
              isLoading={isLoading}
              width={width}
              savedMovie={savedMovie}
              savedMovisesList={savedMovisesList}
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