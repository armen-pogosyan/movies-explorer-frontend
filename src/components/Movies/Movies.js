import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import Header from '../Header/Header';

function Movies ({movies, onMenuClick, loggedIn, deleteButton}) {
  return (
    <>
      <Header onMenuClick={onMenuClick} loggedIn={loggedIn} />
      <SearchForm />
      <MoviesCardList movies={movies} deleteButton={deleteButton}/>
      <Footer />
    </>
  );
}

export default Movies;