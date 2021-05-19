import classes from "./styles/Results.module.css";
import { Link } from "react-router-dom";

const Results = (props) => {

  const { name, release, poster, id } = props.result

  return (
    <div className={classes.wrapper}>
      <div className={classes.searchResult}>
        <div>
          <h1>{name}</h1>
          <p>{release}</p>
          <img src={poster} alt="poster" />
        </div>
        <Link to={`/movie/${id}`}>
          <button>view details</button>
        </Link>
      </div>
    </div>
  );
};

export default Results;
