import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css'

function MoviesCardList({movies, deleteButton, isLoading}) {
  return (   
    <section className={`movie-elements ${isLoading?"movie-elements_visible":""}`}>
        <ul className="elements-list"> 
            {movies.map(movie => {
              if(movie.id<10){
                return(<MoviesCard key={movie.id} card={movie} deleteButton={deleteButton}/>)
              }             
            })}
        </ul>

        <button className="movie-elements__button-yet" type ="button">ЕЩЕ</button>
      </section>
  );
}
export default MoviesCardList;