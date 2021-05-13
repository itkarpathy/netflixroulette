import classes from "./styles/FilteredList.module.css";
import { Link } from "react-router-dom";

const Year = ({ year }) => {
  return (
    <div className={classes.year}>
      <img src={year.poster} alt={year.name} />
      <div className={classes.year__text}>
        <h2>{year.name}</h2>
        <h2>{year.releaseDate}</h2>
      </div>
      <Link to={`/movie/${year.id}`}>
        <button>view details</button>
      </Link>
    </div>
  );
};

export default Year;
