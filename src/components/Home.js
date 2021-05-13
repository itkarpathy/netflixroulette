import { useState, useEffect } from "react";
import classes from "./styles/Home.module.css";
import MovieLists from "./MovieLists";
import SearchBar from "./SearchBar";
import MainNavigation from "./MainNavigation";
import Footer from "./Footer";
import Results from "./Results";
import FilterByYear from "./FilterByYear";
import FilteredList from "./FilteredList";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [filteredValue, setFilteredValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  const filteredByYear = (year) => {
    setFilteredValue(year);
  };

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

  // find release date filtered query: continue from here.....
  const filteredYear = movies.filter(
    (el) => el.releaseDate.toString() === filteredValue
  );

  /* FIND SEARCH VALUE BY QUERY */

  const movieListCheck = movies.filter((el) =>
    el.name.toLowerCase().includes(query)
  );

  /* CHECK SEARCHBAR QUERY VALUE IS EMPTY */

  const matchEmpty = (value) => value.trim() === "";
  const validMatch = !matchEmpty(query);

  //search query condition:

  let searchbarContent = <h1>No movies found</h1>;

  if (movieListCheck.length > 0) {
    searchbarContent = movieListCheck.map((props) => {
      return <Results result={props} />;
    });
  }

  return (
    <div>
      <div className={classes.home}>
        <div className={classes.header}>
          <MainNavigation />
          <SearchBar getQuery={(q) => setQuery(q)} />
        </div>
      </div>
      <FilterByYear selected={filteredValue} selectedValue={filteredByYear} />
      <FilteredList items={filteredYear} />
      {filteredYear.length === 0 && <MovieLists search={movieListCheck} />}
      <Footer />
    </div>
  );
};

export default Home;
