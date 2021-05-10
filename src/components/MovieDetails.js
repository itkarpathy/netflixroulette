import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import classes from "./styles/MovieDetails.module.css";

const MovieDetails = (props) => {
  const [item, setItem] = useState([]);

  console.log('details: ' ,item)

  const DUMMY_DATA = [
    {
      id: "m1",
      name: "Skaters Gonna Hate",
      time: '120',
      date: '2019',
      rate: '6.3',
      poster:
        "https://mymodernmet.com/wp/wp-content/uploads/2018/01/honest-movie-posters-4.jpg",
    },
    {
      id: "m2",
      name: "Contraband",
      time: '145',
      date: '2017',
      rate: '6.9',
      poster:
        "http://graphicdesignjunction.com/wp-content/uploads/2011/12/large/contraband-movie-poster.jpg",
    },
    {
      id: "m3",
      name: "Warrior",
      time: '100',
      date: '2008',
      rate: '8.3',
      poster:
        "http://wearemoviegeeks.com/wp-content/uploads/warrior-poster.jpg",
    },
    {
      id: "m4",
      name: "Skyfall",
      time: '246',
      date: '2016',
      rate: '8.8',
      poster:
        "https://www.filmofilia.com/wp-content/uploads/2012/09/Skyfall-Movie-Poster.jpg",
    },
  ];

  const params = useParams();

  const details = DUMMY_DATA.find((detail) => detail.id === params.movieId);

  
  const { name, poster, time, date, rate} = details;

  

  useEffect(() => {
    const fetchDetails = async () => {
      const res = await fetch(
        `https://netflix-roulette-a0a46-default-rtdb.europe-west1.firebasedatabase.app/movies.json/`
      );
      const data = await res.json();

      setItem(data);
    };
    fetchDetails();
  }, []);

  

  return (
    <div className={classes.details}>
      <div className={classes.navbar}>
        <p>
          <Link to="/movie">
            <span>netflix</span>roulette
          </Link>
        </p>

        <h3>🔍</h3>
      </div>

      <div className={classes.wrapper}>
        <div className={classes.img}>
          <img src={poster} />
        </div>
        <div className={classes.details__right}>
          <div className={classes.details__title}>
            <h1>{name}</h1>
            <h2>
              <span>{rate}</span>
            </h2>
          </div>
          <h3>Oscar winning Movie</h3>
          <div className={classes.details__minutes}>
            <h2>{date}</h2> <h2>{time} min</h2>
          </div>

          <p className={classes.details__content}>
            Attention all skaters: San Diego State police are cracking down on
            skating by handing out tickets left and right. At the beginning of
            every new semester, there always seems to be a revamp of security
            and signs to dissuade skaters from straying from the mandated bike
            paths. This is wrong on so many levels, and as a skater, I’m fed up.
            Here are some of my thoughts on the skating issue: Why in the world
            are there only two bike paths? It’s not like our school is hilly or
            has no room for other designated bike paths. All we have is an
            overall flat campus and endless amounts of cement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
