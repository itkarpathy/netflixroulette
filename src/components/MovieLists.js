import classes from "./styles//MovieList.module.css";
import Card from "./Card";
import { useState } from "react";

const MovieLists = ({ search }) => {
  const [movie, setMovies] = useState(search);

  const deletedHandler = (id) => {
    const filterId = movie.filter((el) => el.id !== id);
    setMovies(filterId);
  };

  if (search.length === 0) {
    return <h1>No search value</h1>;
  }

  return (
    <>
      <div className={classes.movieNumbers}>
        <span>{search.length}</span>
        <h1> movies found</h1>
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
