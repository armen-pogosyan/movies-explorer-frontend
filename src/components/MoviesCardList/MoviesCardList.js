import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css'

function MoviesCardList({movies}) {
  return (
    
    <section className="movie-elements">
        <ul className="elements-list"> 
            {movies.map(movie => {
              if(movie.id<10){
                return(<MoviesCard key={movie.id} card={movie}/>)
              }             
            })}
        </ul>

        <button className="movie-elements__button-yet" type ="button">ЕЩЕ</button>
      </section>
  );
}
export default MoviesCardList;