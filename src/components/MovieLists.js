import classes from "./styles//MovieList.module.css";
import Card from "./Card";

const MovieLists = ({ movies }) => {
  return (
    <div className={classes.movies}>
      {movies?.map((item) => {
        return (
          <ul className={classes.wrapper}>
            <Card item={item} />
          </ul>
        );
      })}
    </div>
  );
};

export default MovieLists;
