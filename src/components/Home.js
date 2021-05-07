import { useState, useEffect } from "react";
import classes from "./styles/Home.module.css";
import MovieLists from "./MovieLists";
import SearchBar from "./SearchBar";
import MainNavigation from "./MainNavigation";
import Filter from "./Filter";
import Footer from "./Footer";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchApi = async () => {
      setIsLoading(true);
      const response = await fetch(
        `https://netflix-roulette-a0a46-default-rtdb.europe-west1.firebasedatabase.app/movies.json/`
      );
      const data = await response.json();

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const loadedMovie = [];
   
      for (const key in data) {
  
        loadedMovie.push({
          id: key,
          name: data[key].name,
          poster: data[key].poster,
          releaseDate: data[key].releaseDate,
          type: data[key].type,
        });
      }
    

      setMovies(loadedMovie);
      setIsLoading(false);
    };
    fetchApi().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) return <h1>Loading...</h1>;
  if (httpError) return <h1>{httpError}</h1>;

  // find searchbar query fit with movies name or id

  const movieListCheck = movies.filter(el=> el.id === query)
  const finderMovie = movieListCheck.map(item => item.name)

  console.log('movie list check', movieListCheck)

  //check if searchbar is empty default value otherwise new value items shows under the list

  const matchEmpty = value => value.trim() === '';

  const validMatch = !matchEmpty(query)


  return (
    <div>
      <div className={classes.home}>
        <div className={classes.header}>
          <MainNavigation />
         
          <SearchBar getQuery={(q) => setQuery(q)} />
        </div>
      </div>
      <Filter movies={movies} />
      {validMatch ? <h1>Found movie {finderMovie}</h1> : (
      <MovieLists movies={movies} />
      )}
      <Footer />
    </div>
  );
};

export default Home;
