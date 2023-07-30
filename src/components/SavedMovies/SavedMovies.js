import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import Header from '../Header/Header';


function Movies ({movies, onMenuClick, loggedIn}) {
  return (
    <>
      <Header onMenuClick={onMenuClick} loggedIn={loggedIn} />
      <SearchForm />
      <MoviesCardList movies={[]} />
      <Footer />
    </>
  );
}

export default Movies;