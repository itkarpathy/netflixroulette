import classes from "./styles//MovieList.module.css";
import Card from "./Card";
import { useState } from "react";
import { useHistory } from 'react-router-dom'
import FilteredList from "./FilteredList";

const MovieLists = ({ search }) => {
  const history = useHistory()
  const [movie, setMovies] = useState(search);


  const deletedHandler = (id) => {
    // const filterId = search.find((el) => el.id !== id);
    fetch(
      `https://netflix-roulette-a0a46-default-rtdb.europe-west1.firebasedatabase.app/movies/${id}.json`,
      {
        method: "DELETE",
      }).then(response => {
        setMovies(prevItems => prevItems.filter(movie => movie.id !== id))
      })


  };

  if (search.length === 0) {
    return <h1>No search value</h1>;
  }

  return (
    <>
      <div className={classes.movieNumbers}>
        <span>{movie.length}</span>

      </div>
      <div className={classes.movies}>
        {search?.map((item) => {
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
