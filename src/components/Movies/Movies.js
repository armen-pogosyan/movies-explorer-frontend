import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import Header from '../Header/Header';
import Preloader from '../Preloader/Preloader'

function Movies ({movies, onMenuClick, loggedIn, deleteButton, handleSubmitFormSearch, isLoading}) {
  return (
    <>
      <Header onMenuClick={onMenuClick} loggedIn={loggedIn} />
      <main className="main">
        <SearchForm handleSubmitFormSearch={handleSubmitFormSearch}/>
        <Preloader isLoading={isLoading}/>
        <MoviesCardList movies={movies} deleteButton={deleteButton} isLoading={isLoading}/>
      </main>
      <Footer />
    </>
  );
}

export default Movies;