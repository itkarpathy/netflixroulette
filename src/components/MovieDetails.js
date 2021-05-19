import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import classes from "./styles/MovieDetails.module.css";


const MovieDetails = (props) => {
  const [item, setItem] = useState([]);
  const params = useParams();

  const details = item.filter((detail) => detail.id === params.movieId);
  const filteredDetails = details.map((el) => (
    <>
      <div className={classes.wrapper}>
        <div className={classes.img}>
          <img src={el.poster} />
        </div>
        <div className={classes.details__right}>
          <div className={classes.details__title}>
            <h1>{el.name}</h1>
            <h2>
              <span>6.8</span>
            </h2>
          </div>
          <h3>Oscar winning Movie</h3>
          <div className={classes.details__minutes}>
            <h2>{el.release}</h2>
            <h2>
              <span>{el.runtime} min</span>
            </h2>
          </div>
          <p className={classes.details__content}>{el.type}</p>
        </div>
      </div>
    </>
  ));

  useEffect(() => {
    const fetchDetails = async () => {
      const response = await fetch(
        `https://netflix-roulette-a0a46-default-rtdb.europe-west1.firebasedatabase.app/movies.json/`
      );
      const data = await response.json();

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      let details = [];

      for (const key in data) {
        details.push({
          id: key,
          name: data[key].name,
          poster: data[key].poster,
          release: data[key].release,
          type: data[key].type,
          genre: data[key].genre,
          runtime: data[key].runtime,
        });
      }
      setItem(details);
    };

    fetchDetails();
  }, []);

  return (
    <div className={classes.details}>
      <div className={classes.navbar}>
        <h1>
          <Link to="/movie">
            <span>netflix</span>roulette
          </Link>
        </h1>
        <h3>🔍</h3>
      </div>
      {filteredDetails}
    </div>
  );
};

export default MovieDetails;
