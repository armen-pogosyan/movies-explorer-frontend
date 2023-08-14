import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import Header from '../Header/Header';
import Preloader from '../Preloader/Preloader';

function SavedMovies ({movies, onMenuClick, loggedIn, handleSubmitFormSearch, isLoading, isErrorLoadingMovies, deleteMovie, foundSavedMovisesList, isSearch}) {

  return (
    <>
      <Header onMenuClick={onMenuClick} loggedIn={loggedIn}/>
      <main className="main">
        <SearchForm handleSubmitFormSearch={handleSubmitFormSearch} queryStr={""} switchStatus={false}/>
        <Preloader isLoading={isLoading}/>
        {!isErrorLoadingMovies? // если ошибка сервера выводим собщение
        //если поиск и длина массива = 0 тогда выводим ошибку
          !(movies.length === 0 && isSearch) ?
            <MoviesCardList movies={isSearch? foundSavedMovisesList:movies}
                deleteButton={true}
                isLoading={isLoading}
                deleteMovie={deleteMovie}
                savedMovisesList={movies}
                loadedСards={movies.length}/>:
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

export default SavedMovies;