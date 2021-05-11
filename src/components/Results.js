import classes from "./styles/Results.module.css";
import { Link } from "react-router-dom";

const Results = ({ result }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.searchResult}>
        <div>
          <h1>{result.name}</h1>
          <p>{result.releaseDate}</p>
          <img src={result.poster} alt="poster" />
        </div>
        <Link to={`/movie/${result.id}`}>
          <button>view details</button>
        </Link>
      </div>
    </div>
  );
};

export default Results;
