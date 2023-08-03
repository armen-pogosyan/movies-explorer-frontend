import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import Header from '../Header/Header';

function SavedMovies ({movies, onMenuClick, loggedIn, deleteButton}) {
  return (
    <>
      <Header onMenuClick={onMenuClick} loggedIn={loggedIn} />
      <main className="main">
        <SearchForm />
        <MoviesCardList movies={movies} deleteButton={deleteButton} />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;