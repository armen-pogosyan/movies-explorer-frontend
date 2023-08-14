import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList({movies, deleteButton, isLoading, handleSavedMovie, savedMovisesList, deleteMovie, showMoreCards, loadedСards}) {

 
  return (   
    <section className={`movie-elements ${isLoading?"movie-elements_visible":""}`}>
        <ul className="elements-list"> 
            {movies.slice(0, loadedСards).map((movie) => {
              const isLiked = savedMovisesList.some(i => i.movieId === movie.id);
              return(<MoviesCard key={deleteButton ? movie.movieId: movie.id} card={movie} deleteButton={deleteButton} savedMovie={handleSavedMovie} isLiked={isLiked} deleteMovie={deleteMovie}/>)              
             })       
            }
        </ul>
        <button className={`movie-elements__button-yet ${loadedСards>=movies.length?"movie-elements__button-yet_visible_no":""}`} type ="button" onClick={showMoreCards}>ЕЩЕ</button>
      </section>
  );
}
export default MoviesCardList;