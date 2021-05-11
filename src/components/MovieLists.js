import classes from "./styles//MovieList.module.css";
import Card from "./Card";
import { Link } from 'react-router-dom'
import { useState } from 'react'

const MovieLists = ({ movies }) => {
  const [movie, setMovies] = useState(movies)

  const deletedHandler = (id) => {
    const filterId = movie.filter(el => el.id !== id)
    setMovies(filterId)
  }

  return (
    <>
   <div className={classes.movieNumbers}>
        <span>{movie.length}</span>
        <h1> movies found</h1>
      </div>
    <div className={classes.movies}>
       
      {movie?.map((item) => {
        return (
          <>
            <ul className={classes.wrapper}>
              <li>
                <Card item={item} onRemove={deletedHandler} />
              </li>
            </ul>
          </>
        );
      })}
    </div>
    </>
  );
};

export default MovieLists;
