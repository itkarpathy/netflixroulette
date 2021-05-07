import classes from "./styles//MovieList.module.css";
import Card from "./Card";
import { Link } from 'react-router-dom'

const MovieLists = ({ movies }) => {

  return (
    <div className={classes.movies}>
      {movies?.map((item) => {
           return (
          <ul className={classes.wrapper}>
           
            <li>
             <Card item={item}/>
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default MovieLists;
